"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ES" | "EN";

interface LanguageContextType {
  idioma: Language;
  setIdioma: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdiomaState] = useState<Language>("ES");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Al cargar, buscamos si el usuario ya había elegido un idioma antes
    const savedLang = localStorage.getItem("omnisync-lang") as Language;
    if (savedLang) {
      setIdiomaState(savedLang);
    }
    setMounted(true);
  }, []);

  const setIdioma = (lang: Language) => {
    setIdiomaState(lang);
    // Guardamos la elección en la memoria del navegador
    localStorage.setItem("omnisync-lang", lang);
  };

  // Evitamos parpadeos mientras carga el idioma guardado
  if (!mounted) return null;

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar el idioma fácilmente en cualquier página
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}