import Image from "next/image";

const AdoptaHeader = () => {
  return (
    <section className="lg:px-[80px] lg:py-[100px] max-w-[1440px] m-auto px-4 py-[48px]">
      <div className="flex justify-center items-center gap-1">
        <Image src="/foot.svg" width={19} height={16} alt="icon" />
        <p className="font-inter font-bold text-accent">Adoptá</p>
      </div>
      <h1 className="font-secular text-[20px] mb-[43px] md:text-[40px] text-primary-content">
        Mascotas en adopción
      </h1>
      <div className="text-[13px] md:text-[20px]">
        <p>
          ¡Bienvenidos a nuestra sección de adopción! En este rincón lleno de
          amor y esperanza, te invitamos a descubrir historias con colas, patas
          y alas.
        </p>
        <p>
          Cada uno de estos adorables seres peludos, emplumados o escamosos
          tiene su propia historia de resiliencia y espera ansiosamente
          encontrar un hogar lleno de cariño.
        </p>
        <p>
          <span className="text-accent font-medium mr-1">
            Adoptar a un nuevo amigo
          </span>
          es mucho más que un acto de bondad; es la promesa de un vínculo
          inquebrantable y momentos de alegría compartida. ¿Estás listo para
          darle un hogar a uno de estos tesoros de cuatro patas? ¡Descubre sus
          historias y encuentra a tu compañero ideal para siempre!
        </p>
      </div>
    </section>
  );
};

export default AdoptaHeader;
