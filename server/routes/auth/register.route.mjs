import { registerSchema } from "../../validation/auth.validation.mjs";
import { registerUser } from "../../services/auth/register.service.mjs";

export default async function registerRoute(fastify) {

    fastify.post("/register", async (request, reply) => {

        try {

            // Parse body
            const parsed = registerSchema.parse(request.body);

            // Create user
            const data = await registerUser(parsed);

            // Session
            const session = data.session;

            if (!session) {
                return reply.status(400).send({
                    ok: false,
                    error: "Session not created"
                });
            }

            reply
                .setCookie("access_token", session.access_token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 7
                })
                .setCookie("refresh_token", session.refresh_token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 30
                })
                .send({
                    ok: true,
                    user: {
                        id: data.user.id,
                        name: data.user.user_metadata.name,
                        email: data.user.email,
                    },
                });

        } catch (error) {

            request.log.error(error);

            return reply.status(400).send({
                ok: false,
                error: error.message || "Registration failed"
            });
        }
    });
}