import rome from "../assets/itineraries/rome_card.webp";
import rome2 from "../assets/itineraries/rome_card_2.webp";
import amsterdam from "../assets/itineraries/amsterdam_card.webp";
import amsterdam2 from "../assets/itineraries/amsterdam_card_2.webp";
import budapest from "../assets/itineraries/budapest_card.webp";
import budapest2 from "../assets/itineraries/budapest_card_2.webp";
import london from "../assets/itineraries/london_card.webp";
import london2 from "../assets/itineraries/london_card_2.webp";
import paris from "../assets/itineraries/paris_card.webp";
import paris2 from "../assets/itineraries/paris_card_2.webp";
import lisbon from "../assets/itineraries/lisbon_card.webp";
import lisbon2 from "../assets/itineraries/lisbon_card_2.webp";
import newyork from "../assets/itineraries/newyork_card.webp";
import newyork2 from "../assets/itineraries/newyork_card_2.webp";
import seville from "../assets/itineraries/seville_card.webp";
import seville2 from "../assets/itineraries/seville_card_2.webp";
import sanfrancisco from "../assets/itineraries/sanfrancisco_card.webp";
import sanfrancisco2 from "../assets/itineraries/sanfrancisco_card_2.webp";
import venice from "../assets/itineraries/venice_card.webp";
import venice2 from "../assets/itineraries/venice_card_2.webp";

type ItineraryType = {
    id: string,
    title: string,
    description: string,
    city: string,
    country: string,
    continent: string,
    cover: string, // TO UPDATE
    cover2: string, // TO UPDATE
    images?: string[],
    price: number,
    duration: number,
    period: string,
    badge: string,
    spots: number,
    position: { lat: number, lng: number },
    previewSpots: { id: string, title: string, position: { lat: number, lng: number }, type: string, adress?: string }[],
}

export const itineraries: ItineraryType[] = [
    //// BEST VALUE ////
    // PORTUGAL //
    {
        id: "lisbon_by_mapswapp",
        title: "Lisbon, beyond the obvious",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through Lisbon like someone who’s already been there.",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: lisbon, // TO UPDATE
        cover2: lisbon2, // TO UPDATE
        price: 9.99,
        duration: 3,
        period: "spring",
        badge: "best_value",
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    // HUNGARY //
    {
        id: "budapest_by_mapswapp",
        title: "Budapest, slow mornings and late nights",
        description: "A balanced route through the city’s baths, viewpoints, ruin bars, and local corners that make Budapest feel alive after sunset.",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: budapest, // TO UPDATE
        cover2: budapest2, // TO UPDATE
        price: 14.99,
        duration: 3,
        period: "autumn",
        badge: "best_value",
        spots: 33,
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Buda Castle", position: { lat: 47.4962, lng: 19.03956 }, type: "activity", adress: "Budapest, Szent György tér, 1014 Hungary" },
            { id: "2", title: "Fisherman’s Bastion", position: { lat: 47.50218, lng: 19.03478 }, type: "activity", adress: "Budapest, 1014 Hungary" },
            { id: "3", title: "Matthias Church", position: { lat: 47.50195, lng: 19.03416 }, type: "activity", adress: "Budapest, Szentháromság tér 2, 1014 Hungary" },
            { id: "4", title: "Ruszwurm Confectionery", position: { lat: 47.50122, lng: 19.033 }, type: "food", adress: "Budapest, Szentháromság u. 7, 1014 Hungary" }
        ]
    },
    // NETHERLANDS //
    {
        id: "amsterdam_by_mapswapp",
        title: "Amsterdam, beyond the postcard",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Amsterdam feel lived-in, not touristy.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: amsterdam, // TO UPDATE
        cover2: amsterdam2, // TO UPDATE
        price: 14.99,
        duration: 3,
        period: "autumn",
        badge: "best_value",
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // SPAIN //
    {
        id: "seville_by_mapswapp",
        title: "Seville, the heart of Andalusia",
        description: "A vibrant tour through Seville's historic streets, flamenco venues, and local markets that showcase the city's rich cultural heritage.",
        city: "Seville",
        country: "Spain",
        continent: "Europe",
        cover: seville, // TO UPDATE
        cover2: seville2, // TO UPDATE
        price: 15.99,
        duration: 3,
        period: "spring",
        badge: "best_value",
        spots: 35,
        position: { lat: 37.3891, lng: -5.9845 },
        previewSpots: [
            { id: "1", title: "Real Alcázar Gardens", position: { lat: 37.3830, lng: -5.9902 }, type: "activity", adress: "Patio de Banderas, s / n, 41004 Seville, Spain" },
            { id: "2", title: "Barrio Santa Cruz", position: { lat: 37.3862, lng: -5.9895 }, type: "activity", adress: "Barrio de Santa Cruz, 41004 Seville, Spain" },
            { id: "3", title: "La Cacharrería", position: { lat: 37.3931, lng: -5.9926 }, type: "food", adress: "Calle Regina, 14, 41003 Seville, Spain" },
            { id: "4", title: "Metropol Parasol Rooftop", position: { lat: 37.3933, lng: -5.9917 }, type: "activity", adress: "Plaza de la Encarnación, s / n, 41003 Seville, Spain" }
        ]
    },
    // ITALY //
    {
        id: "venice_by_mapswapp",
        title: "Venice, the city of dreams",
        description: "A romantic journey through Venice's canals, historic squares, and charming neighborhoods that capture the essence of this unique city.",
        city: "Venice",
        country: "Italy",
        continent: "Europe",
        cover: venice, // TO UPDATE
        cover2: venice2, // TO UPDATE
        price: 9.99,
        duration: 2,
        period: "summer",
        badge: "best_value",
        spots: 22,
        position: { lat: 45.4408, lng: 12.3155 },
        previewSpots: [
            { id: "1", title: "Rialto Market", position: { lat: 45.4380, lng: 12.3359 }, type: "activity", adress: "Campo de la Pescaria, 30125 Venice, Italy" },
            { id: "2", title: "Cannaregio Canals", position: { lat: 45.4445, lng: 12.3298 }, type: "activity", adress: "Fondamenta della Misericordia, 30121 Venice, Italy" },
            { id: "3", title: "Torrefazione Cannaregio", position: { lat: 45.4449, lng: 12.3278 }, type: "food", adress: "Fondamenta dei Ormesini, 2804, 30121 Venice, Italy" },
            { id: "4", title: "Madonna dell’Orto", position: { lat: 45.4468, lng: 12.3270 }, type: "activity", adress: "Cannaregio, 3512, 30121 Venice, Italy" }
        ]
    },
    //// TRENDING ////
    // UNITED KINGDOM //
    {
        id: "london_by_mapswapp",
        title: "London, without the chaos",
        description: "Move through the city with a clear plan, hit the icons at the right time, and slip into the neighborhoods most people never reach.",
        city: "London",
        country: "UK",
        continent: "Europe",
        cover: london, // TO UPDATE
        cover2: london2, // TO UPDATE
        price: 18.99,
        duration: 4,
        period: "autumn",
        badge: "trending",
        spots: 42,
        position: { lat: 51.5074, lng: -0.1278 },
        previewSpots: [
            { id: "1", title: "Westminster Abbey", position: { lat: 51.49936, lng: -0.12729 }, type: "activity", adress: "Dean's Yard, London SW1P 3PA, United Kingdom" },
            { id: "2", title: "Houses of Parliament & Big Ben", position: { lat: 51.50072, lng: -0.12462 }, type: "activity", adress: "Londra SW1A 0AA, United Kingdom" },
            { id: "3", title: "Southbank Walk", position: { lat: 51.5036, lng: -0.1173 }, type: "activity", adress: "Belvedere Rd, London SE1, United Kingdom" },
            { id: "4", title: "Borough Market", position: { lat: 51.50558, lng: -0.09048 }, type: "food", adress: "London SE1 9AH, United Kingdom" }
        ]
    },
    // FRANCE //
    {
        id: "paris_by_mapswapp",
        title: "Paris is better when you wander",
        description: "A slower, better-paced way to experience Paris, mixing iconic places with quiet corners most visitors walk straight past.",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: paris, // TO UPDATE
        cover2: paris2, // TO UPDATE
        price: 18.99,
        duration: 4,
        period: "spring",
        badge: "trending",
        spots: 40,
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Cathédrale de Notre-Dame", position: { lat: 48.85296, lng: 2.3499 }, type: "activity", adress: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France" },
            { id: "2", title: "Île Saint-Louis", position: { lat: 48.85155, lng: 2.35742 }, type: "activity", adress: "Île Saint-Louis, 75004 Paris, France" },
            { id: "3", title: "Square René Viviani", position: { lat: 48.85217, lng: 2.34759 }, type: "activity", adress: "2 Rue du Fouarre, 75005 Paris, France" },
            { id: "4", title: "Café de Flore", position: { lat: 48.85415, lng: 2.3326 }, type: "food", adress: "172 Bd Saint-Germain, 75006 Paris, France" }
        ]
    },
    // ITALY //
    {
        id: "rome_by_mapswapp",
        title: "Rome never really feels finished",
        description: "Ancient landmarks, quiet backstreets, sunset viewpoints, and the kind of places that make you slow down without realizing it.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: rome, // TO UPDATE
        cover2: rome2, // TO UPDATE
        price: 19.99,
        duration: 4,
        period: "spring",
        badge: "trending",
        spots: 44,
        position: { lat: 41.9028, lng: 12.4964 },
        previewSpots: [
            { id: "1", title: "Colosseo", position: { lat: 41.89021, lng: 12.49223 }, type: "activity", adress: "P.za del Colosseo, 1, 00184 Rome" },
            { id: "2", title: "Foro Romano", position: { lat: 41.89209, lng: 12.48643 }, type: "activity", adress: "00186 Rome" },
            { id: "3", title: "Via dei Fori Imperiali walk", position: { lat: 41.89275, lng: 12.488 }, type: "activity", adress: "Via dei Fori Imperiali, Rome" },
            { id: "4", title: "Ai Tre Scalini", position: { lat: 41.89628, lng: 12.49051 }, type: "food", adress: "Via Panisperna, 251, 00184 Rome" }
        ]
    },
    // USA //
    {
        id: "newyork_by_mapswapp",
        title: "New York never sleep",
        description: "A clean flow through Manhattan and Brooklyn built to balance big landmarks, local energy, and moments where the city suddenly feels real.",
        city: "New York",
        country: "USA",
        continent: "Americas",
        cover: newyork, // TO UPDATE
        cover2: newyork2, // TO UPDATE
        price: 34.99,
        duration: 7,
        period: "autumn",
        badge: "trending",
        spots: 77,
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: [
            { id: "1", title: "Washington Square Park", position: { lat: 40.7308, lng: -73.9973 }, type: "activity", adress: "Washington Square, New York, NY 10012, USA" },
            { id: "2", title: "Bleecker Street & West Village", position: { lat: 40.7317, lng: -74.0037 }, type: "activity", adress: "Bleecker St, New York, NY 10014, USA" },
            { id: "3", title: "Maman Soho", position: { lat: 40.7207, lng: -74.0008 }, type: "food", adress: "239 Centre St, New York, NY 10013, USA" },
            { id: "4", title: "Little Island at Pier 55", position: { lat: 40.7420, lng: -74.0107 }, type: "activity", adress: "Pier 55, Hudson River Greenway, New York, NY 10014, USA" }
        ]
    },
    {
        id: "sanfrancisco_by_mapswapp",
        title: "San Francisco, the city that never sleeps",
        description: "A vibrant tour through San Francisco's iconic landmarks, diverse neighborhoods, and local experiences that showcase the city's unique character.",
        city: "San Francisco",
        country: "USA",
        continent: "Americas",
        cover: sanfrancisco, // TO UPDATE
        cover2: sanfrancisco2, // TO UPDATE
        price: 29.99,
        duration: 6,
        period: "spring",
        badge: "trending",
        spots: 66,
        position: { lat: 37.7749, lng: -122.4194 },
        previewSpots: [
            { id: "1", title: "Ferry Building & Embarcadero", position: { lat: 37.7955, lng: -122.3937 }, type: "activity", adress: "1 Ferry Building, San Francisco, CA 94111, USA" },
            { id: "2", title: "Blue Bottle Coffee at Mint Plaza", position: { lat: 37.7824, lng: -122.4079 }, type: "food", adress: "66 Mint St, San Francisco, CA 94103, USA" },
            { id: "3", title: "Balmy Alley Murals", position: { lat: 37.7510, lng: -122.4110 }, type: "activity", adress: "50 Balmy St, San Francisco, CA 94110, USA" },
            { id: "4", title: "Dolores Park Viewpoint", position: { lat: 37.7596, lng: -122.4269 }, type: "activity", adress: "Dolores St & 19th St, San Francisco, CA 94114, USA" }
        ]
    },
];