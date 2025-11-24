import { BusinessRegisterForm } from "@/components/business-register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Building2 } from "lucide-react"
import Link from "next/link"

export default function BusinessRegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Huila Turismo</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building2 className="h-8 w-8 text-secondary" />
            <h1 className="text-3xl font-bold text-foreground">Registra tu Negocio</h1>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Únete a la plataforma de turismo más importante del Huila y conecta con miles de visitantes
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Información del Negocio</CardTitle>
            <CardDescription>Completa todos los campos para registrar tu negocio en nuestra plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <BusinessRegisterForm />
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Inicia sesión
            </Link>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ¿Eres turista?{" "}
            <Link href="/registro" className="text-primary hover:underline font-medium">
              Regístrate como turista
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
