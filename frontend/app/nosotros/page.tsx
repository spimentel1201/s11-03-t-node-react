import Image from "next/image";
import NuestrasCaracteristicas from "../home/nuestrasCaracteristicas";

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center bg-[#F8F0EE] pt-0 md:pt-8">
      <div className="flex flex-col items-center py-16 gap-8 md:gap-1">
        <div className="flex gap-1">
          <Image src="/foot.svg" width={19} height={16} alt="foot icon" />
          <p className="font-inter font-bold text-accent">Nosotros</p>
        </div>
        <h1 className="font-secular text-[20px] md:text-[40px]">
          Sobre nosotros
        </h1>
      </div>
      <Image
        src="/vetcare-store-image.png"
        alt="Store Image"
        width={0}
        height={0}
        sizes="80vw"
        className="w-[100vw] md:w-[80vw] h-auto"
        priority
      />
      <div className="flex flex-col gap-8 px-8 md:px-24 pt-16 text-center">
        <p>
          En Vet Care, nuestra historia es una de dedicación, pasión y amor
          inquebrantable por los animales. Desde nuestros humildes comienzos
          hasta convertirnos en la principal referencia en atención veterinaria,
          nuestra misión ha sido siempre la misma: cuidar, proteger y enriquecer
          la vida de las mascotas que llegan a nuestras manos.
        </p>
        <p>
          Nuestro equipo de veterinarios y profesionales altamente calificados
          comparte una visión común: ser la voz y el apoyo de aquellos que no
          pueden hablar por sí mismos. Cada día, nos levantamos con el firme
          compromiso de proporcionar la mejor atención médica, nutricional y
          emocional a tus seres queridos de cuatro patas.
        </p>
        <p>
          En Vet Care, no solo ofrecemos servicios veterinarios de vanguardia,
          sino que también creamos un ambiente cálido y acogedor donde tanto tú
          como tus mascotas se sientan bienvenidos. Nuestra historia de éxito se
          basa en la confianza que nuestros clientes depositan en nosotros, y
          estamos decididos a mantenerla y fortalecerla.
        </p>
        <p>
          Únete a nosotros en nuestro viaje dedicado a mejorar la vida de tus
          mascotas. Estamos aquí para escucharte, para ser tu recurso de
          confianza y para brindar el amor y el cuidado que tus animales
          merecen. En Vet Care, los animales son familia, y en nuestra familia,
          siempre hay un lugar especial para ti. ¡Bienvenido a Vet Care, donde
          la pasión y el compromiso se unen en el servicio a los que más amas!
        </p>
      </div>
      <NuestrasCaracteristicas />
    </div>
  );
}
