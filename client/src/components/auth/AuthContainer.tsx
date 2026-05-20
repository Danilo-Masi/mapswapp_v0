import { itineraries } from "@/data/itineraries";
import useIsMobile from "@/lib/screenWidth";
import { useMemo, type ReactNode } from "react";

const items = itineraries.filter((i) => i.badge === "trending");
const items2 = itineraries.filter((i) => i.badge === "best_value");

function AuthCard({ cover, city }: { cover: string; city: string }) {
    return (
        <div className="w-[35svh] h-full rounded-2xl flex items-center justify-center relative bg-zinc-900 shadow-lg">
            <img
                src={cover}
                alt={city}
                className="w-full h-full object-cover rounded-2xl absolute top-0 left-0 z-0 opacity-90" />
            <h2 className="z-0 text-2xl italic font-black text-white">
                {city}
            </h2>
        </div>
    );
}

export default function AuthContainer({ children }: { children: ReactNode }) {

    const isMobile = useIsMobile();

    const duplicated = useMemo(() => [...items, ...items], [items]);
    const duplicated2 = useMemo(() => [...items2, ...items2], [items2]);

    return (
        <div className="w-full h-auto min-h-svh md:h-svh flex bg-zinc-100">
            {!isMobile && (
                <div className="w-1/2 h-full flex flex-col p-3 gap-3 overflow-hidden relative">
                    {/* Blocco 1 */}
                    <div className="flex w-max h-1/3 gap-6 animate-scroll">
                        {duplicated.map((itinerary, i) => (
                            <AuthCard key={i} cover={itinerary.cover} city={itinerary.city} />
                        ))}
                    </div>
                    {/* Blocco 2 */}
                    <div className="flex w-max h-1/3 gap-6 animate-scroll-reverse">
                        {duplicated2.map((itinerary, i) => (
                            <AuthCard key={i} cover={itinerary.cover} city={itinerary.city} />
                        ))}
                    </div>
                    {/* Blocco 3 */}
                    <div className="flex w-max h-1/3 gap-6 animate-scroll">
                        {duplicated.map((itinerary, i) => (
                            <AuthCard key={i} cover={itinerary.cover2} city={itinerary.city} />
                        ))}
                    </div>
                    {/* Layer effetto */}
                    <div className="w-[20svh] h-full absolute top-0 right-0 bg-linear-to-l from-zinc-100 via-zinc-100/80 to-transparent" />
                    <div className="w-[20svh] h-full absolute top-0 right-0 bg-linear-to-l from-zinc-100 via-zinc-100/50 to-transparent" />
                </div>

            )}
            <div className="w-full md:w-1/2">
                {children}
            </div>
        </div>
    )
}
