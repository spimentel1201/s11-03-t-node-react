import MascotaImage from "../mascotaModal/mascotaImage";

export default function FormContent(){
    return(
        <form >
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
      
    </form>
    )
}