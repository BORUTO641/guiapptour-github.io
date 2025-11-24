"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X, Star, Clock, Percent } from "lucide-react"

const categories = [
  { id: "hospedaje", label: "Hospedaje", count: 45 },
  { id: "gastronomia", label: "Gastronomía", count: 67 },
  { id: "turismo", label: "Turismo y Tours", count: 23 },
  { id: "transporte", label: "Transporte", count: 18 },
  { id: "entretenimiento", label: "Entretenimiento", count: 15 },
  { id: "artesanias", label: "Artesanías", count: 31 },
  { id: "servicios", label: "Servicios", count: 28 },
  { id: "salud", label: "Salud y Bienestar", count: 12 },
]

const amenities = [
  { id: "wifi", label: "WiFi Gratis" },
  { id: "parking", label: "Parqueadero" },
  { id: "ac", label: "Aire Acondicionado" },
  { id: "pool", label: "Piscina" },
  { id: "restaurant", label: "Restaurante" },
  { id: "bar", label: "Bar" },
  { id: "gym", label: "Gimnasio" },
  { id: "spa", label: "Spa" },
  { id: "pets", label: "Acepta Mascotas" },
  { id: "accessible", label: "Accesible" },
]

export function BusinessFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [rating, setRating] = useState([0])
  const [sortBy, setSortBy] = useState("relevance")
  const [showOnlyOpen, setShowOnlyOpen] = useState(false)
  const [showOnlyWithOffers, setShowOnlyWithOffers] = useState(false)
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false)

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities([...selectedAmenities, amenityId])
    } else {
      setSelectedAmenities(selectedAmenities.filter((id) => id !== amenityId))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedAmenities([])
    setPriceRange([0, 500000])
    setRating([0])
    setSortBy("relevance")
    setShowOnlyOpen(false)
    setShowOnlyWithOffers(false)
    setShowOnlyFeatured(false)
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedAmenities.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 500000 ||
    rating[0] > 0 ||
    sortBy !== "relevance" ||
    showOnlyOpen ||
    showOnlyWithOffers ||
    showOnlyFeatured

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sort By */}
        <div className="space-y-2">
          <Label>Ordenar por</Label>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevancia</SelectItem>
              <SelectItem value="rating">Mejor Calificados</SelectItem>
              <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="distance">Distancia</SelectItem>
              <SelectItem value="newest">Más Recientes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Filters */}
        <div className="space-y-3">
          <Label>Filtros Rápidos</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="open"
                checked={showOnlyOpen}
                onCheckedChange={(checked) => setShowOnlyOpen(checked as boolean)}
              />
              <Label htmlFor="open" className="text-sm cursor-pointer flex items-center">
                <Clock className="h-4 w-4 mr-1 text-green-600" />
                Solo abiertos ahora
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="offers"
                checked={showOnlyWithOffers}
                onCheckedChange={(checked) => setShowOnlyWithOffers(checked as boolean)}
              />
              <Label htmlFor="offers" className="text-sm cursor-pointer flex items-center">
                <Percent className="h-4 w-4 mr-1 text-destructive" />
                Solo con ofertas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={showOnlyFeatured}
                onCheckedChange={(checked) => setShowOnlyFeatured(checked as boolean)}
              />
              <Label htmlFor="featured" className="text-sm cursor-pointer flex items-center">
                <Star className="h-4 w-4 mr-1 text-secondary" />
                Solo destacados
              </Label>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <Label>Categorías</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <Label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                  {category.label}
                </Label>
                <span className="text-xs text-muted-foreground">({category.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Rango de Precios (COP)</Label>
          <div className="px-2">
            <Slider value={priceRange} onValueChange={setPriceRange} max={500000} step={10000} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="space-y-3">
          <Label>Calificación Mínima</Label>
          <div className="px-2">
            <Slider value={rating} onValueChange={setRating} max={5} step={0.5} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0</span>
              <span className="font-medium">{rating[0]} estrellas o más</span>
              <span>5</span>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-3">
          <Label>Servicios y Comodidades</Label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {amenities.map((amenity) => (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                />
                <Label htmlFor={amenity.id} className="text-sm cursor-pointer">
                  {amenity.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="space-y-2">
            <Label>Filtros Activos</Label>
            <div className="flex flex-wrap gap-1">
              {selectedCategories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId)
                return (
                  <Badge key={categoryId} variant="secondary" className="text-xs">
                    {category?.label}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => handleCategoryChange(categoryId, false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )
              })}
              {showOnlyOpen && (
                <Badge variant="secondary" className="text-xs">
                  Abiertos
                  <Button variant="ghost" size="sm" className="h-auto p-0 ml-1" onClick={() => setShowOnlyOpen(false)}>
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              {showOnlyWithOffers && (
                <Badge variant="secondary" className="text-xs">
                  Con ofertas
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => setShowOnlyWithOffers(false)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
            </div>
          </div>
        )}

        <Button className="w-full">Aplicar Filtros</Button>
      </CardContent>
    </Card>
  )
}
