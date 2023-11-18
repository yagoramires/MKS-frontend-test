import type { Metadata } from "next";

import "../styles/globals.scss";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "MKS Store",
  description: "Desafio dev front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Header />
      <body>{children}</body>
    </html>
  );
}
