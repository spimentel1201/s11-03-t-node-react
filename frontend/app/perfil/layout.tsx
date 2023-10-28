import { Metadata } from "next/types";
import MisMascostas from "./MisMascotas";
import MiPerfil from "./miPerfil"
import Page from "./[id]/page";
import MascotaModal from "./mascotaModal/page";
import CardContent from "./[id]/CardContent";
import DeleteMascota from "./[id]/deleteMascota/page";

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
      {children}
      <MiPerfil />
      <MisMascostas />
      <MascotaModal />
      <CardContent />
      <DeleteMascota/>
      
    </div>
  );
}
