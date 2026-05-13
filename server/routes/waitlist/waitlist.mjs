import subscribeWaitlistRoute from "./subscribe-waitlist.mjs";

export default async function waitlistRoutes(fastify, opts) {
    fastify.register(subscribeWaitlistRoute);
}