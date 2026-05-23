// React
import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { lazy } from "react";
// UI Components

import { Earth, Sparkles } from "lucide-react";
const Globe3D = lazy(() => import("@/components/ui/3d-globe"));
// Components
// Images
import bg_image from "../../../assets/bg.webp";
// Data
import { itineraries } from "@/data/itineraries";
// Gsap
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Navbar from "../navbar/Navbar";

export default function HeroGlobe() {
    const textRef = useRef(null);
    const navigate = useNavigate();

    // Animate text on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, textRef);
        return () => ctx.revert();
    }, []);

    // Markers for the globe, memoized to avoid unnecessary recalculations
    const markers = useMemo(() => {
        return itineraries.map(({ position, city, cover }) => ({
            lat: position.lat,
            lng: position.lng,
            label: city,
            src: cover,
        }));
    }, []);

    // Globe config
    const globeConfig = useMemo(() => ({
        bumpScale: 25,
        initialRotation: { x: 0.87, y: -0.17 },
        autoRotateSpeed: 0.3,
        ambientIntensity: 3,
        pointLightIntensity: 5,
    }), []);

    return (
        <section className="w-full h-auto flex flex-col items-center gap-y-10 md:gap-y-6 relative">

            {/* BACKGROUND */}
            <img
                src={bg_image}
                alt="Ready made travel itineraries on Google Maps with locations and routes"
                width={1920}
                height={1080}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="w-full h-[30svh] absolute bottom-0 left-0 bg-linear-to-t from-zinc-50 via-zinc-50/30 to-transparent z-20" />
            <div className="w-full h-[50svh] absolute bottom-0 left-0 bg-linear-to-t from-zinc-50 via-zinc-50/10 to-transparent z-20" />

            {/* NAVBAR */}
            <Navbar />

            {/* CONTENT */}
            <div className="w-full h-full min-h-[80svh] flex flex-col md:flex-row items-center">

                {/* Text */}
                <div ref={textRef}
                    className="w-[92%] md:w-1/2 min-h-[70svh] flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-24 gap-7 relative z-30 pt-5 md:pt-0">
                    {/* Micro Badge */}
                    <div className="flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50/20 backdrop-blur-sm px-4 py-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <p className="text-xs font-semibold tracking-wide text-blue-50 uppercase">
                            Early access opens soon
                        </p>
                    </div>
                    {/* Title */}
                    <div className="flex flex-col gap-4">
                        <h1 className="hero-text text-5xl md:text-7xl italic font-black text-zinc-900 text-balance max-w-sm">
                            Stop planning trips <span className="text-blue-500">like a tourist.</span>
                        </h1>
                        <p className="hero-text text-md md:text-md text-zinc-700 leading-relaxed max-w-xl text-pretty">
                            Discover curated itineraries built by real travelers and locals who actually know the city.
                            Hidden spots, smooth routes, and unforgettable places, already mapped for you.
                        </p>
                    </div>
                    {/* SEO */}
                    <h2 className="sr-only">
                        Curated travel itineraries created by locals and real travelers, directly accessible on Google Maps.
                    </h2>
                    {/* Buttons */}
                    <div className="hero-text w-full flex flex-col md:flex-row gap-3">
                        <Button
                            onClick={() => navigate("/registration")}
                            className="p-6 rounded-2xl bg-blue-500 hover:scale-95 transition-all duration-300 shadow-xl shadow-blue-500/50">
                            GET EARLY ACCESS
                            <Sparkles />
                        </Button>
                        <Button
                            onClick={() => navigate("/globe")}
                            className="p-6 rounded-2xl bg-zinc-800 text-white hover:scale-95 transition-all duration-300">
                            Your Passport
                            <Earth />
                        </Button>
                    </div>
                    {/* Trust / Microcopy */}
                    <p className="text-sm text-zinc-500/50 ml-1">Be the first to access new cities and itineraries.</p>
                </div>
                {/* GLOBE */}
                <div className="w-full md:w-1/2 h-[50svh] md:h-[80svh] relative overflow-hidden">
                    <Globe3D
                        className="h-full w-full size-160 md:size-230 absolute -bottom-72 md:-bottom-96 left-1/2 md:left-32 -translate-x-1/2 md:translate-0"
                        markers={markers}
                        config={globeConfig}
                    />
                    {/* SEO */}
                    <h2 className="sr-only">
                        Explore travel itineraries around the world on an interactive map
                    </h2>
                </div>
            </div>

        </section >
    );
}
