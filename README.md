# OSCP::PREP — Deployment Guide (Cloudflare Pages)

This turns your tracker into a real website (works on desktop) that's also
installable as an app-like icon on your Android phone (a PWA — no APK needed,
no "Unknown sources" security risk, and it auto-updates whenever you redeploy).

Your data syncs across every device via a PIN you set the first time you open
the site — same PIN on your phone and laptop = same data everywhere.

---

## What's in this folder

```
index.html              → the app itself
manifest.json           → makes it installable on your phone home screen
sw.js                   → lets it work offline
icons/                  → app icons
functions/api/data.js   → the backend (Cloudflare Pages Function) that saves your data
README.md               → this file
```

---

## Step 1 — Create a free Cloudflare account

Go to https://dash.cloudflare.com/sign-up and sign up (free tier is enough
for this — Workers KV free tier gives 100,000 reads/day and 1,000 writes/day,
far more than one person checking off tasks will ever use).

## Step 2 — Create a KV namespace (this is your database)

1. In the Cloudflare dashboard, go to **Workers & Pages** → **KV** (left sidebar).
2. Click **Create a namespace**.
3. Name it `OSCP_KV` (any name works, just remember it).
4. Click **Add**.

## Step 3 — Deploy this folder to Cloudflare Pages

**Easiest method — drag and drop (no command line needed):**

1. In the Cloudflare dashboard, go to **Workers & Pages** → **Overview**.
2. Click **Create** → **Pages** → **Upload assets**.
3. Give your project a name (e.g. `oscp-prep`) — this becomes part of your URL:
   `oscp-prep.pages.dev`.
4. Drag this entire folder (or a ZIP of it) into the upload box.
5. Click **Deploy site**.

Cloudflare will detect the `functions/` folder automatically and turn
`functions/api/data.js` into a live API endpoint at `/api/data` — no extra
setup for that part.

## Step 4 — Bind the KV namespace to your Pages project

This is the one step that's easy to miss — without it, the app will load but
saving will fail.

1. Go to your new Pages project → **Settings** → **Functions**.
2. Scroll to **KV namespace bindings** → click **Add binding**.
3. **Variable name**: `OSCP_KV` (must match exactly — this is what `data.js` looks for).
4. **KV namespace**: select the `OSCP_KV` namespace you created in Step 2.
5. Click **Save**.
6. Go to **Deployments** → click the three dots on the latest deployment →
   **Retry deployment** (bindings only apply to new deployments).

## Step 5 — Open it

Visit `https://oscp-prep.pages.dev` (or whatever you named it) on your
desktop. First time, it'll ask you to set a **sync PIN** — make one up
(6+ characters). Write it down somewhere safe.

---

## Installing it on your Android phone (the "APK" replacement)

1. Open the same URL in **Chrome** on your phone.
2. Tap the **⋮** menu → **Add to Home screen** (or you'll see an automatic
   "Install app" banner/prompt).
3. It installs like a real app — own icon, opens full-screen, no browser
   address bar.
4. When it first opens, enter the **same PIN** you set on desktop — your
   data will pull straight in.

This updates itself automatically whenever you redeploy (Step 3 again) — no
reinstalling, no APK file to manage, no security warnings.

---

## Updating the site later

If you (or I, in a future chat) change `index.html` or any other file:

1. Go to your Pages project → **Deployments**.
2. Click **Create deployment** → **Upload assets** → drag in the updated
   folder again.

That's it — same URL, same KV data, new code.

---

## Important notes on data safety

- **Your data lives in Cloudflare KV**, not on any one device — it will not
  disappear if you lose your phone, factory-reset it, or don't open the app
  for a year. It's stored server-side, keyed to your PIN, indefinitely (until
  you delete it or the Cloudflare account is closed).
- **The PIN is your only key.** There's no email/password recovery — if you
  lose the PIN, that data is unreachable (though your last-synced copy stays
  cached in each device's local browser storage as a backup).
- **This is lightweight, personal-use security** — anyone who has your PIN
  can read/write your data. It's fine for a personal study tracker; it is
  **not** meant to hold anything sensitive. Use a PIN that isn't easily
  guessable (not "123456" or your name).
- **Offline use**: if you lose signal mid-lab, the app keeps working from its
  local cache and syncs automatically the next time you're online (you'll see
  an ONLINE/OFFLINE indicator in the top bar).
- **Excel export/import** (⇩/⇧ buttons in the app) still works exactly as
  before and is a good periodic backup habit regardless.
