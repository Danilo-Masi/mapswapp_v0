import fastifyCookie from "@fastify/cookie";

export default async function cookiesPlugin(fastify) {
    fastify.register(fastifyCookie, {
        secret: process.env.COOKIE_SECRET,
    });
}