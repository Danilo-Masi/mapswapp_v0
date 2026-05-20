import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";

export default function GuestRoute({ children }: { children: ReactNode }) {

    const auth = useAuth();
    if (!auth) return null;

    const { user, loading } = auth;

    if (loading) return null;

    if (user) {
        return <Navigate to="/globe" replace />;
    }

    return children;
}