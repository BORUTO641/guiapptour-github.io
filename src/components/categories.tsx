import { Card, CardContent } from "@/components/ui/card"
import { Mountain, Utensils, Music, Tent, Camera, Map } from "lucide-react"
import Link from "next/link"

const categories = [
    {
        icon: Mountain,
        name: "Naturaleza",
        description: "Ecoturismo y paisajes",
        color: "text-huila-green",
        bg: "bg-huila-green/10",
        href: "/lugares?category=naturaleza"
    },
    {
        icon: Utensils,
        name: "Gastronomía",
        description: "Sabores auténticos",
        color: "text-huila-orange",
        bg: "bg-huila-orange/10",
        href: "/negocios?category=gastronomia"
    },
    {
        icon: Music,
        name: "Cultura",
        description: "Tradición y folclor",
        color: "text-huila-blue",
        bg: "bg-huila-blue/10",
        href: "/lugares?category=cultura"
    },
    {
        icon: Tent,
        name: "Glamping",
        description: "Hospedaje único",
        color: "text-primary",
        bg: "bg-primary/10",
        href: "/negocios?category=hospedaje"
    },
    {
        icon: Camera,
        name: "Aventura",
        description: "Deportes extremos",
        color: "text-secondary",
        bg: "bg-secondary/10",
        href: "/planes?category=aventura"
    },
    {
        icon: Map,
        name: "Rutas",
        description: "Recorridos guiados",
        color: "text-accent",
        bg: "bg-accent/10",
        href: "/planes?category=rutas"
    }
]

export function Categories() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Vive el Huila a tu manera
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Encuentra exactamente lo que buscas explorando nuestras categorías principales
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <Link key={index} href={category.href} className="group">
                            <Card className="h-full border-none shadow-none bg-transparent hover:bg-background hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                                    <div className={`w-16 h-16 rounded-2xl ${category.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                                        <category.icon className={`h-8 w-8 ${category.color}`} />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
