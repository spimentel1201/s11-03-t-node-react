import Image from "next/image";
import BackgroundCarousel from "../../assets/BackgroundCarousel.svg";
import petImage from "../../assets/petImage.png";

export function BackgroundImage() {
  return (
    <div className="relative w-[520px] h-[150px]">
    {/* Background Image */}
    <Image
      src={BackgroundCarousel}
      alt="BackgroundCarousel"
      fill
      objectFit="cover"
      
      className=" absolute inset-0 z-10"
    />
  <div className=" text-slate-700 text-xl font-normal 
  font-['Secular One'] relative z-20 left-[70px] top-[35px]">Más de 2.350 mascotas</div>
    <div className="carousel rounded-box relative z-20 ">
      <div className="carousel-item">
        <Image
          width={100}
          height={100}
          src={petImage}
          objectFit="cover"
          objectPosition="center"
          alt="pet"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={100}
          height={100}
          src={petImage}
          objectFit="cover"
          objectPosition="center"
          alt="pet"
        />
      </div>
    </div>
  </div>
  );
}
