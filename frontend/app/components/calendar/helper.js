function obtenerDiaInicioMes(dia, mes, año) {
  const primerDiaDelMes = new Date(año, mes, dia)
  let diaDeLaSemana = primerDiaDelMes.getDay()
  // Ajustar el valor para que 1 sea lunes y 7 sea domingo
  diaDeLaSemana = diaDeLaSemana === 0 ? 7 : diaDeLaSemana
  return diaDeLaSemana
}

export function obtenerDiasEnMes(mes, año) {
  // El mes en JavaScript se numera de 0 a 11, por lo que se resta 1 al mes ingresado
  const diasEnMes = new Date(año, mes, 0).getDate()
  return diasEnMes
}

export function agregarDiasAlPrincipio(
  numeroDiaSemana,
  diaFinalMes,
  mesActual,
) {
  const days = []

  for (let i = 0; i < mesActual; i++) days.push(i + 1)
  for (let i = 1; i < 8; i++) days.push(i)

  if (
    numeroDiaSemana < 1 ||
    numeroDiaSemana > 7 ||
    diaFinalMes < 1 ||
    diaFinalMes > 31
  ) {
    return 'Error: Los números proporcionados deben estar en el rango correcto.'
  }

  // Encuentra cuántos días adicionales agregar
  const diasAgregados = numeroDiaSemana

  // Agrega los días al principio del array
  for (let i = 0; i < diasAgregados; i++) {
    days.unshift(diaFinalMes - i)
  }

  return days
}

export default obtenerDiaInicioMes
