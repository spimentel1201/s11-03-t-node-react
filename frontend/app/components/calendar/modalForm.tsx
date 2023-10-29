'use client'
import { useState, useRef, useEffect, ChangeEvent, useMemo } from 'react'
import useClientPets from './useClientPets'
import { months } from './helper'
import './modalForm.module.css'

type Props = {
  showModal: boolean
  setShowModal: (value: boolean) => void
  handleCreateAppointment: (
    petSelected: string,
    setPetSelected: (value: string) => void,
    motivoCita: string,
    setMotivoCita: (value: string) => void,
  ) => void
  horario: string
  dia: string | undefined
  mes: string 
  año: string 
  veterinarioData: { fullname: string; speciality: string } | undefined
  token: string
}

const ModalForm = ({
  showModal,
  setShowModal,
  handleCreateAppointment,
  horario,
  dia,
  mes,
  año,
  veterinarioData,
  token,
}: Props) => {  

  const [petSelected, setPetSelected] = useState('')
  const [motivoCita, setMotivoCita] = useState('')
  const myModal = useRef<HTMLDialogElement>(null)
  const { clientPets, clientData } = useClientPets(token)  

  const handlePetChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedPet = event.target.value
    setPetSelected(selectedPet)
  }

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMotivoCita(event.target.value)
  }

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
                  className="btn bg-primary border-none text-xl absolute right-2 top-2"
                  tabIndex={1}
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold flex flex-col text-xl py-2 text-center">
                SOLICITAR CITA
              </h3>
              <div className="text-lg px-8 py-2 bg-secondary-content">
                <p className="pb-2">
                  <span className="font-bold">VETERINARIO:</span>{' '}
                  {veterinarioData?.fullname}
                </p>
                <p className="pb-2">
                  <span className="font-bold">ESPECIALIDAD:</span>{' '}
                  {veterinarioData?.speciality}{' '}
                </p>
                <p className="pb-2">
                  <span className="font-bold">FECHA:</span> {dia}/{mes}/{año}
                </p>
                <p>
                  <span className="font-bold">HORA:</span> {horario}hs.
                </p>
              </div>
              <div className="text-lg">
                <div className="py-2 gap-8">
                  <select
                    required
                    className="select select-bordered w-full text-xl select-style"
                    onChange={handlePetChange}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccionar Mascota
                    </option>
                    {clientPets &&
                      clientPets.map((pet: any, index: number) => (
                        <option key={index} value={pet?._id}>
                          {pet?.name}
                        </option>
                      ))}
                  </select>
                </div>
                <textarea
                  className="textarea textarea-bordered w-full text-lg h-30"
                  placeholder="Motivo de la Cita"
                  onChange={handleTextareaChange}
                  value={motivoCita}
                ></textarea>
              </div>
              <div
                className="btn btn-accent w-full"
                tabIndex={0}
                onClick={() =>
                  handleCreateAppointment(
                    petSelected,
                    setPetSelected,
                    motivoCita,
                    setMotivoCita,
                  )
                }
              >
                CONFIRMAR
              </div>
              {/* <div className="flex flex-col">
                <div>Horario Recibido: {horario}</div>
                <div>Pet ID: {petSelected}</div>
                <div>Motivo de la Cita Escrito: {motivoCita}</div>
              </div> */}
            </div>
          </dialog>
        </>
      )}
    </>
  )
}

export default ModalForm
