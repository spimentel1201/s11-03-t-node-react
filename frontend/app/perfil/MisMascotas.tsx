import { AddIcon, DeleteIcon } from "./icons";

export default function MisMascostas() {
  return (
    <section className=" flex justify-between pl-[119px] 
    md:pl-[611px] pr-[19px] md:pr-[81px] mt-[26px] md:mt-[79px]">
      <div className="flex justify-center ">
        <h1 className="md:text-[32px] text-xl">Mis Mascostas</h1>
      </div>
      <div className="flex justify-end gap-x-[7px] ">
        <span>
          <AddIcon />
        </span>
        <span>
          <DeleteIcon />
        </span>
      </div>
    </section>
  );
}
