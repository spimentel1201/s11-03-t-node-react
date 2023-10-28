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
  format00,
} from './helper'
import useDate from './useDate'
import useVetData from './useVetData'
import { useEffect, useState, useRef } from 'react'
import Selectors from './calendarSelectors'
import ModalForm from './modalForm'
import { createAppointment } from '../../_api/appointment'
import UseToken from '@/app/hooks/useToken'
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
  const horarioSelectedPlus30 = useRef(0)

  let intentos = 0  

  const handleCreateAppointment = async (
    petSelected,
    setPetSelected,
    motivoCita,
    setMotivoCita,
  ) => {
    if (token) {
      const app = formatAppointment(
        yearState,
        monthState,
        dateFilter,
        horarioSelected,
        horarioSelectedPlus30,
        vetId,
      )
      intentos++
      console.log(intentos)      
      try {
        const response = await createAppointment(
          app,
          token,
          petSelected,
          motivoCita,
        )
        if (response.data?.status == 'success') {
          notifyOk(response.data?.message)
          setHorarioSelected('')
          setMotivoCita('')
          setPetSelected('')
        } else {
          notifyError('Error al intentar crear una cita. Prueba mas tarde')
          setHorarioSelected('')
          setMotivoCita('')
          setPetSelected('')
        }
        setUpdateAppointments(!updateAppointments)
        setShowModal(false)
      } catch (error) {
        notifyError(error?.data?.errors[0])
        setHorarioSelected('')
        setMotivoCita('')
        setPetSelected('')
      }
    }
  }

  const { appointments, veterinarioData } = useVetData(
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
    <div className="max-w-[60rem] m-auto">
      <Toaster />
      {token && showModal && (
        <ModalForm
          token={token}
          veterinarioData={veterinarioData}
          showModal={showModal}
          setShowModal={setShowModal}
          handleCreateAppointment={handleCreateAppointment}
          horario={horarioSelected}
          dia={dateFilter}
          mes={monthState}
          año={yearState}
        />
      )}
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
          <div className="flex justify-between items-center font-small uppercase pt-8 mb-4">
            {days.map((w, index) => (
              <span
                key={index}
                className="w-full font-bold flex justify-center items-center"
              >
                <span className="text-sm md:text-lg text-accent">{w}</span>
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
        <div className="flex flex-col justify-between font-medium text-sm text-center pb-20">
          {dateFilter && (
            <h2 className="text-3xl mb-4 font-bold">
              {dateFilter} de {months[monthState].mes}
            </h2>
          )}
          {dateFilter && (
            <div className="grid grid-cols-4 gap-2">
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="pr-8 w-30 text-sm">HORA</div>
                <div className="w-30 text-sm">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="pr-8 w-30 text-sm">HORA</div>
                <div className="w-30 text-sm">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="pr-8 w-30 text-sm">HORA</div>
                <div className="w-30 text-sm">DISPONIBILIDAD</div>
              </div>
              <div className="p-1 m-1 flex items-center justify-center w-full">
                <div className="pr-8 w-30 text-sm">HORA</div>
                <div className="w-30 text-sm">DISPONIBILIDAD</div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-4 gap-4">
            {dateFilter &&
              appointments &&
              appointments.map((a, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className="text-lg w-60">
                    {a.existe ? (
                      <div className="p-1 m-1 flex items-center justify-center w-full">
                        <div className="p-2 w-24">
                          {format00(a.hora, a.minuto)}
                        </div>
                        <div className="btn btn-secondary text-black border-2 border-black w-30 no-animation">
                          NO DISPONIBLE
                        </div>
                      </div>
                    ) : (
                      <div className="p-1 m-1 flex items-center justify-center w-full">
                        <div className="p-2 w-24">
                          {format00(a.hora, a.minuto)}
                        </div>
                        <div
                          className={
                            token
                              ? 'btn btn-accent w-30'
                              : 'btn btn-disable w-30 no-animation'
                          }
                          onClick={() => {
                            setHorarioSelected(format00(a.hora, a.minuto))
                            horarioSelectedPlus30.current = a.minuto + 30
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
