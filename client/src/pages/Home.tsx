import useIsMobile from "@/lib/screenWidth";
// Components
import HeroGlobe from "@/components/home/hero/HeroGlobe";


import Faqs from "../components/home/faqs/Faqs";
import Footer from "../components/home/footer/Footer";
// Dialogs

import { useEffect } from "react";
import { scrollToElement } from "@/lib/gsap";
import Maps from "@/components/home/maps/Maps";
import PreviewCardMobile from "@/components/home/maps/PreviewCardMobile";
import PreviewCard from "@/components/home/maps/PreviewCard";
import InfiniteCards from "@/components/home/moving_cards/infiniteCards";
import Features from "@/components/home/features/Features";

export default function Home() {
    const isMobile = useIsMobile();

    useEffect(() => {
        if (window.location.hash === "#maps") {
            scrollToElement("maps");
        }
    }, []);

    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-40 bg-linear-to-t from-blue-500/20 via-zinc-50 to-zinc-50">
            <HeroGlobe />
            <InfiniteCards />
            <Features />
            <Maps />
            <Faqs />
            <Footer />
            {/* Dialogs */}
            {isMobile
                ? <PreviewCardMobile />
                : <PreviewCard />
            }
        </div>
    )
}
