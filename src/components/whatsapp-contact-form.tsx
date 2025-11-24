"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Send } from "lucide-react"

interface WhatsAppContactFormProps {
  businessName: string
  phoneNumber: string
  defaultSubject?: string
}

export function WhatsAppContactForm({ businessName, phoneNumber, defaultSubject }: WhatsAppContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: defaultSubject || "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `
*Consulta desde la plataforma de turismo Huila*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

---
Enviado desde la plataforma de turismo del Huila
    `.trim()

    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "")
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-600" />
          Contactar a {businessName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+57 300 123 4567"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe tu consulta o solicitud..."
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
            <Send className="h-4 w-4 mr-2" />
            Enviar por WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
