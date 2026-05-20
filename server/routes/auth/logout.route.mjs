import { supabase } from "../../config/supabase.mjs";

export default async function logoutRoute(fastify) {

    fastify.get("/logout", async (request, reply) => {

        try {
            // Logout user
            let { error } = await supabase.auth.signOut();

            if (error) {
                request.log.error("Supabase logout failed", error);
                return reply.status(500).send({
                    ok: false,
                    error: "Loogut failed",
                });
            }

            reply
                .clearCookie("access_token", {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    path: "/",
                })
                .clearCookie("refresh_token", {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    path: "/",
                })
                .send({ ok: true });

        } catch (error) {

            request.log.error(error);

            return reply.status(400).send({
                ok: false,
                error: error.message || "Login failed"
            });
        }
    });
}