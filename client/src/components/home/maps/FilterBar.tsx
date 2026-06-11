import { useAppContext } from "@/context/AppContext";
import ContinentCard from "./ContinentCard";

type Continent = {
    key: "EUROPE" | "ASIA" | "NORTH-AMERICA" | "SOUTH-AMERICA" | "AFRICA" | "OCEANIA";
    label: string;
    image: string;
};

const continents: Continent[] = [
    {
        key: "EUROPE",
        label: "Europe",
        image: "/continents/Europe.svg",
    },
    {
        key: "ASIA",
        label: "Asia",
        image: "/continents/Asia.svg",
    },
    {
        key: "NORTH-AMERICA",
        label: "North America",
        image: "/continents/North-America.svg",
    },
    {
        key: "SOUTH-AMERICA",
        label: "South America",
        image: "/continents/South-America.svg",
    },
    {
        key: "AFRICA",
        label: "Africa",
        image: "/continents/Africa.svg",
    },
    {
        key: "OCEANIA",
        label: "Oceania",
        image: "/continents/Oceania.svg",
    },
];

export default function FilterBar() {
    const { selectedFilter, setSelectedFilter } = useAppContext();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {continents.map((continent) => (
                <ContinentCard
                    key={continent.key}
                    name={continent.label}
                    image={continent.image}
                    itineraries={0} // se vuoi puoi sostituirlo con conteggio reale
                    active={selectedFilter === continent.key}
                    onClick={() => setSelectedFilter(continent.key)}
                />
            ))}
        </div>
    );
}