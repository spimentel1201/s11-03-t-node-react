'use client'

import Weeks from './weeks'
import { days, months, years } from './helper'
import useDate from './useDate'
import { vetDataService } from '../../_api/vetData'
import { useEffect, useState, useRef } from 'react'

const Calendar = () => {
  const {
    monthState,
    yearState,
    arrayMesActual,
    handleChangeMonth,
    handleChangeYear,
  } = useDate()

  const [vetId, setVetId] = useState(null)
  const [appointments, setAppointments] = useState(null)
  const [dateFilter, setDateFilter] = useState(null)
  const horariosRef = useRef(null)

  const handleDateFilter = (date) => {
    setDateFilter(date)
    if (horariosRef) scrollToSection(horariosRef)
  }

  const scrollToSection = (elementRef) => {
    setTimeout(
      () =>
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: 'smooth',
        }),
      100,
    )
  }

  function verificarDisponibilidad(dia, mes, año, inicioCita) {
    const fecha = new Date(año, mes - 1, dia)
    const start_time = new Date(inicioCita)

    const mismoDiaMesHora =
      fecha.getDate() === start_time.getDate() &&
      fecha.getMonth() === start_time.getMonth() &&
      fecha.getYear() === start_time.getYear()

    return mismoDiaMesHora
  }

  function getHorario(inicioCita) {
    const start_time = new Date(inicioCita)
    const horas = start_time.getHours().toString().padStart(2, '0')
    const minutos = start_time.getMinutes().toString().padStart(2, '0')
    return horas + ':' + minutos
  }

  useEffect(() => {
    const { pathname } = window.location
    setVetId(pathname.slice(8))
  }, [])

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        if (id) {
          const response = await vetDataService(id)
          const appoints = response.data.data[0].activeAppointments
          setAppointments(appoints)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(vetId)
  }, [vetId])

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
          <div className="">
            <h1 className="font-secular text-center text-3xl mt-2 font-bold mb-10">
              Horarios disponibles
            </h1>
            <div className="flex justify-center pb-4 gap-8 mx-2">
              <select
                defaultValue={monthState}
                className="select select-bordered w-full max-w-xs text-3xl"
                onChange={handleMonthChange}
              >
                {months &&
                  months.map((m, index) => (
                    <option key={index} value={m.numero}>
                      {m.mes}
                    </option>
                  ))}
              </select>
              <select
                defaultValue={yearState}
                className="select select-bordered w-full max-w-xs text-3xl"
                onChange={handleYearChange}
              >
                {years &&
                  years.map((y, index) => (
                    <option key={index} value={y}>
                      {y}
                    </option>
                  ))}
              </select>
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
              {appointments &&
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
                  )}
              {appointments &&
                appointments.map((a, index) => (
                  <div key={index}>
                    <div className="text-2xl" key={index}>
                      {verificarDisponibilidad(
                        dateFilter,
                        monthState,
                        yearState,
                        a.start_time,
                      ) && <>No disponible: {getHorario(a.start_time)}</>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
