import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { signOut } from "@/api/auth/signout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export function DropdownMenuAvatar() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const auth = useAuth();

    const handleSignout = async () => {
        try {
            setLoading(true);
            const response: any = await signOut();
            if (response.ok) {
                auth?.setUser?.(null);
                navigate("/login", { replace: true });
            }
        } catch (error) {
            console.error("Error signing out:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-blue-500 text-zinc-100">
                        <p>DM</p>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BadgeCheckIcon />
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCardIcon />
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BellIcon />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled={isLoading} onSelect={handleSignout}>
                    <LogOutIcon />
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
