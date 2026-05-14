import { itineraries } from "@/data/itineraries"
import { useMemo } from "react"
import AdCard from "./AdCard";

const items = itineraries.filter((i) => i.badge === "trending");
const items2 = itineraries.filter((i) => i.badge === "best_value");

export default function InfiniteCards() {

    const duplicated = useMemo(() => [...items, ...items], [items]);
    const duplicated2 = useMemo(() => [...items2, ...items2], [items2]);

    return (
        <div className="w-full flex flex-col gap-5 overflow-hidden relative">
            {/* Lateral fade */}
            <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            {/* Track */}
            <div className="flex w-max animate-scroll gap-6">
                {duplicated.map((item, i) => (
                    <AdCard
                        key={i}
                        id={item.id}
                        spots={item.spots}
                        city={item.city}
                        description={item.description}
                        cover={item.cover2}
                    />
                ))}
            </div>
            <div className="flex w-max animate-scroll-reverse gap-6">
                {duplicated2.map((item, i) => (
                    <AdCard
                        key={i}
                        id={item.id}
                        spots={item.spots}
                        city={item.city}
                        description={item.description}
                        cover={item.cover2}
                    />
                ))}
            </div>
        </div>
    )
}