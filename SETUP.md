# CrashRewind MVP Setup Guide

## Quick Start (Recommended)

### Prerequisites
- Node.js 20+ (you have 22.18.0 ✅)
- pnpm 9+ (you have 9.6.0 ✅)
- Docker Desktop (optional, for PostgreSQL)

### Setup Steps

1. **Install dependencies** (already done ✅)
   ```bash
   pnpm install
   ```

2. **Set up database** (SQLite - already done ✅)
   ```bash
   # Database file created: dev.db
   # Migration applied: 20250907005344_init
   ```

3. **Start the application**
   ```bash
   # Set environment variable and start all services
   $env:DATABASE_URL="file:./dev.db"; pnpm dev
   ```

4. **Access the application**
   - Dashboard: http://localhost:3000
   - API: http://localhost:4000

## What's Working

✅ **TypeScript 5.6.3** - Locked and enforced  
✅ **Monorepo structure** - apps/dashboard, services/api, workers/replay-runner, packages/shared  
✅ **Database schema** - SQLite with Prisma ORM  
✅ **API endpoints** - Crash ingestion, clustering, replay queue  
✅ **Dashboard** - Next.js with Tailwind CSS  
✅ **Worker** - Replay job processor (stubbed)  

## Current Status

The application is running with:
- **Database**: SQLite (dev.db) with sample data
- **API**: Express server on port 4000
- **Dashboard**: Next.js on port 3000
- **Worker**: Background job processor

## Testing the Application

1. **View Dashboard**: Open http://localhost:3000
   - See release health metrics
   - Browse clusters
   - View cluster details
   - Queue replay jobs

2. **Test API**: Run the test script
   ```bash
   node scripts/test-api.js
   ```

3. **Sample Data**: The database contains:
   - 1 demo Android app
   - 2 crash clusters (P2 and P3 severity)
   - 3 crash bundles with UI steps
   - 1 completed replay job

## Next Steps

1. **Real Database**: Switch to PostgreSQL for production
2. **Emulator Integration**: Replace stubbed replay worker
3. **Step Minimization**: Add delta-debugging
4. **Ownership Inference**: Map crashes to teams
5. **Symbol Pipelines**: Add dSYM/ProGuard support

## Troubleshooting

- **TypeScript errors**: Ensure using workspace version (5.6.3)
- **Database issues**: Check DATABASE_URL environment variable
- **Port conflicts**: Change ports in package.json scripts
- **Prisma issues**: Run `pnpm exec prisma generate` from services/api

## Architecture

```
crashrewind/
├── apps/dashboard/          # Next.js 14 + Tailwind
├── services/api/            # Express + Prisma
├── workers/replay-runner/   # Job processor
├── packages/shared/         # TypeScript types
├── prisma/                  # Database schema
└── scripts/                 # Utilities
```

The application demonstrates the core CrashRewind concept: turning mobile crashes into deterministic replays with privacy-first data collection and intelligent clustering.
