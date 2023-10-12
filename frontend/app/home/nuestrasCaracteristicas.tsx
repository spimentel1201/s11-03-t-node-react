import Image from 'next/image'
import Section from './nuestrasSection'

const NuestrasCaracteristicas = () => (
  <div className="flex flex-row px-10 text-primary-content justify-center">
    <div className="max-w-2xl">
      <h4 className="mt-20 text-accent font-bold"> Nuestras Caracteristcas</h4>
      <h1 className="mt-5 text-3xl font-bold"> Cuidamos de tu mascota</h1>
      <p className="mt-9 text-lg">
        El equipo de VetCare se dedica a proporcionar el más alto atención de
        calidad para su perro. Todos nuestros campistas reciben atención
        individual y cuidados amor amores sensibles
      </p>
      <Section
        src="/vacunas.png"
        title="Vacunas"
        text="Inmunizaciones para proteger a tu mascota contra la potencialmente
        enfermedades peligrosas."
      />
      <Section
        src="/nutricion.png"
        title="Nutrición"
        text="Consejos para la selección de la alimentación adecuada y los servicios de suplementos para las necesidades específicas de tu mascota."
      />
      <Section
        src="/seguro.png"
        title="Seguro"
        text="Planes de seguros que pueden ayudar a cubrir los costos de atención y tratamientos veterinarios."
      />
      <Section
        src="/cuidado-dental.png"
        title="Cuidado Dental"
        text="Limpiezas rutinarias y exámenes dentales para mantener la de tu mascota salud bucal."
      />
    </div>
    <div className="ml-20 mt-32 relative">
      <Image
        className="rounded-br-3xl"
        src="/veterinario-trabajando.png"
        width={585}
        height={585}
        alt="veterinario trabajando"
      />
      <div className="absolute -right-6 -bottom-16 -z-10">
        {' '}
        <Image
          className="rounded-br-3xl"
          src="/yellow-pointed-circle.png"
          width={200}
          height={200}
          alt="puntillado amarillo"
        />
      </div>
    </div>
  </div>
)

export default NuestrasCaracteristicas