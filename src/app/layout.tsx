import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

export const metadata: Metadata = {
  title: "GuiWeb - Descubre el Huila, Colombia",
  description:
    "Plataforma de turismo para el Huila, Colombia. Descubre lugares únicos, negocios locales, precios especiales y planifica tu viaje perfecto con GuiWeb.",
  generator: "GuiWeb Platform",
  keywords: "turismo, Huila, Colombia, viajes, negocios locales, descuentos, temporadas, GuiWeb, mapa interactivo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppButton
          phoneNumber="+573185550123"
          message="Hola! Necesito ayuda con la plataforma de turismo del Huila. ¿Podrían asistirme?"
          variant="floating"
        />
        <Analytics />
      </body>
    </html>
  )
}
