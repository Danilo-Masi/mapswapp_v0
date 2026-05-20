import Fastify from "fastify";
import 'dotenv/config';
// Plugins
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
// Routes - Auth
import registerRoute from "./routes/auth/register.route.mjs";
import loginRoute from "./routes/auth/login.route.mjs";
import logoutRoute from "./routes/auth/logout.route.mjs";
import meRoute from "./routes/auth/me.route.mjs";

const fastify = Fastify({ logger: true });

// Plugins
fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
    hook: "onRequest"
});

fastify.register(fastifyCors, {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
});

// Routes - Auth
fastify.register(registerRoute, { prefix: "/auth" });
fastify.register(loginRoute, { prefix: "/auth" });
fastify.register(logoutRoute, { prefix: "/auth" });
fastify.register(meRoute, { prefix: "/auth" });

try {
    await fastify.listen({ port: 3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}