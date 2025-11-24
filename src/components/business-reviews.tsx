"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp, ThumbsDown, Flag } from "lucide-react"

interface BusinessReviewsProps {
  businessId: string
}

const reviewsData = {
  overall: 4.6,
  total: 324,
  breakdown: [
    { stars: 5, count: 198, percentage: 61 },
    { stars: 4, count: 89, percentage: 27 },
    { stars: 3, count: 26, percentage: 8 },
    { stars: 2, count: 8, percentage: 3 },
    { stars: 1, count: 3, percentage: 1 },
  ],
  categories: [
    { name: "Limpieza", rating: 4.8 },
    { name: "Servicio", rating: 4.7 },
    { name: "Ubicación", rating: 4.9 },
    { name: "Precio/Calidad", rating: 4.4 },
    { name: "Comodidad", rating: 4.5 },
  ],
  reviews: [
    {
      id: 1,
      author: "María González",
      rating: 5,
      date: "Hace 2 días",
      title: "Experiencia excepcional",
      content:
        "El hotel superó todas mis expectativas. La arquitectura colonial es hermosa y las habitaciones muy cómodas. El personal fue extremadamente amable y el desayuno delicioso. Definitivamente regresaré.",
      helpful: 12,
      verified: true,
      response: {
        author: "Hotel Casa Colonial",
        date: "Hace 1 día",
        content:
          "¡Muchas gracias María por tu hermosa reseña! Nos alegra saber que disfrutaste tu estadía con nosotros.",
      },
    },
    {
      id: 2,
      author: "Carlos Rodríguez",
      rating: 4,
      date: "Hace 1 semana",
      title: "Muy buena ubicación",
      content:
        "Hotel bien ubicado en el centro histórico. Las habitaciones están bien pero podrían mejorar el aire acondicionado. El restaurante tiene buena comida huilense.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      author: "Ana Martínez",
      rating: 5,
      date: "Hace 2 semanas",
      title: "Perfecto para turismo",
      content:
        "Excelente hotel para conocer Neiva. Está cerca de todo y el patio central es precioso. El personal nos ayudó mucho con recomendaciones de lugares para visitar.",
      helpful: 15,
      verified: false,
    },
  ],
}

export function BusinessReviews({ businessId }: BusinessReviewsProps) {
  const [sortBy, setSortBy] = useState("recent")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reseñas y Calificaciones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">{reviewsData.overall}</div>
            <div className="flex items-center justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= Math.floor(reviewsData.overall) ? "text-secondary fill-current" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">Basado en {reviewsData.total} reseñas</div>
          </div>

          <div className="space-y-2">
            {reviewsData.breakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="text-sm w-8">{item.stars}★</span>
                <Progress value={item.percentage} className="flex-1" />
                <span className="text-sm text-muted-foreground w-12">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Ratings */}
        <div>
          <h4 className="font-semibold mb-3">Calificaciones por Categoría</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviewsData.categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <span className="text-sm">{category.name}</span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3 w-3 ${
                          star <= Math.floor(category.rating) ? "text-secondary fill-current" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{category.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between border-t pt-4">
          <h4 className="font-semibold">Reseñas de Huéspedes</h4>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border rounded-md px-3 py-1"
          >
            <option value="recent">Más Recientes</option>
            <option value="helpful">Más Útiles</option>
            <option value="rating-high">Mejor Calificadas</option>
            <option value="rating-low">Peor Calificadas</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviewsData.reviews.map((review) => (
            <div key={review.id} className="border-b pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">{review.author[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verificado
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= review.rating ? "text-secondary fill-current" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>

              <div className="mb-3">
                <h5 className="font-medium mb-2">{review.title}</h5>
                <p className="text-sm text-muted-foreground">{review.content}</p>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <Button variant="ghost" size="sm" className="text-xs">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  Útil ({review.helpful})
                </Button>
                <Button variant="ghost" size="sm" className="text-xs">
                  <ThumbsDown className="h-3 w-3 mr-1" />
                  No útil
                </Button>
              </div>

              {review.response && (
                <div className="bg-muted/50 rounded-lg p-4 ml-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">{review.response.author}</span>
                    <Badge variant="outline" className="text-xs">
                      Propietario
                    </Badge>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{review.response.date}</span>
                  </div>
                  <p className="text-sm">{review.response.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline">Ver Todas las Reseñas</Button>
        </div>
      </CardContent>
    </Card>
  )
}
