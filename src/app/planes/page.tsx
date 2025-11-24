import { Header } from "@/components/header"
import { PricingPlans } from "@/components/pricing-plans"
import { Footer } from "@/components/footer"

export default function PlanesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <PricingPlans />
      </main>
      <Footer />
    </div>
  )
}
