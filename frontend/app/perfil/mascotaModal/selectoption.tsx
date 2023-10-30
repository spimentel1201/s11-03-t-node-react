"use client"


export default function SelectOption() {
  
  return (
    <>
      <select className="w-full 
      h-[62px]   bg-gray-100  border
       border-gray-200  md:w-full select text-gray-500"
       name="specie"
       defaultValue=""
      >
        <option  disabled value="">Seleccione tipo de mascota</option>
        <option value="conejo">conejo</option>
        <option value="Cobayo">Cobayo</option>
        <option value="Gato">Gato</option>
        <option value="Hamster">Hamster</option>
        <option value="Huron">Huron</option>
        <option value="Iguana">Iguana</option>
        <option value="Lagartija">Lagartija</option>
        <option value="Pajaro">Pajaro</option>
        <option value="Perro">Perro</option>
        <option value="Pez">Pez</option>
        <option value="Serpiente">Serpiente</option>
        <option value="Tortuga">Tortuga</option>
      </select>
    </>
  );
}
