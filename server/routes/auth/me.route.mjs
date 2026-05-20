import { supabase } from "../../config/supabase.mjs";

export default async function meRoute(fastify) {

    fastify.get("/me", async (request, reply) => {

        try {

            const accessToken = request.cookies.access_token;

            if (!accessToken) {
                return reply.status(401).send({
                    ok: false,
                    user: null
                });
            }

            const { data, error } = await supabase.auth.getUser(accessToken);

            if (error || !data.user) {
                return reply.status(401).send({
                    ok: false,
                    user: null
                });
            }

            return reply.send({
                ok: true,
                user: {
                    id: data.user.id,
                    email: data.user.email,
                    name: data.user.user_metadata.name
                }
            });

        } catch (error) {

            request.log.error(error);

            return reply.status(500).send({
                ok: false,
                user: null
            });
        }
    });
}