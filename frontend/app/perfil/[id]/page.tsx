
import CardLink from "./card";
import Image from "next/image";
import fake from "../fake.svg";


export default function Page({ params }: { params: { id: string } }) {
  return <div className="hidden">My Post: {params.id}</div>
}
