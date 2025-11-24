import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, Star } from "lucide-react"

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
    description: "Hotel boutique con arquitectura colonial y servicios modernos.",
    priceRange: "$80.000 - $150.000 COP",
    discount: "15% descuento temporada baja",
    featured: true,
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
    description: "Auténtica cocina huilense con ingredientes locales frescos.",
    priceRange: "$25.000 - $45.000 COP",
    discount: "2x1 en tamales los martes",
    featured: false,
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
    description: "Tours especializados en arqueología y ecoturismo.",
    priceRange: "$120.000 - $300.000 COP",
    discount: "20% grupos de 4+ personas",
    featured: true,
  },
]

export function BusinessDirectory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Directorio de Negocios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conecta con los mejores negocios locales y aprovecha ofertas exclusivas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {businesses.map((business) => (
            <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="secondary">{business.category}</Badge>
                  {business.featured && <Badge className="bg-secondary text-secondary-foreground">Destacado</Badge>}
                </div>
                {business.discount && (
                  <Badge className="absolute bottom-3 left-3 bg-destructive text-destructive-foreground">
                    Oferta Especial
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{business.name}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 text-secondary fill-current" />
                    <span className="font-medium">{business.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {business.location}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{business.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Rango de precios:</span>
                    <span className="text-primary">{business.priceRange}</span>
                  </div>
                  {business.discount && <div className="text-sm text-destructive font-medium">{business.discount}</div>}
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{business.reviews} reseñas</span>
                  </div>
                </div>

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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Directorio Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
