import type { Metadata } from 'next'
import '../src/styles/globals.css'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Chatbot from '@/components/Chatbot'
import { CartProvider } from '@/context/CartContext'
import { ChatProvider } from '@/context/ChatContext'
import ViewportInitializer from '@/components/ViewportInitializer'

const switzer = localFont({
  src: [
    {
      path: '../src/fonts/Switzer-Variable.woff2',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../src/fonts/Switzer-VariableItalic.woff2',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-switzer',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'STULA',
  description: 'Modern furniture with AR preview',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={switzer.variable}>
      <body>
        <ViewportInitializer />
        <CartProvider>
          <ChatProvider>
            <Marquee />
            <Header />
            <main className="px-4 lg:px-8">{children}</main>
            <Footer />
            <Chatbot />
          </ChatProvider>
        </CartProvider>
      </body>
    </html>
  )
}
