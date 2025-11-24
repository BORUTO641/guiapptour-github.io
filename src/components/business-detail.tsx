"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Wifi, Car, Utensils, Heart, Share2 } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppQuickActions } from "@/components/whatsapp-quick-actions"

interface BusinessDetailProps {
  businessId: string
}

// Mock data - in real app this would come from API
const businessData = {
  id: 1,
  name: "Hotel Boutique Casa Colonial",
  category: "Hospedaje",
  location: "Centro Histórico, Neiva",
  fullAddress: "Calle 7 #5-24, Centro Histórico, Neiva, Huila",
  rating: 4.6,
  reviews: 324,
  image: "/boutique-hotel-colonial-architecture-neiva-huila.jpg",
  description:
    "Hotel Boutique Casa Colonial es un establecimiento único que combina la elegancia de la arquitectura colonial con las comodidades modernas. Ubicado en el corazón histórico de Neiva, nuestro hotel ofrece una experiencia auténtica e inolvidable para viajeros que buscan confort y tradición.",
  longDescription:
    "Nuestras habitaciones están cuidadosamente decoradas con muebles de época y arte local, manteniendo el encanto colonial mientras proporcionan todas las amenidades modernas que nuestros huéspedes esperan. El hotel cuenta con un hermoso patio central, restaurante gourmet que sirve cocina huilense contemporánea, y un equipo de servicio dedicado a hacer de su estadía una experiencia memorable.",
  priceRange: "$80.000 - $150.000 COP",
  discount: "15% descuento temporada baja",
  featured: true,
  isOpen: true,
  openHours: "24 horas",
  phone: "+57 318 555 0123",
  website: "www.casacolonial.com",
  email: "info@casacolonial.com",
  amenities: [
    { icon: Wifi, label: "WiFi Gratis" },
    { icon: Car, label: "Parqueadero" },
    { icon: Utensils, label: "Restaurante" },
    { icon: Star, label: "Servicio 24h" },
  ],
  features: [
    "Arquitectura colonial auténtica",
    "Habitaciones con aire acondicionado",
    "Patio central histórico",
    "Restaurante gourmet",
    "Servicio de conserjería",
    "WiFi de alta velocidad",
    "Parqueadero privado",
    "Servicio a la habitación",
  ],
  policies: {
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    cancellation: "Cancelación gratuita hasta 24 horas antes",
    pets: "No se permiten mascotas",
    smoking: "Prohibido fumar en todas las áreas",
  },
}

export function BusinessDetail({ businessId }: BusinessDetailProps) {
  const business = businessData // In real app, fetch by businessId

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative">
        <img
          src={business.image || "/placeholder.svg"}
          alt={business.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={business.featured ? "default" : "secondary"}>{business.category}</Badge>
          {business.featured && <Badge className="bg-secondary text-secondary-foreground">Destacado</Badge>}
          {business.isOpen ? (
            <Badge className="bg-green-600 text-white">Abierto</Badge>
          ) : (
            <Badge variant="destructive">Cerrado</Badge>
          )}
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button size="sm" variant="secondary">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        {business.discount && (
          <Badge className="absolute bottom-4 left-4 bg-destructive text-destructive-foreground">
            {business.discount}
          </Badge>
        )}
      </div>

      {/* Basic Info */}
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{business.name}</h1>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {business.fullAddress}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-secondary fill-current mr-1" />
                <span className="font-semibold text-lg">{business.rating}</span>
                <span className="text-muted-foreground ml-1">({business.reviews} reseñas)</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {business.openHours}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{business.priceRange}</div>
            <div className="text-sm text-muted-foreground">por noche</div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <WhatsAppButton phoneNumber={business.phone} businessName={business.name} className="flex-1" size="lg" />
          <Button variant="outline" size="lg" className="flex-1 bg-transparent">
            Ver en Mapa
          </Button>
        </div>
      </div>

      {/* Description */}
      <Card>
        <CardHeader>
          <CardTitle>Acerca de {business.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{business.description}</p>
          <p className="text-muted-foreground">{business.longDescription}</p>
        </CardContent>
      </Card>

      <WhatsAppQuickActions businessName={business.name} phoneNumber={business.phone} />

      {/* Amenities */}
      <Card>
        <CardHeader>
          <CardTitle>Servicios y Comodidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {business.amenities.map((amenity, index) => {
              const IconComponent = amenity.icon
              return (
                <div key={index} className="flex items-center space-x-2">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <span className="text-sm">{amenity.label}</span>
                </div>
              )
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {business.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Policies */}
      <Card>
        <CardHeader>
          <CardTitle>Políticas del Establecimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Horarios</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>Check-in: {business.policies.checkIn}</div>
                <div>Check-out: {business.policies.checkOut}</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Políticas</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>{business.policies.cancellation}</div>
                <div>{business.policies.pets}</div>
                <div>{business.policies.smoking}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
