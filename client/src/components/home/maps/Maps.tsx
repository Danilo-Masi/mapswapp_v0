import { useAppContext } from "@/context/AppContext";
import FilterBar from "./FilterBar";
import ItineraryCard from "./ItineraryCard";
// Data
import { europeItineraries } from "@/data/itineraries/europeItineraries";
import { asiaItineraries } from "@/data/itineraries/asiaItineraries";
import { northAmericaItineraries } from "@/data/itineraries/northamericaItineraries";
import { southAmericaItineraries } from "@/data/itineraries/southamericaItineraries";
import { africaItineraries } from "@/data/itineraries/africaItineraries";
import { oceaniaItineraries } from "@/data/itineraries/oceaniaItineraries";

export default function Maps() {
    const { selectedFilter } = useAppContext();

    const filteredItineraries = () => {
        switch (selectedFilter) {
            case "EUROPE":
                return europeItineraries;
            case "ASIA":
                return asiaItineraries;
            case "NORTH_AMERICA":
                return northAmericaItineraries;
            case "SOUTH_AMERICA":
                return southAmericaItineraries;
            case "AFRICA":
                return africaItineraries;
            case "OCEANIA":
                return oceaniaItineraries;
            default:
                return [];
        }
    }

    return (
        <section className="w-[95%] md:w-5/6 h-min flex flex-col items-center gap-10" id="maps">
            {/* Title */}
            <h1 className="text-6xl max-w-xl font-extrabold text-center text-zinc-900 leading-tight text-balance">
                All over the world
            </h1>
            {/* Filter Bar */}
            <FilterBar />
            {/* Cards */}
            <div className="w-full h-min flex flex-wrap justify-start items-start gap-8">
                {filteredItineraries().map((itinerary) => (
                    <ItineraryCard
                        key={itinerary.id}
                        id={itinerary.id}
                        image={itinerary.cover}
                        title={itinerary.title}
                        country={itinerary.country}
                        city={itinerary.city}
                        duration={itinerary.duration}
                        shortDescription={itinerary.description}
                        spots={itinerary.spots}
                    />
                ))}
            </div>
        </section>
    )
}
