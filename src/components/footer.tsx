import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Huila Turismo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Descubre el corazón de Colombia. Conectamos turistas con los mejores lugares y negocios del Huila.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mapa" className="text-sm text-muted-foreground hover:text-primary">
                  Mapa Interactivo
                </Link>
              </li>
              <li>
                <Link href="/lugares" className="text-sm text-muted-foreground hover:text-primary">
                  Lugares Turísticos
                </Link>
              </li>
              <li>
                <Link href="/negocios" className="text-sm text-muted-foreground hover:text-primary">
                  Directorio de Negocios
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-sm text-muted-foreground hover:text-primary">
                  Planes de Publicidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ayuda" className="text-sm text-muted-foreground hover:text-primary">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-muted-foreground hover:text-primary">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+57 318 555 0123</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@huilaturismo.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Calle 7 #5-24, Centro
                  <br />
                  Neiva, Huila, Colombia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Huila Turismo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
