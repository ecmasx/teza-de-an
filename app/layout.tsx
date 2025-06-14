import type { Metadata } from 'next'
import '../src/styles/globals.css'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  title: 'AR Furniture Store',
  description: 'Aici vei găsi cele mai bune produse de mobilier 3D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={switzer.variable}>
      <body>
        <Header />
        <main className="px-4 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
