"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, Server, ShieldCheck, Activity, LineChart, Wrench, 
  BrainCircuit, CheckCircle2, TerminalSquare
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const atlasContent = {
  ES: {
    nav: { volver: "Volver al Inicio" },
    hero: { badge: "Soporte TI que se adelanta", title1: "Del soporte reactivo al", title2: "soporte autónomo.", desc: "ATLAS es la plataforma que observa cada equipo, se anticipa a las fallas, resuelve problemas por sí misma y entrega información clave para decidir.", btn: "Ver Video de ATLAS" },
    arch: { p1Title: "Agente ATLAS", p1Desc: "Servicio ligero en cada equipo Windows y app de autoservicio para el usuario.", p2Title: "Panel Web Central", p2Desc: "Para TI y dirección, con roles de administrador, técnico y usuario final.", p3Title: "IA Local Integrada", p3Desc: "Modelos de lenguaje y voz que corren de forma segura en tu propia infraestructura." },
    modulesTitle: "De observar a decidir", modulesSubtitle: "Siete niveles de madurez para transformar tu mesa de ayuda.",
    modules: [
      { titulo: "Inventario en Tiempo Real", icono: <Server className="w-8 h-8 text-blue-400" />, descripcion: "Conoce cada equipo sin visitarlo. El agente levanta el hardware, software instalado, periféricos y ubicación al instante.", caracteristicas: ["Hardware (CPU, RAM, Disco)", "Software y versiones", "Ubicación por sede"] },
      { titulo: "Seguridad y Cumplimiento", icono: <ShieldCheck className="w-8 h-8 text-blue-400" />, descripcion: "Protección verificada, equipo por equipo. Evalúa cada máquina contra las políticas de tu organización.", caracteristicas: ["Estado de Antivirus y Firewall", "Cifrado BitLocker", "Detección de software no autorizado"] },
      { titulo: "Telemetría y Uso", icono: <Activity className="w-8 h-8 text-blue-400" />, descripcion: "Mide la experiencia real, no la percepción. Telemetría continua del uso real de las aplicaciones de negocio.", caracteristicas: ["Uso de CPU, RAM y Disco", "Temperatura del procesador", "Frecuencia de uso de software"] },
      { titulo: "Analítica Predictiva", icono: <LineChart className="w-8 h-8 text-blue-400" />, descripcion: "Anticípate a las fallas antes de que el usuario las note mediante el DEX Score (Digital Employee Experience).", caracteristicas: ["Salud de batería y desgaste", "Predicción de Pantallazos Azules", "Alertas de umbral crítico"] },
      { titulo: "Autoservicio Autónomo", icono: <Wrench className="w-8 h-8 text-blue-400" />, descripcion: "El usuario lo resuelve solo, sin llamar a la mesa de ayuda. Scripts de reparación a un clic de distancia.", caracteristicas: ["Acelerador de Equipo", "Reparación de USB y Navegadores", "Actualización de políticas (GPO)"] },
      { titulo: "Inteligencia Ejecutiva", icono: <BrainCircuit className="w-8 h-8 text-blue-400" />, descripcion: "Información para decidir, no solo datos. Resúmenes semanales redactados por IA y recomendaciones de ahorro.", caracteristicas: ["Estado general de la flota", "Retiro de licencias sin uso", "Reemplazo de hardware en riesgo"] }
    ]
  },
  EN: {
    nav: { volver: "Back to Home" },
    hero: { badge: "IT Support that stays ahead", title1: "From reactive support to", title2: "autonomous support.", desc: "ATLAS is the platform that observes every device, anticipates failures, resolves issues on its own, and delivers key information to decide.", btn: "Watch ATLAS Video" },
    arch: { p1Title: "ATLAS Agent", p1Desc: "Lightweight service on every Windows device and self-service app for the user.", p2Title: "Central Web Panel", p2Desc: "For IT and management, with admin, technician, and end-user roles.", p3Title: "Integrated Local AI", p3Desc: "Language and voice models running securely on your own infrastructure." },
    modulesTitle: "From observing to deciding", modulesSubtitle: "Seven maturity levels to transform your help desk.",
    modules: [
      { titulo: "Real-Time Inventory", icono: <Server className="w-8 h-8 text-blue-400" />, descripcion: "Know every device without visiting it. The agent instantly gathers hardware, installed software, peripherals, and location.", caracteristicas: ["Hardware (CPU, RAM, Disk)", "Software and versions", "Location by branch"] },
      { titulo: "Security & Compliance", icono: <ShieldCheck className="w-8 h-8 text-blue-400" />, descripcion: "Verified protection, device by device. Evaluate each machine against your organization's policies.", caracteristicas: ["Antivirus and Firewall status", "BitLocker encryption", "Unauthorized software detection"] },
      { titulo: "Telemetry & Usage", icono: <Activity className="w-8 h-8 text-blue-400" />, descripcion: "Measure real experience, not perception. Continuous telemetry of the actual usage of business applications.", caracteristicas: ["CPU, RAM, and Disk usage", "Processor temperature", "Software usage frequency"] },
      { titulo: "Predictive Analytics", icono: <LineChart className="w-8 h-8 text-blue-400" />, descripcion: "Anticipate failures before the user notices them using the DEX Score (Digital Employee Experience).", caracteristicas: ["Battery health and wear", "Blue Screen (BSOD) prediction", "Critical threshold alerts"] },
      { titulo: "Autonomous Self-Service", icono: <Wrench className="w-8 h-8 text-blue-400" />, descripcion: "The user resolves it alone, without calling the help desk. Repair scripts just a click away.", caracteristicas: ["Device Accelerator", "USB and Browser repair", "Policy updates (GPO)"] },
      { titulo: "Executive Intelligence", icono: <BrainCircuit className="w-8 h-8 text-blue-400" />, descripcion: "Information to decide, not just data. Weekly summaries written by AI and cost-saving recommendations.", caracteristicas: ["Overall fleet status", "Unused license removal", "Hardware replacement risks"] }
    ]
  }
};

export default function AtlasPage() {
  const { idioma } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const t = atlasContent[idioma];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-blue-500/30 overflow-hidden relative pb-24">
      
      <motion.div className="fixed top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full pointer-events-none blur-[150px] z-0" animate={{ x: mousePosition.x - 300, y: mousePosition.y - 300 }} transition={{ type: "tween", ease: "backOut", duration: 0.5 }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
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
            Omni<span className="text-blue-400">Sync</span>
          </div>
          <div className="w-1/3"></div> {/* Espacio vacío para centrar perfectamente el logo */}
        </div>
      </header>

      <section className="pt-32 pb-16 px-6 text-center max-w-6xl mx-auto relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs text-blue-400 mb-6 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <TerminalSquare className="w-4 h-4 mr-2" /> {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl">
            {t.hero.title1} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t.hero.title2}</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-12">{t.hero.desc}</p>

          <div className="w-full max-w-5xl bg-black rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/bLPHuVVpAO8?autoplay=1&mute=1&loop=1&playlist=bLPHuVVpAO8&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=https://omnisync-web-oficial-xpjp.vercel.app`}
              title="Video de ATLAS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/5 bg-white/5 backdrop-blur-sm py-12 px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.arch.p1Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.arch.p1Desc}</p></div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.arch.p2Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.arch.p2Desc}</p></div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="md:w-1/3"><h3 className="text-white font-bold text-xl mb-2">{t.arch.p3Title}</h3><p className="text-zinc-400 text-sm leading-relaxed">{t.arch.p3Desc}</p></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.modulesTitle}</h2>
          <p className="text-zinc-400 text-lg">{t.modulesSubtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.modules.map((modulo, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.1)]">{modulo.icono}</div>
              <h3 className="text-xl font-bold text-white mb-3">{modulo.titulo}</h3>
              <p className="text-sm text-zinc-400 mb-8 min-h-[60px] leading-relaxed">{modulo.descripcion}</p>
              <div className="space-y-3 pt-6 border-t border-white/5">
                {modulo.caracteristicas.map((carac, i) => (
                  <div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /><span className="text-sm font-medium text-zinc-300">{carac}</span></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}