'use client'

import Weeks from './calendarWeeks'
import {
  days,
  months,
  getHorario,
  verificarDisponibilidad,
  scrollToSection,
  sumarMediaHora,
  formatAppointment,
} from './helper'
import useDate from './useDate'
import useVetData from './useVetData'
import { useEffect, useState, useRef } from 'react'
import Selectors from './calendarSelectors'
import ModalForm from './modalForm'
import { createAppointment } from '../../_api/appointment'
import UseToken from '@/app/hooks/token'
import toast, { Toaster } from 'react-hot-toast'

const notifyOk = (msg) => toast.success(msg)
const notifyError = (msg) => toast.error(msg)

const Calendar = () => {
  const { token } = UseToken()
  console.log(token)

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
  const [showModal, setShowModal] = useState(false)
  const [updateAppointments, setUpdateAppointments] = useState(false)
  const [horarioSelected, setHorarioSelected] = useState('')

  const handleCreateAppointment = async (appointment) => {
    console.log('trying to create appointment')
    if (token) {
      console.log('token exist')
      const app = formatAppointment(
        yearState,
        monthState,
        dateFilter,
        horarioSelected,
        vetId,
      )
      //console.log(app)
      const response = await createAppointment(app, token)
      console.log(response.data)
      if (response.data?.status == 'success') {notifyOk(response.data?.message)}
      else {        
        notifyError("Error al intentar crear una cita. Prueba mas tarde")
        setHorarioSelected('')
      }      
      setUpdateAppointments(!updateAppointments)
      setShowModal(false)
    }
  }

  const { appointments } = useVetData(
    vetId,
    dateFilter,
    monthState,
    yearState,
    updateAppointments,
  )

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
      <Toaster />
      <ModalForm
        veterinario={vetId}
        showModal={showModal}
        setShowModal={setShowModal}
        handleCreateAppointment={handleCreateAppointment}
        horario={horarioSelected}
        dia={dateFilter}
        mes={monthState}
        año={yearState}
      />
      <div className="mt-4">
        <div className="flex flex-col mx-1 border-b-2">
          <div>
            <Selectors
              monthState={monthState}
              yearState={yearState}
              handleMonthChange={handleMonthChange}
              handleChangeYear={handleYearChange}
            />
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
        </div>
        <div ref={horariosRef} className="pt-14"></div>
        <div className="flex flex-col justify-between font-medium text-sm pb-2 text-center">
          {dateFilter && (
            <h2 className="text-3xl mb-4 font-bold">
              {dateFilter} de {months[monthState].mes}
            </h2>
          )}
          {dateFilter && (
            <div className="grid grid-cols-4 gap-4">
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="p-2 w-40 text-xl">HORA</div>
                <div className="w-40 text-xl">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="p-2 w-40 text-xl">HORA</div>
                <div className="w-40 text-xl">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="p-2 w-40 text-xl">HORA</div>
                <div className="w-40 text-xl">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="p-2 w-40 text-xl">HORA</div>
                <div className="w-40 text-xl">DISPONIBILIDAD</div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-4 gap-4">
            {dateFilter &&
              appointments &&
              appointments.map((a, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="text-2xl w-80">
                    {a.existe ? (
                      <div className="p-1 m-1 flex items-center justify-center w-full">
                        <div className="p-2 w-40">
                          {a.hora.toString().padStart(2, '0')}:
                          {a.minuto.toString().padStart(2, '0')}
                        </div>
                        <div className="btn btn-secondary text-black border-2 border-black w-40 no-animation">
                          NO DISPONIBLE
                        </div>
                      </div>
                    ) : (
                      <div className="p-1 m-1 flex items-center justify-center w-full">
                        <div className="p-2 w-40">
                          {a.hora.toString().padStart(2, '0')}:
                          {a.minuto.toString().padStart(2, '0')}
                        </div>
                        <div
                          className={
                            token
                              ? 'btn btn-accent w-40'
                              : 'btn btn-disable w-40 no-animation'
                          }
                          onClick={() => {
                            setHorarioSelected(
                              a.hora.toString().padStart(2, '0') +
                                ':' +
                                a.minuto.toString().padStart(2, '0'),
                            )
                            if (token) setShowModal(true)
                          }}
                        >
                          SOLICITAR CITA
                        </div>
                      </div>
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
