import Footer from '../components/footer/footer'
import Calendar from '../components/calendar/calendar'
import CalendarHeader from '../components/calendar/calendarHeader'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Citas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <CalendarHeader />
      {children}
      <Calendar />
      <Footer />
    </div>
  )
}
