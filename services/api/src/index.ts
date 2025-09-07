import express from 'express';
import cors from 'cors';
import { z } from 'zod';
import { prisma } from './prisma';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Crash ingestion endpoint
app.post('/ingest/crash', async (req, res) => {
  try {
    // validate
    const schema = z.object({
      appId: z.string(),
      version: z.string(),
      device: z.string(),
      os: z.string(),
      locale: z.string(),
      context: z.any(),
      uiSteps: z.any(),
      networkCassettes: z.any().optional()
    });
    const body = schema.parse(req.body);
    
    // naive signature (MVP): top frame + screen hash + os
    const signature = `sig:${body.os}:${(body.context?.stackTop || 'unknown')}:${body.context?.screenHash || 'x'}`;
    
    // find or create cluster
    const app = await prisma.app.findUnique({ where: { id: body.appId } });
    if (!app) return res.status(404).json({ error: 'unknown appId' });
    
    let cluster = await prisma.cluster.findFirst({ where: { appId: app.id, signature } });
    if (!cluster) {
      cluster = await prisma.cluster.create({ 
        data: { 
          appId: app.id, 
          signature,
          severity: body.context?.severity || 3
        } 
      });
    }
    
    const bundle = await prisma.crashBundle.create({ 
      data: { 
        ...body, 
        clusterId: cluster.id 
      } 
    });
    
    await prisma.cluster.update({ 
      where: { id: cluster.id }, 
      data: { lastSeen: new Date() } 
    });
    
    res.json({ bundleId: bundle.id, clusterId: cluster.id });
  } catch (error) {
    console.error('Error ingesting crash:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Queue replay job
app.post('/clusters/:id/replay', async (req, res) => {
  try {
    const { id } = req.params;
    const cluster = await prisma.cluster.findUnique({ where: { id } });
    if (!cluster) return res.status(404).json({ error: 'cluster not found' });
    
    const job = await prisma.replayJob.create({ 
      data: { 
        clusterId: id, 
        target: 'android_emulator_api_34' 
      } 
    });
    
    res.json({ jobId: job.id });
  } catch (error) {
    console.error('Error queuing replay:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// List clusters
app.get('/clusters', async (req, res) => {
  try {
    const items = await prisma.cluster.findMany({ 
      include: { 
        bundles: true, 
        replays: true 
      } 
    });
    
    res.json(items.map(c => ({ 
      id: c.id, 
      signature: c.signature, 
      lastSeen: c.lastSeen, 
      count: c.bundles.length, 
      reproStatus: c.replays.some(r => r.status === 'SUCCEEDED') ? '✅' : '❌',
      severity: c.severity,
      status: c.status
    })));
  } catch (error) {
    console.error('Error fetching clusters:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get cluster detail
app.get('/clusters/:id', async (req, res) => {
  try {
    const c = await prisma.cluster.findUnique({ 
      where: { id: req.params.id }, 
      include: { 
        bundles: true, 
        replays: true 
      } 
    });
    
    if (!c) return res.status(404).json({ error: 'not found' });
    
    // placeholder minimal repro
    const first = c.bundles[0];
    const minimal = Array.isArray(first?.uiSteps) ? first!.uiSteps.slice(-3) : [];
    
    res.json({ 
      ...c, 
      minimalRepro: minimal 
    });
  } catch (error) {
    console.error('Error fetching cluster detail:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get replay job status
app.get('/replays/:id', async (req, res) => {
  try {
    const r = await prisma.replayJob.findUnique({ where: { id: req.params.id } });
    if (!r) return res.status(404).json({ error: 'not found' });
    res.json(r);
  } catch (error) {
    console.error('Error fetching replay:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get policies
app.get('/policies/:appId', async (req, res) => {
  try {
    const policy = await prisma.policy.findUnique({ 
      where: { appId: req.params.appId } 
    });
    if (!policy) return res.status(404).json({ error: 'not found' });
    res.json(policy);
  } catch (error) {
    console.error('Error fetching policy:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update policies
app.put('/policies/:appId', async (req, res) => {
  try {
    const { redact, sampleRate, retainDays } = req.body;
    const policy = await prisma.policy.upsert({
      where: { appId: req.params.appId },
      update: { redact, sampleRate, retainDays },
      create: { 
        appId: req.params.appId, 
        redact, 
        sampleRate, 
        retainDays 
      }
    });
    res.json(policy);
  } catch (error) {
    console.error('Error updating policy:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API on :${PORT}`));
