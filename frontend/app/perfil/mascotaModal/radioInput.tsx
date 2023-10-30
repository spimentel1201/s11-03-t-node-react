export default function RadioInput() {

  return (
    <div className="flex-col mt-[19px]">
      <label
        htmlFor="ingrese el nombre"
        className="text-slate-800 text-base font-medium font-inter leading-none mb-[17px]"
      >
        Seleccione:
      </label>
      <div className="flex justify-between">
        <div>
          <input type="radio" className="" name="sex" value="Macho" />
          <label
            htmlFor="ingrese el nombre"
            className="text-slate-800 text-base font-medium font-inter leading-none ml-[3px]"
          >
            Macho
          </label>
        </div>
        <div>
          <input type="radio" className="" name="sex" value="Hembra"/>
          <label
            htmlFor="ingrese el nombre"
            className="text-slate-800 text-base font-medium font-inter leading-none ml-[3px]"
          >
            Hembra
          </label>
        </div>
        <div>
          <input type="radio" className="" name="sex" value="Indeterminado" />
          <label
            htmlFor="ingrese el nombre"
            className="text-slate-800 text-base font-medium font-inter leading-none ml-[3px]"
          >
            Indeterminado
          </label>
        </div>
      </div>
    </div>
  );
}
