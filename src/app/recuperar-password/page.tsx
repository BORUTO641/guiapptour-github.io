import { RecoverPasswordForm } from "@/components/recover-password-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function RecoverPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Huila Turismo</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">Recuperar Contraseña</h1>
          <p className="text-muted-foreground">Te enviaremos un enlace para restablecer tu contraseña</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Restablecer Contraseña</CardTitle>
            <CardDescription>Ingresa tu correo electrónico para continuar</CardDescription>
          </CardHeader>
          <CardContent>
            <RecoverPasswordForm />
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ¿Recordaste tu contraseña?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Volver al login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
