"use client"
import { FormEvent } from "react";
import MascotaImage from "./mascotaImage";
import RadioInput from "./radioInput";
import SelectOption from "./selectoption";
import SubmitButton from "./submitButton";
import mascotaPost from "@/app/_api/mascota/mascotaPost";

export default function FormContent() {
  const handleFormContent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const age = formData.get('age');
    const specie = formData.get('specie');
    const sex = formData.get('sex');
  
    if (name && age && specie && sex) {
      try {
        const data = await mascotaPost({
          name: name as string,
          age: +age,
          specie: specie as string,
          sex: sex as string,
        });
        form.reset();
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    } 
  };
  return (
    <form onSubmit={handleFormContent}>
      <MascotaImage />
      <label
        htmlFor="ingrese el nombre"
        className="text-slate-800 text-base font-medium font-inter leading-none mb-[3px]"
      >
        Nombre de la mascota
      </label>
      <input
        type="text"
        placeholder="Ingresa tu nombre y apellido"
        className="w-full
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full"
        name="name"
      />
      {/* <label className='text-error'>{state?.fullname}</label> */}
      <label
        htmlFor=""
        className="text-slate-800 text-base font-medium 
      font-inter leading-none mb-[3px] mt-7"
      >
        Tipo de mascota
      </label>
      <SelectOption />
      <label
        htmlFor="ingrese el nombre"
        className="text-slate-800 text-base font-medium font-inter leading-none mb-[3px] mt-7"
      >
        Edad
      </label>
      <input
        type="number"
        placeholder="Ingresa la edad"
        className="w-full 
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full"
        name="age"
      />
      <RadioInput />
      <SubmitButton />
    </form>
  );
}
