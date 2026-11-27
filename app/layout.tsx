import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OrbiSync | Todo tu negocio en una misma órbita",
  description:
    "Todo tu negocio en una misma órbita. Tu ecosistema operativo, siempre en sincronía.",
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

const SCRIPT_TEMA = `
(function() {
  try {
    var tema = localStorage.getItem("omnisync-web-tema");
    if (tema === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_TEMA }} />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}