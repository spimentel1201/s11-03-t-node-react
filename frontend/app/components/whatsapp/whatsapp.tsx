'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="123456789"
      accountName="Foo"
      allowEsc      
      notification
      notificationSound
    />
  )
}

export default Whatsapp
