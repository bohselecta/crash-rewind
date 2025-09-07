import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BrandMark } from '@/components/BrandMark'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrashRewind - Crash Triage Dashboard',
  description: 'Deterministic crash repro + triage for mobile',
  icons: {
    icon: [
      { url: '/brand/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/brand/crashrewind-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/brand/crashrewind-180.png', sizes: '180x180', type: 'image/png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <BrandMark />
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/" className="text-sm hover:text-brand-accent text-brand-primary">Home</a>
                  <a href="/clusters" className="text-sm hover:text-brand-accent text-brand-primary">Clusters</a>
                  <a href="/settings/privacy" className="text-sm hover:text-brand-accent text-brand-primary">Privacy</a>
                </div>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
