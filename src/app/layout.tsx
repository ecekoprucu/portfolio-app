import './globals.css'
import type { Metadata } from 'next'
import { TransitionProvider } from './transitionContext'

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
      <body>
        <TransitionProvider>
            {children}
        </TransitionProvider>
      </body>
    </html>
  )
}
