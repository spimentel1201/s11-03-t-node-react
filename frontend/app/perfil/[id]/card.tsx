"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { CheckSqueaare } from "../icons";

export default function CardLink({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isSelected = segment === id;

  return (
    <div
      className={`${
        isSelected
          ? " rounded-[10px] shadow border border-slate-700 bg-white w-[260px] h-[367px]"
          : "bg-white rounded-[10px] shadow w-[260px] h-[367px]"
      }`}
    >
      <div className="flex items-end justify-end w-full pt-2 pr-[14px]">
        {isSelected && <span className=""><CheckSqueaare/></span>}
      </div>
      <Link href={`/perfil/${id}`} className="w-full h-full">
        {children}
      </Link>
    </div>
  );
}
