# CrashRewind Pricing

## Depot ELA (Enterprise License Agreement)

**One price for your entire engineering organization** - unlimited apps, environments, and seats.

### Depot "Crash Core" (Crash + Clustering + Deterministic Replay)

| Band | Mobile MAU | Annual Price | Crash Bundles/Year | Replay Minutes/Year | Runner Concurrency | Support/SLA |
|------|------------|--------------|-------------------|-------------------|-------------------|-------------|
| **Depot A** | ≤ 500k | $90,000 | 600,000 | 60,000 | 8 | 8×5, P1 in 4h, 99.9% |
| **Depot B** | ≤ 2M | $180,000 | 3,000,000 | 240,000 | 16 | 24×7, P1 in 1h, 99.95% |
| **Depot C** | ≤ 10M | $360,000 | 12,000,000 | 1,200,000 | 32 | 24×7, P1 in 30m, TAM, 99.95% |
| **Global+** | > 10M | Custom (starts ~$600k) | Unlimited (fair use) | Unlimited (fair use) | Dedicated fleet | 24×7, P1 in 15m, TAM, SLOs |

### Depot "Crash + Session" Add-on

**Session Replay Lite**: Privacy-first, low-overhead mobile session replay with strict redaction and 1-5% default sampling.

- **Price**: $0.90 per 1,000 sessions (org-pooled)
- **Features**: Text redaction by default, configurable sampling, customer-managed keys
- **Compliance**: GDPR/CCPA ready, on-device PII filtering

### What's Included

✅ **Unlimited apps** (iOS, Android, React Native, Flutter)  
✅ **Unlimited environments** (dev, staging, production)  
✅ **Unlimited seats** (all engineers, contractors included)  
✅ **Pooled usage** across entire organization  
✅ **Cloud or VPC deployment**  
✅ **Customer data ownership**  
✅ **SSO/SCIM integration**  
✅ **Audit logs and compliance**  

### Overages (Pooled Organization-Wide)

- **Crash bundles**: $0.007 per bundle
- **Replay minutes**: $0.05 per minute
- **Extra runner packs**: $2,000/month (4 concurrent runners)
- **Burst weekend pass**: $1,000/3 days for release weeks

### Commercial Add-ons

| Add-on | Price | Description |
|--------|-------|-------------|
| **VPC/On-prem** | +$140,000/year | Private deployment, hardened images, SCIM/SSO, compliance artifacts |
| **Dedicated Fleet** | From $2,500/month | Managed emulator fleet (4 concurrent runners) |
| **Integration Accelerator** | $12,000 | 2-week integration and onboarding |
| **Compliance + PII** | $18,000 | Policy implementation and compliance setup |
| **Custom Adapters** | $220/hour | Custom integrations and connectors |

### Discounts (Stackable)

- **Multi-year prepay**: -10% (2-year), -18% (3-year)
- **Design partner**: -35% year 1 (first 3 customers) + success metric clause
- **Public reference**: -5%
- **Success metric upgrade**: If >60% deterministic-repro rate achieved, upgrade triggers

## ROI Calculator

### Quick ROI Example
If deterministic replays save **2 engineer hours per incident** and you run **10,000 replays/year**:

- **Time saved**: 20,000 engineer hours
- **Loaded rate**: $120/hour
- **Value**: $2,400,000 reclaimed engineering time
- **Depot B cost**: $180,000/year
- **ROI**: **13× return** before MTTR/CSAT benefits

### Additional Benefits
- **Faster MTTR**: 60-80% reduction in mean time to resolution
- **Reduced duplicates**: 70% fewer duplicate crash reports
- **Better triage**: Automatic ownership assignment and routing
- **Privacy compliance**: Zero PII exposure with on-device redaction
- **ANR/OOM focus**: First-class ANR timelines and OOM heuristics
- **CI verify-replay gate**: Blocks releases on replay failures
- **Symbol pipelines**: dSYM/ProGuard auto-upload + source context
- **Crashlytics bridge**: Ingest free Crashlytics events for deterministic replays

## Enterprise Features

### Security & Compliance
- **SOC2 Type II** compliance
- **Data residency** controls
- **Customer-managed encryption** keys
- **Audit trails** and access logging
- **Retention policies** by severity and environment

### Integration & Support
- **SSO/SCIM** identity management
- **Slack/Teams** notifications
- **Jira/Linear** ticket creation
- **CI/CD** integration and verification
- **Dedicated support** channels

### Data & Privacy
- **On-device redaction** (default-deny PII capture)
- **Configurable sampling** rates
- **Regional data residency**
- **Customer data ownership**
- **GDPR/CCPA** compliance

## FAQ

### What counts as a "depot"?
A single legal entity's engineering organization/monorepo and all its mobile applications. Contractors are included.

### Can subsidiaries use it?
Yes, if they ship from the same depot. Otherwise, add a second depot or expand to Global+.

### Are there seat limits?
No. The Depot ELA includes unlimited seats for your entire organization.

### What about data retention?
Fully customer-configurable per severity and environment. Default is 14-90 days.

### How is PII handled?
Default-deny capture with on-device redaction and optional customer-managed encryption keys.

### What's included in support?
- **Depot A**: 8×5 support, P1 issues resolved in 4 hours
- **Depot B+**: 24×7 support, P1 issues resolved in 1 hour or less
- **Global+**: Dedicated technical account manager (TAM)

## Getting Started

### Pilot Program
- **6-month pilot** with success metrics
- **Pilot pricing**: Platform fee waived
- **Usage**: $0.10 per crash bundle processed
- **Support**: Included (email + Slack)
- **Training**: 2 hours onboarding included

### Next Steps
1. **Contact sales**: hayden@glyphd.com
2. **Pilot agreement**: 6-month pilot with success metrics
3. **Technical kickoff**: Architecture review and integration planning
4. **Deployment**: Set up CrashRewind in your environment
5. **Go live**: Start processing crashes and measuring impact

---

**Ready to transform your mobile crash triage?**  
Contact: hayden@glyphd.com | [Schedule Demo](https://calendly.com/crashrewind) | [GitHub](https://github.com/bohselecta/crash-rewind)
