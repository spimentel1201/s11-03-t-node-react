import MascotaImage from "./mascotaImage";
import RadioInput from "./radioInput";
import SelectOption from "./selectoption";
import SubmitButton from "./submitButton";

export default function FormContent() {
  return (
    <div className="flex flex-col">
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
        name="fullname"
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
        type="text"
        placeholder="Ingresa la edad"
        className="w-full 
      h-[62px] px-[23px] py-[21px] bg-gray-100 rounded-md border
       border-gray-200 text-gray-500  md:w-full"
        name="fullname"
      />
      <RadioInput />
      <SubmitButton />
    </div>
  );
}
