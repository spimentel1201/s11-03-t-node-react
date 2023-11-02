import { Metadata } from "next/types";
import MisMascostas from "./MisMascotas";
import MiPerfil from "./miPerfil"
import MascotaModal from "./mascotaModal/page";
import CardContent from "./[id]/CardContent";
import DeleteMascota from "./[id]/deleteMascota/page";
import EditarPerfilPage from "./editarPerfil/page";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Mi perfil",
  description: "Mi perfil",
};
export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div> 
      <Suspense fallback= {<Loading />} >
      {children}
      <Toaster />
      <MiPerfil />
      <MisMascostas />
      <MascotaModal /> 
      <CardContent />
      <DeleteMascota/>
      <EditarPerfilPage />
      </Suspense>
     
      
    </div>
  );
}
