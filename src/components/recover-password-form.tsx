"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle } from "lucide-react"

export function RecoverPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Password recovery for:", email)
    setIsLoading(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <CheckCircle className="h-12 w-12 text-primary mx-auto" />
        <h3 className="text-lg font-semibold">Correo Enviado</h3>
        <p className="text-sm text-muted-foreground">
          Hemos enviado un enlace de recuperación a <strong>{email}</strong>. Revisa tu bandeja de entrada y sigue las
          instrucciones.
        </p>
        <p className="text-xs text-muted-foreground">Si no ves el correo, revisa tu carpeta de spam.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Correo Electrónico</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar Enlace de Recuperación"}
      </Button>
    </form>
  )
}
