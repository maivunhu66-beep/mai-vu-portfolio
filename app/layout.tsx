import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: 'Mai Vu | Business Analytics & Finance',
  description:
    'Mai Vu — Business Analytics and Finance student at the University of Illinois Chicago. Turning complex operational and financial data into clear, actionable business decisions.',
  generator: 'v0.app',
  keywords: [
    'Mai Vu',
    'Business Analytics',
    'Finance',
    'Data Analytics',
    'Consulting',
    'University of Illinois Chicago',
    'Power BI',
    'SQL',
  ],
  authors: [{ name: 'Mai Vu' }],
  openGraph: {
    title: 'Mai Vu | Business Analytics & Finance',
    description:
      'Turning complex data into clear business decisions. Business Analytics and Finance portfolio of Mai Vu.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f4ed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
