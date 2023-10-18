import Image from "next/image";
import petImage from "../../assets/petImage.png";

export default function Mascotas() {
  return (
    <section className="bg-background h-[149px] md:h-[186px] bg-cover mb-[76px] ">
      <div className="flex flex-col ">
        <div
          className=" text-slate-700 text-xl font-normal 
 font-['Secular One'] text-center mt-[26px] mb-3"
        >
          Más de 2.350 mascotas
        </div>
        <div className="carousel rounded-box ">
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
          <div className="carousel-item">
            <Image
              width={54}
              height={54}
              src={petImage}
              objectFit="cover"
              objectPosition="center"
              alt="pet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
