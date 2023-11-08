'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+584140271179"
      accountName="VetCare"
      allowEsc      
      notification
      notificationSound
      placeholder='Escribe tu mensaje aquí'
      chatMessage='¿Hola como estas? ¿En que te podemos ayudar? '
      statusMessage='¡Gracias por contactarnos!'    />
  )
}

export default Whatsapp
