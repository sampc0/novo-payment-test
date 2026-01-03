import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Recipe Explorer",
  description: "Prueba técnica - Recetas con Next.js y shadcn/ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}