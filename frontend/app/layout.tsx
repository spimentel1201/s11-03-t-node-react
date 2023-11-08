import './globals.css'
import type { Metadata } from 'next'
import NavBar from './home/navBar/navBar'
import { inter, secular_one, mochy_pop_one } from './fonts/fonts'

export const metadata: Metadata = {
  title: 'VetCare',
  description: 'Cuidamos tu mascota',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="veterinaria">
      <body
        className={`relative min-h-screen ${secular_one.variable} ${inter.variable} ${inter.className} ${mochy_pop_one.variable}`}
      >
        <div className="sticky top-0 z-10 ">
          <NavBar />
        </div>
        {children}        
      </body>
    </html>
  )
}
