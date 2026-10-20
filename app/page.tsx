"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Send, Globe, ChevronDown, TerminalSquare, Building2, Cpu, Workflow } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const content = {
  ES: {
    nav: { nosotros: "Quiénes Somos", portafolio: "Portafolio", contacto: "Contacto" },
    navDrop: { atlas: "IT (ATLAS)", atlasDesc: "Automatización Corporativa", saas: "Negocios Independientes", saasDesc: "SaaS de Gestión Integral" },
    hero: { badge: "El Ecosistema Tecnológico Definitivo", title1: "Bienvenido al mundo", desc: "Ingeniería de software de nivel empresarial. Sincronizamos operaciones, automatizamos el soporte y escalamos tu crecimiento.", btn: "Explorar Portafolio" },
    about: { title: "Quiénes Somos", desc: "OmniSync nace de la unión de ingenieros de sistemas con amplia trayectoria en la automatización corporativa y mesas de servicio ITSM. Llevamos la rigurosidad empresarial tanto al desarrollo de herramientas para grandes áreas de IT, como a la digitalización de negocios independientes.", roles: { gabriel: "Co-Founder & Tech Lead", gabrielDesc: "Especialista en arquitecturas escalables. Lidera el código para asegurar que cada módulo responda en tiempo real.", carlos: "Ingeniero de Sistemas", carlosDesc: "Mente maestra detrás de los flujos SaaS. Garantiza que negocios independientes tengan herramientas precisas y fáciles de usar.", marizuly: "Service Management", marizulyDesc: "Experta en optimización corporativa. Conecta operaciones técnicas con automatización y flujos ITSM." } },
    portfolio: { title: "Nuestro Portafolio", subtitle: "Dos ecosistemas especializados. Un nivel de excelencia.", divCorp: "División Corporativa", atlasTitle: "IT", atlasSubtitle: "(ATLAS)", atlasDesc: "Capa Técnica Automatizada para Service Desks. Diagnóstico de hardware, telemetría, reparación autónoma y reducción masiva de tickets operativos.", atlasBtn: "Conocer ATLAS", divPyme: "División Pymes", saasTitle: "Negocios", saasSubtitle: "Independientes", saasDesc: "Ecosistema de gestión integral. Agenda inteligente, historias clínicas, inventario y facturación adaptados a clínicas, talleres, gimnasios y más.", saasBtn: "Ver Soluciones SaaS" },
    contact: { title: "Inicia tu transformación", subtitle: "Contáctanos para una demostración personalizada del ecosistema.", nameLabel: "Nombre Completo", namePlace: "Tu nombre o empresa", emailLabel: "Correo Electrónico", emailPlace: "ejemplo@correo.com", serviceLabel: "Servicio de Interés", opt1: "IT (ATLAS) - Automatización Corporativa", opt2: "Negocios Independientes - Software de Gestión", opt3: "Consultoría General", btn: "Enviar Mensaje" }
  },
  EN: {
    nav: { nosotros: "About Us", portafolio: "Portfolio", contacto: "Contact" },
    navDrop: { atlas: "IT (ATLAS)", atlasDesc: "Corporate Automation", saas: "Independent Businesses", saasDesc: "Integrated Management SaaS" },
    hero: { badge: "The Ultimate Tech Ecosystem", title1: "Welcome to the world of", desc: "Enterprise-level software engineering. We synchronize operations, automate support, and scale your growth.", btn: "Explore Portfolio" },
    about: { title: "About Us", desc: "OmniSync was born from the union of system engineers with extensive experience in corporate automation and ITSM service desks. We bring enterprise rigor both to the development of tools for large IT areas and to the digitization of independent businesses.", roles: { gabriel: "Co-Founder & Tech Lead", gabrielDesc: "Specialist in scalable architectures. Leads the code to ensure each module responds in real-time.", carlos: "Systems Engineer", carlosDesc: "Mastermind behind the SaaS flows. Ensures independent businesses have precise and easy-to-use tools.", marizuly: "Service Management", marizulyDesc: "Expert in corporate optimization. Connects technical operations with automation and ITSM flows." } },
    portfolio: { title: "Our Portfolio", subtitle: "Two specialized ecosystems. One level of excellence.", divCorp: "Corporate Division", atlasTitle: "IT", atlasSubtitle: "(ATLAS)", atlasDesc: "Automated Technical Layer for Service Desks. Hardware diagnostics, telemetry, autonomous repair, and massive reduction of operational tickets.", atlasBtn: "Discover ATLAS", divPyme: "SMB Division", saasTitle: "Independent", saasSubtitle: "Businesses", saasDesc: "Integrated management ecosystem. Smart scheduling, clinical records, inventory, and billing adapted for clinics, workshops, gyms, and more.", saasBtn: "View SaaS Solutions" },
    contact: { title: "Start your transformation", subtitle: "Contact us for a personalized demonstration of the ecosystem.", nameLabel: "Full Name", namePlace: "Your name or company", emailLabel: "Email Address", emailPlace: "example@email.com", serviceLabel: "Service of Interest", opt1: "IT (ATLAS) - Corporate Automation", opt2: "Independent Businesses - Management Software", opt3: "General Consulting", btn: "Send Message" }
  }
};

export default function Home() {
  const { idioma, setIdioma } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  
  const t = content[idioma];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* EFECTO AURORA FONDO */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div animate={{ x: [0, 150, -100, 0], y: [0, -100, 150, 0], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[130px]" />
        <motion.div animate={{ x: [0, -150, 100, 0], y: [0, 150, -100, 0], scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[130px]" />
        <motion.div animate={{ x: [0, 100, -150, 0], y: [0, 100, -150, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }} className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <motion.div className="fixed top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full pointer-events-none blur-[150px] z-10" animate={{ x: mousePosition.x - 300, y: mousePosition.y - 300 }} transition={{ type: "tween", ease: "backOut", duration: 0.5 }} />

      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          <div className="text-2xl font-extrabold tracking-tight relative z-20">
            Omni<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Sync</span>
          </div>

          <nav className="hidden md:flex gap-10 text-sm font-medium text-zinc-400 items-center relative z-20">
            <a href="#nosotros" className="hover:text-white transition-colors">{t.nav.nosotros}</a>
            <div className="relative group py-4">
              <span className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
                {t.nav.portafolio} <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </span>
              <div className="absolute top-full left-0 mt-0 w-64 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden flex flex-col p-2">
                <Link href="/atlas" className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors">
                  <TerminalSquare className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <span className="block text-white font-bold text-sm">{t.navDrop.atlas}</span>
                    <span className="block text-xs text-zinc-500 mt-1">{t.navDrop.atlasDesc}</span>
                  </div>
                </Link>
                <Link href="/negocios" className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors mt-1">
                  <Building2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="block text-white font-bold text-sm">{t.navDrop.saas}</span>
                    <span className="block text-xs text-zinc-500 mt-1">{t.navDrop.saasDesc}</span>
                  </div>
                </Link>
              </div>
            </div>
            <a href="#contacto" className="hover:text-white transition-colors">{t.nav.contacto}</a>
          </nav>

          <div className="flex items-center gap-4 relative z-20">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-zinc-500 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <button onClick={() => setIdioma("ES")} className={`transition-colors ${idioma === "ES" ? "text-white" : "hover:text-white"}`}>ES</button>
              <span>|</span>
              <button onClick={() => setIdioma("EN")} className={`transition-colors ${idioma === "EN" ? "text-white" : "hover:text-white"}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-20">
        <section id="bienvenida" className="relative min-h-screen flex items-center justify-center pt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center max-w-5xl px-6">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-zinc-300 mb-8 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              {t.hero.badge}
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl">
              {t.hero.title1} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">OmniSync</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">{t.hero.desc}</p>
            <a href="#portafolio" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              {t.hero.btn} <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </section>

        <section id="nosotros" className="relative py-32 px-6 border-t border-white/5 bg-zinc-950/40 backdrop-blur-sm">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">{t.about.title}</h2>
              <p className="text-zinc-300 text-lg leading-relaxed drop-shadow-sm">{t.about.desc}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { nombre: "Gabriel Orjuela", rol: t.about.roles.gabriel, desc: t.about.roles.gabrielDesc, icon: <Cpu className="w-6 h-6 text-blue-400"/>, color: "hover:border-blue-500/50" },
                { nombre: "Carlos Correa", rol: t.about.roles.carlos, desc: t.about.roles.carlosDesc, icon: <Building2 className="w-6 h-6 text-emerald-400"/>, color: "hover:border-emerald-500/50" },
                { nombre: "Marizuly Palacio", rol: t.about.roles.marizuly, desc: t.about.roles.marizulyDesc, icon: <Workflow className="w-6 h-6 text-cyan-400"/>, color: "hover:border-cyan-500/50" }
              ].map((fundador, index) => (
                <motion.div key={index} whileHover={{ y: -10 }} className={`bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-md transition-colors ${fundador.color} shadow-2xl`}>
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">{fundador.icon}</div>
                  <h4 className="text-2xl font-bold text-white mb-1">{fundador.nombre}</h4>
                  <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-white uppercase tracking-wider mb-4">{fundador.rol}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{fundador.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="portafolio" className="relative py-32 px-6 border-t border-white/5 bg-zinc-950/60 backdrop-blur-sm">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{t.portfolio.title}</h2>
              <p className="text-zinc-300 text-lg">{t.portfolio.subtitle}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div whileHover={{ scale: 1.02 }} className="group relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-10 md:p-14 relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-400 uppercase tracking-widest font-bold mb-8 w-fit">{t.portfolio.divCorp}</div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t.portfolio.atlasTitle} <span className="text-blue-500">{t.portfolio.atlasSubtitle}</span></h3>
                  <p className="text-zinc-300 text-lg mb-8 leading-relaxed flex-grow">{t.portfolio.atlasDesc}</p>
                  <Link href="/atlas" className="inline-flex items-center gap-2 text-white font-bold group-hover:text-blue-400 transition-colors">{t.portfolio.atlasBtn} <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" /></Link>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="group relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="p-10 md:p-14 relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 uppercase tracking-widest font-bold mb-8 w-fit">{t.portfolio.divPyme}</div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t.portfolio.saasTitle} <span className="text-emerald-500">{t.portfolio.saasSubtitle}</span></h3>
                  <p className="text-zinc-300 text-lg mb-8 leading-relaxed flex-grow">{t.portfolio.saasDesc}</p>
                  <Link href="/negocios" className="inline-flex items-center gap-2 text-white font-bold group-hover:text-emerald-400 transition-colors">{t.portfolio.saasBtn} <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" /></Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="contacto" className="relative py-32 px-6 border-t border-white/5 bg-zinc-950/80 backdrop-blur-md">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{t.contact.title}</h2>
              <p className="text-zinc-300 text-lg">{t.contact.subtitle}</p>
            </div>
            <div className="bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.contact.nameLabel}</label>
                    <input type="text" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors shadow-inner" placeholder={t.contact.namePlace} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.contact.emailLabel}</label>
                    <input type="email" className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors shadow-inner" placeholder={t.contact.emailPlace} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{t.contact.serviceLabel}</label>
                  <select className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer appearance-none shadow-inner">
                    <option value="atlas">{t.contact.opt1}</option>
                    <option value="saas">{t.contact.opt2}</option>
                    <option value="otro">{t.contact.opt3}</option>
                  </select>
                </div>
                <button type="button" className="w-full flex items-center justify-center gap-3 py-5 bg-white hover:bg-zinc-200 text-black rounded-xl font-bold transition-transform hover:scale-[1.02] mt-8 text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {t.contact.btn} <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}