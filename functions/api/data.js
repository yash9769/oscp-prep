// Cloudflare Pages Function — backs the sync API at /api/data
// Requires a KV namespace bound to this Pages project as "OSCP_KV"
// (Cloudflare dashboard: Pages project -> Settings -> Functions -> KV namespace bindings)

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}

function isValidPin(pin) {
  return typeof pin === "string" && pin.length >= 6 && pin.length <= 64 && /^[a-zA-Z0-9\-_]+$/.test(pin);
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const pin = url.searchParams.get("pin");

  if (!isValidPin(pin)) {
    return jsonResponse({ error: "Invalid or missing pin (min 6 chars, letters/numbers/-/_ only)" }, 400);
  }

  const key = "oscp:" + pin;
  const stored = await env.OSCP_KV.get(key);

  if (stored === null) {
    return jsonResponse({ exists: false });
  }

  try {
    const parsed = JSON.parse(stored);
    return jsonResponse(parsed);
  } catch (e) {
    return jsonResponse({ error: "Stored data corrupted" }, 500);
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const { pin, data } = body || {};
  if (!isValidPin(pin)) {
    return jsonResponse({ error: "Invalid or missing pin" }, 400);
  }
  if (!data || typeof data !== "object") {
    return jsonResponse({ error: "Missing data object" }, 400);
  }

  const key = "oscp:" + pin;
  await env.OSCP_KV.put(key, JSON.stringify(data));
  return jsonResponse({ ok: true, savedAt: new Date().toISOString() });
}

export async function onRequestOptions() {
  return new Response(null, { status: 204 });
}
