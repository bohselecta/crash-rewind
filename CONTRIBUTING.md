# Contributing to CrashRewind

Thanks for your interest in contributing to CrashRewind! This MVP is source-available for noncommercial use under the PolyForm Noncommercial License.

## Current Status

This is an **MVP (Minimum Viable Product)** focused on demonstrating the core concept of deterministic crash replay. We're currently not accepting large feature contributions, but bug reports and small improvements are welcome.

## How to Contribute

### Bug Reports

1. Check existing issues first
2. Use the bug report template
3. Include:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details

### Small Improvements

- Documentation fixes
- Code style improvements
- Small bug fixes
- Performance optimizations
- Test coverage improvements

### What We're NOT Looking For

- Major new features (see ROADMAP.md for planned features)
- Breaking changes
- UI/UX overhauls
- Architecture changes

## Development Setup

### Prerequisites

- Node.js 20+
- pnpm 9+
- Docker Desktop (optional, for PostgreSQL)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/bohselecta/crash-rewind.git
cd crash-rewind

# Install dependencies
pnpm install

# Set up environment
cp env.example .env

# Start database (SQLite for dev)
pnpm prisma:migrate
pnpm seed

# Start development servers
pnpm dev
```

### Code Style

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (default configuration)
- **Linting**: ESLint with Next.js config
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: JSDoc for public APIs

### Project Structure

```
crashrewind/
├── apps/dashboard/          # Next.js dashboard
├── services/api/            # Express API
├── workers/replay-runner/   # Background worker
├── packages/shared/         # Shared types
├── prisma/                  # Database schema
└── scripts/                 # Utilities
```

## Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Test** your changes locally
5. **Commit** with clear messages
6. **Push** to your fork
7. **Open** a Pull Request

### PR Guidelines

- Keep PRs small and focused
- Include tests for new functionality
- Update documentation as needed
- Follow the existing code style
- Reference any related issues

## Testing

```bash
# Type checking
pnpm exec tsc --noEmit

# Run tests (when available)
pnpm test

# Build verification
pnpm build
```

## Questions?

- **Documentation**: Check README.md and code comments
- **Issues**: Use GitHub Issues for questions
- **Discussions**: Use GitHub Discussions for general discussion

## License

By contributing, you agree that your contributions will be licensed under the same PolyForm Noncommercial License that covers the project.

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.
