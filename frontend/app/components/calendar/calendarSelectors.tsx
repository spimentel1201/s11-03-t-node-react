import { ChangeEvent } from 'react'
import { months, years } from './helper'

type Props = {
  monthState: number
  yearState: number  
  handleMonthChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleYearChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Selectors = ({
  monthState,
  yearState,  
  handleMonthChange,
  handleYearChange,
}: Props) => { 

  return (
    <>
      <h1 className="font-secular text-center text-2xl mt-2 font-bold mb-10">
        Horarios disponibles
      </h1>
      <div className="flex justify-center pb-4 gap-8 mx-2">
        <select
          defaultValue={monthState}
          className="select select-bordered w-full max-w-[15rem] text-xl"
          onChange={handleMonthChange}
        >
          {months &&
            months.map((m, index) => (
              <option key={index} value={m.numero.toString()}>
                {m.mes}
              </option>
            ))}
        </select>
        <select
          defaultValue={yearState}
          className="select select-bordered w-full max-w-[15rem] text-xl"
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
    </>
  )
}

export default Selectors
