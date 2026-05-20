import { apiFetch } from "../client";

export async function getCurrentUser() {
    return apiFetch("/auth/me", {
        method: "GET",
        credentials: "include",
    });
}