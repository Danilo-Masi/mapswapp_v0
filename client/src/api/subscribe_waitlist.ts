export async function subscribeToWaitlist(email: string) {
    try {
        // API Call
        const response = await fetch(
            `http://127.0.0.1:3000/waitlist/subscribe-waitlist`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );

        const data = await response.json();

        // API Error
        if (!response.ok) {
            console.error("subscribeToWaitlist() API error:", data?.error);
            return {
                ok: false,
                error: data?.error || "Failed to join waitlist",
            };
        }

        // Success
        return {
            ok: true,
            message: data?.message,
        };

    } catch (error) {
        console.error("subscribeToWaitlist() unexpected error:", error);
        return {
            ok: false,
            error: "Something went wrong. Please try again.",
        };
    }
}