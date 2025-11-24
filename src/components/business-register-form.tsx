"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Building2, Mail, Lock, Phone, MapPin, User, Globe } from "lucide-react"

const businessCategories = [
  "Hospedaje",
  "Gastronomía",
  "Turismo y Tours",
  "Transporte",
  "Entretenimiento",
  "Artesanías",
  "Servicios",
  "Otros",
]

const municipalities = [
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
  "Otros",
]

export function BusinessRegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    // Business Info
    businessName: "",
    category: "",
    description: "",
    address: "",
    municipality: "",
    phone: "",
    website: "",

    // Contact Person
    contactName: "",
    contactEmail: "",
    contactPhone: "",

    // Account
    password: "",

    // Legal
    acceptTerms: false,
    acceptMarketing: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Business register attempt:", formData)
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Business Information */}
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-foreground">Información del Negocio</h3>
          <p className="text-sm text-muted-foreground">Datos básicos de tu establecimiento</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="businessName">Nombre del Negocio *</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="businessName"
                type="text"
                placeholder="Hotel Boutique Casa Colonial"
                className="pl-10"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Categoría *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  {businessCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="municipality">Municipio *</Label>
              <Select value={formData.municipality} onValueChange={(value) => handleInputChange("municipality", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el municipio" />
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
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción del Negocio *</Label>
            <Textarea
              id="description"
              placeholder="Describe tu negocio, servicios que ofreces, qué lo hace especial..."
              className="min-h-[100px]"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                type="text"
                placeholder="Calle 7 #5-24, Centro"
                className="pl-10"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono del Negocio *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+57 8 875 1234"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Sitio Web (Opcional)</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  type="url"
                  placeholder="https://www.tunegocio.com"
                  className="pl-10"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Person */}
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-foreground">Persona de Contacto</h3>
          <p className="text-sm text-muted-foreground">Información del responsable del negocio</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contactName">Nombre Completo *</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="contactName"
                type="text"
                placeholder="María García"
                className="pl-10"
                value={formData.contactName}
                onChange={(e) => handleInputChange("contactName", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Correo Electrónico *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="maria@tunegocio.com"
                  className="pl-10"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPhone">Teléfono Personal *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="contactPhone"
                  type="tel"
                  placeholder="+57 300 123 4567"
                  className="pl-10"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-foreground">Seguridad de la Cuenta</h3>
          <p className="text-sm text-muted-foreground">Crea una contraseña segura para tu cuenta</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Contraseña *</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Mínimo 8 caracteres, incluye mayúsculas, minúsculas y números</p>
        </div>
      </div>

      {/* Legal */}
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
            required
          />
          <Label htmlFor="terms" className="text-sm leading-5">
            Acepto los{" "}
            <a href="/terminos" className="text-primary hover:underline">
              términos y condiciones
            </a>{" "}
            y la{" "}
            <a href="/privacidad" className="text-primary hover:underline">
              política de privacidad
            </a>{" "}
            de la plataforma
          </Label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="marketing"
            checked={formData.acceptMarketing}
            onCheckedChange={(checked) => handleInputChange("acceptMarketing", checked as boolean)}
          />
          <Label htmlFor="marketing" className="text-sm leading-5">
            Quiero recibir información sobre nuevas funcionalidades, consejos de marketing y ofertas especiales
          </Label>
        </div>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium text-foreground mb-2">¿Qué sigue después del registro?</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Revisaremos tu información en 24-48 horas</li>
          <li>• Te contactaremos para verificar tu negocio</li>
          <li>• Podrás elegir tu plan de publicidad</li>
          <li>• Tu negocio aparecerá en el mapa y directorio</li>
        </ul>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isLoading || !formData.acceptTerms}>
        {isLoading ? "Registrando negocio..." : "Registrar Negocio"}
      </Button>
    </form>
  )
}
