import './globals.css'
import type { Metadata } from 'next'
import NavBar from './home/navBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="veterinaria">
      <body className={inter.className}>
        <div className='sticky top-0 z-10 '>
        <NavBar />
        </div>
        {children}</body>
    </html>
  )
}
