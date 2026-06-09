import { useAppContext } from "@/context/AppContext";
import ContinentCard from "./ContinentCard";

export default function FilterBar() {
    const { selectedFilter, setSelectedFilter } = useAppContext();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <ContinentCard
                name="Europe"
                image="/continents/europe.svg"
                itineraries={24}
                active={selectedFilter === "Europe"}
                onClick={() => setSelectedFilter("Europe")}
            />

            <ContinentCard
                name="Asia"
                image="/continents/asia.svg"
                itineraries={18}
                active={selectedFilter === "Asia"}
                onClick={() => setSelectedFilter("Asia")}
            />

            <ContinentCard
                name="Americas"
                image="/continents/europe.svg"
                itineraries={21}
                active={selectedFilter === "Americas"}
                onClick={() => setSelectedFilter("Americas")}
            />

            <ContinentCard
                name="Africa"
                image="/continents/africa.svg"
                itineraries={11}
                active={selectedFilter === "Africa"}
                onClick={() => setSelectedFilter("Africa")}
            />

            <ContinentCard
                name="Oceania"
                image="/continents/europe.svg"
                itineraries={10}
                active={selectedFilter === "Oceania"}
                onClick={() => setSelectedFilter("Oceania")}
            />
        </div>
    )
}

