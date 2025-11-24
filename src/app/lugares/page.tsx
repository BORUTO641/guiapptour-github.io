import { Header } from "@/components/header"
import { FeaturedPlaces } from "@/components/featured-places"
import { Footer } from "@/components/footer"

export default function LugaresPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <FeaturedPlaces showViewAll={false} />
      </main>
      <Footer />
    </div>
  )
}
