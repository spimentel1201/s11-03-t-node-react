import Footer from '../components/footer/footer'
import AgendarTurnoSection from '../home/agendarTurno/agendarTurnoSmall'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <AgendarTurnoSection />
      <Footer />
    </div>
  )
}
