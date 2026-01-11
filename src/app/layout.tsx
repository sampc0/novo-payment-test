import type { Metadata } from "next";
import "./globals.css";
import "./globals.scss";

import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer";

import ThemeRegistry from '@/lib/ThemeRegistry';

export const metadata: Metadata = {
  title: "Recipe Explorer",
  description: "Recipes with Next.js & MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          <Navbar />
            {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}