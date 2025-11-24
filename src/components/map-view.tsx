"use client"

import { useEffect, useRef, useState } from "react"
import "leaflet/dist/leaflet.css"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import L from "leaflet"
import "leaflet-routing-machine"
import { Button } from "@/components/ui/button"
import { Locate } from "lucide-react"

// Sample Destinations in Huila
const destinations = [
    { name: "Desierto de la Tatacoa", lat: 3.2308, lng: -75.1636, description: "Paisaje exótico y observación astronómica." },
    { name: "Parque Arqueológico San Agustín", lat: 1.8872, lng: -76.2944, description: "Patrimonio de la Humanidad UNESCO." },
    { name: "Termales de Rivera", lat: 2.7758, lng: -75.2575, description: "Aguas termales relajantes." },
    { name: "Represa de Betania", lat: 2.6983, lng: -75.4386, description: "Deportes náuticos y pesca." },
    { name: "Neiva (Capital)", lat: 2.9273, lng: -75.2819, description: "Capital del departamento del Huila." }
]

export default function MapView() {
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<L.Map | null>(null)
    const userMarkerRef = useRef<L.Marker | null>(null)
    const routingControlRef = useRef<L.Routing.Control | null>(null)
    const [isMounted, setIsMounted] = useState(false)
    const [userLocation, setUserLocation] = useState<L.LatLng | null>(null)

    useEffect(() => {
        setIsMounted(true)
        return () => {
            // Cleanup routing control first
            if (routingControlRef.current && mapInstanceRef.current) {
                try {
                    mapInstanceRef.current.removeControl(routingControlRef.current)
                } catch (e) {
                    console.warn("Error cleaning up routing control:", e)
                }
                routingControlRef.current = null
            }

            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove()
                mapInstanceRef.current = null
            }
        }
    }, [])

    useEffect(() => {
        if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return

        // Initialize Map centered on Huila
        const map = L.map(mapContainerRef.current).setView([2.5, -75.5], 9)
        mapInstanceRef.current = map

        // Force map invalidation to ensure correct rendering
        setTimeout(() => {
            map.invalidateSize()
        }, 100)

        // Add Tile Layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        // Default Icon
        const defaultIcon = new L.Icon({
            iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        })

        // Add Destination Markers with DOM Element Popups
        destinations.forEach(dest => {
            const marker = L.marker([dest.lat, dest.lng], { icon: defaultIcon })
                .addTo(map)

            const popupContent = document.createElement("div")
            popupContent.className = "p-2 min-w-[200px]"
            popupContent.innerHTML = `
                <h3 class="font-bold text-lg mb-1">${dest.name}</h3>
                <p class="text-sm text-gray-600 mb-3">${dest.description}</p>
            `

            const button = document.createElement("button")
            button.className = "bg-primary text-white px-4 py-2 rounded-md text-sm font-medium w-full hover:bg-primary/90 transition-colors shadow-sm"
            button.innerText = "📍 Cómo llegar aquí"
            button.onclick = (e) => {
                e.stopPropagation() // Prevent map click
                window.dispatchEvent(new CustomEvent('route-to', { detail: { lat: dest.lat, lng: dest.lng } }))
            }

            popupContent.appendChild(button)
            marker.bindPopup(popupContent)
        })

        // User Icon
        const userIcon = new L.DivIcon({
            className: "bg-transparent",
            html: `<div class="relative flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 border-2 border-white shadow-lg">
                   <div class="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                 </div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
        })

        // Geolocation
        map.locate({ watch: true, enableHighAccuracy: true })
            .on("locationfound", function (e) {
                setUserLocation(e.latlng)
                if (!userMarkerRef.current) {
                    userMarkerRef.current = L.marker(e.latlng, { icon: userIcon })
                        .addTo(map)
                        .bindPopup("Tu ubicación actual")
                } else {
                    userMarkerRef.current.setLatLng(e.latlng)
                }
            })
            .on("locationerror", function (e) {
                console.error("Location access denied or error:", e.message)
            })

        // Listen for route-to events
        const handleRouteTo = (e: any) => {
            const { lat, lng } = e.detail

            // If user location is not yet found, try to locate again
            if (!userMarkerRef.current && !userLocation) {
                alert("Por favor permite el acceso a tu ubicación para calcular la ruta.")
                map.locate({ setView: true, maxZoom: 16 })
                return
            }

            const startLatLng = userMarkerRef.current ? userMarkerRef.current.getLatLng() : userLocation

            if (mapInstanceRef.current && startLatLng) {
                // Remove existing routing control
                // Remove existing routing control
                if (routingControlRef.current) {
                    try {
                        mapInstanceRef.current.removeControl(routingControlRef.current)
                    } catch (error) {
                        console.warn("Error removing existing routing control:", error)
                    }
                    routingControlRef.current = null
                }

                // Add new routing control
                try {
                    routingControlRef.current = L.Routing.control({
                        waypoints: [
                            L.latLng(startLatLng.lat, startLatLng.lng),
                            L.latLng(lat, lng)
                        ],
                        routeWhileDragging: false,
                        showAlternatives: false,
                        fitSelectedRoutes: true,
                        lineOptions: {
                            styles: [{ color: '#2563eb', weight: 6, opacity: 0.8 }],
                            extendToWaypoints: true,
                            missingRouteTolerance: 10
                        },
                        language: 'es',
                        createMarker: function () { return null; } // Don't create extra markers for start/end
                    } as any).addTo(mapInstanceRef.current)
                } catch (error) {
                    console.error("Error creating routing control:", error)
                    alert("Error al calcular la ruta. Intenta de nuevo.")
                }
            }
        }

        window.addEventListener('route-to', handleRouteTo)

        return () => {
            window.removeEventListener('route-to', handleRouteTo)
        }

    }, [isMounted])

    const handleCenter = () => {
        const map = mapInstanceRef.current
        if (map && userMarkerRef.current) {
            const latlng = userMarkerRef.current.getLatLng()
            map.flyTo(latlng, 16)
        } else if (map) {
            map.locate()
        }
    }

    return (
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl border shadow-sm bg-gray-100">
            <div ref={mapContainerRef} className="h-full w-full" />
            <div className="absolute bottom-4 right-4 z-[400]">
                <Button size="icon" onClick={handleCenter} className="h-10 w-10 rounded-full shadow-lg bg-white text-primary hover:bg-gray-100">
                    <Locate className="h-5 w-5" />
                    <span className="sr-only">Centrar en mí</span>
                </Button>
            </div>
        </div>
    )
}
