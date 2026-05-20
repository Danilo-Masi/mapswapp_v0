import { useAuth } from "@/context/AuthContext";
import { DropdownMenuAvatar } from "./DropdownMenu";

export default function Navbar() {

    const auth = useAuth();
    const user = auth?.user ?? null;

    return (
        <nav
            aria-label="Main navigation"
            className="w-full flex items-center justify-between px-4 md:px-26 py-4 z-50">
            <h1 className="text-xl md:text-2xl font-black text-zinc-50 tracking-wide">
                Mapswapp
            </h1>
            {user !== null && <DropdownMenuAvatar />}
        </nav>
    )
}