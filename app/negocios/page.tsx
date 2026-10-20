"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, CalendarDays, Users, FileText, ClipboardPlus, 
  PackageSearch, Receipt, TrendingUp, UserCog, LineChart, 
  ExternalLink, Blocks
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const saasContent = {
  ES: {
    nav: { volver: "Volver al Inicio" },
    hero: { badge: "SaaS de Gestión a la medida", title1: "Elige tus módulos.", title2: "Paga solo lo que usas.", desc: "Un ecosistema de software diseñado para clínicas, talleres, restaurantes y más. Selecciona exactamente las herramientas que tu operación requiere y nosotros armamos tu plataforma ideal.", btnDemo: "Probar Demo Interactiva" },
    pillars: { p1Title: "1. Personalización total", p1Desc: "No te adaptes a un software rígido. Construimos tu espacio de trabajo solo con las funciones que necesitas.", p2Title: "2. Presupuesto flexible", p2Desc: "El valor de tu plataforma varía según la cantidad de módulos. Una inversión inteligente y proporcional a tu negocio.", p3Title: "3. Escalabilidad infinita", p3Desc: "Empieza con lo básico (como Agenda y Facturación) y agrega nuevos módulos (Inventario, Finanzas) a medida que creces." },
    modulesTitle: "Catálogo de Módulos", modulesSubtitle: "Conoce las piezas disponibles para armar tu ecosistema.",
    modules: [
      { titulo: "Agenda y Recordatorios", icono: <CalendarDays className="w-8 h-8 text-emerald-400" />, descripcion: "Gestión de citas por día, semana y mes con envío de recordatorios automáticos para evitar inasistencias." },
      { titulo: "Gestión de Clientes y Pacientes", icono: <Users className="w-8 h-8 text-emerald-400" />, descripcion: "Base de datos centralizada con perfiles completos, historial de visitas y datos de contacto." },
      { titulo: "Historias Clínicas", icono: <FileText className="w-8 h-8 text-emerald-400" />, descripcion: "Registros detallados y adaptables para salud. Seguimiento de evolución, diagnósticos y adjuntos." },
      { titulo: "Fórmulas Médicas", icono: <ClipboardPlus className="w-8 h-8 text-emerald-400" />, descripcion: "Generación rápida de recetas y prescripciones con impresión directa y envío al cliente." },
      { titulo: "Inventario Inteligente", icono: <PackageSearch className="w-8 h-8 text-emerald-400" />, descripcion: "Control de stock en tiempo real. Alertas automáticas antes de quedarse sin productos o insumos." },
      { titulo: "Facturación para el Cliente", icono: <Receipt className="w-8 h-8 text-emerald-400" />, descripcion: "Emisión de facturas y recibos al instante. Integrado directamente con la salida de inventario." },
      { titulo: "Finanzas y Administración", icono: <TrendingUp className="w-8 h-8 text-emerald-400" />, descripcion: "Control de ingresos, egresos, cuentas por cobrar y cuadres de caja diarios." },
      { titulo: "Gestión de Equipo", icono: <UserCog className="w-8 h-8 text-emerald-400" />, descripcion: "Perfiles para empleados, control de comisiones por servicio y asignación de permisos por rol." },
      { titulo: "Informes y Actividad", icono: <LineChart className="w-8 h-8 text-emerald-400" />, descripcion: "Analítica del negocio, exportación de reportes y registro de auditoría (quién hizo qué en el sistema)." }
    ],
    cta: { title: "¿Listo para armar tu sistema?", desc: "Interactúa con nuestra demo en vivo o contáctanos para asesorarte sobre cuáles son los módulos ideales para el tamaño de tu operación.", btnQuote: "Solicitar Cotización", btnDemo: "Probar Demo" }
  },
  EN: {
    nav: { volver: "Back to Home" },
    hero: { badge: "Tailored Management SaaS", title1: "Choose your modules.", title2: "Pay only for what you use.", desc: "A software ecosystem designed for clinics, workshops, restaurants, and more. Select exactly the tools your operation requires, and we build your ideal platform.", btnDemo: "Try Interactive Demo" },
    pillars: { p1Title: "1. Total Customization", p1Desc: "Don't adapt to rigid software. We build your workspace with only the features you need.", p2Title: "2. Flexible Budget", p2Desc: "The value of your platform varies based on the number of modules. A smart investment proportional to your business.", p3Title: "3. Infinite Scalability", p3Desc: "Start with the basics (like Scheduling and Billing) and add new modules (Inventory, Finances) as you grow." },
    modulesTitle: "Module Catalog", modulesSubtitle: "Discover the available pieces to build your ecosystem.",
    modules: [
      { titulo: "Scheduling & Reminders", icono: <CalendarDays className="w-8 h-8 text-emerald-400" />, descripcion: "Manage appointments by day, week, and month with automated reminders to prevent no-shows." },
      { titulo: "Client & Patient Management", icono: <Users className="w-8 h-8 text-emerald-400" />, descripcion: "Centralized database with complete profiles, visit history, and contact details." },
      { titulo: "Clinical Records", icono: <FileText className="w-8 h-8 text-emerald-400" />, descripcion: "Detailed and adaptable health records. Track evolution, diagnoses, and attachments." },
      { titulo: "Medical Prescriptions", icono: <ClipboardPlus className="w-8 h-8 text-emerald-400" />, descripcion: "Fast generation of prescriptions and medical formulas with direct printing and sending." },
      { titulo: "Smart Inventory", icono: <PackageSearch className="w-8 h-8 text-emerald-400" />, descripcion: "Real-time stock control. Automated alerts before running out of products or supplies." },
      { titulo: "Client Billing", icono: <Receipt className="w-8 h-8 text-emerald-400" />, descripcion: "Instant generation of invoices and receipts. Directly integrated with inventory checkout." },
      { titulo: "Finances & Administration", icono: <TrendingUp className="w-8 h-8 text-emerald-400" />, descripcion: "Control of income, expenses, accounts receivable, and daily cash reconciliations." },
      { titulo: "Team Management", icono: <UserCog className="w-8 h-8 text-emerald-400" />, descripcion: "Employee profiles, commission tracking by service, and role-based permissions." },
      { titulo: "Reports & Activity", icono: <LineChart className="w-8 h-8 text-emerald-400" />, descripcion: "Business analytics, report exports, and audit logs (who did what in the system)." }
    ],
    cta: { title: "Ready to build your system?", desc: "Interact with our live demo or contact us for advice on the ideal modules for the size of your operation.", btnQuote: "Request Quote", btnDemo: "Try Demo" }
  }
};

export default function NegociosPage() {
  const { idioma } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const t = saasContent[idioma];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 pb-24 overflow-hidden relative">
      
      <motion.div className="fixed top-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full pointer-events-none blur-[150px] z-0" animate={{ x: mousePosition.x - 300, y: mousePosition.y - 300 }} transition={{ type: "tween", ease: "backOut", duration: 0.5 }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      {/* BARRA DE NAVEGACIÓN LIMPIA */}
      <header className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20 relative">
          <div className="w-1/3 flex justify-start">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 relative z-10">
              <ArrowLeft className="w-4 h-4" /> {t.nav.volver}
            </Link>
          </div>
          <div className="w-1/3 flex justify-center text-xl font-extrabold tracking-tight text-white relative z-10">
            Omni<span className="text-emerald-400">Sync</span>
          </div>
          <div className="w-1/3"></div> {/* Espacio vacío para centrar perfectamente el logo */}
        </div>
      </header>

      <section className="pt-32 pb-16 px-6 text-center max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs text-emerald-400 mb-6 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Blocks className="w-4 h-4 mr-2" /> {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl">
            {t.hero.title1} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-8">{t.hero.desc}</p>
          <div className="mb-12">
            <a href="https://demo-veterinaria.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              {t.hero.btnDemo} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <div className="w-full max-w-5xl bg-black rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden">
            <video src="/video-veterinaria.mp4" controls autoPlay muted loop className="w-full h-full object-cover aspect-video">
              Tu navegador no soporta el formato de video.
            </video>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.pillars.p1Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.pillars.p1Desc}</p></div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.pillars.p2Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.pillars.p2Desc}</p></div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.pillars.p3Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.pillars.p3Desc}</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.modulesTitle}</h2>
          <p className="text-zinc-400 text-lg">{t.modulesSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.modules.map((modulo, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/40 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.1)]">{modulo.icono}</div>
              <h3 className="text-xl font-bold text-white mb-3">{modulo.titulo}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{modulo.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-12 text-center relative z-10">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{t.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contacto" className="px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold rounded-xl transition-colors">{t.cta.btnQuote}</Link>
            <a href="https://demo-veterinaria.vercel.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105">
              {t.cta.btnDemo} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}