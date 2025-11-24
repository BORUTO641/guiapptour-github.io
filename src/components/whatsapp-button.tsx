"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  businessName?: string
  className?: string
  variant?: "default" | "outline" | "ghost" | "floating"
  size?: "sm" | "default" | "lg"
}

export function WhatsAppButton({
  phoneNumber,
  message,
  businessName,
  className = "",
  variant = "default",
  size = "default",
}: WhatsAppButtonProps) {
  const defaultMessage = businessName
    ? `Hola! Me interesa obtener más información sobre ${businessName}. ¿Podrían ayudarme?`
    : "Hola! Me gustaría obtener más información."

  const finalMessage = message || defaultMessage

  const handleWhatsAppClick = () => {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "")
    const encodedMessage = encodeURIComponent(finalMessage)
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  if (variant === "floating") {
    return (
      <Button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    )
  }

  const variantStyles = {
    default: "bg-green-500 hover:bg-green-600 text-white",
    outline: "border-green-500 text-green-600 hover:bg-green-50",
    ghost: "text-green-600 hover:bg-green-50",
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`${variantStyles[variant]} ${className}`}
      size={size}
      variant={variant === "default" ? "default" : variant}
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      Contactar por WhatsApp
    </Button>
  )
}
