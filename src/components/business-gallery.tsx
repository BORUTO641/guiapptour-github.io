"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface BusinessGalleryProps {
  businessId: string
}

const galleryImages = [
  {
    id: 1,
    url: "/boutique-hotel-colonial-architecture-neiva-huila.jpg",
    title: "Fachada Principal",
    description: "Vista exterior del hotel con arquitectura colonial",
  },
  {
    id: 2,
    url: "/hotel-room-colonial-style-interior.jpg",
    title: "Habitación Deluxe",
    description: "Habitación con decoración colonial y amenidades modernas",
  },
  {
    id: 3,
    url: "/hotel-colonial-patio-central.jpg",
    title: "Patio Central",
    description: "Hermoso patio central con jardín y fuente",
  },
  {
    id: 4,
    url: "/hotel-restaurant-colonial-dining.jpg",
    title: "Restaurante",
    description: "Restaurante gourmet con cocina huilense",
  },
  {
    id: 5,
    url: "/hotel-lobby-colonial-reception.jpg",
    title: "Lobby",
    description: "Recepción con decoración de época",
  },
  {
    id: 6,
    url: "/hotel-bathroom-modern-colonial.jpg",
    title: "Baño",
    description: "Baño moderno con toques coloniales",
  },
]

export function BusinessGallery({ businessId }: BusinessGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Galería de Fotos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative">
            <img
              src={galleryImages[currentImage]?.url || "/placeholder.svg"}
              alt={galleryImages[currentImage]?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={() => {
                /* Open fullscreen modal */
              }}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
              <h3 className="font-semibold">{galleryImages[currentImage]?.title}</h3>
              <p className="text-sm opacity-90">{galleryImages[currentImage]?.description}</p>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-6 gap-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  index === currentImage ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <img src={image.url || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
                {index !== currentImage && <div className="absolute inset-0 bg-black/30" />}
              </button>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {currentImage + 1} de {galleryImages.length} fotos
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
