# Security Policy

## Supported Versions

We currently support the following versions of CrashRewind:

| Version | Supported          |
| ------- | ------------------ |
| MVP     | :white_check_mark: |

## Reporting a Vulnerability

If you believe you've found a security vulnerability in CrashRewind, please report it responsibly:

**DO NOT** open a public issue or discuss it publicly.

### How to Report

1. **Email**: Send details to security@glyphd.com
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact
   - Any suggested fixes

### Response Timeline

- **Acknowledgment**: Within 3 business days
- **Initial Assessment**: Within 1 week
- **Resolution**: Depends on severity and complexity

### What We're Looking For

- Authentication/authorization bypasses
- Data exposure vulnerabilities
- Injection attacks
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Insecure direct object references
- Security misconfigurations
- Sensitive data exposure

### What We're NOT Looking For

- Social engineering attacks
- Physical attacks
- Denial of service attacks
- Issues in third-party dependencies (report to them directly)
- Issues in development/staging environments

## Security Best Practices

When using CrashRewind:

1. **Keep dependencies updated**
2. **Use HTTPS in production**
3. **Implement proper authentication**
4. **Regularly audit your data retention policies**
5. **Monitor access logs**
6. **Use environment variables for sensitive configuration**

## Privacy & Data Protection

CrashRewind is designed with privacy-first principles:

- **On-device redaction**: PII is hashed before transmission
- **Configurable sampling**: Control data collection rates
- **Retention policies**: Automatic data scrubbing
- **Customer-managed keys**: Optional encryption key management

## Contact

For security-related questions: security@glyphd.com

For general support: support@glyphd.com
