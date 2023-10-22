'use client'

import Weeks from './weeks'
import { days, months, years } from './helper'
import useDate from './useDate'
import { vetDataService } from '../../_api/vetData'
import { useEffect } from 'react'

const Calendar = () => {
  const { arrayMesActual, handleChangeMonth, handleChangeYear } = useDate()

  const { pathname } = window.location
  const id = pathname.slice(8)

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        if (id) {
          const response = await vetDataService(id)
          const appointments = response.data.data[0].activeAppointments
          console.log(appointments)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData(id)
  }, [id])

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value
    handleChangeMonth(parseInt(selectedMonth))
  }

  const handleYearChange = (event) => {
    const selectedYear = event.target.value
    handleChangeYear(parseInt(selectedYear))
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
                defaultValue="Octubre"
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
                defaultValue="2023"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
