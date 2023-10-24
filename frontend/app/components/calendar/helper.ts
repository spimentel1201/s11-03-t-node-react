export const days = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo',
]

export const months = [
  { mes: 'Enero', numero: 1 },
  { mes: 'Febrero', numero: 2 },
  { mes: 'Marzo', numero: 3 },
  { mes: 'Abril', numero: 4 },
  { mes: 'Mayo', numero: 5 },
  { mes: 'Mayo', numero: 5 },
  { mes: 'Junio', numero: 6 },
  { mes: 'Julio', numero: 7 },
  { mes: 'Agosto', numero: 8 },
  { mes: 'Septiembre', numero: 9 },
  { mes: 'Octubre', numero: 10 },
  { mes: 'Noviembre', numero: 11 },
  { mes: 'Diciembre', numero: 12 },
]

export const years = ['2023', '2024']

function obtenerDiaInicioMes(dia: number, mes: number, año: number) {
  const primerDiaDelMes = new Date(año, mes, dia)
  let diaDeLaSemana = primerDiaDelMes.getDay()
  // Ajustar el valor para que 1 sea lunes y 7 sea domingo
  diaDeLaSemana = diaDeLaSemana === 0 ? 7 : diaDeLaSemana
  return diaDeLaSemana
}

export function obtenerDiasEnMes(mes: number, año: number) {
  // El mes en JavaScript se numera de 0 a 11, por lo que se resta 1 al mes ingresado
  const diasEnMes = new Date(año, mes, 0).getDate()
  return diasEnMes
}

export function agregarDiasAlPrincipio(
  numeroDiaSemana: number,
  diaFinalMes: number,
  mesActual: number,
) {
  const days = []

  for (let i = 0; i < mesActual; i++) days.push({ day: i + 1, status: true })
  for (let i = 1; i < 8; i++) days.push({ day: i, status: false })

  if (
    numeroDiaSemana < 1 ||
    numeroDiaSemana > 7 ||
    diaFinalMes < 1 ||
    diaFinalMes > 31
  ) {
    return null
  }

  // Encuentra cuántos días adicionales agregar
  const diasAgregados = numeroDiaSemana

  // Agrega los días al principio del array
  for (let i = 0; i < diasAgregados - 1; i++) {
    days.unshift({ day: diaFinalMes - i, status: false })
  }

  return days
}

export function verificarDisponibilidad(
  dia: number,
  mes: number,
  año: number,
  inicioCita: string | number | Date,
) {
  const fecha = new Date(año, mes - 1, dia)
  const start_time = new Date(inicioCita)

  const mismoDiaMesHora =
    fecha.getDate() === start_time.getDate() &&
    fecha.getMonth() === start_time.getMonth() &&
    fecha.getFullYear() === start_time.getFullYear()

  return mismoDiaMesHora
}

export function verificarDisponibilidadHorario(
  dia: number,
  mes: number,
  año: number,
  inicioCita: string | number | Date,
  horas: number,
  minutos: number,
) {
  const fecha = new Date(año, mes - 1, dia, horas, minutos)
  const _inicioCita = new Date(inicioCita)
  console.log(fecha, _inicioCita)
  const mismoDiaMesHoraMinutos =
    fecha.getDate() === _inicioCita.getDate() &&
    fecha.getMonth() === _inicioCita.getMonth() &&
    fecha.getFullYear() === _inicioCita.getFullYear() &&
    fecha.getHours() === _inicioCita.getHours() &&
    fecha.getMinutes() === _inicioCita.getMinutes()

  return mismoDiaMesHoraMinutos
}

export function getHorario(inicioCita: string | number | Date) {
  const start_time = new Date(inicioCita)
  const horas = start_time.getHours().toString().padStart(2, '0')
  const minutos = start_time.getMinutes().toString().padStart(2, '0')
  return horas + ':' + minutos
}

export const scrollToSection = (elementRef: {
  current: { offsetTop: any }
}) => {
  setTimeout(
    () =>
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth',
      }),
    100,
  )
}

export function verificarCitasEnHorarios(
  data: any,
  dia: number,
  mes: number,
  año: number,
) {
  // Horarios a verificar
  const horarios = ['08:00', '08:30', '09:00', '09:30']

  // Convertir horarios a objetos de fecha para comparación
  const horariosObj = horarios.map((horario) => {
    const [hh, mm] = horario.split(':')
    return new Date(año, mes - 1, dia, parseInt(hh), parseInt(mm))
  })

  // Verificar si hay citas en los horarios especificados para el día dado
  for (const cita of data) {
    const fechaCita = new Date(
      cita.año,
      cita.mes - 1,
      cita.dia,
      cita.horario,
      cita.minuto,
    )
    // Comparar fecha de la cita con los horarios especificados
    for (const horarioObj of horariosObj) {
      if (fechaCita.getTime() === horarioObj.getTime()) {
        return 'existe'
      }
    }
  }

  return 'no existe'
}

export default obtenerDiaInicioMes
