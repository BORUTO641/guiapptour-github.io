"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"

export function PlaceSearch() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar lugares turísticos..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">
        <Search className="h-4 w-4 mr-2" />
        Buscar
      </Button>
      <Button type="button" variant="outline" className="w-full bg-transparent">
        <MapPin className="h-4 w-4 mr-2" />
        Ver en Mapa
      </Button>
    </form>
  )
}
