import useIsMobile from "@/lib/screenWidth";
import type { ReactNode } from "react";

export default function AuthContainer({ children }: { children: ReactNode }) {

    const isMobile = useIsMobile();

    return (
        <div className="w-full h-auto min-h-svh md:h-svh flex bg-zinc-100">
            {!isMobile && (
                <div className="w-1/2 h-full p-3">
                    <div className="w-full h-full bg-linear-to-t from-blue-700 via-violet-500 to-zinc-100" />

                </div>
            )}
            <div className="w-full md:w-1/2">
                {children}
            </div>
        </div>
    )
}
