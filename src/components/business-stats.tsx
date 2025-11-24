import { Card, CardContent } from "@/components/ui/card"
import { Building2, Star, MapPin, Percent } from "lucide-react"

const stats = [
  {
    icon: Building2,
    label: "Negocios Registrados",
    value: "200+",
    description: "Empresas activas",
    color: "text-primary",
  },
  {
    icon: Star,
    label: "Calificación Promedio",
    value: "4.6",
    description: "De 5 estrellas",
    color: "text-secondary",
  },
  {
    icon: MapPin,
    label: "Municipios Cubiertos",
    value: "15",
    description: "En todo el Huila",
    color: "text-primary",
  },
  {
    icon: Percent,
    label: "Con Ofertas Activas",
    value: "85%",
    description: "Descuentos disponibles",
    color: "text-destructive",
  },
]

export function BusinessStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
