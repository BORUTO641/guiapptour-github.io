"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Globe, Clock, Heart, Share2, MessageCircle } from "lucide-react"
import Link from "next/link"

const businesses = [
  {
    id: 1,
    name: "Hotel Boutique Casa Colonial",
    category: "Hospedaje",
    location: "Centro Histórico, Neiva",
    rating: 4.6,
    reviews: 324,
    phone: "+57 318 555 0123",
    website: "www.casacolonial.com",
    image: "/boutique-hotel-colonial-architecture-neiva-huila.jpg",
    description: "Hotel boutique con arquitectura colonial y servicios modernos en el corazón de Neiva.",
    priceRange: "$80.000 - $150.000 COP",
    discount: "15% descuento temporada baja",
    featured: true,
    isOpen: true,
    openHours: "24 horas",
    amenities: ["WiFi Gratis", "Parqueadero", "Aire Acondicionado", "Restaurante"],
    distance: "1.2 km",
  },
  {
    id: 2,
    name: "Restaurante Sabores Huilenses",
    category: "Gastronomía",
    location: "Plaza Central, Neiva",
    rating: 4.8,
    reviews: 567,
    phone: "+57 318 555 0456",
    website: "www.saboreshuilenses.com",
    image: "/traditional-colombian-restaurant-huila-food-tamale.jpg",
    description: "Auténtica cocina huilense con ingredientes locales frescos y recetas tradicionales.",
    priceRange: "$25.000 - $45.000 COP",
    discount: "2x1 en tamales los martes",
    featured: false,
    isOpen: true,
    openHours: "11:00 AM - 10:00 PM",
    amenities: ["WiFi Gratis", "Aire Acondicionado", "Terraza"],
    distance: "0.8 km",
  },
  {
    id: 3,
    name: "Aventuras Huila Tours",
    category: "Turismo",
    location: "San Agustín, Huila",
    rating: 4.9,
    reviews: 189,
    phone: "+57 318 555 0789",
    website: "www.aventurashuila.com",
    image: "/adventure-tours-huila-colombia-hiking-archaeologic.jpg",
    description: "Tours especializados en arqueología y ecoturismo con guías expertos certificados.",
    priceRange: "$120.000 - $300.000 COP",
    discount: "20% grupos de 4+ personas",
    featured: true,
    isOpen: true,
    openHours: "7:00 AM - 6:00 PM",
    amenities: ["Transporte", "Guía Especializado", "Seguro"],
    distance: "2.1 km",
  },
  {
    id: 4,
    name: "Spa Termales Naturales",
    category: "Salud y Bienestar",
    location: "Rivera, Huila",
    rating: 4.5,
    reviews: 298,
    phone: "+57 318 555 0321",
    website: "www.spatermales.com",
    image: "/spa-thermal-springs-wellness-rivera.jpg",
    description: "Spa de lujo con aguas termales naturales y tratamientos de relajación únicos.",
    priceRange: "$60.000 - $120.000 COP",
    discount: "30% descuento lunes a miércoles",
    featured: false,
    isOpen: false,
    openHours: "8:00 AM - 8:00 PM",
    amenities: ["Spa", "Piscina", "Masajes", "Parqueadero"],
    distance: "15.3 km",
  },
  {
    id: 5,
    name: "Artesanías del Huila",
    category: "Artesanías",
    location: "Centro, Pitalito",
    rating: 4.4,
    reviews: 156,
    phone: "+57 318 555 0654",
    website: "www.artesaniashuila.com",
    image: "/handicrafts-store-huila-traditional-art.jpg",
    description: "Tienda especializada en artesanías tradicionales huilenses hechas por artesanos locales.",
    priceRange: "$15.000 - $80.000 COP",
    discount: "10% descuento en compras mayores a $100.000",
    featured: false,
    isOpen: true,
    openHours: "9:00 AM - 6:00 PM",
    amenities: ["WiFi Gratis", "Envío Nacional"],
    distance: "45.2 km",
  },
  {
    id: 6,
    name: "Hostal Backpackers Tatacoa",
    category: "Hospedaje",
    location: "Villavieja, Huila",
    rating: 4.3,
    reviews: 412,
    phone: "+57 318 555 0987",
    website: "www.backpackerstatacoa.com",
    image: "/backpackers-hostel-tatacoa-desert.jpg",
    description: "Hostal económico ideal para mochileros que visitan el Desierto de la Tatacoa.",
    priceRange: "$25.000 - $60.000 COP",
    discount: "Descuento por estadías largas",
    featured: false,
    isOpen: true,
    openHours: "24 horas",
    amenities: ["WiFi Gratis", "Cocina Compartida", "Terraza", "Tours"],
    distance: "67.8 km",
  },
]

export function BusinessGrid() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleFavorite = (businessId: number) => {
    setFavorites((prev) => (prev.includes(businessId) ? prev.filter((id) => id !== businessId) : [...prev, businessId]))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Negocios Encontrados</h2>
          <p className="text-sm text-muted-foreground">{businesses.length} negocios disponibles</p>
        </div>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            Vista Cuadrícula
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            Vista Lista
          </Button>
        </div>
      </div>

      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {businesses.map((business) => (
          <Card
            key={business.id}
            className={`overflow-hidden hover:shadow-lg transition-shadow group ${viewMode === "list" ? "flex" : ""}`}
          >
            <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
              <img
                src={business.image || "/placeholder.svg"}
                alt={business.name}
                className={`object-cover ${viewMode === "list" ? "w-full h-full" : "w-full h-48"}`}
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant={business.featured ? "default" : "secondary"}>{business.category}</Badge>
                {business.featured && <Badge className="bg-secondary text-secondary-foreground">Destacado</Badge>}
                {business.isOpen ? (
                  <Badge className="bg-green-600 text-white">Abierto</Badge>
                ) : (
                  <Badge variant="destructive">Cerrado</Badge>
                )}
              </div>
              <div className="absolute top-3 right-3 flex gap-1">
                <Button
                  size="sm"
                  variant="secondary"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toggleFavorite(business.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(business.id) ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              {business.discount && (
                <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                  Oferta Especial
                </Badge>
              )}
            </div>

            <div className="flex-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className={`line-clamp-2 ${viewMode === "list" ? "text-lg" : "text-lg"}`}>
                    {business.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-sm ml-2">
                    <Star className="h-4 w-4 text-secondary fill-current" />
                    <span className="font-medium">{business.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {business.location} • {business.distance}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{business.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Rango de precios:</span>
                    <span className="text-primary">{business.priceRange}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{business.openHours}</span>
                  </div>

                  {business.discount && <div className="text-sm text-destructive font-medium">{business.discount}</div>}

                  <div className="flex flex-wrap gap-1">
                    {business.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {business.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{business.amenities.length - 3} más
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-muted-foreground">{business.reviews} reseñas</div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm" asChild>
                    <Link href={`/negocios/${business.id}`}>Ver Detalles</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Globe className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Cargar Más Negocios
        </Button>
      </div>
    </div>
  )
}
