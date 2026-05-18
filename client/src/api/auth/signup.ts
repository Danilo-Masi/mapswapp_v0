import { apiFetch } from "../client";

interface SignupPayload {
    name: string;
    email: string;
    password: string;
}

interface SignupResponse {
    ok: boolean;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export async function signup(payload: SignupPayload) {
    return apiFetch<SignupResponse>(
        "auth/register",
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    );
}