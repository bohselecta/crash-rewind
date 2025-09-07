import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create demo app
  const app = await prisma.app.upsert({
    where: { slug: 'demo-android' },
    update: {},
    create: {
      slug: 'demo-android',
      name: 'Demo Android App',
      platform: 'ANDROID'
    }
  });

  // Create privacy policy
  await prisma.policy.upsert({
    where: { appId: app.id },
    update: {},
    create: {
      appId: app.id,
      redact: JSON.stringify({ email: true, text: true }),
      sampleRate: 0.2,
      retainDays: 14
    }
  });

  // Create sample clusters
  const cluster1 = await prisma.cluster.create({
    data: {
      appId: app.id,
      signature: 'sig:android:MainActivity.onCreate:home',
      title: 'NullPointerException in MainActivity',
      severity: 2,
      status: 'OPEN'
    }
  });

  const cluster2 = await prisma.cluster.create({
    data: {
      appId: app.id,
      signature: 'sig:android:NetworkManager.connect:settings',
      title: 'Network timeout in settings',
      severity: 3,
      status: 'OPEN'
    }
  });

  // Create sample crash bundles
  await prisma.crashBundle.create({
    data: {
      appId: app.id,
      clusterId: cluster1.id,
      version: '1.2.3',
      device: 'Pixel 6',
      os: 'Android 14',
      locale: 'en-US',
      context: JSON.stringify({
        stackTop: 'MainActivity.onCreate:42',
        screenHash: 'home',
        memoryPressure: 'low',
        batteryLevel: 85
      }),
      uiSteps: JSON.stringify([
        { t: 0, type: 'tap', target: 'Home.Button.Settings' },
        { t: 1, type: 'tap', target: 'About' },
        { t: 2, type: 'tap', target: 'VersionLabel' }
      ]),
      networkCassettes: JSON.stringify([
        {
          method: 'GET',
          urlHash: 'api.example.com/users',
          status: 200,
          reqHash: 'req_123',
          resHash: 'res_456'
        }
      ])
    }
  });

  await prisma.crashBundle.create({
    data: {
      appId: app.id,
      clusterId: cluster1.id,
      version: '1.2.3',
      device: 'Pixel 7',
      os: 'Android 14',
      locale: 'en-US',
      context: JSON.stringify({
        stackTop: 'MainActivity.onCreate:42',
        screenHash: 'home',
        memoryPressure: 'medium',
        batteryLevel: 45
      }),
      uiSteps: JSON.stringify([
        { t: 0, type: 'tap', target: 'Home.Button.Settings' },
        { t: 1, type: 'tap', target: 'About' },
        { t: 2, type: 'tap', target: 'VersionLabel' }
      ])
    }
  });

  await prisma.crashBundle.create({
    data: {
      appId: app.id,
      clusterId: cluster2.id,
      version: '1.2.2',
      device: 'Samsung Galaxy S23',
      os: 'Android 13',
      locale: 'en-US',
      context: JSON.stringify({
        stackTop: 'NetworkManager.connect:156',
        screenHash: 'settings',
        memoryPressure: 'high',
        batteryLevel: 20
      }),
      uiSteps: JSON.stringify([
        { t: 0, type: 'tap', target: 'Settings' },
        { t: 1, type: 'tap', target: 'Network' },
        { t: 2, type: 'tap', target: 'Connect' }
      ])
    }
  });

  // Create a completed replay job
  await prisma.replayJob.create({
    data: {
      clusterId: cluster1.id,
      target: 'android_emulator_api_34',
      status: 'SUCCEEDED',
      startedAt: new Date(Date.now() - 300000), // 5 minutes ago
      finishedAt: new Date(Date.now() - 240000), // 4 minutes ago
      artifacts: JSON.stringify({
        videoUrl: '/artifacts/replay_123.mp4',
        steps: ['tap(Settings)', 'tap(About)', 'tap(VersionLabel)'],
        envSnapshot: {
          os: 'Android 14',
          device: 'Pixel 6',
          memory: '8GB',
          storage: '128GB'
        }
      })
    }
  });

  console.log('Database seeded successfully!');
  console.log(`Created app: ${app.name} (${app.slug})`);
  console.log(`Created ${await prisma.cluster.count()} clusters`);
  console.log(`Created ${await prisma.crashBundle.count()} crash bundles`);
  console.log(`Created ${await prisma.replayJob.count()} replay jobs`);
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
