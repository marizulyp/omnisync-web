import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmniSync | El Ecosistema Tecnológico Definitivo",
  description: "Ingeniería de software de nivel empresarial. Automatización y SaaS modular.",
  icons: {
    icon: [
      { url: "/icon-192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/icon-192.png?v=2",
    apple: "/icon-192.png?v=2",
  },
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