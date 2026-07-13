import { useState } from "react"
import PhoneMockup from "./PhoneMockup"
import { Button } from "@/components/ui/button";

const DAYS = [
    { id: 1, label: "Day 1", place: "Arrival & city welcome" },
    { id: 2, label: "Day 2", place: "Historic center walking tour" },
    { id: 3, label: "Day 3", place: "Countryside day trip" },
]

function Section1({ daySelected, setDaySelected, }: { daySelected: number; setDaySelected: (n: number) => void }) {
    return (
        <div className="w-full md:w-[35%] h-auto md:h-full flex flex-col gap-5 items-end border p-6 pb-0 overflow-hidden border-zinc-200 rounded-2xl bg-linear-to-t from-blue-500/10 via-blue-200/10 to-transparent">
            <div className="w-full flex flex-col gap-4">
                <span className="text-sm font-medium text-blue-500">
                    For sellers
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                    Sell your travel itineraries and turn local knowledge into income
                </h2>
                <p className="text-zinc-600 text-xs md:text-sm">
                    Build unique travel itineraries, publish them in minutes, and get
                    paid every time a traveler books your experience.
                </p>

                {/* Interactive day tabs */}
                <div
                    className="flex gap-2 flex-wrap"
                    role="tablist"
                    aria-label="Preview itinerary days">
                    {DAYS.map((d) => (
                        <button
                            key={d.id}
                            role="tab"
                            aria-selected={daySelected === d.id}
                            aria-label={`Show ${d.label}: ${d.place}`}
                            onClick={() => setDaySelected(d.id)}
                            className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-colors cursor-pointer
                                ${daySelected === d.id
                                    ? "bg-zinc-900 text-white border-zinc-900"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                                }`}>
                            {d.label}
                        </button>
                    ))}
                </div>
                <p className="text-xs text-zinc-400 self-start">
                    Tap a day to see the itinerary update live in the app →
                </p>
            </div>
            <PhoneMockup daySelected={daySelected} />
        </div>
    )
}

function Section2() {
    return (
        <div className="w-full min-h-[50svh] md:min-h-0 h-auto md:h-[50%] flex flex-col md:flex-row gap-5 border p-6 border-zinc-200 rounded-2xl bg-linear-to-t md:bg-linear-to-l from-blue-500/10 via-blue-200/10 to-transparent">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-4">
                <span className="text-sm font-medium text-blue-500">
                    Your seller dashboard
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                    Track every sale, booking, and review in one place
                </h3>
                <p className="text-zinc-600 text-xs md:text-sm">
                    Monitor real time earnings, manage availability, and reply to
                    travelers directly from a single, easy-to-use seller dashboard.
                </p>
                <ul className="flex flex-col gap-2 text-sm text-zinc-700">
                    <li>✓ Automatic payouts on every booking</li>
                    <li>✓ Real-time sales &amp; performance analytics</li>
                    <li>✓ Built-in review and reputation management</li>
                </ul>
            </div>
            <div
                className="w-full md:w-1/2 h-full rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400"
                role="img"
                aria-label="Screenshot of the seller dashboard showing bookings, earnings, and reviews"
            >
                [dashboard screenshot]
            </div>
        </div>
    )
}

function Section3() {
    return (
        <div className="w-full min-h-[50svh] md:min-h-0 h-auto md:h-[50%] flex flex-col md:flex-row gap-5 border p-6 border-zinc-200 rounded-2xl bg-linear-to-t md:bg-linear-to-r from-blue-500/10 via-blue-200/10 to-transparent">
            <div
                className="w-full md:w-1/2 h-full rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400"
                role="img"
                aria-label="Screenshot of the itinerary builder with drag-and-drop stops, times, and tips">
                [itinerary builder screenshot]
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-4">
                <span className="text-sm font-medium text-blue-500">
                    Build it yourself, no code needed
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                    Create your itinerary stop by stop
                </h3>
                <p className="text-zinc-600 text-xs md:text-sm">
                    Add destinations, schedule times, and share personal tips using an
                    itinerary builder designed for local experts, not developers.
                </p>
                <Button
                    className="w-fit p-5 rounded-full bg-zinc-900 text-white text-sm hover:bg-zinc-800 transition-colors"
                    aria-label="Start creating your first travel itinerary">
                    Start creating your first itinerary
                </Button>
            </div>
        </div>
    )
}

export default function Seller() {
    const [daySelected, setDaySelected] = useState(1)

    return (
        <section
            id="sell-travel-itineraries"
            aria-labelledby="seller-heading"
            className="w-full h-auto md:h-[110svh] flex flex-col md:flex-row gap-16 md:gap-5">
            <h1 id="seller-heading" className="sr-only">
                Sell travel itineraries and manage your bookings
            </h1>
            <Section1 daySelected={daySelected} setDaySelected={setDaySelected} />
            <div className="w-full md:w-[65%] flex flex-col gap-16 md:gap-5">
                <Section2 />
                <Section3 />
            </div>
        </section>
    )
}