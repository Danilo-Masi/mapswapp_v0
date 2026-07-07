import { useMemo, type ReactNode } from "react"
// UI components
import AdCard from "./AdCard";
// Data
import { europeItineraries } from "@/data/itineraries/europeItineraries";
import { africaItineraries } from "@/data/itineraries/africaItineraries";

const items = europeItineraries;
const items2 = africaItineraries;

function CardContainer({ children, animation }: { children: ReactNode; animation: string }) {
    return (
        <div className={`flex w-max ${animation} gap-6`}>
            {children}
        </div>
    )
}

export default function InfiniteCards() {

    const duplicated = useMemo(() => [...items, ...items], [items]);
    const duplicated2 = useMemo(() => [...items2, ...items2], [items2]);

    return (
        <div className="w-full flex flex-col gap-5 overflow-hidden relative">
            {/* Lateral fade */}
            <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            {/* Track */}
            <CardContainer animation="animate-scroll">
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
            </CardContainer>
            <CardContainer animation="animate-scroll-reverse">
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
            </CardContainer>
        </div>
    )
}