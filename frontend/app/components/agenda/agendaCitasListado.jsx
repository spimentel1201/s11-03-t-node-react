import Image from 'next/image'
import { deleteAppointment } from '@/app/_api/appointment'
import toast, { Toaster } from 'react-hot-toast'

const notifyOk = (msg) => toast.success(msg)
const notifyError = (msg) => toast.error(msg)

const AgendaCitasListado = ({
  token,
  appointments,
  image,
  name,
  updateAppointments,
  setUpdateAppointments,
  filtro,
}) => {
  function formatearFecha(fechaISO) {
    const meses = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ]

    const fecha = new Date(fechaISO)
    const dia = fecha.getUTCDate()
    const mes = meses[fecha.getUTCMonth()]
    const año = fecha.getUTCFullYear()
    const horas = fecha.getUTCHours()
    const minutos =
      (fecha.getUTCMinutes() < 10 ? '0' : '') + fecha.getUTCMinutes()

    const fechaF = `${dia} de ${mes} de ${año}`
    const horaF = `${horas}:${minutos} hs`
    return { fecha: fechaF, hora: horaF }
  }

  const handleDeleteAppointment = async (id) => {
    try {
      await deleteAppointment(id, token)
      notifyOk('Cita cancelada correctamente ')
      setUpdateAppointments(!updateAppointments)
    } catch (error) {
      console.log(error)
      notifyError('Error al cancelar cita')
      notifyError(JSON.stringify(error))
      setUpdateAppointments(!updateAppointments)
    }
  }

  return (
    <>
      <Toaster />
      {appointments.map((a, index) => (
        <div key={index}>
          {a.isActive == filtro && (
            <div className="w-full p-4">
              <div className="flex justify-between gap-8">
                <section className="flex flex-col w-full">
                  <div className="flex items-center gap-4">
                    <Image
                      src={image}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-20 h-auto rounded-full"
                      alt="imagen de mascota"
                    />
                    <div className="font-bold top-6 capitalize">{name}</div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col w-full">
                      <h3 className="font-bold text-lg">
                        Turno con {a.veterinarianId}
                      </h3>
                      <h3 className="font-bold text-lg">
                        Especialidad {a.veterinarianId}
                      </h3>
                      <div className="font-bold">
                        Motivo de la cita: {a.reason}
                      </div>
                      <div className="font-bold">Notas: {a.notes}</div>
                      <div className="font-bold">
                        Estado de la cita: {a.isActive ? 'Activa' : 'Cancelada'}
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col w-full items-end justify-end gap-2">
                  <div> {formatearFecha(a.start_time).fecha}</div>
                  <div> {formatearFecha(a.start_time).hora}</div>
                  <div
                    className={
                      a.isActive
                        ? 'btn btn-accent flex flex-col capitalize'
                        : 'btn btn-disabled flex flex-col capitalize disabled'
                    }
                    onClick={() => handleDeleteAppointment(a._id)}
                  >
                    <div>Cancelar Cita</div>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default AgendaCitasListado
