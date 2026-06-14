export interface Place {
  place: string
  description: string
  image?: string
  lat?: number
  lng?: number
}

export interface JourneyEntry {
  tripId: number
  tripName: string
  date: string
  description: string
  places: Place[]
}
