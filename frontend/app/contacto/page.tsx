import { Metadata } from "next/types";
import { Consultas } from "../components/consultas/consultas";
import Contactanos from "./contactanos";
import VetcareInformation from "./vetcareInformation";
import Footer from "../components/footer/footer";
export const metadata: Metadata = {
    title: 'Contacto',
  }

export default function Contacto(){
    return(
        <main className="md:bg-secondary-content" >
            <Contactanos />
            <div className="flex justify-center">
            <Consultas />
            </div>
            <VetcareInformation />
            <Footer />
        </main>
    )
}