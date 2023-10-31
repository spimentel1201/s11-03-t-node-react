import { Metadata } from "next";
import MascotaCreada from "./mascotaCreada/page";
export const metadata: Metadata = {
    title: "Mi Mascota",
  };

export default function MascotaModalLayout({children}:{children:React.ReactNode}){
    return(
        <div className="">
            <MascotaCreada />
            {children}
        </div>
    )


}