"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Camera, Heart } from "lucide-react"

const places = [
  {
    id: 1,
    name: "Parque Arqueológico de San Agustín",
    location: "San Agustín, Huila",
    rating: 4.9,
    reviews: 1250,
    category: "Arqueología",
    image: "/archaeological-park-san-agustin-huila-colombia-anc.jpg",
    description: "Descubre las misteriosas estatuas precolombinas y la rica historia ancestral del pueblo San Agustín.",
    openHours: "8:00 AM - 5:00 PM",
    price: "Desde $15.000 COP",
    duration: "3-4 horas",
    highlights: ["Patrimonio UNESCO", "Estatuas precolombinas", "Museo arqueológico"],
  },
  {
    id: 2,
    name: "Desierto de la Tatacoa",
    location: "Villavieja, Huila",
    rating: 4.8,
    reviews: 980,
    category: "Naturaleza",
    image: "/tatacoa-desert-huila-colombia-red-landscape-stars.jpg",
    description: "Paisajes únicos, observación astronómica y aventura en el segundo desierto más grande de Colombia.",
    openHours: "24 horas",
    price: "Desde $25.000 COP",
    duration: "1-2 días",
    highlights: ["Observatorio astronómico", "Paisajes únicos", "Caminatas nocturnas"],
  },
  {
    id: 3,
    name: "Termales de Rivera",
    location: "Rivera, Huila",
    rating: 4.7,
    reviews: 750,
    category: "Relajación",
    image: "/hot-springs-rivera-huila-colombia-thermal-pools-re.jpg",
    description: "Aguas termales naturales perfectas para relajarse y renovar energías en un entorno natural.",
    openHours: "6:00 AM - 10:00 PM",
    price: "Desde $35.000 COP",
    duration: "2-3 horas",
    highlights: ["Aguas termales", "Spa natural", "Relajación"],
  },
  {
    id: 4,
    name: "Estrecho del Magdalena",
    location: "San Agustín, Huila",
    rating: 4.6,
    reviews: 432,
    category: "Naturaleza",
    image: "/estrecho-del-magdalena-river-canyon.jpg",
    description: "Impresionante cañón donde el río Magdalena se estrecha a solo 2.20 metros de ancho.",
    openHours: "8:00 AM - 6:00 PM",
    price: "Desde $10.000 COP",
    duration: "1-2 horas",
    highlights: ["Fenómeno natural", "Río Magdalena", "Fotografía"],
  },
  {
    id: 5,
    name: "Parque Nacional Natural Cueva de los Guácharos",
    location: "Acevedo, Huila",
    rating: 4.5,
    reviews: 298,
    category: "Naturaleza",
    image: "/guacharos-cave-national-park-colombia.jpg",
    description: "Primer parque nacional de Colombia, hogar de los guácharos y biodiversidad única.",
    openHours: "8:00 AM - 4:00 PM",
    price: "Desde $20.000 COP",
    duration: "4-5 horas",
    highlights: ["Primer parque nacional", "Cuevas naturales", "Aves guácharos"],
  },
  {
    id: 6,
    name: "Salto de Bordones",
    location: "Isnos, Huila",
    rating: 4.8,
    reviews: 567,
    category: "Naturaleza",
    image: "/bordones-waterfall-huila-colombia.jpg",
    description: "Una de las cascadas más altas de Colombia con 400 metros de caída libre.",
    openHours: "7:00 AM - 5:00 PM",
    price: "Desde $15.000 COP",
    duration: "2-3 horas",
    highlights: ["Cascada de 400m", "Senderismo", "Paisajes espectaculares"],
  },
]

export function PlaceGrid() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (placeId: number) => {
    setFavorites((prev) => (prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Lugares Encontrados</h2>
          <p className="text-sm text-muted-foreground">{places.length} lugares disponibles</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Ordenar por Popularidad
          </Button>
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            Vista Galería
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {places.map((place) => (
          <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img src={place.image || "/placeholder.svg"} alt={place.name} className="w-full h-48 object-cover" />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge variant="secondary">{place.category}</Badge>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => toggleFavorite(place.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(place.id) ? "fill-current text-red-500" : ""}`} />
              </Button>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{place.price}</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {place.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg line-clamp-2">{place.name}</CardTitle>
                <div className="flex items-center space-x-1 text-sm ml-2">
                  <Star className="h-4 w-4 text-secondary fill-current" />
                  <span className="font-medium">{place.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {place.location}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{place.description}</p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{place.openHours}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {place.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">{place.reviews} reseñas</div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" size="sm">
                  Ver Detalles
                </Button>
                <Button variant="outline" size="sm">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Cargar Más Lugares
        </Button>
      </div>
    </div>
  )
}
