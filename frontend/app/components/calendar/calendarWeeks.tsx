import React from 'react'

type Props = {
  desde: number | undefined
  hasta: number | undefined
  data:
    | null
    | {
        day: number
        status: boolean
      }[]
  setDateFilter: (date: React.SetStateAction<number | null>) => void
}

const Weeks = ({ desde, hasta, data, setDateFilter }: Props) => {
  const semanas = [
    { desde: 0, hasta: 7 },
    { desde: 7, hasta: 14 },
    { desde: 14, hasta: 21 },
    { desde: 21, hasta: 28 },
    { desde: 28, hasta: 35 },
    { desde: 35, hasta: 42 },
  ]

  return semanas.map((s, index) => (
    <Week
      key={index}
      desde={s.desde}
      hasta={s.hasta}
      data={data}
      setDateFilter={setDateFilter}
    />
  ))
}

export const Week = ({ desde, hasta, data, setDateFilter }: Props) => {
  const handleSetDay = (day: number) => {
    setDateFilter(day)
    return null
    
  }






 
  return (
    <div className="flex justify-start font-medium text-sm pb-2 mb-5">
      {data?.slice(desde, hasta).map((d, index) => (
        <span key={index} className="w-full flex justify-center items-center">
          {d.status === true && (
            <div className="bg-white text-[#2F2D53] w-12 h-12 rounded-full border-4 border-[#2F2D53] hover:text-white hover:bg-[#2F2D53] cursor-pointer">
              <div
                onClick={() => handleSetDay(d.day)}
                className="flex text-xl justify-center h-full text-center items-center"
              >
                {d.day}
              </div>
            </div>
          )}
          {data?.slice(desde, hasta).some((d) => d.status === true) &&
            d.status === false && (
              <div className="bg-white text-base-300 w-12 h-12 rounded-full border-4 border-base-300">
                <div className="flex text-xl justify-center h-full text-center items-center">
                  {d.day}
                </div>
              </div>
            )}
        </span>
      ))}
    </div> 
  )
}

export default Weeks
