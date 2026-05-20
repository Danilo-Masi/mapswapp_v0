import { apiFetch } from "../client";

interface SigninPayload {
    email: string;
    password: string;
}

interface SigninResponse {
    ok: boolean;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

export async function signin(payload: SigninPayload) {
    return apiFetch<SigninResponse>(
        "auth/login",
        {
            method: "POST",
            body: JSON.stringify(payload),
        }
    );
}