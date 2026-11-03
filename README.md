# Considered

A private wishlist at https://wishlist.prettyaud.life. Cloudflare Workers serves the app and product-preview endpoint. Cloudflare Access restricts the entire hostname to its owner. Keep the workers.dev and preview addresses disabled.

Wishlist entries are stored in the browser under the current origin. Open the same hostname in the same browser profile to keep using existing entries.

Install with `npm ci`, start locally with `npm run dev`, and publish with `npm run deploy`.
