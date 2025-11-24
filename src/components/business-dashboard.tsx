"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Eye, Star, MessageCircle, Settings, CreditCard, MapPin, Camera } from "lucide-react"

const visitData = [
  { name: "Lun", visitas: 45 },
  { name: "Mar", visitas: 52 },
  { name: "Mié", visitas: 38 },
  { name: "Jue", visitas: 67 },
  { name: "Vie", visitas: 89 },
  { name: "Sáb", visitas: 124 },
  { name: "Dom", visitas: 98 },
]

const monthlyData = [
  { name: "Ene", visitas: 1200, contactos: 45 },
  { name: "Feb", visitas: 1100, contactos: 38 },
  { name: "Mar", visitas: 1400, contactos: 52 },
  { name: "Abr", visitas: 1600, contactos: 61 },
  { name: "May", visitas: 1800, contactos: 73 },
  { name: "Jun", visitas: 2100, contactos: 89 },
]

const sourceData = [
  { name: "Búsqueda directa", value: 45, color: "#0891b2" },
  { name: "Mapa", value: 30, color: "#ea580c" },
  { name: "Recomendaciones", value: 15, color: "#7c3aed" },
  { name: "Redes sociales", value: 10, color: "#059669" },
]

export function BusinessDashboard() {
  const businessData = {
    name: "Hotel Boutique Casa Colonial",
    plan: "Profesional",
    planExpiry: "2024-03-15",
    rating: 4.8,
    totalReviews: 127,
    isActive: true,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{businessData.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-orange-600 text-white">Plan {businessData.plan}</Badge>
                <Badge variant={businessData.isActive ? "default" : "secondary"}>
                  {businessData.isActive ? "Activo" : "Inactivo"}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{businessData.rating}</span>
                  <span className="text-gray-500">({businessData.totalReviews} reseñas)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurar
              </Button>
              <Button>
                <CreditCard className="h-4 w-4 mr-2" />
                Actualizar Plan
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Visitas esta semana</p>
                  <p className="text-3xl font-bold text-gray-900">513</p>
                  <p className="text-sm text-green-600">+12% vs semana anterior</p>
                </div>
                <Eye className="h-8 w-8 text-cyan-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Contactos</p>
                  <p className="text-3xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-green-600">+8% vs mes anterior</p>
                </div>
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Calificación</p>
                  <p className="text-3xl font-bold text-gray-900">{businessData.rating}</p>
                  <p className="text-sm text-gray-600">{businessData.totalReviews} reseñas</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Posición en mapa</p>
                  <p className="text-3xl font-bold text-gray-900">#3</p>
                  <p className="text-sm text-green-600">En tu categoría</p>
                </div>
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">Análisis</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            <TabsTrigger value="content">Contenido</TabsTrigger>
            <TabsTrigger value="plan">Mi Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Visits */}
              <Card>
                <CardHeader>
                  <CardTitle>Visitas por Día</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={visitData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="visitas" fill="#0891b2" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Traffic Sources */}
              <Card>
                <CardHeader>
                  <CardTitle>Fuentes de Tráfico</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={(entry: { name?: string; percent?: number }) => 
                          `${entry.name || ''} ${((entry.percent || 0) * 100).toFixed(0)}%`
                        }
                      >
                        {sourceData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Tendencia Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visitas" stroke="#0891b2" strokeWidth={2} />
                    <Line type="monotone" dataKey="contactos" stroke="#ea580c" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reseñas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">María González</span>
                        <span className="text-gray-500 text-sm">hace 2 días</span>
                      </div>
                      <p className="text-gray-700">
                        Excelente servicio y ubicación perfecta. El personal muy amable y las instalaciones impecables.
                        Definitivamente regresaré.
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Galería de Fotos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((photo) => (
                      <div
                        key={photo}
                        className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                      >
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Agregar Fotos
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información del Negocio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-transparent" variant="outline">
                    Editar Descripción
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    Actualizar Horarios
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    Gestionar Servicios
                  </Button>
                  <Button className="w-full bg-transparent" variant="outline">
                    Configurar Promociones
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="plan">
            <Card>
              <CardHeader>
                <CardTitle>Mi Plan Actual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-lg">Plan {businessData.plan}</h3>
                    <p className="text-gray-600">Vence el {businessData.planExpiry}</p>
                  </div>
                  <Badge className="bg-orange-600 text-white">Activo</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">Renovar Plan</Button>
                  <Button variant="outline">Cambiar Plan</Button>
                  <Button variant="outline">Ver Facturación</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
