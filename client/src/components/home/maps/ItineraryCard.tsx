import { ChevronRight, MapPin } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";

interface ItineraryCardInterface {
    id: string;
    image: string;
    title: string;
    country: string;
    city: string;
    duration: number;
    shortDescription: string;
    spots: number;
}


export default function ItineraryCard({ id, image, title, country, city, duration, shortDescription, spots }: ItineraryCardInterface) {
    const { setPreviewOpen, setSelectedItinerary } = useAppContext();

    const handlePreview = () => {
        setSelectedItinerary(id);
        setPreviewOpen(true);
    }

    return (
        <div className="w-full md:w-[calc(33%-18px)] h-[80svh] rounded-2xl relative overflow-hidden bg-zinc-900 border border-zinc-200 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

            {/* IMAGE */}
            <img
                src={image}
                loading="lazy"
                decoding="async"
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-75 group-hover:opacity-100" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* CONTENT */}
            <section className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col gap-3">

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-white/70 text-xs">
                    <MapPin size={14} />
                    {city}, {country}
                </div>

                {/* TITLE */}
                <h1 className="text-xl font-bold text-white leading-tight">
                    {title}
                </h1>

                {/* QUICK INFO */}
                <div className="flex items-center gap-3 text-xs text-white/70">
                    <span>📍 {spots} spots</span>
                    <span>•</span>
                    <span>🗓 {duration} days</span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-white/80 line-clamp-2">
                    {shortDescription}
                </p>

                {/* PRICE + CTA */}
                <div className="flex items-center gap-3 mt-2">

                    <Button
                        onClick={handlePreview}
                        className="flex-1 py-5 bg-blue-500 text-white font-semibold text-sm rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
                        View itinerary <ChevronRight size={16} />
                    </Button>
                </div>

            </section>
        </div>
    );
}