import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Name too short")
        .max(30, "Name too long"),

    email: z
        .string()
        .email("Invalid email"),

    password: z
        .string()
        .min(8, "Password too short")
});