"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Filter } from "lucide-react"

export function BusinessSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm, "in", location)
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar negocios..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger>
          <MapPin className="h-4 w-4 mr-2" />
          <SelectValue placeholder="Ubicación" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos los municipios</SelectItem>
          <SelectItem value="neiva">Neiva</SelectItem>
          <SelectItem value="pitalito">Pitalito</SelectItem>
          <SelectItem value="garzon">Garzón</SelectItem>
          <SelectItem value="la-plata">La Plata</SelectItem>
          <SelectItem value="san-agustin">San Agustín</SelectItem>
          <SelectItem value="rivera">Rivera</SelectItem>
          <SelectItem value="villavieja">Villavieja</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" className="w-full">
        <Search className="h-4 w-4 mr-2" />
        Buscar Negocios
      </Button>

      <Button type="button" variant="outline" className="w-full bg-transparent">
        <Filter className="h-4 w-4 mr-2" />
        Filtros Avanzados
      </Button>
    </form>
  )
}
