"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, DollarSign, Info, MapPin } from "lucide-react"

interface WhatsAppQuickActionsProps {
  businessName: string
  phoneNumber: string
}

const quickActions = [
  {
    id: "reservation",
    label: "Hacer Reserva",
    icon: Calendar,
    message: "Hola! Me gustaría hacer una reserva. ¿Podrían ayudarme con disponibilidad y precios?",
  },
  {
    id: "quote",
    label: "Solicitar Cotización",
    icon: DollarSign,
    message: "Hola! Me interesa solicitar una cotización para sus servicios. ¿Podrían enviarme información detallada?",
  },
  {
    id: "info",
    label: "Más Información",
    icon: Info,
    message: "Hola! Me gustaría obtener más información sobre sus servicios y ofertas disponibles.",
  },
  {
    id: "directions",
    label: "Cómo Llegar",
    icon: MapPin,
    message: "Hola! ¿Podrían ayudarme con indicaciones para llegar a su establecimiento?",
  },
]

export function WhatsAppQuickActions({ businessName, phoneNumber }: WhatsAppQuickActionsProps) {
  const handleActionClick = (actionMessage: string) => {
    const fullMessage = `${actionMessage}\n\n*Negocio:* ${businessName}\n\nGracias!`
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "")
    const encodedMessage = encodeURIComponent(fullMessage)
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5 text-green-600" />
          Acciones Rápidas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const IconComponent = action.icon
            return (
              <Button
                key={action.id}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-green-50 hover:border-green-300 bg-transparent"
                onClick={() => handleActionClick(action.message)}
              >
                <IconComponent className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
