import { Metadata } from "next/types";
import MisMascostas from "./MisMascotas";
import MiPerfil from "./MiPerfil"
import Page from "./[id]/page";

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
      <Page
        params={{
          id: "",
        }}
      />
      
    </div>
  );
}
