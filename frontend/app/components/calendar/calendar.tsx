'use client'

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
              >
                <option value="Octubre">Octubre</option>
                <option value="Noviembre">Noviembre</option>
                <option value="Diciembre">Diciembre</option>
                <option value="Enero">Enero</option>
                <option value="Febrero">Febrero</option>
                <option value="Marzo">Marzo</option>
              </select>
              <select
                defaultValue="2023"
                className="select select-bordered w-full max-w-xs text-3xl"
              >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            <div className="flex justify-between items-center font-small uppercase pt-20 pb-2 mb-8">
              {week.map((w, index) => (
                <span
                  key={index}
                  className="w-full font-bold flex justify-center items-center"
                >
                  <span className="text-sm md:text-2xl text-accent">{w}</span>
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
    </div>
  )
}

export default Calendar
