import useIsMobile from "@/lib/screenWidth";
import type { ReactNode } from "react";
import auth_bg from "@/assets/auth/auth_bg.webp";

export default function AuthContainer({ children }: { children: ReactNode }) {

    const isMobile = useIsMobile();

    return (
        <div className="w-full h-auto min-h-svh md:h-svh flex bg-zinc-100">
            {!isMobile && (
                <div className="w-1/2 h-full flex relative justify-end items-end p-3">
                    <img src={auth_bg} alt="auth_bg" className="w-full h-full object-fill rounded-xl opacity-50" />
                    <div className="w-[calc(100%-38px)] h-[30svh] absolute bottom-5 left-5 p-3 bg-red-500">
                        ciao
                    </div>
                </div>
            )}
            <div className="w-full md:w-1/2">
                {children}
            </div>
        </div>
    )
}
