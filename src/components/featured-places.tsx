import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredPlaces = [
  {
    id: 1,
    name: "Parque Arqueológico de San Agustín",
    location: "San Agustín, Huila",
    rating: 4.9,
    reviews: 1250,
    category: "Arqueología",
    image: "/archaeological-park-san-agustin-huila-colombia-anc.jpg",
    description: "Descubre las misteriosas estatuas precolombinas y la rica historia ancestral.",
    openHours: "8:00 AM - 5:00 PM",
    price: "Desde $15.000 COP",
  },
  {
    id: 2,
    name: "Desierto de la Tatacoa",
    location: "Villavieja, Huila",
    rating: 4.8,
    reviews: 980,
    category: "Naturaleza",
    image: "/tatacoa-desert-huila-colombia-red-landscape-stars.jpg",
    description: "Paisajes únicos, observación astronómica y aventura en el desierto.",
    openHours: "24 horas",
    price: "Desde $25.000 COP",
  },
  {
    id: 3,
    name: "Termales de Rivera",
    location: "Rivera, Huila",
    rating: 4.7,
    reviews: 750,
    category: "Relajación",
    image: "/hot-springs-rivera-huila-colombia-thermal-pools-re.jpg",
    description: "Aguas termales naturales perfectas para relajarse y renovar energías.",
    openHours: "6:00 AM - 10:00 PM",
    price: "Desde $35.000 COP",
  },
]

export function FeaturedPlaces({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lugares Destacados</h2>
            <p className="text-lg text-muted-foreground">
              Los destinos más populares y mejor calificados del Huila te esperan
            </p>
          </div>
          {showViewAll && (
            <Button variant="ghost" className="hidden md:flex group text-primary" asChild>
              <Link href="/lugares">
                Ver todos los lugares
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place) => (
            <Card key={place.id} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image || "/placeholder.svg"}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm hover:bg-white">
                  {place.category}
                </Badge>
                <Button size="icon" variant="ghost" className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white rounded-full">
                  <Camera className="h-5 w-5" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-sm">{place.rating}</span>
                    </div>
                    <span className="text-sm font-medium bg-primary/90 px-2 py-1 rounded-md">
                      {place.price}
                    </span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                  {place.name}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1 text-primary" />
                  {place.location}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {place.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{place.openHours}</span>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform" asChild>
                    <Link href={`/lugares/${place.id}`}>
                      Ver Detalles <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-12 md:hidden">
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link href="/lugares">
                Ver Todos los Lugares
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
