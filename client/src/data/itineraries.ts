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
    // EUROPE //
    {
        id: "london_by_mapswapp",
        title: "Firt time London",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through London like someone who’s already been there.",
        city: "London",
        country: "United Kingdom",
        continent: "EUROPE",
        cover: "/cover/london.webp", // TO UPDATE
        cover2: "/cover/london_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/london.webp", // TO UPDATE
        cover2: "/cover/london_2.webp", // TO UPDATE
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
        id: "paris_by_mapswapp",
        title: "First time Paris",
        description: "A slower, better-paced way to experience Paris, mixing iconic places with quiet corners most visitors walk straight past.",
        city: "Paris",
        country: "France",
        continent: "EUROPE",
        cover: "/cover/paris.webp", // TO UPDATE
        cover2: "/cover/paris_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/paris.webp", // TO UPDATE
        cover2: "/cover/paris_2.webp", // TO UPDATE
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
        id: "rome_by_mapswapp",
        title: "First time Rome",
        description: "A romantic journey through Rome's historic squares, charming neighborhoods, and iconic landmarks that capture the essence of this unique city.",
        city: "Rome",
        country: "Italy",
        continent: "EUROPE",
        cover: "/cover/rome.webp", // TO UPDATE
        cover2: "/cover/rome_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/rome.webp", // TO UPDATE
        cover2: "/cover/rome_2.webp", // TO UPDATE
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
        id: "lisbon_by_mapswapp",
        title: "Lisbon Viewpoints",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through Lisbon like someone who’s already been there.",
        city: "Lisbon",
        country: "Portugal",
        continent: "EUROPE",
        cover: "/cover/lisbon.webp", // TO UPDATE
        cover2: "/cover/lisbon_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/lisbon.webp", // TO UPDATE
        cover2: "/cover/lisbon_2.webp", // TO UPDATE
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
        id: "budapest_by_mapswapp",
        title: "Budapest Essentials",
        description: "A balanced route through the city’s baths, viewpoints, ruin bars, and local corners that make Budapest feel alive after sunset.",
        city: "Budapest",
        country: "Hungary",
        continent: "EUROPE",
        cover: "/cover/budapest.webp", // TO UPDATE
        cover2: "/cover/budapest_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/budapest.webp", // TO UPDATE
        cover2: "/cover/budapest_2.webp", // TO UPDATE
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
        id: "amsterdam_by_mapswapp",
        title: "First time Dam",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Amsterdam feel lived-in, not touristy.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "EUROPE",
        cover: "/cover/amsterdam.webp", // TO UPDATE
        cover2: "/cover/amsterdam_2.webp", // TO UPDATE
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
        continent: "EUROPE",
        cover: "/cover/amsterdam.webp", // TO UPDATE
        cover2: "/cover/amsterdam_2.webp", // TO UPDATE
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
        id: "vienna_by_mapswapp",
        title: "Vienna Classics",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Vienna feel lived-in, not touristy.",
        city: "Vienna",
        country: "Austria",
        continent: "EUROPE",
        cover: "/cover/vienna.webp", // TO UPDATE
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
    {
        id: "florence_by_mapswapp",
        title: "Florence beyond the museums",
        description: "A delightful tour through Florence's historic streets, art galleries, and local markets that showcase the city's rich cultural heritage.",
        city: "Florence",
        country: "Italy",
        continent: "EUROPE",
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
    {
        id: "naples_by_mapswapp",
        title: "Naples street food",
        description: "A delightful tour through Naples' historic streets, local markets, and traditional restaurants that showcase the city's rich cultural heritage.",
        city: "Naples",
        country: "Italy",
        continent: "EUROPE",
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
    {
        id: "seville_by_mapswapp",
        title: "Seville Local tapas",
        description: "A vibrant tour through Seville's historic streets, flamenco venues, and local markets that showcase the city's rich cultural heritage.",
        city: "Seville",
        country: "Spain",
        continent: "EUROPE",
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
    //// ASIA ////
    {
        id: "tokyo_first_time",
        title: "Tokyo for the First Time",
        description: "The perfect introduction to Japan’s most exciting city.",
        city: "Tokyo",
        country: "Japan",
        continent: "ASIA",
        cover: "/cover/tokyo",
        cover2: "/cover/tokyo_2",
        duration: 4,
        spots: 44,
        position: { lat: 35.6764, lng: 139.6500 },
        previewSpots: []
    },
    {
        id: "tokyo_hidden_side",
        title: "Hidden Tokyo",
        description: "Quiet neighborhoods, local cafés and places most tourists miss.",
        city: "Tokyo",
        country: "Japan",
        continent: "ASIA",
        cover: "/cover/tokyo_hidden",
        cover2: "/cover/tokyo_hidden_2",
        duration: 4,
        spots: 41,
        position: { lat: 35.6764, lng: 139.6500 },
        previewSpots: []
    },
    {
        id: "seoul_local_life",
        title: "Seoul Like a Local",
        description: "Trendy districts, hidden streets and everyday Seoul.",
        city: "Seoul",
        country: "South Korea",
        continent: "ASIA",
        cover: "/cover/seoul",
        cover2: "/cover/seoul_2",
        duration: 4,
        spots: 42,
        position: { lat: 37.5665, lng: 126.9780 },
        previewSpots: []
    },
    {
        id: "bangkok_beyond_temples",
        title: "Bangkok Beyond Temples",
        description: "Street food, local neighborhoods and unforgettable nights.",
        city: "Bangkok",
        country: "Thailand",
        continent: "ASIA",
        cover: "/cover/bangkok",
        cover2: "/cover/bangkok_2",
        duration: 4,
        spots: 45,
        position: { lat: 13.7563, lng: 100.5018 },
        previewSpots: []
    },
    {
        id: "kyoto_timeless_japan",
        title: "Timeless Kyoto",
        description: "Ancient temples, quiet alleys and traditional Japan.",
        city: "Kyoto",
        country: "Japan",
        continent: "ASIA",
        cover: "/cover/kyoto",
        cover2: "/cover/kyoto_2",
        duration: 3,
        spots: 33,
        position: { lat: 35.0116, lng: 135.7681 },
        previewSpots: []
    },
    {
        id: "osaka_food_capital",
        title: "Osaka Food Capital",
        description: "The ultimate itinerary for food lovers visiting Japan.",
        city: "Osaka",
        country: "Japan",
        continent: "Asia",
        cover: "/cover/osaka",
        cover2: "/cover/osaka_2",
        duration: 3,
        spots: 35,
        position: { lat: 34.6937, lng: 135.5023 },
        previewSpots: []
    },
    {
        id: "singapore_first_time",
        title: "Singapore First Time",
        description: "Gardens, hawker centers and the city's best highlights.",
        city: "Singapore",
        country: "Singapore",
        continent: "ASIA",
        cover: "/cover/singapore",
        cover2: "/cover/singapore_2",
        duration: 3,
        spots: 31,
        position: { lat: 1.3521, lng: 103.8198 },
        previewSpots: []
    },
    {
        id: "hong_kong_skyline_food",
        title: "Hong Kong Skyline & Food",
        description: "Rooftops, markets and some of Asia’s best food spots.",
        city: "Hong Kong",
        country: "Hong Kong",
        continent: "ASIA",
        cover: "/cover/hongkong",
        cover2: "/cover/hongkong_2",
        duration: 4,
        spots: 40,
        position: { lat: 22.3193, lng: 114.1694 },
        previewSpots: []
    },
    {
        id: "taipei_night_markets",
        title: "Taipei Night Markets",
        description: "The best local food, cafés and hidden corners of Taipei.",
        city: "Taipei",
        country: "Taiwan",
        continent: "ASIA",
        cover: "/cover/taipei",
        cover2: "/cover/taipei_2",
        duration: 3,
        spots: 32,
        position: { lat: 25.0330, lng: 121.5654 },
        previewSpots: []
    },
    {
        id: "bali_island_escape",
        title: "Bali Island Escape",
        description: "Rice terraces, beach clubs and unforgettable sunsets.",
        city: "Bali",
        country: "Indonesia",
        continent: "ASIA",
        cover: "/cover/bali",
        cover2: "/cover/bali_2",
        duration: 5,
        spots: 54,
        position: { lat: -8.4095, lng: 115.1889 },
        previewSpots: []
    },

    // AMERICAS //
    {
        id: "new_york_first_time",
        title: "New York First Time",
        description: "The perfect introduction to New York’s iconic landmarks and neighborhoods.",
        city: "New York",
        country: "United States",
        continent: "AMERICAS",
        cover: "/cover/newyork",
        cover2: "/cover/newyork_2",
        duration: 4,
        spots: 45,
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: []
    },
    {
        id: "new_york_after_dark",
        title: "New York After Dark",
        description: "Rooftops, jazz bars, skyline views and the city that never sleeps.",
        city: "New York",
        country: "United States",
        continent: "AMERICAS",
        cover: "/cover/newyork_night",
        cover2: "/cover/newyork_night_2",
        duration: 4,
        spots: 42,
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: []
    },
    {
        id: "los_angeles_local",
        title: "Los Angeles Local Favorites",
        description: "Beach culture, creative neighborhoods and hidden LA gems.",
        city: "Los Angeles",
        country: "United States",
        continent: "AMERICAS",
        cover: "/cover/losangeles",
        cover2: "/cover/losangeles_2",
        duration: 4,
        spots: 44,
        position: { lat: 34.0522, lng: -118.2437 },
        previewSpots: []
    },
    {
        id: "san_francisco_essentials",
        title: "San Francisco Essentials",
        description: "The best viewpoints, neighborhoods and local experiences in San Francisco.",
        city: "San Francisco",
        country: "United States",
        continent: "AMERICAS",
        cover: "/cover/sanfrancisco",
        cover2: "/cover/sanfrancisco_2",
        duration: 3,
        spots: 33,
        position: { lat: 37.7749, lng: -122.4194 },
        previewSpots: []
    },
    {
        id: "mexico_city_food_culture",
        title: "Mexico City Food & Culture",
        description: "Street food, museums and the vibrant energy of Mexico City.",
        city: "Mexico City",
        country: "Mexico",
        continent: "AMERICAS",
        cover: "/cover/mexicocity",
        cover2: "/cover/mexicocity_2",
        duration: 4,
        spots: 46,
        position: { lat: 19.4326, lng: -99.1332 },
        previewSpots: []
    },
    {
        id: "rio_essentials",
        title: "Rio Essentials",
        description: "Beaches, viewpoints and the unmistakable atmosphere of Rio.",
        city: "Rio de Janeiro",
        country: "Brazil",
        continent: "AMERICAS",
        cover: "/cover/rio",
        cover2: "/cover/rio_2",
        duration: 4,
        spots: 43,
        position: { lat: -22.9068, lng: -43.1729 },
        previewSpots: []
    },
    {
        id: "buenos_aires_local",
        title: "Local Buenos Aires",
        description: "Cafés, historic districts and the everyday rhythm of Buenos Aires.",
        city: "Buenos Aires",
        country: "Argentina",
        continent: "AMERICAS",
        cover: "/cover/buenosaires",
        cover2: "/cover/buenosaires_2",
        duration: 4,
        spots: 41,
        position: { lat: -34.6037, lng: -58.3816 },
        previewSpots: []
    },
    {
        id: "medellin_modern_city",
        title: "Modern Medellín",
        description: "Innovation, mountain views and the transformation of Medellín.",
        city: "Medellín",
        country: "Colombia",
        continent: "AMERICAS",
        cover: "/cover/medellin",
        cover2: "/cover/medellin_2",
        duration: 3,
        spots: 34,
        position: { lat: 6.2442, lng: -75.5812 },
        previewSpots: []
    },
    {
        id: "lima_food_capital",
        title: "Lima Food Capital",
        description: "The ultimate culinary journey through South America’s food capital.",
        city: "Lima",
        country: "Peru",
        continent: "AMERICAS",
        cover: "/cover/lima",
        cover2: "/cover/lima_2",
        duration: 3,
        spots: 35,
        position: { lat: -12.0464, lng: -77.0428 },
        previewSpots: []
    },
    {
        id: "cartagena_caribbean",
        title: "Cartagena Caribbean Escape",
        description: "Colorful streets, sea views and Caribbean atmosphere.",
        city: "Cartagena",
        country: "Colombia",
        continent: "AMERICAS",
        cover: "/cover/cartagena",
        cover2: "/cover/cartagena_2",
        duration: 3,
        spots: 32,
        position: { lat: 10.3910, lng: -75.4794 },
        previewSpots: []
    },

    // AFRICA //
    {
        id: "cape_town_essentials",
        title: "Cape Town Essentials",
        description: "Mountains, beaches, food markets and the best introduction to South Africa's most iconic city.",
        city: "Cape Town",
        country: "South Africa",
        continent: "AFRICA",
        cover: "/cover/capetown",
        cover2: "/cover/capetown_2",
        duration: 4,
        spots: 44,
        position: { lat: -33.9249, lng: 18.4241 },
        previewSpots: []
    },
    {
        id: "cape_town_outdoors",
        title: "Cape Town Outdoors",
        description: "Hikes, coastal drives and unforgettable viewpoints around the Cape Peninsula.",
        city: "Cape Town",
        country: "South Africa",
        continent: "AFRICA",
        cover: "/cover/capetown_outdoors",
        cover2: "/cover/capetown_outdoors_2",
        duration: 4,
        spots: 42,
        position: { lat: -33.9249, lng: 18.4241 },
        previewSpots: []
    },
    {
        id: "marrakech_markets_riads",
        title: "Marrakech Markets & Riads",
        description: "Colorful souks, hidden courtyards and the timeless atmosphere of Marrakech.",
        city: "Marrakech",
        country: "Morocco",
        continent: "AFRICA",
        cover: "/cover/marrakech",
        cover2: "/cover/marrakech_2",
        duration: 3,
        spots: 34,
        position: { lat: 31.6295, lng: -7.9811 },
        previewSpots: []
    },
    {
        id: "cairo_first_time",
        title: "Cairo First Time",
        description: "Ancient history, vibrant neighborhoods and the energy of Egypt's capital.",
        city: "Cairo",
        country: "Egypt",
        continent: "AFRICA",
        cover: "/cover/cairo",
        cover2: "/cover/cairo_2",
        duration: 4,
        spots: 45,
        position: { lat: 30.0444, lng: 31.2357 },
        previewSpots: []
    },
    {
        id: "zanzibar_island_escape",
        title: "Zanzibar Island Escape",
        description: "White sand beaches, local culture and unforgettable sunsets on the Indian Ocean.",
        city: "Zanzibar",
        country: "Tanzania",
        continent: "AFRICA",
        cover: "/cover/zanzibar",
        cover2: "/cover/zanzibar_2",
        duration: 5,
        spots: 52,
        position: { lat: -6.1659, lng: 39.2026 },
        previewSpots: []
    },
    {
        id: "johannesburg_modern_africa",
        title: "Modern Johannesburg",
        description: "Creative districts, local food and the modern face of South Africa.",
        city: "Johannesburg",
        country: "South Africa",
        continent: "AFRICA",
        cover: "/cover/johannesburg",
        cover2: "/cover/johannesburg_2",
        duration: 3,
        spots: 33,
        position: { lat: -26.2041, lng: 28.0473 },
        previewSpots: []
    },
    {
        id: "essaouira_coastal_morocco",
        title: "Coastal Morocco",
        description: "Ocean views, whitewashed streets and a slower Moroccan experience.",
        city: "Essaouira",
        country: "Morocco",
        continent: "AFRICA",
        cover: "/cover/essaouira",
        cover2: "/cover/essaouira_2",
        duration: 3,
        spots: 30,
        position: { lat: 31.5085, lng: -9.7595 },
        previewSpots: []
    },
    {
        id: "nairobi_urban_africa",
        title: "Urban Nairobi",
        description: "Coffee culture, local life and one of Africa's most dynamic cities.",
        city: "Nairobi",
        country: "Kenya",
        continent: "AFRICA",
        cover: "/cover/nairobi",
        cover2: "/cover/nairobi_2",
        duration: 3,
        spots: 31,
        position: { lat: -1.2921, lng: 36.8219 },
        previewSpots: []
    },
    {
        id: "luxor_ancient_egypt",
        title: "Ancient Egypt in Luxor",
        description: "Temples, tombs and the most impressive archaeological sites in Egypt.",
        city: "Luxor",
        country: "Egypt",
        continent: "AFRICA",
        cover: "/cover/luxor",
        cover2: "/cover/luxor_2",
        duration: 3,
        spots: 35,
        position: { lat: 25.6872, lng: 32.6396 },
        previewSpots: []
    },
    {
        id: "kigali_emerging_rwanda",
        title: "Emerging Kigali",
        description: "Clean streets, creative spaces and the rising capital of Rwanda.",
        city: "Kigali",
        country: "Rwanda",
        continent: "AFRICA",
        cover: "/cover/kigali",
        cover2: "/cover/kigali_2",
        duration: 3,
        spots: 30,
        position: { lat: -1.9441, lng: 30.0619 },
        previewSpots: []
    },

    // OCEANIA //
    {
        id: "sydney_first_time",
        title: "Sydney First Time",
        description: "The perfect introduction to Australia's most iconic city.",
        city: "Sydney",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/sydney",
        cover2: "/cover/sydney_2",
        duration: 4,
        spots: 44,
        position: { lat: -33.8688, lng: 151.2093 },
        previewSpots: []
    },
    {
        id: "sydney_beaches_lifestyle",
        title: "Sydney Beaches & Lifestyle",
        description: "Coastal walks, surf culture and Sydney's best local spots.",
        city: "Sydney",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/sydney_lifestyle",
        cover2: "/cover/sydney_lifestyle_2",
        duration: 4,
        spots: 41,
        position: { lat: -33.8688, lng: 151.2093 },
        previewSpots: []
    },
    {
        id: "melbourne_coffee_culture",
        title: "Melbourne Coffee & Culture",
        description: "Hidden laneways, cafés and Australia's creative capital.",
        city: "Melbourne",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/melbourne",
        cover2: "/cover/melbourne_2",
        duration: 4,
        spots: 42,
        position: { lat: -37.8136, lng: 144.9631 },
        previewSpots: []
    },
    {
        id: "auckland_essentials",
        title: "Auckland Essentials",
        description: "The best introduction to New Zealand's largest city.",
        city: "Auckland",
        country: "New Zealand",
        continent: "OCEANIA",
        cover: "/cover/auckland",
        cover2: "/cover/auckland_2",
        duration: 3,
        spots: 33,
        position: { lat: -36.8509, lng: 174.7645 },
        previewSpots: []
    },
    {
        id: "queenstown_adventure",
        title: "Queenstown Adventure Capital",
        description: "Epic landscapes, adrenaline activities and unforgettable views.",
        city: "Queenstown",
        country: "New Zealand",
        continent: "OCEANIA",
        cover: "/cover/queenstown",
        cover2: "/cover/queenstown_2",
        duration: 4,
        spots: 45,
        position: { lat: -45.0312, lng: 168.6626 },
        previewSpots: []
    },
    {
        id: "wellington_creative_city",
        title: "Creative Wellington",
        description: "Coffee shops, art spaces and New Zealand's cultural capital.",
        city: "Wellington",
        country: "New Zealand",
        continent: "OCEANIA",
        cover: "/cover/wellington",
        cover2: "/cover/wellington_2",
        duration: 3,
        spots: 31,
        position: { lat: -41.2866, lng: 174.7756 },
        previewSpots: []
    },
    {
        id: "brisbane_sunshine_city",
        title: "Brisbane Sunshine City",
        description: "Riverfront life, modern districts and year-round outdoor living.",
        city: "Brisbane",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/brisbane",
        cover2: "/cover/brisbane_2",
        duration: 3,
        spots: 32,
        position: { lat: -27.4698, lng: 153.0251 },
        previewSpots: []
    },
    {
        id: "perth_western_gateway",
        title: "Western Australia Gateway",
        description: "Beaches, sunsets and the relaxed lifestyle of Perth.",
        city: "Perth",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/perth",
        cover2: "/cover/perth_2",
        duration: 3,
        spots: 30,
        position: { lat: -31.9505, lng: 115.8605 },
        previewSpots: []
    },
    {
        id: "gold_coast_beaches",
        title: "Gold Coast Beaches & Lifestyle",
        description: "Surf, oceanfront living and Australia's beach culture.",
        city: "Gold Coast",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/goldcoast",
        cover2: "/cover/goldcoast_2",
        duration: 3,
        spots: 34,
        position: { lat: -28.0167, lng: 153.4000 },
        previewSpots: []
    },
    {
        id: "hobart_tasmania_escape",
        title: "Tasmania Escape",
        description: "Nature, local food and one of Australia's most unique destinations.",
        city: "Hobart",
        country: "Australia",
        continent: "OCEANIA",
        cover: "/cover/hobart",
        cover2: "/cover/hobart_2",
        duration: 3,
        spots: 29,
        position: { lat: -42.8821, lng: 147.3272 },
        previewSpots: []
    },
];