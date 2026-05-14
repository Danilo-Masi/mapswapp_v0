import Fastify from "fastify";
import 'dotenv/config';
// Cors plugin
import fastifyCors from "@fastify/cors";
// Routes
import waitlistRoutes from "./routes/waitlist/waitlist.mjs";

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

fastify.register(waitlistRoutes, { prefix: "/waitlist" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}