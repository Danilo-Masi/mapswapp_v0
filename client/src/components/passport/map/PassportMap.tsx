import { Map, MapControls } from "@/components/ui/map";

export default function PassportMap() {
  return (
    <Map
      center={[20, 0]}
      zoom={2.4}
      minZoom={2}
      maxZoom={10}
      pitch={0}
      bearing={0}
      dragRotate={false}
      touchPitch={false}
      attributionControl={false}>
      <MapControls
        position="top-right"
        showLocate />
    </Map>
  )
}
