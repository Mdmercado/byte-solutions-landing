"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import {
  Code,
  Shield,
  Smartphone,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Dumbbell,
  Car,
  Package,
  ExternalLink,
  Star,
  Quote,
  Linkedin,
  Briefcase,
  CalendarDays,
  Bot,
  MessageSquare,
  BarChart3,
  BellRing,
  Brain,
  Building2,
  Scale,
  HeartPulse,
  Users,
  Factory,
  ShoppingBag,
  GraduationCap,
  Layers,
  Cpu,
  Globe,
} from "lucide-react"

/* --- Nav --- */
const NAV_ITEMS = [
  { id: "services", label: "Servicios" },
  { id: "saas", label: "SaaS" },
  { id: "bots", label: "Bots IA" },
  { id: "custom", label: "A Medida" },
  { id: "testimonials", label: "Clientes" },
  { id: "team", label: "Equipo" },
  { id: "booking", label: "Agendar" },
  { id: "contact", label: "Contacto" },
]

/* --- Brand Logo --- */
function BrandLogo({ className, width = 140, height = 45 }: { className?: string; width?: number; height?: number }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className={className} style={{ width, height }} />
  return (
    <Image
      src={resolvedTheme === "dark" ? "/images/logo-white.png" : "/images/logo-main.png"}
      alt="Byte Solutions IT"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

/* ============================================================ */
export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const openPlan = (plan: string) => {
    setSelectedPlan(plan)
    setIsContactFormOpen(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ====== NAVBAR ====== */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center" aria-label="Ir al inicio">
            <BrandLogo className="h-8 w-auto" />
          </button>
          <div className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors">
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" onClick={() => setIsContactFormOpen(true)} className="hidden sm:flex">Hablemos</Button>
            <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="w-full text-left px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button size="sm" className="w-full" onClick={() => { setIsContactFormOpen(true); setIsMobileMenuOpen(false) }}>Hablemos</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ====== HERO ====== */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-xs font-medium tracking-wide bg-primary text-primary-foreground">
              Bots + IA + Desarrollo a Medida
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.1]">
              Automatiza y escala tu negocio con{" "}
              <span className="text-primary">software inteligente</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
              Creamos bots de WhatsApp con IA, plataformas SaaS desde ~$50 USD/mes y desarrollo a medida
              para cualquier industria. Tu solucion, a tu medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollTo("services")} className="gap-2">
                Explorar Servicios <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("booking")}>
                Agendar Llamada Gratis
              </Button>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: "+50", label: "Proyectos Entregados" },
              { value: "~$50", label: "USD/mes por SaaS" },
              { value: "24/7", label: "Bots Activos" },
              { value: "4.9/5", label: "Satisfaccion" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 3 CORE SERVICES OVERVIEW ====== */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Nuestros Servicios</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Tres pilares, infinitas posibilidades</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nuestro modelo se basa en proyectos personalizados y suscripciones SaaS accesibles, no en planes genericos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "Bots de WhatsApp con IA",
                desc: "Automatiza la atencion al cliente, reservas, cobros y seguimientos con chatbots inteligentes que trabajan 24/7 en la plataforma mas usada de Latinoamerica.",
                cta: "Ver mas sobre Bots",
                target: "bots",
                badge: "Mas solicitado",
              },
              {
                icon: Layers,
                title: "Soluciones SaaS",
                desc: "Plataformas listas para usar con IA integrada por ~$50 USD/mes. Gestion de gimnasios, lavaderos, inventario y mas, con bot de WhatsApp incluido.",
                cta: "Ver Productos SaaS",
                target: "saas",
                badge: "Desde ~$50/mes",
              },
              {
                icon: Code,
                title: "Desarrollo a Medida",
                desc: "Apps web, mobile, plataformas complejas y sistemas a medida para cualquier industria. Analizamos tu negocio y construimos exactamente lo que necesitas.",
                cta: "Solicitar Presupuesto",
                target: "custom",
                badge: "Personalizado",
              },
            ].map((s) => (
              <Card key={s.title} className="flex flex-col p-8 hover:border-primary/30 transition-colors group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-[10px]">{s.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
                <Button variant="ghost" className="w-fit gap-2 -ml-4 text-primary hover:text-primary" onClick={() => scrollTo(s.target)}>
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SAAS PRODUCTS ====== */}
      <section id="saas" className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Soluciones SaaS ~$50 USD/mes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Plataformas listas para implementar</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Sistemas probados con IA y bot de WhatsApp incluido. Suscripcion mensual accesible, sin grandes inversiones iniciales.
            </p>
          </div>

          {/* Product 1 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">~$50 USD/mes</Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">GymManager Pro</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gestion integral para gimnasios y centros fitness. Bot de WhatsApp para reservas automaticas,
                cobros recurrentes, y reportes con analisis predictivo.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Gestion de miembros y membresias", "Bot WhatsApp: reservas, pagos, recordatorios", "Cobros recurrentes automatizados", "Dashboard con IA predictiva", "App mobile para socios"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => openPlan("gym")} className="gap-2">Solicitar Demo <ArrowRight className="h-4 w-4" /></Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Probar Gratis <ExternalLink className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <Image src="/products/gym-dashboard.jpg" alt="GymManager Pro Dashboard" width={800} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <Image src="/products/carwash-dashboard.jpg" alt="WashFlow Dashboard" width={800} height={500} className="w-full h-auto" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">~$50 USD/mes</Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">WashFlow</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sistema completo para lavaderos de autos. Turnos via WhatsApp, seguimiento de vehiculos en tiempo real
                y facturacion automatizada con metricas IA.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Turnos automaticos via bot WhatsApp", "Seguimiento de vehiculos en tiempo real", "Facturacion y cobros integrados", "Dashboard con metricas e IA", "Notificaciones automaticas a clientes"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => openPlan("carwash")} className="gap-2">Solicitar Demo <ArrowRight className="h-4 w-4" /></Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Probar Gratis <ExternalLink className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">~$50 USD/mes</Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">StockByte</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Inventario inteligente para PyMEs. Alertas de stock con IA, analisis de rotacion,
                bot de WhatsApp para consultas y gestion multi-sucursal.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {["Control de inventario multi-sucursal", "Alertas inteligentes de stock (IA)", "Reportes de ventas y rotacion", "Bot WhatsApp para consultas de stock", "Lectura de codigos de barra"].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => openPlan("inventory")} className="gap-2">Solicitar Demo <ArrowRight className="h-4 w-4" /></Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Probar Gratis <ExternalLink className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <Image src="/products/inventory-dashboard.jpg" alt="StockByte Dashboard" width={800} height={500} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== BOTS & IA ====== */}
      <section id="bots" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,hsl(var(--primary)/0.05),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Bots de WhatsApp + Inteligencia Artificial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Tu negocio atendiendo 24/7, sin esfuerzo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nuestros bots combinan WhatsApp con IA avanzada para automatizar cada punto de contacto
              con tus clientes. Mas ventas, menos carga operativa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: MessageSquare, title: "Chatbots WhatsApp", desc: "Atencion automatizada 24/7. Reservas, consultas, seguimiento y cobros sin intervencion humana." },
              { icon: BarChart3, title: "Reportes Automaticos", desc: "Informes semanales generados por IA con insights accionables y recomendaciones de negocio." },
              { icon: BellRing, title: "Mensajes Inteligentes", desc: "Recordatorios de pago, alertas de stock, seguimiento post-venta. Todo automatizado." },
              { icon: Brain, title: "Analisis Predictivo", desc: "Prediccion de demanda, churn de clientes, oportunidades de crecimiento con machine learning." },
            ].map((item) => (
              <Card key={item.title} className="p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 lg:p-10 border-primary/20 bg-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">WhatsApp Business + IA = Resultado</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Implementamos bots personalizados que atienden, venden y fidelizan por vos. Integramos
                  con tu sistema de gestion existente o con cualquiera de nuestras plataformas SaaS.
                </p>
                <Button onClick={() => openPlan("bot")} className="gap-2">
                  Quiero un Bot para mi Negocio <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "80%", label: "Menos consultas manuales" },
                  { value: "3x", label: "Mas rapido en respuestas" },
                  { value: "24/7", label: "Disponibilidad total" },
                  { value: "+40%", label: "Mejora en conversion" },
                ].map((s) => (
                  <div key={s.label} className="p-4 rounded-lg bg-muted border border-border text-center">
                    <div className="text-xl font-bold text-primary font-mono">{s.value}</div>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ====== CUSTOM DEVELOPMENT ====== */}
      <section id="custom" className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Desarrollo a Medida</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Tu idea, nuestro codigo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              No vendemos paquetes genericos. Analizamos tu negocio, entendemos tus procesos y construimos
              exactamente la solucion que necesitas, con IA integrada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Cpu, title: "Plataformas SaaS", desc: "Productos multi-tenant escalables con suscripciones e IA." },
              { icon: Smartphone, title: "Apps Web & Mobile", desc: "React, Next.js, React Native con integraciones nativas." },
              { icon: Bot, title: "Bots & Automatizacion", desc: "WhatsApp, Telegram, workflows automatizados con IA." },
              { icon: Globe, title: "APIs & Integraciones", desc: "Conectamos tus sistemas existentes de forma segura." },
            ].map((item) => (
              <Card key={item.title} className="p-6 hover:border-primary/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-8">Industrias que transformamos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: ShoppingBag, label: "Comercios" },
                { icon: Factory, label: "Fabricas" },
                { icon: Car, label: "Concesionarias" },
                { icon: Scale, label: "Estudios Juridicos" },
                { icon: HeartPulse, label: "Clinicas" },
                { icon: Users, label: "Asociaciones & SRL" },
                { icon: Dumbbell, label: "Clubes" },
                { icon: Building2, label: "Cooperativas" },
                { icon: GraduationCap, label: "Educacion" },
                { icon: BarChart3, label: "Consultoras" },
                { icon: Package, label: "Logistica" },
                { icon: Smartphone, label: "Startups" },
              ].map((niche) => (
                <button
                  key={niche.label}
                  onClick={() => openPlan("custom")}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group"
                >
                  <niche.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{niche.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              No importa tu rubro. Creamos la solucion perfecta para tu negocio con IA integrada.
            </p>
            <Button onClick={() => openPlan("custom")} className="gap-2">
              Solicitar Presupuesto <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS & PORTFOLIO ====== */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Casos de Exito</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Empresas reales que automatizaron su operacion con nuestros bots, SaaS y desarrollo a medida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                name: "Maria Gonzalez",
                role: "Duena - CrossFit Arena",
                avatar: "MG",
                text: "El bot de WhatsApp de GymManager Pro cambio todo. Los socios reservan clases, pagan y reciben recordatorios sin que nosotros hagamos nada. $50/mes que se pagan solos.",
              },
              {
                name: "Juan Martinez",
                role: "Gerente - AutoSpa Premium",
                avatar: "JM",
                text: "WashFlow nos dio un sistema profesional. Los clientes sacan turno por WhatsApp, les llega aviso cuando el auto esta listo. La facturacion integrada nos ahorra horas.",
              },
              {
                name: "Laura Rodriguez",
                role: "Fundadora - Tienda Naturale",
                avatar: "LR",
                text: "El bot nos avisa cuando un producto esta por agotarse y los reportes de IA nos ayudaron a entender que productos rotan mejor. StockByte es imprescindible.",
              },
            ].map((t) => (
              <Card key={t.name} className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{'"'}{t.text}{'"'}</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">{t.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Portfolio */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Proyectos que demuestran nuestra capacidad.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "GymManager Pro", category: "SaaS - Fitness", img: "/products/gym-dashboard.jpg" },
              { title: "WashFlow", category: "SaaS - Automotor", img: "/products/carwash-dashboard.jpg" },
              { title: "StockByte", category: "SaaS - Inventario", img: "/products/inventory-dashboard.jpg" },
            ].map((project) => (
              <Card key={project.title} className="overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image src={project.img} alt={project.title} width={600} height={375} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-primary font-medium mb-1">{project.category}</p>
                  <h4 className="font-semibold">{project.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY US (replaces old About) ====== */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Por que Byte Solutions IT</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">No vendemos planes, resolvemos problemas</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nuestro modelo es simple: entendemos tu negocio, te proponemos una solucion concreta y la construimos.
                Si ya tenemos un SaaS que se adapta, lo implementamos por ~$50 USD/mes.
                Si necesitas algo especifico, lo desarrollamos a medida.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Toda solucion incluye inteligencia artificial y automatizacion via WhatsApp.
                Somos un equipo de fundadores con experiencia en empresas tech lideres de Latinoamerica.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "+50", label: "Proyectos entregados" },
                  { value: "3", label: "Productos SaaS activos" },
                  { value: "~$50", label: "USD/mes por SaaS" },
                  { value: "4.9/5", label: "Rating de clientes" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-muted border border-border">
                    <div className="text-2xl font-bold text-primary font-mono mb-1">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl" />
                <div className="relative bg-card border border-border rounded-xl p-10 text-center">
                  <BrandLogo className="h-12 w-auto mx-auto mb-6" width={240} height={80} />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {'"'}Creemos que la tecnologia y la IA deben ser accesibles para todos los negocios, sin importar su tamanio.{'"'}
                  </p>
                  <div className="mt-4 text-xs text-muted-foreground">-- El equipo de Byte Solutions IT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TEAM ====== */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Nuestro Equipo</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Los fundadores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Un equipo multidisciplinario con experiencia en empresas tech lideres.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Alejandro Ruiz",
                role: "Fullstack Software Architect & Developer",
                avatar: "/avatars/fullstack-architect.jpg",
                initials: "AR",
                bio: "Especialista en arquitectura cloud-native, microservicios, IA aplicada y soluciones enterprise escalables.",
                experience: [
                  { company: "MercadoLibre", role: "Sr. Software Engineer" },
                  { company: "Globant", role: "Tech Lead" },
                ],
                linkedin: "#",
              },
              {
                name: "Martin Vega",
                role: "Fullstack Developer & Ecommerce",
                avatar: "/avatars/ecommerce-developer.jpg",
                initials: "MV",
                bio: "Experto en plataformas e-commerce, integraciones de pago, bots de WhatsApp y desarrollo full-stack.",
                experience: [
                  { company: "Tiendanube", role: "Sr. Frontend Developer" },
                  { company: "Despegar", role: "Fullstack Developer" },
                ],
                linkedin: "#",
              },
              {
                name: "Carlos Silva",
                role: "Social Media & Design Expert",
                avatar: "/avatars/design-expert.jpg",
                initials: "CS",
                bio: "Creativo digital especializado en branding, UX/UI y estrategias de social media que conectan marcas.",
                experience: [
                  { company: "R/GA", role: "Sr. UX Designer" },
                  { company: "Accenture", role: "Creative Lead" },
                ],
                linkedin: "#",
              },
            ].map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center mb-5">
                  <Avatar className="w-24 h-24 mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed text-center mb-5">{member.bio}</p>
                <div className="border-t border-border pt-4 mb-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2.5 flex items-center gap-1.5">
                    <Briefcase className="h-3 w-3" /> Experiencia
                  </p>
                  <div className="flex flex-col gap-2">
                    {member.experience.map((exp) => (
                      <div key={exp.company} className="flex items-center justify-between text-xs">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">{exp.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BOOKING / CALENDLY ====== */}
      <section id="booking" className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Agendar Llamada</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Hablemos de tu proyecto</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              30 minutos gratis con nuestro equipo para analizar tus necesidades y proponerte la mejor solucion.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {[
                { icon: CalendarDays, title: "Consulta Personalizada", desc: "Analizamos tu negocio y te proponemos bots, SaaS o desarrollo a medida." },
                { icon: Zap, title: "30 Min, Sin Compromiso", desc: "Tiempo para entender tus necesidades y darte una propuesta concreta." },
                { icon: Briefcase, title: "Habla con los Fundadores", desc: "Acceso directo a nuestros expertos para una perspectiva estrategica." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <Card className="p-5">
                <h4 className="font-medium text-sm mb-3">Que incluye la llamada</h4>
                <ul className="flex flex-col gap-2">
                  {["Analisis de tus procesos actuales", "Demo de productos SaaS relevantes", "Propuesta de bots e IA aplicada", "Estimacion de costos y tiempos"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-primary/20">
                <div className="p-4 border-b border-border flex items-center gap-3 bg-card">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Byte Solutions IT - Llamada Estrategica</p>
                    <p className="text-xs text-muted-foreground">30 min | Google Meet</p>
                  </div>
                </div>
                <div className="relative w-full bg-background" style={{ minHeight: "660px" }}>
                  <iframe
                    src="https://calendly.com/bytesolutionsit/30min"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Agendar llamada con Byte Solutions IT"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-card">
                    <CalendarDays className="h-12 w-12 text-primary/30 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Reserva tu llamada</h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                      Configura tu URL de Calendly para habilitar reservas directas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button onClick={() => scrollTo("contact")} className="gap-2"><Mail className="h-4 w-4" /> Contactar por Mail</Button>
                      <Button variant="outline" asChild>
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="gap-2"><ExternalLink className="h-4 w-4" /> Ir a Calendly</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACT ====== */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Contacto</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Contanos tu proyecto</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ya sea un bot de WhatsApp, una plataforma SaaS o un desarrollo completo a medida,
                escribinos y te respondemos en menos de 24 horas con una propuesta concreta.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, title: "Email", value: "contacto@bytesolutions.com" },
                  { icon: Phone, title: "Telefono", value: "+54 11 1234-5678" },
                  { icon: MapPin, title: "Ubicacion", value: "Buenos Aires, Argentina (Remoto)" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Enviar mensaje</CardTitle>
                <CardDescription>Completa el formulario y nos ponemos en contacto.</CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const data = new FormData(form)
                    const subject = encodeURIComponent(`Consulta web - ${data.get("nombre")}`)
                    const body = encodeURIComponent(`Nombre: ${data.get("nombre")}\nEmail: ${data.get("email")}\nEmpresa: ${data.get("empresa")}\n\nMensaje:\n${data.get("mensaje")}`)
                    window.open(`mailto:contacto@bytesolutions.com?subject=${subject}&body=${body}`, "_blank")
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Nombre</label>
                      <input type="text" name="nombre" placeholder="Tu nombre" required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email</label>
                      <input type="email" name="email" placeholder="tu@email.com" required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Empresa</label>
                    <input type="text" name="empresa" placeholder="Tu empresa" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Mensaje</label>
                    <textarea name="mensaje" rows={4} placeholder="Contanos que necesitas: bot, SaaS, desarrollo a medida..." required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  </div>
                  <Button type="submit" className="w-full gap-2"><Zap className="h-4 w-4" /> Enviar Mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <BrandLogo className="h-7 w-auto mb-4" width={130} height={42} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bots de WhatsApp con IA, soluciones SaaS accesibles y desarrollo a medida para cualquier industria.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-4">Servicios</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollTo("bots")} className="hover:text-foreground transition-colors text-left">Bots de WhatsApp</button></li>
                <li><button onClick={() => scrollTo("saas")} className="hover:text-foreground transition-colors text-left">Soluciones SaaS</button></li>
                <li><button onClick={() => scrollTo("custom")} className="hover:text-foreground transition-colors text-left">Desarrollo a Medida</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-4">Productos SaaS</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {["GymManager Pro", "WashFlow", "StockByte"].map((p) => (
                  <li key={p}><button onClick={() => scrollTo("saas")} className="hover:text-foreground transition-colors text-left">{p}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-4">Empresa</h4>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {[
                  { label: "Equipo", id: "team" },
                  { label: "Clientes", id: "testimonials" },
                  { label: "Agendar Llamada", id: "booking" },
                  { label: "Contacto", id: "contact" },
                ].map((l) => (
                  <li key={l.id}><button onClick={() => scrollTo(l.id)} className="hover:text-foreground transition-colors text-left">{l.label}</button></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">{new Date().getFullYear()} Byte Solutions IT. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <button className="hover:text-foreground transition-colors">Privacidad</button>
              <button className="hover:text-foreground transition-colors">Terminos</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} selectedPlan={selectedPlan} />
    </div>
  )
}
