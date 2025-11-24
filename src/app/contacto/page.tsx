import { WhatsAppContactForm } from "@/components/whatsapp-contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Contáctanos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            ¿Tienes preguntas sobre la plataforma o necesitas ayuda? Estamos aquí para ayudarte a promocionar tu negocio
            turístico en el Huila.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <WhatsAppContactForm
              businessName="Plataforma de Turismo Huila"
              phoneNumber="+573185550123"
              defaultSubject="Consulta sobre la plataforma"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+57 318 555 0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@turismohuila.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600">Neiva, Huila, Colombia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Cómo podemos ayudarte?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Registro de tu negocio turístico</li>
                  <li>• Información sobre planes de publicidad</li>
                  <li>• Soporte técnico para la plataforma</li>
                  <li>• Consultas sobre facturación</li>
                  <li>• Optimización de tu perfil de negocio</li>
                  <li>• Estrategias de marketing turístico</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
