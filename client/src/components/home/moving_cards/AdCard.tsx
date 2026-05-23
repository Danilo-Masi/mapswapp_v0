import { useAppContext } from "@/context/AppContext";

type AdCardProps = {
    spots: number,
    id: string,
    city: string,
    description: string,
    cover: string,
}

export default function AdCard({ id, spots, city, description, cover }: AdCardProps) {
    const { setSelectedItinerary, setPreviewOpen } = useAppContext();

    const handleSelect = () => {
        setSelectedItinerary(id);
        setPreviewOpen(true);
    }

    return (
        <div className="group relative w-[45svh] h-[50svh] rounded-3xl overflow-hidden cursor-pointer" onClick={handleSelect}>

            {/* IMAGE */}
            <img
                src={cover}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            {/* TOP FOMO TEXT */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white text-xs font-medium">
                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                    📍 {spots} spots avaible
                </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col">

                {/* CITY */}
                <h2 className="text-white text-3xl font-black tracking-tight italic">
                    {city}
                </h2>

                {/* SUBTEXT */}
                <p className="text-white/80 text-sm line-clamp-2 mt-1">
                    {description}
                </p>
            </div>

            {/* GLOW HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10 pointer-events-none" />
        </div>
    )
}