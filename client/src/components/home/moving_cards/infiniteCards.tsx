import { useMemo, type ReactNode } from "react"
// UI components
import AdCard from "./AdCard";
// Data
import { europeItineraries } from "@/data/itineraries/europeItineraries";
import { asiaItineraries } from "@/data/itineraries/asiaItineraries";
import { northAmericaItineraries } from "@/data/itineraries/northamericaItineraries";

const items = europeItineraries;
const item3 = asiaItineraries;
const items4 = northAmericaItineraries;

function CardContainer({ children, animation }: { children: ReactNode; animation: string }) {
    return (
        <div className={`flex w-max ${animation} gap-6`}>
            {children}
        </div>
    )
}

export default function InfiniteCards() {

    const duplicated = useMemo(() => [...items, ...items], [items]);
    const duplicated2 = useMemo(() => [...item3, ...item3], [item3]);
    const duplicated3 = useMemo(() => [...items4, ...items4], [items4]);

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
            <CardContainer animation="animate-scroll">
                {duplicated3.map((item, i) => (
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