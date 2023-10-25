import { Services } from "../home/icons";

export default function Contactanos() {
  return (
    <section className=" bg-secondary-content px-5 pt-12">
      <div className="flex flex-row justify-center items-center gap-x-2 mb-[18px]">
        <span>
          <Services />
        </span>
        <h1 className="text-accent text-sm md:text-base font-bold font-inter leading-relaxed">
          contacto
        </h1>
      </div>
      <h2 className="text-center text-slate-700 text-xl md:text-[40px] font-normal font-secular mb-[43px]">
      Contáctanos
      </h2>
      <p
        className="text-center text-slate-600 text-sm md:text-xl
      font-normal leading-7 mb-[13px] md:mb-[30px] font-inter"
      >
        ¡Gracias por visitar Vet Care, donde el bienestar de tus mascotas es
        nuestra pasión! Estamos aquí para cuidar y amar a tus peludos amigos
        tanto como tú lo haces.
      </p>
      <p
        className="text-center text-slate-600 text-sm md:text-xl 
      font-normal leading-7 mb-[13px] md:mb-[45px] font-inter"
      >
        ¿Tienes alguna pregunta sobre la salud o el cuidado de tu mascota?
        ¿Necesitas una cita con nuestros expertos veterinarios? ¡No dudes en
        contactarnos! Estamos listos para escucharte, brindarte el apoyo que
        necesitas y poner a tus mascotas en el camino hacia una vida feliz y
        saludable.
      </p>
      <p
        className="text-center text-slate-600 text-sm md:text-xl
      font-normal leading-7 pb-[117px] md:mb-[67px] md:pb-0 font-inter"
      >
        Contáctanos hoy mismo y descubre por qué Vet Care es el lugar donde el
        amor por los animales se encuentra con la excelencia en atención
        veterinaria. Juntos, haremos que la vida de tus mascotas sea aún más
        especial.
      </p>
    </section>
  );
}
