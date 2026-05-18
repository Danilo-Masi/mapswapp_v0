import Fastify from "fastify";
import 'dotenv/config';
// Plugins
import cookiesPlugin from "./plugin/cookies.mjs";
import corsPlugin from "./plugin/cors.mjs";
// Routes
import registerRoute from "./routes/auth/register.route.mjs";

const fastify = Fastify({ logger: true });

// Register plugins
fastify.register(cookiesPlugin);
fastify.register(corsPlugin);

// Register routes
fastify.register(registerRoute, { prefix: "/auth" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}