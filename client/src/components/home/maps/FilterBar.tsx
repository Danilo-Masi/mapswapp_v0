import { useAppContext } from "@/context/AppContext";
import ContinentCard from "./ContinentCard";

type Continent = {
    key: "EUROPE" | "ASIA" | "NORTH_AMERICA" | "SOUTH_AMERICA" | "AFRICA" | "OCEANIA";
    label: string;
    image: string;
    numberOfItineraries: number;
};

const continents: Continent[] = [
    {
        key: "EUROPE",
        label: "Europe",
        image: "/continents/Europe.svg",
        numberOfItineraries: 8,
    },
    {
        key: "ASIA",
        label: "Asia",
        image: "/continents/Asia.svg",
        numberOfItineraries: 9, 
    },
    {
        key: "NORTH_AMERICA",
        label: "North America",
        image: "/continents/North-America.svg",
        numberOfItineraries: 6,
    },
    {
        key: "SOUTH_AMERICA",
        label: "South America",
        image: "/continents/South-America.svg",
        numberOfItineraries: 6,
    },
    {
        key: "AFRICA",
        label: "Africa",
        image: "/continents/Africa.svg",
        numberOfItineraries: 5,
    },
    {
        key: "OCEANIA",
        label: "Oceania",
        image: "/continents/Oceania.svg",
        numberOfItineraries: 6,
    },
];

export default function FilterBar() {
    const { selectedFilter, setSelectedFilter } = useAppContext();

    return (
        <div className="flex flex-wrap justify-start gap-4">
            {continents.map((continent) => (
                <ContinentCard
                    key={continent.key}
                    name={continent.label}
                    image={continent.image}
                    itineraries={continent.numberOfItineraries}
                    active={selectedFilter === continent.key}
                    onClick={() => setSelectedFilter(continent.key)}
                />
            ))}
        </div>
    );
}