import { Metadata } from "next/types";
import MisMascostas from "./MisMascotas";
import Myperfil from "./miPerfil";
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
      <Myperfil />
      <MisMascostas />
      <Page
        params={{
          id: "",
        }}
      />
      {children}
    </div>
  );
}
