"use client"
import { FormEvent,  useState } from "react";
import MascotaImage from "./mascotaImage";
import RadioInput from "./radioInput";
import SelectOption from "./selectoption";
import SubmitButton from "./submitButton";
import mascotaPost from "@/app/_api/mascota/mascotaPost";
import { useImageMascota } from "@/app/store/mascota/ImageMascota";
import { useRouter } from "next/navigation"; 
import { useUpdateMutations } from "@/app/store/mascota/updateMutation";



export default function FormContent() {
  const initialState = {
    name: "",
    age:"",
    specie:"",
    photo_url:"",
    sex:""

  };
  const [state, setState] = useState(initialState);
  const imageMascota = useImageMascota((state) => state.imageMascota)
 const route = useRouter();
  const setUpdateMutations = useUpdateMutations((state) => state.setUpdateMutations)
  const handleFormContent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const age = formData.get('age');
    const specie = formData.get('specie');
    const sex = formData.get('sex');
    

    try {
      const data = await mascotaPost({
        name: name as string,
        age: age ? +age : null,
        specie: specie as string,
        sex: sex as string,
        photo_url: imageMascota,
      });
      if (data?.data?.errors) {
        setState({
          name: data?.data.errors.name ?data?.data.errors.name[0] : '',
          age: data?.data.errors.age ? data?.data.errors.age[0] : '',
          specie: data?.data.errors.specie ? data?.data.errorsspecie[0] : '',
          sex: data?.data.errors.sex ? data?.data.errors.sex[0] : '',
          photo_url: data?.data.errors.photo_url ? data.data?.data.errors.photo_url[0] : '',
        });
        console.log(data, "success");
      } else {
        console.log(data, "error");
        setUpdateMutations(true);
        form.reset();
        setState(initialState);
        route.push("/perfil/mascotaModal/mascotaCreada", { scroll: false });
      }
    } catch (error) {
      error
    }
  }
  
  return (
    <form onSubmit={handleFormContent} className="flex flex-col">
      <MascotaImage />
      <label className='text-error'>{state?.photo_url}</label>
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
      <label className='text-error mt-1'>{state?.name}</label>
      <label
        htmlFor=""
        className="text-slate-800 text-base font-medium 
      font-inter leading-none mb-[3px] mt-7"
      >
        Tipo de mascota
      </label>
      <SelectOption />
      <label className='text-error mt-1'>{state?.specie}</label>
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
       <label className='text-error mt-1'>{state?.age}</label>
      <RadioInput />
      <label className='text-error mt-1'>{state?.sex}</label>
      <SubmitButton />
    </form>
  );
}
