import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedPlaces } from "@/components/featured-places"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedPlaces />

        {/* Business CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-huila opacity-90" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                ¿Tienes un negocio turístico?
              </h2>
              <p className="text-xl md:text-2xl mb-10 text-white/90 font-light">
                Únete a la plataforma líder de turismo en el Huila. Aumenta tu visibilidad y conecta con miles de viajeros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" asChild>
                  <Link href="/registro-negocio">
                    <Building2 className="h-5 w-5 mr-2" />
                    Registrar mi Negocio
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white text-white hover:bg-white hover:text-primary transition-all duration-300 bg-transparent" asChild>
                  <Link href="/planes">
                    <span className="mr-2">Ver Planes para Empresas</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

