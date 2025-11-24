"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Globe, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react"

interface BusinessContactProps {
  businessId: string
}

const contactData = {
  name: "Hotel Boutique Casa Colonial",
  phone: "+57 318 555 0123",
  whatsapp: "+57 318 555 0123",
  email: "info@casacolonial.com",
  website: "www.casacolonial.com",
  address: "Calle 7 #5-24, Centro Histórico, Neiva, Huila",
  isOpen: true,
  openHours: {
    monday: "24 horas",
    tuesday: "24 horas",
    wednesday: "24 horas",
    thursday: "24 horas",
    friday: "24 horas",
    saturday: "24 horas",
    sunday: "24 horas",
  },
  currentStatus: "Abierto • Cierra nunca",
  socialMedia: {
    facebook: "https://facebook.com/casacolonial",
    instagram: "https://instagram.com/casacolonial",
    twitter: "https://twitter.com/casacolonial",
  },
}

export function BusinessContact({ businessId }: BusinessContactProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa obtener más información sobre ${contactData.name}. ¿Podrían ayudarme?`,
    )
    window.open(`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  const handleDirectionsClick = () => {
    const address = encodeURIComponent(contactData.address)
    window.open(`https://maps.google.com/maps?q=${address}`, "_blank")
  }

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Información de Contacto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Status */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Estado:</span>
            <Badge className={contactData.isOpen ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
              {contactData.isOpen ? "Abierto" : "Cerrado"}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">{contactData.currentStatus}</div>

          {/* Contact Methods */}
          <div className="space-y-3">
            <Button className="w-full" onClick={handleWhatsAppClick}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar por WhatsApp
            </Button>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Llamar
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>

            <Button variant="outline" className="w-full bg-transparent" onClick={handleDirectionsClick}>
              <Navigation className="h-4 w-4 mr-2" />
              Cómo Llegar
            </Button>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{contactData.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{contactData.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{contactData.website}</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
              <span className="text-sm">{contactData.address}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Opening Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Horarios de Atención
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(contactData.openHours).map(([day, hours]) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="capitalize font-medium">
                  {day === "monday"
                    ? "Lunes"
                    : day === "tuesday"
                      ? "Martes"
                      : day === "wednesday"
                        ? "Miércoles"
                        : day === "thursday"
                          ? "Jueves"
                          : day === "friday"
                            ? "Viernes"
                            : day === "saturday"
                              ? "Sábado"
                              : "Domingo"}
                </span>
                <span className="text-muted-foreground">{hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <MessageCircle className="h-4 w-4 mr-2" />
            Hacer una Reserva
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Solicitar Cotización
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Mail className="h-4 w-4 mr-2" />
            Enviar Consulta
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
