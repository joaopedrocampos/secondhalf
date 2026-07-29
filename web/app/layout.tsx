import type { Metadata } from 'next'
import { Fraunces, Archivo, Space_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Second Half — real vintage football shirts',
  description:
    'Every shirt has lived a first half. Every mark is a memory. The second half is yours. Real vintage football shirts, found one by one.',
  icons: {
    icon: '/logo-mark-small.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${archivo.variable} ${spaceMono.variable}`}
    >
      <head>
        <link rel="icon" href="/logo-mark-small.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  )
}
