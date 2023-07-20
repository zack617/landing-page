import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KRAV',
  description: 'KRAV'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
