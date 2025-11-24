import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"

interface BusinessSimilarProps {
  businessId: string
}

const similarBusinesses = [
  {
    id: 2,
    name: "Hotel Plaza Neiva",
    category: "Hospedaje",
    location: "Centro, Neiva",
    rating: 4.4,
    reviews: 189,
    image: "/hotel-plaza-neiva-modern.jpg",
    priceRange: "$70.000 - $120.000 COP",
    distance: "0.5 km",
  },
  {
    id: 3,
    name: "Posada Colonial San Agustín",
    category: "Hospedaje",
    location: "San Agustín, Huila",
    rating: 4.7,
    reviews: 156,
    image: "/posada-colonial-san-agustin.jpg",
    priceRange: "$60.000 - $100.000 COP",
    distance: "85 km",
  },
  {
    id: 4,
    name: "Hotel Boutique Pitalito",
    category: "Hospedaje",
    location: "Centro, Pitalito",
    rating: 4.5,
    reviews: 203,
    image: "/hotel-boutique-pitalito.jpg",
    priceRange: "$75.000 - $130.000 COP",
    distance: "45 km",
  },
]

export function BusinessSimilar({ businessId }: BusinessSimilarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Negocios Similares</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {similarBusinesses.map((business) => (
          <div key={business.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <img
              src={business.image || "/placeholder.svg"}
              alt={business.name}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2 mb-1">{business.name}</h4>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">
                  {business.category}
                </Badge>
                <div className="flex items-center text-xs">
                  <Star className="h-3 w-3 text-secondary fill-current mr-1" />
                  {business.rating}
                </div>
              </div>
              <div className="flex items-center text-xs text-muted-foreground mb-2">
                <MapPin className="h-3 w-3 mr-1" />
                {business.location} • {business.distance}
              </div>
              <div className="text-xs font-medium text-primary">{business.priceRange}</div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full bg-transparent" size="sm" asChild>
          <Link href="/negocios">Ver Más Negocios</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
