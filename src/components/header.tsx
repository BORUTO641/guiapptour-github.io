"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Menu, X, User, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b" : "bg-transparent border-transparent py-2"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <MapPin className="h-8 w-8 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300" />
              <div className="absolute inset-0 bg-primary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-huila bg-clip-text text-transparent font-heading tracking-tight">
              GuiWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/mapa", label: "Mapa Interactivo" },
              { href: "/lugares", label: "Lugares" },
              { href: "/negocios", label: "Directorio" },
              { href: "/planes", label: "Planes" },
              { href: "/contacto", label: "Contacto" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-huila group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
              <Link href="/login">
                <User className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Link>
            </Button>
            <Button size="sm" asChild className="bg-gradient-huila hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5">
              <Link href="/registro-negocio">
                <Building2 className="h-4 w-4 mr-2" />
                Registrar Negocio
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2 fade-in duration-300 glass rounded-b-xl mt-2 shadow-xl">
            <nav className="flex flex-col space-y-2 px-4">
              {[
                { href: "/mapa", label: "Mapa Interactivo" },
                { href: "/lugares", label: "Lugares" },
                { href: "/negocios", label: "Directorio" },
                { href: "/planes", label: "Planes" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 p-2 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" asChild className="justify-start hover:bg-primary/10">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <User className="h-4 w-4 mr-2" />
                    Iniciar Sesión
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-gradient-huila justify-start">
                  <Link href="/registro-negocio" onClick={() => setIsMenuOpen(false)}>
                    <Building2 className="h-4 w-4 mr-2" />
                    Registrar Negocio
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
