"use client"

import dynamic from "next/dynamic"

const MapView = dynamic(() => import("./map-view"), {
    ssr: false,
    loading: () => (
        <div className="h-[500px] w-full animate-pulse rounded-xl bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
        </div>
    ),
})

export function MapComponent() {
    return <MapView />
}

