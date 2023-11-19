"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Providers } from "@/lib/providers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.scss";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body>
          <QueryClientProvider client={queryClient}>
            <Header />
            <main>{children}</main>
            <Footer />
          </QueryClientProvider>

          <ToastContainer
            autoClose={3000}
            position={toast.POSITION.BOTTOM_RIGHT}
          />
        </body>
      </html>
    </Providers>
  );
}
