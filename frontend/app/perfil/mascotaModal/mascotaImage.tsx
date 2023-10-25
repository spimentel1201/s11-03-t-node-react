"use client"
import Image from "next/image";
import { UploadImage } from "../icons";
import DefaultImage from "./Image.png";
import { ChangeEvent, useRef, useState } from "react";
import {UploadFile } from "@/app/_api/perfil/userImage";

export default function MascotaImage() {
    const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectFile = event.target.files && event.target.files[0];
    console.log(selectFile);
    if (selectFile) {
      UploadFile(selectFile)
      .then((data) => {
        setImage(data.photo_url);
        console.log(data);
      }).catch((error) => {
        console.log(error);
      })
      ;
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="mb-3">
          <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <span onClick={handleIconClick} className="cursor-pointer">
        <UploadImage />
      </span>
      <div className=" flex justify-center ">
      <Image width={150} height={150} src={image||DefaultImage} alt="DefaultImage" />
      </div>
    </div>
  );
}
