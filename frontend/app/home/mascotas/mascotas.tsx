import Image from "next/image";
import { BackgroundCarouselMd } from "../icons";
import petImage from "../../assets/petImage.png";
import {BackgroundImage} from "./backgroundImage";


export default function Mascotas() {

  return (
    // <section className="">
    <>
      <BackgroundImage />
      </>
          /* <div className="carousel rounded-box">
          <div className="carousel-item">
            <Image width={100} height={100} src={petImage} objectFit="cover" objectPosition="center" alt="pet" />
          </div>
          <div className="carousel-item">
            <Image width={100} height={100} src={petImage} objectFit="cover" objectPosition="center" alt="pet" />
          </div>
        </div>   */
    // </section>
   
  );
}
