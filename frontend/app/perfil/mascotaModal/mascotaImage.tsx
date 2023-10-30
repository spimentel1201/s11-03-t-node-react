"use client";
import Image from "next/image";
import { UploadImage } from "../icons";
import DefaultImage from "./Image.png";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { uploadFile } from "@/app/_api/perfil/userImage";
import { useImageMascota } from "@/app/store/mascota/ImageMascota";
import { useUpdateMutations } from "@/app/store/mascota/updateMutation";

export default function MascotaImage() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const updateMutations = useUpdateMutations((state) => state.updateMutations)
  const setImageMascota = useImageMascota((state) => state.setImageMascota);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectFile = event.target.files && event.target.files[0];
    if (selectFile) {
    const imageUrl = URL.createObjectURL(selectFile)
    setImage(imageUrl);
    }
    if (selectFile) {
      try {
        const data = await uploadFile(selectFile);
        setImageMascota(data?.data.photo_url)
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  useEffect(() => {
    if (updateMutations === true) {
      setImage(null);
    }
  }, [updateMutations]);
  return (
    <div className="mb-3">
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".jpg, .jpeg, .png, .gif"
      />
      <span onClick={handleIconClick} className="cursor-pointer">
        <UploadImage />
      </span>
      <div className=" flex justify-center ">
        {image ? (
          <Image width={150} height={150} src={image} alt="dogImage" className="rounded-full bg-cover bg-center"/>
        ) : (
          <Image
            width={150}
            height={150}
            src={DefaultImage}
            alt="DefaultImage"
          />
        )}
      </div>
    </div>
  );
}
