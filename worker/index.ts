import handler from "vinext/server/fetch-handler";

export default {
  fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
    // Access protects the entire custom hostname. Disable alternate production entry points.
    if (!import.meta.env.DEV && (new URL(request.url).hostname !== "wishlist.prettyaud.life" || !request.headers.get("Cf-Access-Jwt-Assertion"))) {
      return new Response("Forbidden", { status: 403 });
    }
    return handler.fetch(request, env, ctx);
  },
};
