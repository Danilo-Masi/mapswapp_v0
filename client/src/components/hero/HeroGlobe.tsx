// React
import { useEffect, useMemo, useRef, useState } from "react";
import { lazy } from "react";
import { useAppContext } from "@/context/AppContext";
// UI Components
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Spinner } from "../ui/spinner";
const Globe3D = lazy(() => import("@/components/ui/3d-globe"));
import { Sparkles } from "lucide-react";
// Components
import Navbar from "../navbar/Navbar";
// Images
import bg_image from "../../assets/bg.webp";
// Data
import { itineraries } from "@/data/itineraries";
// Gsap
import gsap from "gsap";
// Hooks
import useIsMobile from "@/lib/screenWidth";
// API
import { subscribeToWaitlist } from "@/api/subscribe_waitlist";
import { toast } from "sonner";

export default function HeroGlobe() {
    const textRef = useRef(null);
    const isMobile = useIsMobile();

    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setSubscribedSuccessfully } = useAppContext();

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

    const handleSubscribe = async () => {
        // Prevent empty email
        if (!email.trim()) return;
        try {
            setIsSubmitting(true);
            // Function call
            const result = await subscribeToWaitlist(email);
            // Function error
            if (!result.ok) {
                console.error("Failed to subscribe to waitlist:", result.error);
                return;
            }
            // Success
            setSubscribedSuccessfully(true);
            // Cleanup
            setEmail("");
            // Success message
            toast.success("Subscribed to waitlist successfully!");
            // Remove confetti / success state
            setTimeout(() => {
                setSubscribedSuccessfully(false);
            }, 10000);
        } catch (error) {
            console.error("Unexpected error in handleSubscribe():", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full h-auto flex flex-col items-center gap-y-10 relative">

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

            {/* NAVBAR */}
            <Navbar />

            {/* CONTENT */}
            <div className="w-full h-full min-h-[80svh] flex flex-col md:flex-row items-center">

                {/* Text */}
                <div
                    ref={textRef}
                    className="w-[92%] md:w-1/2 min-h-[70svh] flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-24 gap-7 relative z-30 pt-5 md:pt-0">
                    {/* MICRO BADGE */}
                    <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <p className="text-xs font-semibold tracking-wide text-blue-500 uppercase">
                            Early access opens soon
                        </p>
                    </div>
                    {/* TITLE */}
                    <div className="flex flex-col gap-4">
                        <h1 className="hero-text text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-zinc-900 text-balance max-w-2xl">
                            Stop planning trips <span className="text-blue-500">like a tourist.</span>
                        </h1>
                        <p className="hero-text text-lg md:text-xl text-zinc-700 leading-relaxed max-w-xl text-pretty">
                            Discover curated itineraries built by real travelers and locals who actually know the city.
                            Hidden spots, smooth routes, and unforgettable places, already mapped for you.
                        </p>
                    </div>
                    {/* SEO */}
                    <h2 className="sr-only">
                        Curated travel itineraries created by locals and real travelers, directly accessible on Google Maps.
                    </h2>
                    {/* WAITLIST */}
                    <div className="hero-text w-full max-w-xl flex flex-col gap-3">
                        {isMobile
                            ? (
                                <div className="w-full flex flex-col gap-3">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 rounded-2xl border-zinc-200 bg-white px-5 text-base shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500" />
                                    <Button
                                        disabled={isSubmitting}
                                        className="h-14 rounded-2xl bg-black text-base font-semibold text-white hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-black/10"
                                        onClick={handleSubscribe}>
                                        {isSubmitting ? (
                                            <>Subscribing <Spinner /></>
                                        ) : (
                                            <>Get early access <Sparkles className="w-4 h-4 text-white" /></>
                                        )}
                                    </Button>
                                </div>
                            )
                            : (
                                <InputGroup className="h-16 rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 focus-within:border-black focus-within:shadow-2xl">
                                    <InputGroupInput
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-full border-0 bg-transparent px-6 text-base md:text-lg placeholder:text-zinc-400 focus-visible:ring-0 focus-visible:ring-offset-0" />
                                    <InputGroupAddon align="inline-end">
                                        <InputGroupButton
                                            disabled={isSubmitting}
                                            onClick={handleSubscribe}
                                            className="h-12 rounded-xl px-6 mr-2 bg-black text-white font-medium hover:bg-zinc-800 transition-all duration-300">
                                            {isSubmitting ? (
                                                <>Subscribing <Spinner /></>
                                            ) : (
                                                <>Get early access <Sparkles className="w-4 h-4 text-white" /></>
                                            )}
                                        </InputGroupButton>
                                    </InputGroupAddon>
                                </InputGroup>
                            )
                        }

                        {/* TRUST / MICROCOPY */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-sm text-zinc-500">
                            <p>Be the first to access new cities and creator itineraries.</p>
                        </div>
                    </div>

                </div>
                {/* Globe */}
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
