'use client'

import Weeks from './calendarWeeks'
import {
  days,
  getHorario,
  verificarDisponibilidad,
  scrollToSection,
} from './helper'
import useDate from './useDate'
import useVetData from './useVetData'
import { useEffect, useState, useRef } from 'react'
import Selectors from './calendarSelectors'

const Calendar = () => {
  const {
    monthState,
    yearState,
    arrayMesActual,
    handleChangeMonth,
    handleChangeYear,
  } = useDate()

  const [vetId, setVetId] = useState(null)
  const [dateFilter, setDateFilter] = useState(null)
  const horariosRef = useRef(null)

  const { appointments } = useVetData(vetId)

  const handleDateFilter = (date) => {
    setDateFilter(date)
    if (horariosRef) scrollToSection(horariosRef)
  }

  useEffect(() => {
    const { pathname } = window.location
    setVetId(pathname.slice(8))
  }, [])

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value
    handleChangeMonth(parseInt(selectedMonth))
    setDateFilter(null)
  }

  const handleYearChange = (event) => {
    const selectedYear = event.target.value
    handleChangeYear(parseInt(selectedYear))
    setDateFilter(null)
  }

  return (
    <div className="max-w-[90rem] m-auto">
      <div className="mt-4">
        <div className="flex flex-col mx-1 border-b-2">
          <div>
            <Selectors
              monthState={monthState}
              yearState={yearState}
              handleMonthChange={handleMonthChange}
              handleChangeYear={handleYearChange}
            />
            <div>Citas Component </div>
          </div>
          <div className="flex justify-between items-center font-small uppercase pt-20 pb-2 mb-8">
            {days.map((w, index) => (
              <span
                key={index}
                className="w-full font-bold flex justify-center items-center"
              >
                <span className="text-sm md:text-2xl text-accent">{w}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col justify-between font-medium text-sm pb-2">
            <Weeks
              desde={undefined}
              hasta={undefined}
              data={arrayMesActual}
              setDateFilter={handleDateFilter}
            />
          </div>
          <div ref={horariosRef} className="pt-28"></div>
          <div className="flex flex-col justify-between font-medium text-sm pb-2 text-center">
            <div className="text-2xl mb-4">Citas Veterinario</div>
            <div className="text-2xl mb-4">{vetId}</div>
            {/* {appointments &&
            !appointments.some((a) =>
              verificarDisponibilidad(
                dateFilter,
                monthState,
                yearState,
                a.start_time,
              ),
            )
              ? dateFilter && (
                  <div className="text-2xl bg-red-200 mb-4">
                    No hay citas Agendadas
                  </div>
                )
              : dateFilter && (
                  <>
                    <div className="text-2xl bg-green-200 mb-4">
                      Hay citas Agendadas
                    </div>
                    <div className="text-2xl mb-4">
                      {'Citas del dia ' +
                        dateFilter +
                        '-' +
                        monthState +
                        '-' +
                        yearState}
                    </div>
                  </>
                )} */}
            {appointments &&
              appointments.map((a, index) => (
                <div key={index}>
                  <div className="text-2xl" key={index}>
                    {a.dia == dateFilter &&
                      (a.mes+1) == monthState &&
                      a.año == yearState && (
                        <>No disponible: {a.hora + ":" + a.minuto}</>
                      )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
