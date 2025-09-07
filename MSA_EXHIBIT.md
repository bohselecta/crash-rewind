# Master Service Agreement - Exhibit A
## CrashRewind Depot ELA Terms

### 1. Definitions

**"Depot"** means Customer's single legal entity engineering organization, including all mobile applications, services, teams, and contractors.

**"Crash Bundle"** means a single crash report containing UI steps, device context, and network cassettes.

**"Replay Minute"** means one minute of emulator/simulator execution time for deterministic replay.

**"MAU"** means Monthly Active Users across all Customer mobile applications.

### 2. License Scope

#### 2.1 Depot Coverage
- **Unlimited Applications**: All mobile apps (iOS, Android, React Native, Flutter)
- **Unlimited Environments**: Development, staging, production, and testing
- **Unlimited Seats**: All engineers, contractors, and authorized users
- **Pooled Usage**: Crash bundles and replay minutes pooled organization-wide

#### 2.2 Deployment Options
- **Cloud**: SaaS deployment on Glyphr infrastructure
- **VPC**: Private cloud deployment in Customer's VPC
- **On-premises**: Customer-managed infrastructure (requires VPC add-on)

### 3. Pricing Tiers

#### 3.1 Depot A (≤ 500k MAU)
- **Annual Price**: $90,000
- **Included Usage**: 600,000 crash bundles, 60,000 replay minutes
- **Runner Concurrency**: 8 concurrent
- **Support**: 8×5, P1 in 4 hours, 99.9% uptime

#### 3.2 Depot B (≤ 2M MAU)
- **Annual Price**: $180,000
- **Included Usage**: 3,000,000 crash bundles, 240,000 replay minutes
- **Runner Concurrency**: 16 concurrent
- **Support**: 24×7, P1 in 1 hour, 99.95% uptime

#### 3.3 Depot C (≤ 10M MAU)
- **Annual Price**: $360,000
- **Included Usage**: 12,000,000 crash bundles, 1,200,000 replay minutes
- **Runner Concurrency**: 32 concurrent
- **Support**: 24×7, P1 in 30 minutes, TAM, 99.95% uptime

#### 3.4 Global+ (> 10M MAU)
- **Annual Price**: Custom (starts ~$600,000)
- **Included Usage**: Unlimited (fair use)
- **Runner Concurrency**: Dedicated fleet
- **Support**: 24×7, P1 in 15 minutes, TAM, SLOs

#### 3.5 Session Replay Add-on
- **Price**: $0.90 per 1,000 sessions (org-pooled)
- **Features**: Privacy-first mobile session replay with strict redaction and 1-5% default sampling
- **Compliance**: GDPR/CCPA ready, on-device PII filtering

### 4. Usage and Overages

#### 4.1 Pooled Usage
All crash bundles and replay minutes are pooled across Customer's entire organization, regardless of application or team.

#### 4.2 Overage Rates
- **Crash Bundles**: $0.007 per bundle
- **Replay Minutes**: $0.05 per minute
- **Extra Runner Packs**: $2,000/month (4 concurrent runners)
- **Burst Weekend Pass**: $1,000/3 days for release weeks

#### 4.3 Usage Monitoring
Customer will receive monthly usage reports. Overages will be billed quarterly in arrears.

### 5. Commercial Add-ons

#### 5.1 VPC/On-premises Deployment
- **Price**: +$140,000/year
- **Includes**: Private deployment, hardened images, SCIM/SSO, compliance artifacts

#### 5.2 Dedicated Emulator Fleet
- **Price**: From $2,500/month
- **Includes**: Managed emulator fleet (4 concurrent runners)

#### 5.3 Professional Services
- **Integration Accelerator**: $12,000 (2-week integration and onboarding)
- **Compliance + PII Setup**: $18,000 (policy implementation and compliance setup)
- **Custom Adapters**: $220/hour (custom integrations and connectors)

### 6. Discounts

#### 6.1 Multi-year Prepayment
- **2-year commitment**: 10% discount
- **3-year commitment**: 18% discount

#### 6.2 Design Partner
- **First 3 customers**: 35% discount in year 1, reverts to list price in year 2

#### 6.3 Public Reference
- **5% discount** for public case study and reference

### 7. Data and Privacy

#### 7.1 Data Ownership
Customer retains all rights, title, and interest in Customer Data. Glyphr processes Customer Data solely as a data processor.

#### 7.2 Data Residency
Customer may specify data residency requirements. Glyphr will store and process Customer Data in the specified regions.

#### 7.3 Privacy Controls
- **Default-deny PII capture**: PII is redacted on-device before transmission
- **Configurable sampling**: Customer controls data collection rates
- **Retention policies**: Customer-configurable by severity and environment
- **Customer-managed keys**: Optional encryption key management

#### 7.4 Compliance
- **SOC2 Type II**: Available upon request
- **GDPR/CCPA**: Full compliance with data protection regulations
- **Audit rights**: Customer audit rights included
- **Breach notification**: 24-hour notification requirement

### 8. Support and SLA

#### 8.1 Support Levels
- **Depot A**: 8×5 support (Monday-Friday, 9 AM - 5 PM PST)
- **Depot B+**: 24×7 support (24 hours, 7 days per week)
- **Global+**: 24×7 support with dedicated Technical Account Manager (TAM)

#### 8.2 Response Times
- **P1 (Critical)**: 4 hours (Depot A), 1 hour (Depot B), 30 minutes (Depot C), 15 minutes (Global+)
- **P2 (High)**: 8 hours (Depot A), 4 hours (Depot B+)
- **P3 (Medium)**: 24 hours (Depot A), 8 hours (Depot B+)
- **P4 (Low)**: 72 hours (Depot A), 24 hours (Depot B+)

#### 8.3 Uptime SLA
- **Depot A**: 99.9% uptime
- **Depot B+**: 99.95% uptime
- **Global+**: Custom SLOs with service credits

### 9. Security

#### 9.1 Authentication
- **SSO/SCIM**: Enterprise identity management integration
- **Multi-factor authentication**: Required for all user accounts
- **Role-based access control**: Granular permissions by team and function

#### 9.2 Encryption
- **Data at rest**: AES-256 encryption
- **Data in transit**: TLS 1.3 encryption
- **Customer-managed keys**: Optional HSM integration

#### 9.3 Audit and Compliance
- **Audit logs**: Comprehensive access and activity logging
- **Compliance reporting**: SOC2, GDPR, CCPA compliance
- **Penetration testing**: Annual third-party security assessments

### 10. Intellectual Property

#### 10.1 Customer Data
Customer retains all rights, title, and interest in Customer Data, including any derivative works created from Customer Data.

#### 10.2 Glyphr IP
CrashRewind software and related intellectual property remain owned by Glyphr and are licensed to Customer under this Agreement.

#### 10.3 Open Source
Any open source components are subject to their respective licenses. Customer's use of open source components is governed by such licenses.

### 11. Term and Termination

#### 11.1 Initial Term
The initial term is 12 months from the Effective Date, unless otherwise specified in the Order Form.

#### 11.2 Auto-renewal
This Agreement will automatically renew for successive 12-month periods unless either party provides 30 days' written notice of non-renewal.

#### 11.3 Termination for Cause
Either party may terminate this Agreement immediately upon written notice if the other party materially breaches this Agreement and fails to cure such breach within 30 days of written notice.

### 12. Limitation of Liability

#### 12.1 Cap on Liability
Each party's total liability for all claims arising out of or related to this Agreement will not exceed the total amount paid by Customer under this Agreement in the 12 months preceding the claim.

#### 12.2 Exclusions
The limitation of liability does not apply to: (a) Customer's payment obligations; (b) either party's indemnification obligations; (c) either party's gross negligence or willful misconduct; or (d) Customer's breach of the license restrictions.

### 13. Indemnification

#### 13.1 Glyphr Indemnification
Glyphr will indemnify Customer against any third-party claim that the CrashRewind software infringes any patent, copyright, or trademark of such third party.

#### 13.2 Customer Indemnification
Customer will indemnify Glyphr against any third-party claim arising from Customer's use of the CrashRewind software in violation of this Agreement.

### 14. General Provisions

#### 14.1 Governing Law
This Agreement is governed by the laws of [State/Country] without regard to conflict of law principles.

#### 14.2 Dispute Resolution
Any disputes arising out of or related to this Agreement will be resolved through binding arbitration in accordance with the rules of [Arbitration Organization].

#### 14.3 Entire Agreement
This Agreement, together with the Order Form, constitutes the entire agreement between the parties and supersedes all prior agreements and understandings.

#### 14.4 Amendments
This Agreement may only be amended by written agreement signed by both parties.

---

**Effective Date**: [Date]  
**Customer**: [Customer Name]  
**Glyphr**: Hayden Lindley dba Glyphr  
**Contact**: hayden@glyphd.com
