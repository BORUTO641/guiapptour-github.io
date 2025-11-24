import { RegisterForm } from "@/components/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Huila Turismo</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Únete a nosotros</h1>
          <p className="text-muted-foreground">Crea tu cuenta y descubre el Huila</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Crear Cuenta</CardTitle>
            <CardDescription>Completa la información para registrarte como turista</CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
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
            ¿Eres un negocio?{" "}
            <Link href="/registro-negocio" className="text-primary hover:underline font-medium">
              Registra tu negocio
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
