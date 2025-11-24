"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"

const categories = [
  { id: "arqueologia", label: "Arqueología", count: 15 },
  { id: "naturaleza", label: "Naturaleza", count: 28 },
  { id: "relajacion", label: "Relajación", count: 12 },
  { id: "hospedaje", label: "Hospedaje", count: 45 },
  { id: "gastronomia", label: "Gastronomía", count: 67 },
  { id: "turismo", label: "Turismo y Tours", count: 23 },
  { id: "entretenimiento", label: "Entretenimiento", count: 18 },
  { id: "artesanias", label: "Artesanías", count: 31 },
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
  "Campoalegre",
  "Gigante",
]

const priceRanges = [
  "Todos los precios",
  "Gratis",
  "Menos de $25.000",
  "$25.000 - $50.000",
  "$50.000 - $100.000",
  "$100.000 - $200.000",
  "Más de $200.000",
]

export function MapFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMunicipality, setSelectedMunicipality] = useState("Todos los municipios")
  const [selectedPriceRange, setSelectedPriceRange] = useState("Todos los precios")
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false)
  const [showOnlyWithOffers, setShowOnlyWithOffers] = useState(false)

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setSelectedMunicipality("Todos los municipios")
    setSelectedPriceRange("Todos los precios")
    setShowOnlyFeatured(false)
    setShowOnlyWithOffers(false)
  }

  const hasActiveFilters =
    searchTerm ||
    selectedCategories.length > 0 ||
    selectedMunicipality !== "Todos los municipios" ||
    selectedPriceRange !== "Todos los precios" ||
    showOnlyFeatured ||
    showOnlyWithOffers

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros
          </CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="h-4 w-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Buscar</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Buscar lugares o negocios..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

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

        {/* Price Range */}
        <div className="space-y-2">
          <Label>Rango de Precios</Label>
          <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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

        {/* Special Filters */}
        <div className="space-y-3">
          <Label>Filtros Especiales</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={showOnlyFeatured}
                onCheckedChange={(checked) => setShowOnlyFeatured(checked as boolean)}
              />
              <Label htmlFor="featured" className="text-sm cursor-pointer">
                Solo destacados
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="offers"
                checked={showOnlyWithOffers}
                onCheckedChange={(checked) => setShowOnlyWithOffers(checked as boolean)}
              />
              <Label htmlFor="offers" className="text-sm cursor-pointer">
                Solo con ofertas
              </Label>
            </div>
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full">Aplicar Filtros</Button>
      </CardContent>
    </Card>
  )
}
