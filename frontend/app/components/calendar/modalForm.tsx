'use client'
import { useState, useRef, useEffect } from 'react'

type Props = {
  showModal: boolean
  updateAppointment: boolean
  setShowModal: (value: boolean) => void
  handleCreateAppointment: () => void
  horario: string
  dia: string
  mes: string
  año: string
  veterinario: string
}

const ModalForm = ({
  showModal,
  setShowModal,
  updateAppointment,
  handleCreateAppointment,
  horario,
  dia,
  mes,
  año,
  veterinario,
}: Props) => {
  const myModal = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    myModal?.current?.showModal()
    if (!showModal) myModal?.current?.close()
  }, [showModal])

  return (
    <>
      {showModal && (
        <>
          <dialog id="my_modal_3" className="modal" ref={myModal}>
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn bg-primary border-none text-3xl absolute right-2 top-2"
                  tabIndex={1}
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold flex flex-col text-2xl">
                SOLICITAR CITA
              </h3>
              <div className="text-xl py-4">
                <p>Veterinario: {veterinario}</p>
                <p>Especialidad: desconocida </p>
                <p>
                  Fecha: {dia} de {mes} de {año}
                </p>
                <p>Hora: {horario}</p>
                <p>Seleccionar Mascota: desconocida</p>
                <p>Motivo de la Cita: falta completar</p>
              </div>
              <div
                className="btn btn-accent"
                tabIndex={0}
                onClick={() => handleCreateAppointment()}
              >
                CONFIRMAR
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  )
}

export default ModalForm
