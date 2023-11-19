"use client";
import { QueryClient, QueryClientProvider } from "react-query";

import { Providers } from "@/lib/providers";
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
        </body>
      </html>
    </Providers>
  );
}
