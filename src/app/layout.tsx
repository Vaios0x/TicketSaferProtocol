import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TicketSafer Protocol - El AWS del Entertainment Web3',
  description: 'Protocolo fundamental que toda la industria del entretenimiento usa para tickets, pagos y verificación. Cross-chain nativo, ZK-proofs, AI anti-bot y DeFi integrado.',
  keywords: 'blockchain, web3, tickets, entertainment, defi, nft, zk-proofs, cross-chain',
  authors: [{ name: 'TicketSafer Team' }],
  openGraph: {
    title: 'TicketSafer Protocol - El AWS del Entertainment Web3',
    description: 'Protocolo fundamental para la industria del entretenimiento',
    url: 'https://ticketsafer.io',
    siteName: 'TicketSafer Protocol',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TicketSafer Protocol',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TicketSafer Protocol - El AWS del Entertainment Web3',
    description: 'Protocolo fundamental para la industria del entretenimiento',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
