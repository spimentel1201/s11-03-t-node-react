'use client'

import CalendarUser from '../../components/agenda/agendaCitas'
import UseToken from '@/app/hooks/useToken'

const Activas = () => {
    const { token } = UseToken()
    return (
      <div className="block">
        <div className="max-w-[50rem] m-auto">
          {token && <CalendarUser token={token} filtro={true}/>}
        </div>
      </div>
    )
}

export default Activas