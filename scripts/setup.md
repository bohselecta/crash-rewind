# CrashRewind Setup Instructions

## Option 1: With Docker (Recommended)

1. Start Docker Desktop
2. Run: `docker compose up -d postgres`
3. Run: `pnpm prisma:migrate`
4. Run: `pnpm seed`
5. Run: `pnpm dev`

## Option 2: Without Docker (Local PostgreSQL)

1. Install PostgreSQL locally
2. Create database: `createdb crashrewind`
3. Update `.env` with your local PostgreSQL connection string
4. Run: `pnpm prisma:migrate`
5. Run: `pnpm seed`
6. Run: `pnpm dev`

## Option 3: SQLite (Quick Test)

1. Update `.env` to use SQLite:
   ```
   DATABASE_URL="file:./dev.db"
   ```
2. Update `prisma/schema.prisma` to use SQLite:
   ```
   datasource db {
     provider = "sqlite"
     url      = env("DATABASE_URL")
   }
   ```
3. Run: `pnpm prisma:migrate`
4. Run: `pnpm seed`
5. Run: `pnpm dev`

## Verification

- Dashboard: http://localhost:3000
- API: http://localhost:4000
- You should see sample clusters and be able to queue replays
