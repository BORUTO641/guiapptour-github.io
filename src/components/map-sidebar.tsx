"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Globe, Navigation2 } from "lucide-react"

// Mock data for places
const places = [
  {
    id: 1,
    name: "Parque Arqueológico de San Agustín",
    category: "Arqueología",
    type: "tourist_place",
    rating: 4.9,
    reviews: 1250,
    image: "/archaeological-park-san-agustin-huila-colombia-anc.jpg",
    description: "Patrimonio de la Humanidad con estatuas precolombinas únicas",
    price: "Desde $15.000 COP",
    distance: "2.5 km",
    municipality: "San Agustín",
  },
  {
    id: 2,
    name: "Desierto de la Tatacoa",
    category: "Naturaleza",
    type: "tourist_place",
    rating: 4.8,
    reviews: 980,
    image: "/tatacoa-desert-huila-colombia-red-landscape-stars.jpg",
    description: "Desierto único con paisajes rojos y observación astronómica",
    price: "Desde $25.000 COP",
    distance: "45 km",
    municipality: "Villavieja",
  },
  {
    id: 3,
    name: "Hotel Boutique Casa Colonial",
    category: "Hospedaje",
    type: "business",
    rating: 4.6,
    reviews: 324,
    image: "/boutique-hotel-colonial-architecture-neiva-huila.jpg",
    description: "Hotel boutique con arquitectura colonial",
    price: "$80.000 - $150.000 COP",
    distance: "1.2 km",
    municipality: "Neiva",
    featured: true,
  },
  {
    id: 4,
    name: "Restaurante Sabores Huilenses",
    category: "Gastronomía",
    type: "business",
    rating: 4.8,
    reviews: 567,
    image: "/traditional-colombian-restaurant-huila-food-tamale.jpg",
    description: "Auténtica cocina huilense con ingredientes locales",
    price: "$25.000 - $45.000 COP",
    distance: "0.8 km",
    municipality: "Neiva",
    discount: "2x1 en tamales los martes",
  },
  {
    id: 5,
    name: "Termales de Rivera",
    category: "Relajación",
    type: "tourist_place",
    rating: 4.7,
    reviews: 750,
    image: "/hot-springs-rivera-huila-colombia-thermal-pools-re.jpg",
    description: "Aguas termales naturales para relajación",
    price: "Desde $35.000 COP",
    distance: "15 km",
    municipality: "Rivera",
  },
  {
    id: 6,
    name: "Aventuras Huila Tours",
    category: "Turismo",
    type: "business",
    rating: 4.9,
    reviews: 189,
    image: "/adventure-tours-huila-colombia-hiking-archaeologic.jpg",
    description: "Tours especializados en arqueología y ecoturismo",
    price: "$120.000 - $300.000 COP",
    distance: "2.1 km",
    municipality: "San Agustín",
    featured: true,
  },
]

export function MapSidebar() {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null)

  return (
    <Card className="h-[calc(100vh-400px)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Lugares Encontrados</CardTitle>
        <p className="text-sm text-muted-foreground">{places.length} resultados</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-2 max-h-full overflow-y-auto px-6 pb-6">
          {places.map((place) => (
            <Card
              key={place.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedPlace === place.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedPlace(place.id === selectedPlace ? null : place.id)}
            >
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <img
                    src={place.image || "/placeholder.svg"}
                    alt={place.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-sm line-clamp-2">{place.name}</h3>
                      <div className="flex items-center text-xs ml-2">
                        <Star className="h-3 w-3 text-secondary fill-current mr-1" />
                        {place.rating}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={place.type === "tourist_place" ? "default" : "secondary"} className="text-xs">
                        {place.category}
                      </Badge>
                      {place.featured && (
                        <Badge variant="destructive" className="text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{place.description}</p>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {place.municipality} • {place.distance}
                      </div>
                      <span className="font-medium text-primary">{place.price}</span>
                    </div>

                    {place.discount && (
                      <div className="mt-2">
                        <Badge variant="destructive" className="text-xs">
                          {place.discount}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                {selectedPlace === place.id && (
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Ver Detalles
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Globe className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Navigation2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
