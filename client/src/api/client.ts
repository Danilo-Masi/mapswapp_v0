const API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> {

    const response = await fetch(
        `${API_URL}/${endpoint.replace(/^\/+/, "")}`,
        {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...(options?.headers || {}),
            },
            ...options,
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Request failed");
    }

    return data;
}