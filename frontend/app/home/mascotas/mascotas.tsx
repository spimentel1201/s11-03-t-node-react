import Image from 'next/image'
import petImage from '../../assets/petImage.png'

export default function Mascotas() {
  return (
    <div className="bg-background bg-cover flex flex-col-reverse items-center justify-center xl:flex-row px-10 bg-secondary-content">
      <div className="relative max-w-[90rem]">
        <section className="h-[149px] md:h-[186px]">
          <div className="flex flex-col md:flex-row ">
            <h2
              className=" text-slate-700 text-xl font-normal 
 font-secular text-center mt-[26px] mb-3 md:mt-[60px]"
            >
              Más de{' '}
              <span className="md:text-slate-700 md:text-[26px]">
                2.350 mascotas
              </span>
            </h2>
            <div className="carousel rounded-box md:mt-[50px] gap-x-[15px] ">
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
              <div className="carousel-item">
                <Image
                  width={54}
                  height={54}
                  src={petImage}
                  alt="pet"
                  className="bg-cover md:w-[95px] md:h-[95px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
