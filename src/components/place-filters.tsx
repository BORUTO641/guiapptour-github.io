"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

const categories = [
  { id: "arqueologia", label: "Arqueología", count: 15 },
  { id: "naturaleza", label: "Naturaleza", count: 28 },
  { id: "relajacion", label: "Relajación", count: 12 },
  { id: "aventura", label: "Aventura", count: 22 },
  { id: "cultura", label: "Cultura", count: 18 },
  { id: "gastronomia", label: "Gastronomía", count: 35 },
]

const municipalities = [
  "Todos los municipios",
  "Neiva",
  "Pitalito",
  "Garzón",
  "La Plata",
  "San Agustín",
  "Isnos",
  "Rivera",
  "Villavieja",
]

export function PlaceFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMunicipality, setSelectedMunicipality] = useState("Todos los municipios")
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [rating, setRating] = useState([0])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMunicipality("Todos los municipios")
    setPriceRange([0, 200000])
    setRating([0])
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMunicipality !== "Todos los municipios" ||
    priceRange[0] > 0 ||
    priceRange[1] < 200000 ||
    rating[0] > 0

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
        {/* Municipality */}
        <div className="space-y-2">
          <Label>Municipio</Label>
          <Select value={selectedMunicipality} onValueChange={setSelectedMunicipality}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {municipalities.map((municipality) => (
                <SelectItem key={municipality} value={municipality}>
                  {municipality}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <Label>Categorías</Label>
          <div className="space-y-2">
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
            <Slider value={priceRange} onValueChange={setPriceRange} max={200000} step={5000} className="w-full" />
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

        <Button className="w-full">Aplicar Filtros</Button>
      </CardContent>
    </Card>
  )
}
