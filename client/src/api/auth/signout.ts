import { apiFetch } from "../client";

export async function signOut() {
    return apiFetch("/auth/logout", {
        method: "GET",
        credentials: "include",
    });
}