import ItineraryCard from "./ItineraryCard";
import { itineraries } from "../../../data/itineraries";
import FilterBar from "./FilterBar";

export default function Maps() {
    return (
        <section className="w-[95%] md:w-5/6 h-min flex flex-col items-center gap-10" id="maps">
            {/* Filter Bar */}
            <FilterBar />
            {/* Skeleton or Card */}
            <div className="w-full h-min flex flex-wrap justify-start items-start gap-8">
                {itineraries.map((itinerary: any) => (
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
