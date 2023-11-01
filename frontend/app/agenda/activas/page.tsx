'use client'

import CalendarUser from '../../components/agenda/agendaCitas'
import UseToken from '@/app/hooks/useToken'

const Activas = () => {
  const { token } = UseToken()
  return (
    <div className="block">
      <div className="max-w-[50rem] m-auto min-h-screen">
        {token && <CalendarUser token={token} filtro={true} />}
        <div>
          {!token && (
            <div className="m-20 text-inter text-xl text-center p-2 bg-accent text-accent-content mb-8">
              Tienes que loguearte para ver tus citas programadas
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Activas
