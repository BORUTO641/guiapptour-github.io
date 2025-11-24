import { LoginForm } from "@/components/login-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Huila Turismo</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Bienvenido de vuelta</h1>
          <p className="text-muted-foreground">Inicia sesión para continuar explorando</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="text-primary hover:underline font-medium">
              Regístrate aquí
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
