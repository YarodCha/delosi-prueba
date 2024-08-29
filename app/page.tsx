import AppMatrix from "@/components/AppMatrix";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DELOSI - Prueba Técnica",
  description: "Prueba técnica de DELOSI",
};

export default function Page() {
  return (
    <main>
      <h1>Prueba Técnica</h1>
      <AppMatrix />
    </main>
  );
}
