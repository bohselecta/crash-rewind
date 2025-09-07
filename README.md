# CrashRewind

![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![License: PolyForm Noncommercial](https://img.shields.io/badge/license-PolyForm%20Noncommercial-blueviolet)
![Status](https://img.shields.io/badge/status-MVP-yellow)
![Node](https://img.shields.io/badge/node-20.x-green)

**Deterministic crash repro + triage for mobile teams**

Turn mobile crashes into one-click, deterministic replays in emulators/simulators with the exact UI steps, inputs, network responses, and device context that led to the crash.

> **⚠️ Not production-ready** - This is an MVP for demonstration purposes. See [ROADMAP.md](ROADMAP.md) for production plans.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+
- Docker Desktop (optional, for PostgreSQL)

### Setup
```bash
# Clone the repository
git clone https://github.com/bohselecta/crash-rewind.git
cd crash-rewind

# Enable pnpm
corepack enable
corepack prepare pnpm@latest --activate

# Install dependencies
pnpm install

# Copy environment file
cp env.example .env

# Start database (SQLite for quick start)
pnpm prisma:migrate
pnpm seed

# Start all services
pnpm dev
```

### Access Points
- **Dashboard**: http://localhost:3000
- **API**: http://localhost:4000
- **Database**: SQLite (dev.db) or PostgreSQL (localhost:5432)

## 🏗️ Architecture

### Services
- **Dashboard** (`apps/dashboard`): Next.js 14 + Tailwind CSS + shadcn/ui
- **API** (`services/api`): Express + Prisma + PostgreSQL/SQLite
- **Worker** (`workers/replay-runner`): Replay job processor (stubbed for MVP)
- **Shared** (`packages/shared`): TypeScript types and utilities

### Key Features
- **Crash Ingestion**: Accept crash bundles with UI steps, device context, and network cassettes
- **Causal Clustering**: Group crashes by behavioral similarity, not just stack traces
- **Deterministic Replay**: Queue and process replay jobs (MVP: simulated)
- **Admin Dashboard**: View clusters, queue replays, manage privacy settings
- **Privacy Controls**: On-device redaction, sampling rates, retention policies

## 🔒 Privacy & Security

CrashRewind is built with privacy-first principles:

- **On-device redaction**: PII is hashed before transmission
- **Configurable sampling**: Control data collection rates
- **Retention policies**: Automatic data scrubbing
- **Customer-managed keys**: Optional encryption key management
- **SOC2 compliance**: Enterprise-grade security controls

## 💰 Pricing

**Enterprise-ready pricing** with unlimited apps, environments, and seats:

- **Depot A** (≤ 500k MAU): $120,000/year
- **Depot B** (≤ 2M MAU): $240,000/year  
- **Depot C** (≤ 10M MAU): $480,000/year
- **Global+** (> 10M MAU): Custom pricing

See [PRICING.md](PRICING.md) for complete pricing details, ROI calculator, and enterprise features.

## 📊 What's Next

See [ROADMAP.md](ROADMAP.md) for detailed plans including:
- Real emulator integration
- Step minimization
- Ownership inference
- Advanced clustering
- Enterprise features

## Development

### TypeScript Version
This project locks TypeScript at version 5.6.3. The workspace configuration ensures all packages use the same version.

### Database
- PostgreSQL 16 with Prisma ORM
- Schema includes Users, Apps, Clusters, CrashBundles, ReplayJobs, and Policies
- Migrations managed via Prisma CLI

### API Endpoints
- `POST /ingest/crash` - Accept crash bundle
- `GET /clusters` - List clusters with filters
- `GET /clusters/:id` - Cluster detail with minimal repro
- `POST /clusters/:id/replay` - Queue replay job
- `GET /replays/:id` - Replay job status
- `GET/PUT /policies/:appId` - Privacy settings

## MVP Limitations

- Replay runner is stubbed (simulates 2-second processing)
- No real emulator orchestration
- Basic clustering by signature only
- No step minimization
- No ownership inference
- Slack/Jira integrations are placeholders

## Next Steps

1. **Real Emulator Integration**: Android Emulator gRPC, Xcode simctl
2. **Step Minimization**: Delta-debugging to reduce repro steps
3. **Ownership Inference**: Map stacks to codeowners and teams
4. **Symbol Pipelines**: dSYM/ProGuard mapping and source context
5. **CI Integration**: Verify replays against candidate builds
6. **Advanced Clustering**: Behavioral similarity analysis

## 📄 License

This project is licensed under the [PolyForm Noncommercial License 1.0.0](LICENSE) - see the [LICENSE](LICENSE) file for details.

**Commercial use requires a separate commercial license from the copyright holder.**

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📞 Support

- **Documentation**: Check this README and code comments
- **Issues**: Use [GitHub Issues](https://github.com/bohselecta/crash-rewind/issues)
- **Security**: See [SECURITY.md](SECURITY.md) for security reporting
- **Discussions**: Use [GitHub Discussions](https://github.com/bohselecta/crash-rewind/discussions)

## 🙏 Acknowledgments

Built with ❤️ by [Hayden Lindley dba Glyphr](https://glyphd.com)

---

**CrashRewind** - Turning mobile crashes into deterministic replays, one crash at a time.
