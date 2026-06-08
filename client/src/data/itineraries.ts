type ItineraryType = {
    id: string,
    title: string,
    description: string,
    city: string,
    country: string,
    continent: string,
    cover: string,
    cover2: string,
    duration: number,
    spots: number,
    position: { lat: number, lng: number },
    previewSpots: { id: string, title: string, position: { lat: number, lng: number }, type: string, adress?: string }[],
}

export const itineraries: ItineraryType[] = [
    //// EUROPE ////
    // LONDON //
    {
        id: "london_by_mapswapp",
        title: "Firt time London",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through London like someone who’s already been there.",
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
        cover: "/cover/london_card.webp", // TO UPDATE
        cover2: "/cover/london_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    {
        id: "london_by_mapswapp",
        title: "London Hidden Neighborhoods",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through London like someone who’s already been there.",
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
        cover: "/cover/london_card.webp", // TO UPDATE
        cover2: "/cover/london_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    // PARIS //
    {
        id: "paris_by_mapswapp",
        title: "First time Paris",
        description: "A slower, better-paced way to experience Paris, mixing iconic places with quiet corners most visitors walk straight past.",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: "/cover/paris_card.webp", // TO UPDATE
        cover2: "/cover/paris_card_2.webp", // TO UPDATE
        duration: 4,
        spots: 40,
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Cathédrale de Notre-Dame", position: { lat: 48.85296, lng: 2.3499 }, type: "activity", adress: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France" },
            { id: "2", title: "Île Saint-Louis", position: { lat: 48.85155, lng: 2.35742 }, type: "activity", adress: "Île Saint-Louis, 75004 Paris, France" },
            { id: "3", title: "Square René Viviani", position: { lat: 48.85217, lng: 2.34759 }, type: "activity", adress: "2 Rue du Fouarre, 75005 Paris, France" },
            { id: "4", title: "Café de Flore", position: { lat: 48.85415, lng: 2.3326 }, type: "food", adress: "172 Bd Saint-Germain, 75006 Paris, France" }
        ]
    },
    {
        id: "paris_by_mapswapp",
        title: "Paris for food lovers",
        description: "A slower, better-paced way to experience Paris, mixing iconic places with quiet corners most visitors walk straight past.",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: "/cover/paris_card.webp", // TO UPDATE
        cover2: "/cover/paris_card_2.webp", // TO UPDATE
        duration: 4,
        spots: 40,
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Cathédrale de Notre-Dame", position: { lat: 48.85296, lng: 2.3499 }, type: "activity", adress: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France" },
            { id: "2", title: "Île Saint-Louis", position: { lat: 48.85155, lng: 2.35742 }, type: "activity", adress: "Île Saint-Louis, 75004 Paris, France" },
            { id: "3", title: "Square René Viviani", position: { lat: 48.85217, lng: 2.34759 }, type: "activity", adress: "2 Rue du Fouarre, 75005 Paris, France" },
            { id: "4", title: "Café de Flore", position: { lat: 48.85415, lng: 2.3326 }, type: "food", adress: "172 Bd Saint-Germain, 75006 Paris, France" }
        ]
    },
    // ROME //
    {
        id: "rome_by_mapswapp",
        title: "First time Rome",
        description: "A romantic journey through Rome's historic squares, charming neighborhoods, and iconic landmarks that capture the essence of this unique city.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: "/cover/rome_card.webp", // TO UPDATE
        cover2: "/cover/rome_card_2.webp", // TO UPDATE
        duration: 2,
        spots: 22,
        position: { lat: 45.4408, lng: 12.3155 },
        previewSpots: [
            { id: "1", title: "Rialto Market", position: { lat: 45.4380, lng: 12.3359 }, type: "activity", adress: "Campo de la Pescaria, 30125 Venice, Italy" },
            { id: "2", title: "Cannaregio Canals", position: { lat: 45.4445, lng: 12.3298 }, type: "activity", adress: "Fondamenta della Misericordia, 30121 Venice, Italy" },
            { id: "3", title: "Torrefazione Cannaregio", position: { lat: 45.4449, lng: 12.3278 }, type: "food", adress: "Fondamenta dei Ormesini, 2804, 30121 Venice, Italy" },
            { id: "4", title: "Madonna dell’Orto", position: { lat: 45.4468, lng: 12.3270 }, type: "activity", adress: "Cannaregio, 3512, 30121 Venice, Italy" }
        ]
    },
    {
        id: "rome_by_mapswapp",
        title: "Secret Rome",
        description: "A romantic journey through Rome's historic squares, charming neighborhoods, and iconic landmarks that capture the essence of this unique city.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: "/cover/rome_card.webp", // TO UPDATE
        cover2: "/cover/rome_card_2.webp", // TO UPDATE
        duration: 2,
        spots: 22,
        position: { lat: 45.4408, lng: 12.3155 },
        previewSpots: [
            { id: "1", title: "Rialto Market", position: { lat: 45.4380, lng: 12.3359 }, type: "activity", adress: "Campo de la Pescaria, 30125 Venice, Italy" },
            { id: "2", title: "Cannaregio Canals", position: { lat: 45.4445, lng: 12.3298 }, type: "activity", adress: "Fondamenta della Misericordia, 30121 Venice, Italy" },
            { id: "3", title: "Torrefazione Cannaregio", position: { lat: 45.4449, lng: 12.3278 }, type: "food", adress: "Fondamenta dei Ormesini, 2804, 30121 Venice, Italy" },
            { id: "4", title: "Madonna dell’Orto", position: { lat: 45.4468, lng: 12.3270 }, type: "activity", adress: "Cannaregio, 3512, 30121 Venice, Italy" }
        ]
    },
    // LISBON //
    {
        id: "lisbon_by_mapswapp",
        title: "Lisbon Viewpoints",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through Lisbon like someone who’s already been there.",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: "/cover/lisbon_card.webp", // TO UPDATE
        cover2: "/cover/lisbon_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    {
        id: "lisbon_by_mapswapp",
        title: "Lisbon Local life",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through Lisbon like someone who’s already been there.",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: "/cover/lisbon_card.webp", // TO UPDATE
        cover2: "/cover/lisbon_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    // BUDAPEST //
    {
        id: "budapest_by_mapswapp",
        title: "Budapest Essentials",
        description: "A balanced route through the city’s baths, viewpoints, ruin bars, and local corners that make Budapest feel alive after sunset.",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: "/cover/budapest_card.webp", // TO UPDATE
        cover2: "/cover/budapest_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 33,
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Buda Castle", position: { lat: 47.4962, lng: 19.03956 }, type: "activity", adress: "Budapest, Szent György tér, 1014 Hungary" },
            { id: "2", title: "Fisherman’s Bastion", position: { lat: 47.50218, lng: 19.03478 }, type: "activity", adress: "Budapest, 1014 Hungary" },
            { id: "3", title: "Matthias Church", position: { lat: 47.50195, lng: 19.03416 }, type: "activity", adress: "Budapest, Szentháromság tér 2, 1014 Hungary" },
            { id: "4", title: "Ruszwurm Confectionery", position: { lat: 47.50122, lng: 19.033 }, type: "food", adress: "Budapest, Szentháromság u. 7, 1014 Hungary" }
        ]
    },
    {
        id: "budapest_by_mapswapp",
        title: "Budapest Thermal & Nightlife",
        description: "A balanced route through the city’s baths, viewpoints, ruin bars, and local corners that make Budapest feel alive after sunset.",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: "/cover/budapest_card.webp", // TO UPDATE
        cover2: "/cover/budapest_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 33,
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Buda Castle", position: { lat: 47.4962, lng: 19.03956 }, type: "activity", adress: "Budapest, Szent György tér, 1014 Hungary" },
            { id: "2", title: "Fisherman’s Bastion", position: { lat: 47.50218, lng: 19.03478 }, type: "activity", adress: "Budapest, 1014 Hungary" },
            { id: "3", title: "Matthias Church", position: { lat: 47.50195, lng: 19.03416 }, type: "activity", adress: "Budapest, Szentháromság tér 2, 1014 Hungary" },
            { id: "4", title: "Ruszwurm Confectionery", position: { lat: 47.50122, lng: 19.033 }, type: "food", adress: "Budapest, Szentháromság u. 7, 1014 Hungary" }
        ]
    },
    // AMSTERDAM //
    {
        id: "amsterdam_by_mapswapp",
        title: "First time Dam",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Amsterdam feel lived-in, not touristy.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: "/cover/amsterdam_card.webp", // TO UPDATE
        cover2: "/cover/amsterdam_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    {
        id: "amsterdam_by_mapswapp",
        title: "Amsterdam beyoind the canals",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Amsterdam feel lived-in, not touristy.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: "/cover/amsterdam_card.webp", // TO UPDATE
        cover2: "/cover/amsterdam_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // VIENNA //
    {
        id: "vienna_by_mapswapp",
        title: "Vienna Classics",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Vienna feel lived-in, not touristy.",
        city: "Vienna",
        country: "Austria",
        continent: "Europe",
        cover: "/cover/vienna_2.webp", // TO UPDATE
        cover2: "/cover/vienna_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // FLORENCE //
    {
        id: "florence_by_mapswapp",
        title: "Florence beyond the museums",
        description: "A delightful tour through Florence's historic streets, art galleries, and local markets that showcase the city's rich cultural heritage.",
        city: "Florence",
        country: "Italy",
        continent: "Europe",
        cover: "/cover/florence_2.webp", // TO UPDATE
        cover2: "/cover/florence_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // NAPLES //
    {
        id: "naples_by_mapswapp",
        title: "Naples street food",
        description: "A delightful tour through Naples' historic streets, local markets, and traditional restaurants that showcase the city's rich cultural heritage.",
        city: "Naples",
        country: "Italy",
        continent: "Europe",
        cover: "/cover/naples_2.webp", // TO UPDATE
        cover2: "/cover/naples_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // SEVILLE //
    {
        id: "seville_by_mapswapp",
        title: "Seville Local tapas",
        description: "A vibrant tour through Seville's historic streets, flamenco venues, and local markets that showcase the city's rich cultural heritage.",
        city: "Seville",
        country: "Spain",
        continent: "Europe",
        cover: "/cover/seville_card.webp", // TO UPDATE
        cover2: "/cover/seville_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 35,
        position: { lat: 37.3891, lng: -5.9845 },
        previewSpots: [
            { id: "1", title: "Real Alcázar Gardens", position: { lat: 37.3830, lng: -5.9902 }, type: "activity", adress: "Patio de Banderas, s / n, 41004 Seville, Spain" },
            { id: "2", title: "Barrio Santa Cruz", position: { lat: 37.3862, lng: -5.9895 }, type: "activity", adress: "Barrio de Santa Cruz, 41004 Seville, Spain" },
            { id: "3", title: "La Cacharrería", position: { lat: 37.3931, lng: -5.9926 }, type: "food", adress: "Calle Regina, 14, 41003 Seville, Spain" },
            { id: "4", title: "Metropol Parasol Rooftop", position: { lat: 37.3933, lng: -5.9917 }, type: "activity", adress: "Plaza de la Encarnación, s / n, 41003 Seville, Spain" }
        ]
    },
    // DUBROVNIK //
    {
        id: "dubrovnik_by_mapswapp",
        title: "Dubrovnik, the pearl of Croatia",
        description: "A captivating tour through Dubrovnik's medieval walls, historic squares, and traditional restaurants that showcase the city's rich cultural heritage.",
        city: "Dubrovnik",
        country: "Croatia",
        continent: "Europe",
        cover: "/cover/dubrovnik_card.webp", // TO UPDATE
        cover2: "/cover/dubrovnik_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // MILAN //
    {
        id: "milan_by_mapswapp",
        title: "Milan, the fashion capital",
        description: "A stylish tour through Milan's designer districts, historic cathedrals, and trendy cafes that showcase the city's vibrant cultural scene.",
        city: "Milan",
        country: "Italy",
        continent: "Europe",
        cover: "/cover/milan_card.webp", // TO UPDATE
        cover2: "/cover/milan_card_2.webp", // TO UPDATE
        duration: 3,
        spots: 32,
        position: { lat: 45.4642, lng: 9.1900 },
        previewSpots: [
            { id: "1", title: "Milan Cathedral", position: { lat: 45.4642, lng: 9.1900 }, type: "activity", adress: "Piazza del Duomo, 20121 Milan, Italy" },
            { id: "2", title: "Galleria Vittorio Emanuele II", position: { lat: 45.4636, lng: 9.1887 }, type: "activity", adress: "Piazza del Duomo, 20121 Milan, Italy" },
            { id: "3", title: "Sforza Castle", position: { lat: 45.4650, lng: 9.1875 }, type: "activity", adress: "Piazza del Duomo, 20121 Milan, Italy" },
            { id: "4", title: "Brera Art District", position: { lat: 45.4667, lng: 9.1833 }, type: "activity", adress: "Piazza del Duomo, 20121 Milan, Italy" }
        ]
    },

    
];