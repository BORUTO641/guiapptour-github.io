import { Header } from "@/components/header"
import { BusinessDirectory } from "@/components/business-directory"
import { Footer } from "@/components/footer"

export default function NegociosPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <BusinessDirectory />
      </main>
      <Footer />
    </div>
  )
}
