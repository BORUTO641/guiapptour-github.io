"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Phone, Navigation, ZoomIn, ZoomOut, Layers } from "lucide-react"

// Mock data for places in Huila
const places = [
  {
    id: 1,
    name: "Parque Arqueológico de San Agustín",
    category: "Arqueología",
    type: "tourist_place",
    lat: 1.8833,
    lng: -76.2833,
    rating: 4.9,
    reviews: 1250,
    image: "/archaeological-park-san-agustin-huila-colombia-anc.jpg",
    description: "Patrimonio de la Humanidad con estatuas precolombinas únicas",
    price: "Desde $15.000 COP",
    phone: "+57 8 837 3037",
    website: "www.sanagustin-huila.gov.co",
  },
  {
    id: 2,
    name: "Desierto de la Tatacoa",
    category: "Naturaleza",
    type: "tourist_place",
    lat: 3.2167,
    lng: -75.1667,
    rating: 4.8,
    reviews: 980,
    image: "/tatacoa-desert-huila-colombia-red-landscape-stars.jpg",
    description: "Desierto único con paisajes rojos y observación astronómica",
    price: "Desde $25.000 COP",
    phone: "+57 318 555 0123",
    website: "www.tatacoa.com",
  },
  {
    id: 3,
    name: "Termales de Rivera",
    category: "Relajación",
    type: "tourist_place",
    lat: 2.7833,
    lng: -75.25,
    rating: 4.7,
    reviews: 750,
    image: "/hot-springs-rivera-huila-colombia-thermal-pools-re.jpg",
    description: "Aguas termales naturales para relajación y bienestar",
    price: "Desde $35.000 COP",
    phone: "+57 8 878 1234",
    website: "www.termalesrivera.com",
  },
  {
    id: 4,
    name: "Hotel Boutique Casa Colonial",
    category: "Hospedaje",
    type: "business",
    lat: 2.9273,
    lng: -75.2819,
    rating: 4.6,
    reviews: 324,
    image: "/boutique-hotel-colonial-architecture-neiva-huila.jpg",
    description: "Hotel boutique con arquitectura colonial en el centro de Neiva",
    price: "$80.000 - $150.000 COP",
    phone: "+57 318 555 0123",
    website: "www.casacolonial.com",
    featured: true,
  },
  {
    id: 5,
    name: "Restaurante Sabores Huilenses",
    category: "Gastronomía",
    type: "business",
    lat: 2.9273,
    lng: -75.2819,
    rating: 4.8,
    reviews: 567,
    image: "/traditional-colombian-restaurant-huila-food-tamale.jpg",
    description: "Auténtica cocina huilense con ingredientes locales",
    price: "$25.000 - $45.000 COP",
    phone: "+57 318 555 0456",
    website: "www.saboreshuilenses.com",
    discount: "2x1 en tamales los martes",
  },
  {
    id: 6,
    name: "Aventuras Huila Tours",
    category: "Turismo",
    type: "business",
    lat: 1.8833,
    lng: -76.2833,
    rating: 4.9,
    reviews: 189,
    image: "/adventure-tours-huila-colombia-hiking-archaeologic.jpg",
    description: "Tours especializados en arqueología y ecoturismo",
    price: "$120.000 - $300.000 COP",
    phone: "+57 318 555 0789",
    website: "www.aventurashuila.com",
    featured: true,
  },
]

export function InteractiveMap() {
  const [selectedPlace, setSelectedPlace] = useState<(typeof places)[0] | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: 2.5, lng: -75.5 })
  const [zoomLevel, setZoomLevel] = useState(8)
  const [showSatellite, setShowSatellite] = useState(false)

  // Simulate map interaction
  const handlePlaceClick = (place: (typeof places)[0]) => {
    setSelectedPlace(place)
    setMapCenter({ lat: place.lat, lng: place.lng })
    setZoomLevel(12)
  }

  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 1, 18))
  }

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 1, 1))
  }

  return (
    <Card className="relative h-full overflow-hidden">
      {/* Map Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-blue-200/50">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="text-green-600">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <Button size="sm" variant="secondary" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant={showSatellite ? "default" : "secondary"}
            onClick={() => setShowSatellite(!showSatellite)}
          >
            <Layers className="h-4 w-4" />
          </Button>
        </div>

        {/* Map Markers */}
        {places.map((place) => (
          <div
            key={place.id}
            className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer z-20"
            style={{
              left: `${((place.lng + 77) / 2) * 100}%`,
              top: `${(1 - (place.lat - 1) / 3) * 100}%`,
            }}
            onClick={() => handlePlaceClick(place)}
          >
            <div
              className={`relative ${
                selectedPlace?.id === place.id ? "scale-125" : "hover:scale-110"
              } transition-transform`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                  place.type === "tourist_place"
                    ? "bg-primary text-primary-foreground"
                    : place.featured
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                <MapPin className="h-4 w-4" />
              </div>
              {place.featured && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
              )}
            </div>
          </div>
        ))}

        {/* Selected Place Info Card */}
        {selectedPlace && (
          <div className="absolute bottom-4 left-4 right-4 z-30">
            <Card className="p-4 max-w-md mx-auto">
              <div className="flex gap-4">
                <img
                  src={selectedPlace.image || "/placeholder.svg"}
                  alt={selectedPlace.name}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm line-clamp-2">{selectedPlace.name}</h3>
                    <Button size="sm" variant="ghost" className="p-1 h-auto" onClick={() => setSelectedPlace(null)}>
                      ×
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {selectedPlace.category}
                    </Badge>
                    <div className="flex items-center text-xs">
                      <Star className="h-3 w-3 text-secondary fill-current mr-1" />
                      {selectedPlace.rating}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{selectedPlace.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{selectedPlace.price}</span>
                    <div className="flex gap-1">
                      <Button size="sm" className="h-6 px-2 text-xs">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline" className="h-6 px-2 bg-transparent">
                        <Phone className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 z-10">
          <Card className="p-3">
            <h4 className="text-xs font-semibold mb-2">Leyenda</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span>Lugares Turísticos</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                <span>Negocios Destacados</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 bg-muted rounded-full" />
                <span>Negocios</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Current Location Button */}
        <div className="absolute bottom-20 right-4 z-10">
          <Button size="sm" variant="secondary">
            <Navigation className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
