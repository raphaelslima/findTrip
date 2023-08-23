import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers/auth'


import Header from '../components/header'

const poppins = Poppins({ subsets: ['latin'], weight: [
    '300','400','500','600','700'
] })

export const metadata: Metadata = {
  title: 'FindTrip',
  description: 'Sistema de reserva de viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header/>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
