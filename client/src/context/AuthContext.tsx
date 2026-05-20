import { getCurrentUser } from "@/api/auth/me";
import { createContext, useContext, useEffect, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

interface AuthContextType {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadUser = async () => {
            try {
                const data = await getCurrentUser();
                setUser((data as any)?.user);
            } catch (error) {
                console.error("Failed to load user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        loadUser();

    }, []);

    return (
        <AuthContext.Provider
            value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);