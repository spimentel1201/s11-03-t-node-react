"use client"
import { useState, useRef, ChangeEvent } from "react";
import { uploadFile } from "../_api/perfil/userImage";

export default function MiPerfil() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectFile = event.target.files && event.target.files[0];

    if (selectFile) {
      uploadFile(selectFile)
      .then((data) => {
        setImage(data.photo_url);
      });
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className="md:px-[82px] px-[19px]">
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <h1 className="md:mt-[68px] mt-[27px] mb-4 md:text-[32px] text-xl font-normal text-center">
        MI PERFIL
      </h1>
      <div
        className=" bg-amber-300 rounded-bl-[100px] shadow md:mt-[35px] 
       flex flex-col justify-center items-center md:items-start md:flex-row 
      md:px-[264px] md:gap-x-[79px] py-[22px] "
      >
        <div className="md:pt-[65px] md:pb-[91px] mb-[15px]">
          <div className="rounded-full bg-primary w-[90px] h-[90px]  md:w-[305px]  md:h-[295px]">
            {/* <Image /> */}
          </div>
        </div>
        <div className="md:pt-[118px] flex flex-col md:gap-y-[29px] gap-y-[14px]">
          <h2 className="md:text-[32px] font-semibold">Nombre y Apellido</h2>
          <span className="md:text-3xl font-normal font-inter">
            vetcarefamily@gmail.com
          </span>
          <button className=" px-[31px] py-[17px]  text-primary rounded-md border bg-accent border-accent">
            Editar Perfil
          </button>
        </div>
      </div>
    </section>
  );
}
