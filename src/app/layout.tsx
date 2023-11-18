'use client'
import { QueryClient, QueryClientProvider } from "react-query";

// import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.scss";

// export const metadata: Metadata = {
//   title: "MKS Store",
//   description: "Desafio dev front-end",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
