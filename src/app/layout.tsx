import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TransitionProvider } from './transitionContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ece | Created a Next App',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
