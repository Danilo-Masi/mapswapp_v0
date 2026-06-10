import { useAppContext } from "@/context/AppContext";
import ContinentCard from "./ContinentCard";

type Continent = {
    key: "EUROPE" | "ASIA" | "AMERICAS" | "AFRICA" | "OCEANIA";
    label: string;
    image: string;
};

const continents: Continent[] = [
    {
        key: "EUROPE",
        label: "Europe",
        image: "/continents/europe.svg",
    },
    {
        key: "ASIA",
        label: "Asia",
        image: "/continents/asia.svg",
    },
    {
        key: "AMERICAS",
        label: "Americas",
        image: "/continents/americas.svg",
    },
    {
        key: "AFRICA",
        label: "Africa",
        image: "/continents/africa.svg",
    },
    {
        key: "OCEANIA",
        label: "Oceania",
        image: "/continents/oceania.svg",
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