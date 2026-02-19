"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, CheckCircle, Send } from "lucide-react"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: string
}

const services: Record<string, { name: string; price: string; features: string[] }> = {
  gym: {
    name: "GymManager Pro",
    price: "~$50 USD/mes",
    features: ["Gestion de miembros", "Bot WhatsApp para turnos", "Cobros automaticos", "Reportes IA"],
  },
  carwash: {
    name: "WashFlow",
    price: "~$50 USD/mes",
    features: ["Turnos via WhatsApp", "Seguimiento de vehiculos", "Facturacion integrada", "Dashboard IA"],
  },
  inventory: {
    name: "StockByte",
    price: "~$50 USD/mes",
    features: ["Control multi-sucursal", "Alertas inteligentes", "Reportes automaticos", "Bot de consulta"],
  },
  bot: {
    name: "Bot de WhatsApp con IA",
    price: "Proyecto personalizado",
    features: ["Atencion 24/7 automatizada", "Integracion con tu sistema", "Respuestas con IA", "Panel de metricas"],
  },
  custom: {
    name: "Desarrollo a Medida",
    price: "Proyecto personalizado",
    features: ["Analisis de requerimientos", "Arquitectura dedicada", "IA integrada", "Soporte continuo"],
  },
  saas: {
    name: "Solucion SaaS Personalizada",
    price: "Desde ~$50 USD/mes",
    features: ["Plataforma multi-tenant", "Bot WhatsApp incluido", "Reportes automaticos", "Escalable"],
  },
}

export function ContactForm({ isOpen, onClose, selectedPlan }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  })
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const service = selectedPlan ? services[selectedPlan] : null
    const subject = encodeURIComponent(
      `Consulta: ${service ? service.name : "Informacion general"} - ${formData.empresa || formData.nombre}`
    )
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nEmpresa: ${formData.empresa}\nTelefono: ${formData.telefono}\n\nServicio de interes: ${service ? `${service.name} (${service.price})` : "General"}\n\nMensaje:\n${formData.mensaje}`
    )
    window.open(`mailto:contacto@bytesolutions.com?subject=${subject}&body=${body}`, "_blank")
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      onClose()
      setFormData({ nombre: "", email: "", empresa: "", telefono: "", mensaje: "" })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (!isOpen) return null

  const service = selectedPlan ? services[selectedPlan] : null

  if (isSent) {
    return (
      <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md text-center p-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Solicitud enviada</h3>
          <p className="text-muted-foreground text-sm">Nos pondremos en contacto en menos de 24hs.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Solicitar Propuesta</CardTitle>
            <CardDescription>Completa tus datos y te enviamos una propuesta personalizada.</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0 -mt-1">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {service && (
            <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{service.name}</h3>
                <Badge className="bg-primary text-primary-foreground">{service.price}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nombre *</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Empresa</label>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Tu empresa" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Telefono</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="+54 11 1234-5678" className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Contanos sobre tu proyecto</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={3} placeholder="Que necesitas? Describinos tu negocio y la solucion que buscas..." className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm" />
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="submit" className="flex-1 gap-2">
                <Send className="h-4 w-4" /> Enviar Solicitud
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
