import Link from "next/link";
import CardLink from "./card";
import Image from "next/image";
import fake from "../fake.svg";
import ButtonLogic from "./buttonLogic";


export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-row justify-center md:justify-start mt-8 pt-8 pb-[104px] md:px-[104px]">
      <CardLink id={params.id}>
        {params.id}
        <div className="flex flex-col items-center justify-center">
           <Image src={fake} alt="Foto de perfil" className="rounded-md" />
          <h1 className="text-cyan-950 text-2xl font-bold mt-[33px] mb-5 ">
            Felix
          </h1>
          <ButtonLogic />
        </div>
      </CardLink>
    </div>
  );
}
