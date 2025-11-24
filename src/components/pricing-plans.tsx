"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, MessageCircle } from "lucide-react"

const plans = [
  {
    id: "basico",
    name: "Plan Básico",
    price: 49000,
    period: "mes",
    description: "Perfecto para empezar a promocionar tu negocio",
    icon: Star,
    color: "bg-blue-600",
    popular: false,
    features: [
      "Perfil básico en el directorio",
      "Hasta 5 fotos de tu negocio",
      "Información de contacto completa",
      "Horarios de atención",
      "Ubicación en el mapa",
      "Soporte por email",
    ],
    limitations: ["Sin destacado en búsquedas", "Sin promociones especiales", "Sin estadísticas detalladas"],
  },
  {
    id: "avanzado",
    name: "Plan Avanzado",
    price: 99000,
    period: "mes",
    description: "Ideal para negocios que buscan mayor visibilidad",
    icon: Zap,
    color: "bg-orange-600",
    popular: true,
    features: [
      "Todo lo del Plan Básico",
      "Perfil destacado en búsquedas",
      "Hasta 20 fotos y videos",
      "Galería de productos/servicios",
      "Sistema de reseñas y calificaciones",
      "Promociones y descuentos especiales",
      "Estadísticas básicas de visitas",
      "Soporte prioritario",
    ],
    limitations: ["Sin posición premium en mapa", "Sin análisis avanzados"],
  },
  {
    id: "profesional",
    name: "Plan Profesional",
    price: 199000,
    period: "mes",
    description: "Máxima visibilidad y herramientas avanzadas",
    icon: Crown,
    color: "bg-purple-600",
    popular: false,
    features: [
      "Todo lo del Plan Avanzado",
      "Posición privilegiada en el mapa",
      "Perfil destacado en página principal",
      "Fotos y videos ilimitados",
      "Tour virtual 360°",
      "Sistema de reservas integrado",
      "Cotizaciones automáticas",
      "Análisis detallados y reportes",
      "Campañas publicitarias dirigidas",
      "Soporte 24/7 por WhatsApp",
      "Gestor de cuenta dedicado",
    ],
    limitations: [],
  },
]

export function PricingPlans() {
  const handlePlanSelect = (planId: string, planName: string, price: number) => {
    const message = encodeURIComponent(
      `Hola! Me interesa contratar el ${planName} por $${price.toLocaleString()} COP/mes para mi negocio turístico. ¿Podrían darme más información?`,
    )
    window.open(`https://wa.me/573185550123?text=${message}`, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-16 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planes para Negocios</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Elige el plan perfecto para potenciar tu presencia digital en el Huila
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan) => {
          const IconComponent = plan.icon
          return (
            <Card
              key={plan.id}
              className={`relative ${plan.popular
                ? "border-orange-500 border-2 shadow-xl scale-105 z-10"
                : "border-gray-200 hover:scale-105 hover:z-20 hover:shadow-xl"
                } transition-all duration-300 bg-card`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1">
                  Más Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-foreground mt-2">
                  ${plan.price.toLocaleString()}
                  <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Incluye:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-muted-foreground">No incluye:</h4>
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="h-5 w-5 border border-muted rounded mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  className={`w-full ${plan.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-primary hover:bg-primary/90"
                    } text-white shadow-md hover:shadow-lg transition-all`}
                  onClick={() => handlePlanSelect(plan.id, plan.name, plan.price)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contratar Plan
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
