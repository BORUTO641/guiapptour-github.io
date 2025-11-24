import { Button } from "@/components/ui/button"
import { MapPin, Search, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with Gradient and Pattern */}
      <div className="absolute inset-0 bg-gradient-huila opacity-10" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />

      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float delay-1000" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Descubre la magia del Huila
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-balance tracking-tight animate-fade-in-up delay-100">
            Explora el <span className="text-gradient-huila">Paraíso</span> <br />
            <span className="text-4xl md:text-6xl text-muted-foreground">de Colombia</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty max-w-3xl mx-auto animate-fade-in-up delay-200 font-light">
            Desde el desierto de la Tatacoa hasta el Parque Arqueológico de San Agustín.
            Vive experiencias únicas en la tierra de promisión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-300">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-huila hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1" asChild>
              <Link href="/mapa">
                <MapPin className="h-5 w-5 mr-2" />
                Explorar Mapa
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/5 hover:text-secondary hover:border-secondary transition-all duration-300" asChild>
              <Link href="/lugares">
                <Search className="h-5 w-5 mr-2" />
                Buscar Destinos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up delay-300">
            <div className="glass p-6 rounded-2xl hover:bg-white/50 transition-colors">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Lugares Mágicos</div>
            </div>
            <div className="glass p-6 rounded-2xl hover:bg-white/50 transition-colors">
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Experiencias</div>
            </div>
            <div className="glass p-6 rounded-2xl hover:bg-white/50 transition-colors">
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl font-bold text-accent mr-2">4.9</span>
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
