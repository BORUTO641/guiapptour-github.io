import { BusinessDetail } from "@/components/business-detail"
import { BusinessGallery } from "@/components/business-gallery"
import { BusinessReviews } from "@/components/business-reviews"
import { BusinessContact } from "@/components/business-contact"
import { BusinessSimilar } from "@/components/business-similar"

export async function generateStaticParams() {
  // Generate static params for business IDs 1-6
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ]
}

interface BusinessDetailPageProps {
  readonly params: Promise<{
    readonly id: string
  }>
}

export default async function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { id } = await params
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <BusinessDetail businessId={id} />
            <BusinessGallery businessId={id} />
            <BusinessReviews businessId={id} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <BusinessContact businessId={id} />
            <BusinessSimilar businessId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
