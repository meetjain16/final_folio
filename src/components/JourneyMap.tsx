import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { JourneyEntry } from '../types/journey'

const leafletCdn = 'https://unpkg.com/leaflet@1.9.4/dist/images'

const DefaultIcon = L.icon({
  iconUrl: `${leafletCdn}/marker-icon.png`,
  iconRetinaUrl: `${leafletCdn}/marker-icon-2x.png`,
  shadowUrl: `${leafletCdn}/marker-shadow.png`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})
L.Marker.prototype.options.icon = DefaultIcon

function MapResize() {
  const map = useMap()
  useEffect(() => {
    const id = window.setTimeout(() => map.invalidateSize(), 200)
    return () => window.clearTimeout(id)
  }, [map])
  return null
}

interface JourneyMapProps {
  entries: JourneyEntry[]
}

const JourneyMap = ({ entries }: JourneyMapProps) => {
  const withCoords = entries.filter(
    (e): e is JourneyEntry & { lat: number; lng: number } =>
      typeof e.lat === 'number' && typeof e.lng === 'number'
  )

  if (withCoords.length === 0) {
    return (
      <div className="flex h-[min(420px,70vh)] w-full items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-sm text-dark-600 dark:border-dark-600 dark:bg-dark-800 dark:text-dark-300">
        Add latitude and longitude to your journey entries to see them on the map.
      </div>
    )
  }

  const avgLat = withCoords.reduce((s, e) => s + e.lat, 0) / withCoords.length
  const avgLng = withCoords.reduce((s, e) => s + e.lng, 0) / withCoords.length

  return (
    <div className="h-[min(420px,70vh)] w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-dark-600">
      <MapContainer
        center={[avgLat, avgLng]}
        zoom={withCoords.length === 1 ? 8 : 5}
        className="h-full w-full z-0"
        scrollWheelZoom
      >
        <MapResize />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {withCoords.map((e) => (
          <Marker key={`${e.place}-${e.date}`} position={[e.lat, e.lng]}>
            <Popup>
              <div className="text-dark-900">
                <strong>{e.place}</strong>
                <div className="text-xs text-dark-600">{e.date}</div>
                <p className="mt-1 max-w-[200px] text-xs">{e.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default JourneyMap
