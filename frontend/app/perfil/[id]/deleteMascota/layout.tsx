import { Metadata } from "next";
import SuccessDeleted from "./mascotaSuccessDeleted/page";
export const metadata: Metadata = {
    title: "Eliminar Mascota",
    
  };

export default function deleteLayout({children}:{children:React.ReactNode}){
    return (
        <div><SuccessDeleted />{children}</div>
    )
}