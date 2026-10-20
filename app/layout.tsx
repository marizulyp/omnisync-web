import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniSync | El Ecosistema Tecnológico Definitivo",
  description: "Ingeniería de software de nivel empresarial. Automatización y SaaS modular.",
};

// Esta línea apaga la alerta de "Insight" de navegación de Next.js
export const instant = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}