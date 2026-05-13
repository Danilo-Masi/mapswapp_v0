import { supabase } from "../../config/supabase.mjs";
import { resend } from "../../config/resend.mjs";

const TEMPLATE_ID = process.env.RESEND_TEMPLATE_ID;

export default async function subscribeWaitlistRoute(fastify) {

    fastify.post("/subscribe-waitlist", async (request, reply) => {
        try {
            // Validation
            const { email } = request.body ?? {};
            if (!email) {
                request.log.warn("Missing email in waitlist subscription");
                return reply.status(400).send({
                    ok: false,
                    error: "Email is required",
                });
            }
            // Save email to DB
            const { error: dbError } = await supabase
                .from("waitlist")
                .insert({ email });

            if (dbError) {
                request.log.error({ dbError }, "Failed to save waitlist subscription");
                return reply.status(500).send({
                    ok: false,
                    error: "Failed to join waitlist",
                });
            }
            // Send confirmation email
            const { error: emailError } = await resend.emails.send({
                from: "Mapswapp <support@mapswapp.com>",
                to: email,
                template: {
                    id: TEMPLATE_ID,
                },
            });

            if (emailError) {
                request.log.error({ emailError }, "Failed to send waitlist email");
                return reply.status(500).send({
                    ok: false,
                    error: "Failed to send confirmation email",
                });
            }
            // Success
            return reply.status(200).send({
                ok: true,
                message: "Successfully subscribed to the waitlist",
            });
        } catch (error) {
            request.log.error({ error }, "Unexpected waitlist subscription error");
            return reply.status(500).send({
                ok: false,
                error: "Internal server error",
            });
        }
    });
}