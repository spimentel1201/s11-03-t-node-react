import Week from './week'
import NuestroTeamCard from '../../home/nuestroTeamCard'

const Calendar = () => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]

  const week = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
  ]

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  const years = [2023, 2024]

  return (
    <>
      <h1 className="text-center text-xl font-bold mb-4 mt-16">PEDIR CITA</h1>
      <div className="text-center text-sm pt-2 bg-[#FFCC37] mx-[20%] px-4">
        Solicitar o cancelar la cita con 24 hs. de anticipacion
      </div>
      <div className="text-center text-sm pt-2 pb-4 bg-[#FFCC37] mx-[20%] px-4">
        Una vez solicitada la cita podrá visualizarlo en su calendario
      </div>
      <div className="mt-4">
        <NuestroTeamCard
          src={'/logo.png'}
          title="Cathy J. Gomez"
          text="Veterinaria Clinica"
        />
        <div className="flex flex-col mx-1 sm:mx-32 lg:mx-40 border-b-2">
          <div className="">
            <h1 className="text-center text-xl mt-2 font-bold mb-4">
              Horarios disponibles
            </h1>
            <div className="flex justify-center pb-4 gap-4">
              <select className="select select-bordered w-full max-w-xs">
                <option selected>Noviembre</option>
                <option>Diciembre</option>
                <option>Enero</option>
              </select>
              <select className="select select-bordered w-full max-w-xs">
                <option selected>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>

            <div className="flex justify-between items-center font-small uppercase text-xs pt-2 pb-2">
              {week.map((w, index) => (
                <span
                  key={index}
                  className="w-full font-bold flex justify-center items-center"
                >
                  <span className="text-accent">{w}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-col justify-between font-medium text-sm pb-2">
              <Week desde="0" hasta="7" />
              <Week desde="7" hasta="14" />
              <Week desde="14" hasta="21" />
              <Week desde="21" hasta="28" />
              <Week desde="28" hasta="35" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar
