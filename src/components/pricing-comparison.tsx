import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const features = [
  {
    category: "Perfil y Visibilidad",
    items: [
      { name: "Perfil en directorio", basic: true, professional: true, premium: true },
      { name: "Fotos del negocio", basic: "5 fotos", professional: "20 fotos", premium: "Ilimitadas" },
      { name: "Videos promocionales", basic: false, professional: true, premium: true },
      { name: "Tour virtual 360°", basic: false, professional: false, premium: true },
      { name: "Destacado en búsquedas", basic: false, professional: true, premium: true },
      { name: "Posición premium en mapa", basic: false, professional: false, premium: true },
      { name: "Destacado en página principal", basic: false, professional: false, premium: true },
    ],
  },
  {
    category: "Funcionalidades",
    items: [
      { name: "Información de contacto", basic: true, professional: true, premium: true },
      { name: "Horarios de atención", basic: true, professional: true, premium: true },
      { name: "Sistema de reseñas", basic: false, professional: true, premium: true },
      { name: "Promociones especiales", basic: false, professional: true, premium: true },
      { name: "Sistema de reservas", basic: false, professional: false, premium: true },
      { name: "Cotizaciones automáticas", basic: false, professional: false, premium: true },
    ],
  },
  {
    category: "Análisis y Soporte",
    items: [
      { name: "Estadísticas básicas", basic: false, professional: true, premium: true },
      { name: "Análisis detallados", basic: false, professional: false, premium: true },
      { name: "Reportes mensuales", basic: false, professional: false, premium: true },
      { name: "Soporte por email", basic: true, professional: true, premium: true },
      { name: "Soporte prioritario", basic: false, professional: true, premium: true },
      { name: "Soporte 24/7 WhatsApp", basic: false, professional: false, premium: true },
      { name: "Gestor de cuenta dedicado", basic: false, professional: false, premium: true },
    ],
  },
]

export function PricingComparison() {
  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-400 mx-auto" />
      )
    }
    return <span className="text-sm text-center">{value}</span>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Comparación Detallada de Planes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold">Características</th>
                <th className="text-center py-4 px-4 font-semibold">Básico</th>
                <th className="text-center py-4 px-4 font-semibold">Profesional</th>
                <th className="text-center py-4 px-4 font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <>
                  <tr key={category.category} className="bg-gray-50">
                    <td colSpan={4} className="py-3 px-4 font-semibold text-gray-700">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-sm">{item.name}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(item.basic)}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(item.professional)}</td>
                      <td className="py-3 px-4 text-center">{renderFeatureValue(item.premium)}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
