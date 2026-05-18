import cors from "@fastify/cors";

export default async function corsPlugin(fastify) {
    fastify.register(cors, {
        origin: "http://localhost:5173",
        credentials: true,
    });
}