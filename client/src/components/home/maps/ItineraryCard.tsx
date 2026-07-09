import { ChevronRight, MapPin, Star } from "lucide-react";
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
    price: number;
    authorName: string;
    authorAvatar: string;
    rating: number;
    reviewCount: number;
    badge: string;
}


export default function ItineraryCard({ id, image, title, country, city, shortDescription, price, authorName, authorAvatar, rating, reviewCount, badge }: ItineraryCardInterface) {
    const { setPreviewOpen, setSelectedItinerary } = useAppContext();

    const handlePreview = () => {
        setSelectedItinerary(id);
        setPreviewOpen(true);
    }

    return (
        <div
            onClick={handlePreview}
            className="w-full md:w-[calc(33%-18px)] h-[70svh] rounded-2xl relative overflow-hidden bg-zinc-900 border border-zinc-200 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            {/* IMAGE */}
            <img
                src={image}
                loading="lazy"
                decoding="async"
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-80 group-hover:opacity-100" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/10" />
            {/* BADGE */}
            <div className="absolute top-4 left-4 z-20 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {badge}
            </div>
            {/* PRICE */}
            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm text-zinc-900 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                €{price}
            </div>
            {/* CONTENT */}
            <section className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col gap-2.5">

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-white/70 text-xs">
                    <MapPin size={14} />
                    {city}, {country}
                </div>

                {/* TITLE */}
                <p className="text-xl font-bold text-white leading-tight line-clamp-2">
                    {title}
                </p>

                {/* DESCRIPTION */}
                <p className="text-sm text-white/80 line-clamp-2">
                    {shortDescription}
                </p>

                {/* AUTHOR (trust signal) */}
                <div className="flex items-center gap-2">
                    <img
                        src={authorAvatar}
                        alt={authorName}
                        className="w-6 h-6 rounded-full border border-white/30 object-cover"
                    />
                    <span className="text-xs text-white/80 font-medium">{authorName}</span>
                    <span className="text-white/40">•</span>
                    <div className="flex items-center gap-1 text-xs text-white/80">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        {rating} ({reviewCount})
                    </div>
                </div>

                {/* CTA */}
                <Button
                    className="w-full mt-1 py-5 bg-blue-500 text-white font-semibold text-sm rounded-xl group-hover:bg-blue-400 group-hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-1">
                    View itinerary <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </section>
        </div>
    );
}