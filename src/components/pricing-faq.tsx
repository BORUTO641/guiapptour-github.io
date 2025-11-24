"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo funciona el sistema de planes?",
    answer:
      "Nuestros planes son suscripciones mensuales que te permiten promocionar tu negocio turístico en nuestra plataforma. Cada plan incluye diferentes niveles de visibilidad y herramientas para atraer más clientes.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán en tu próximo ciclo de facturación. Si actualizas a un plan superior, la diferencia se prorrateará.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Actualmente aceptamos pagos a través de WhatsApp donde coordinamos transferencias bancarias, PSE, y tarjetas de crédito/débito. Próximamente implementaremos un sistema de pagos en línea.",
  },
  {
    question: "¿Hay permanencia mínima?",
    answer:
      "No hay permanencia mínima. Puedes cancelar tu suscripción en cualquier momento y seguirás teniendo acceso hasta el final de tu período de facturación actual.",
  },
  {
    question: "¿Qué incluye el soporte técnico?",
    answer:
      "Todos los planes incluyen soporte técnico. El Plan Básico tiene soporte por email, el Profesional incluye soporte prioritario, y el Premium ofrece soporte 24/7 por WhatsApp con gestor dedicado.",
  },
  {
    question: "¿Cómo funciona el sistema de estadísticas?",
    answer:
      "Los planes Profesional y Premium incluyen estadísticas de visitas, clics, y engagement. El Premium además ofrece análisis detallados con reportes mensuales y métricas avanzadas.",
  },
  {
    question: "¿Puedo tener múltiples negocios en un plan?",
    answer:
      "Cada plan cubre un negocio. Si tienes múltiples establecimientos, necesitarás un plan separado para cada uno, aunque ofrecemos descuentos por volumen.",
  },
  {
    question: "¿Qué pasa si mi negocio es estacional?",
    answer:
      "Entendemos que muchos negocios turísticos son estacionales. Puedes pausar y reactivar tu plan según tus necesidades, manteniendo toda tu información guardada.",
  },
]

export function PricingFAQ() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Preguntas Frecuentes</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
