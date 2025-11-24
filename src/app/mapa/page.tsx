import { MapComponent } from "@/components/map-component"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Mapa Interactivo</h1>
            <p className="text-muted-foreground">
              Explora los lugares turísticos, negocios y rutas de Huila.
            </p>
          </div>
          <div className="h-[calc(100vh-300px)] min-h-[500px] w-full rounded-xl border overflow-hidden">
            <MapComponent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
