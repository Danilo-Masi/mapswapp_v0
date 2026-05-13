// React
import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
// UI Components
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Globe, Sparkles } from "lucide-react";
// API
import { subscribeToWaitlist } from "@/api/subscribe_waitlist";

export default function WaitlistDialog() {
    const { isWaitlistDialogOpen, setWaitlistDialogOpen, setPreviewOpen, setSubscribedSuccessfully } = useAppContext();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            // Close dialog after small delay
            setTimeout(() => {
                setPreviewOpen(false);
                setWaitlistDialogOpen(false);
            }, 1200);
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
        <Dialog open={isWaitlistDialogOpen} onOpenChange={setWaitlistDialogOpen}>
            <DialogContent
                showCloseButton={false}
                className="w-[95%] md:max-w-xl max-h-[80svh] overflow-scroll no-scrollbar rounded-3xl border border-zinc-200 bg-white/95 backdrop-blur-xl p-0  shadow-2xl">

                {/* TOP GRADIENT */}
                <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-blue-500/10 to-transparent pointer-events-none" />
                <div className="relative flex flex-col items-center px-6 md:px-10 py-10 gap-7">

                    {/* LOGO */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-blue-500 blur-2xl opacity-20" />
                        <div className="relative w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <Globe className="w-8 h-8 rotate-45 text-white" />
                        </div>
                    </div>

                    {/* BADGE */}
                    <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <p className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
                            Early access opens soon
                        </p>
                    </div>

                    {/* COPY */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-xl font-black leading-tight tracking-tight text-zinc-900 text-balance max-w-md">
                            Stop wasting hours planning trips
                        </h2>
                        <p className="text-sm leading-relaxed text-zinc-600 text-balance max-w-lg">
                            Mapswapp gives you curated travel itineraries created by real travelers and locals.
                            Hidden spots, smooth routes, and unforgettable places already mapped for you.
                        </p>
                    </div>

                    {/* FORM */}
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

                    {/* BENEFITS */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* Benefit 1 */}
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 flex flex-col gap-2">
                            <p className="text-sm font-semibold text-zinc-900">
                                Real local routes
                            </p>
                            <p className="text-xs leading-relaxed text-zinc-500">
                                Not generic AI lists or random TikTok spots.
                            </p>
                        </div>
                        {/* Benefit 2 */}
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 flex flex-col gap-2">
                            <p className="text-sm font-semibold text-zinc-900">
                                Ready to use
                            </p>
                            <p className="text-xs leading-relaxed text-zinc-500">
                                Open the itinerary directly on google maps app.
                            </p>
                        </div>
                        {/* Benefit 3 */}
                        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 flex flex-col gap-2">
                            <p className="text-sm font-semibold text-zinc-900">
                                Hidden gems included
                            </p>
                            <p className="text-xs leading-relaxed text-zinc-500">
                                Discover places most tourists completely miss.
                            </p>
                        </div>

                    </div>

                    {/* SOCIAL PROOF */}
                    <div className="flex flex-col items-center gap-2 text-center">
                        <p className="text-sm font-medium text-zinc-700">
                            Join travelers already waiting for launch.
                        </p>
                        <p className="text-xs text-zinc-500 text-balance max-w-sm">
                            Early members will get priority access to the first premium itineraries and future creator drops.
                        </p>
                    </div>

                    {/* MICRO TRUST */}
                    <p className="text-xs text-zinc-400">
                        No spam. No commitment. Just early access.
                    </p>

                </div>

            </DialogContent>
        </Dialog>
    )
}
