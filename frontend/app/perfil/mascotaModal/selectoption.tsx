export default function SelectOption() {
  return (
    <>
      <select className="w-full 
      h-[62px]   bg-gray-100  border
       border-gray-200  md:w-full select text-gray-500">
        <option className="" disabled >Seleccione tipo de mascota</option>
        <option>conejo</option>
        <option>Cobayo</option>
        <option>Gato</option>
        <option value="">Hamster</option>
        <option value="">Huron</option>
        <option value="">Iguana</option>
        <option value="">Lagartija</option>
        <option value="">Pajaro</option>
        <option value="">Perro</option>
        <option value="">Pez</option>
        <option value="">Serpiente</option>
        <option value="">Tortuga</option>
      </select>
    </>
  );
}
