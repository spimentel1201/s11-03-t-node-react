import obtenerDiaInicioMes, {
  obtenerDiasEnMes,
  agregarDiasAlPrincipio,
} from './helper'
import { useState, useEffect } from 'react'

type Data = {
  day: number
  status: boolean
}

const useDate = () => {
  const [monthState, setMonthState] = useState<number>(10)
  const [yearState, setYearState] = useState<number>(2023)
  const [arrayMesActual, setArrayMesActual] = useState<Data[] | null>([])

  const handleChangeMonth = (month: number) => {
    setMonthState(month)
  }

  const handleChangeYear = (year: number) => {
    setYearState(year)
  }

  useEffect(() => {
    const posicionDiaIniciodeMes = obtenerDiaInicioMes(
      1,
      monthState - 1,
      yearState,
    )
    const mesActual = obtenerDiasEnMes(monthState, yearState)
    let diasMesPrevio = 0
    if (monthState > 1)
      diasMesPrevio = obtenerDiasEnMes(monthState - 1, yearState)
    if (monthState == 1) diasMesPrevio = obtenerDiasEnMes(12, yearState - 1)
    const result = agregarDiasAlPrincipio(
      posicionDiaIniciodeMes,
      diasMesPrevio,
      mesActual,
    )
    setArrayMesActual(result)
  }, [monthState, yearState])

  return {
    monthState,
    yearState,
    arrayMesActual,
    handleChangeMonth,
    handleChangeYear,
  }
}

export default useDate
