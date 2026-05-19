import Fastify from "fastify";
import 'dotenv/config';
// Plugins
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
// Routes
import registerRoute from "./routes/auth/register.route.mjs";

const fastify = Fastify({ logger: true });

// Register plugins
fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
    hook: "onRequest"
});

fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
});

// Register routes
fastify.register(registerRoute, { prefix: "/auth" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}