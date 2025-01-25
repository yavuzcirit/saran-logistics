import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import LayoutClient from './layout.client'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saran Lojistik',
  description: 'Profesyonel Lojistik Çözümleri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="preload"
          href="/bg-hero.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <LayoutClient></LayoutClient>
        <WhatsAppButton />
      </body>
    </html>
  )
}
