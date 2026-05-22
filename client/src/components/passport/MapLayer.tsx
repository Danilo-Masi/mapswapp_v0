import { Map, MapControls } from "@/components/ui/map";

export default function MapLayer() {
    return (
        <Map
            center={[-73.97, 40.78]}
            zoom={6}
            attributionControl={false}>
            <MapControls
                position="top-right"
                showLocate />
        </Map>
    )
}
