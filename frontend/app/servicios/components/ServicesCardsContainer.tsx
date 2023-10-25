import { ComponentType, SVGProps } from "react";
import {
  Peluqueria,
  Hospitalizacion,
  Vacunacion,
  MedicinaPreventiva,
} from "../../home/icons";

interface NuestrosServicios {
    title: string;
    description: string;
    svg: ComponentType<SVGProps<SVGSVGElement>>;
  }
  
  const data: NuestrosServicios[] = [
    {
      title: "Peluquería canina",
      description:
        "La peluquería canina ofrece cuidados especializados como baños, cortes de pelo, uñas, limpieza de oídos y más para perros. Los peluqueros adaptan servicios a las necesidades de cada raza, mejorando la estética y el bienestar del animal.",
      svg: Peluqueria,
    },
    {
      title: "Hospitalidad",
      description:
        "El servicio de hospitalidad e internación canina se enfoca en brindar atención especializada a animales hospitalizados. Incluye atención médica, alimentación adecuada y alojamiento seguro para su recuperación y bienestar. Profesionales ofrecen cuidados médicos personalizados y atención familiar.",
      svg: Hospitalizacion,
    },
    {
      title: "Vacunación",
      description:
        "La vacunación es crucial para proteger a los animales de enfermedades graves. Veterinarios administran vacunas específicas, como la rabia y el moquillo, como parte de la atención preventiva personalizada.",
      svg: Vacunacion,
    },
    {
      title: "Medicina preventiva",
      description:
        "La medicina preventiva canina se centra en mantener la salud de los perros a través de exámenes regulares, vacunas, desparasitación y consejos de nutrición, peso y cuidado dental, previniendo enfermedades y mejorando su bienestar a lo largo de su vida.",
      svg: MedicinaPreventiva,
    },
  ];

function ServicesCardsContainer() {
  return (
    <div className="flex flex-col items-center gap-8">
      {data.map((item) => (
        <div className="flex bg-[#fffaeb] w-4/5 py-4 rounded-2xl gap-4 px-12">
          <div>
            <span>{item.svg && <item.svg />}</span>
          </div>
          <div className="flex flex-col justify-start items-start font-inter">
            <h2 className="font-inter text-[18px] md:text-[24px] py-6 font-bold">
              {item.title}
            </h2>
            <div className="pb-2 text-[14px] md:text-[16px]">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesCardsContainer;
