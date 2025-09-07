
CrashRewind Brand Pack
======================

Files:
- PNGs: crashrewind-1024.png, crashrewind-512.png, crashrewind-384.png, crashrewind-256.png, crashrewind-192.png, crashrewind-180.png, crashrewind-128.png, crashrewind-96.png, crashrewind-64.png, crashrewind-48.png, crashrewind-32.png, crashrewind-16.png
- Favicon: favicon.ico

Suggested Head tags (Next.js /app/layout.tsx):
  <link rel="icon" href="/brand/favicon.ico" sizes="16x16 32x32 48x48" />
  <link rel="icon" type="image/png" sizes="192x192" href="/brand/crashrewind-192.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/brand/crashrewind-180.png" />


Tailwind tokens (approx dominant colors):
  --brand-primary: #141B69
  --brand-accent:  #FCAA18
  --brand-deep:    #EBECF0
  --brand-warm:    #FCF7D2

Usage (Tailwind config):
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#141B69",
          accent:  "#FCAA18",
          deep:    "#EBECF0",
          warm:    "#FCF7D2",
        }
      }
    }
  }

          warm:    "#FFB648",