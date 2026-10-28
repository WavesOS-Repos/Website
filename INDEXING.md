# Getting wavesos.org into Google (and other search engines)

Everything below is free. The whole thing takes about 15 minutes of clicking, plus
a few days for Google to actually finish.

---

## 0. First: the site must be live at https://wavesos.org

Search engines can only index a page they can open. Before anything else, check
in a browser:

- `https://wavesos.org` → your page
- `https://wavesos.org/sitemap.xml` → XML with `https://wavesos.org/` inside it
- `https://wavesos.org/robots.txt` → ends with a `Sitemap:` line
- `https://www.wavesos.org` → redirects to `https://wavesos.org` (not a second copy)
- `http://wavesos.org` → redirects to the `https://` version

The `sitemap.xml` and `robots.txt` files are already in this project (the
`public/` folder), so they ship automatically when you deploy. No extra work.

---

## 1. Google Search Console — the one that matters most

1. Go to **https://search.google.com/search-console/about** and sign in with a
   Google account.
2. Click **Add property**. Choose **Domain** and type `wavesos.org`.
   (Domain covers `https://`, `http://`, `www.` and any subdomain in one go.
   If you'd rather not touch DNS, pick **URL prefix** and type `https://wavesos.org/`.)
3. Google shows you a verification method.

   **If you chose Domain:** it gives you a TXT record like
   `google-site-verification=abc123...`. Add it at your domain registrar
   (where you bought wavesos.org) → DNS records → add a `TXT` record with
   host `@` and that value. Wait a few minutes.

   **If you chose URL prefix:** easiest is **HTML file upload**. Download the
   file Google gives you (something like `google1234.html`) and drop it into
   this project's `public/` folder, then deploy again. Or use the **HTML tag**
   option and paste the `<meta name="google-site-verification" ... />` line
   into the page head.

4. Click **Verify**. Green tick = done.
5. Left menu → **Sitemaps** → type `sitemap.xml` → **Submit**.
   (Search Console reads the full URL from your property, so `sitemap.xml`
   is enough. If it asks for a full URL, use `https://wavesos.org/sitemap.xml`.)
6. Left menu → **URL Inspection** → paste `https://wavesos.org/` →
   **Request Indexing**. This nudges Google to look at your homepage today
   instead of eventually.

---

## 2. Microsoft Bing — takes 2 minutes

1. Go to **https://www.bing.com/webmasters** and sign in (a Microsoft account
   works, or import your Google Search Console account directly — that option
   is on the dashboard and skips verification entirely).
2. **Add** `https://wavesos.org/` as a site.
3. **Sitemaps** → submit `https://wavesos.org/sitemap.xml`.

Bing's index also powers DuckDuckGo and ChatGPT search, so this one covers more
than it looks like.

---

## 3. Other search engines (mostly pick the sitemap up on their own)

| Engine | What to do |
| --- | --- |
| DuckDuckGo | Nothing — it uses Bing's index. Submitting to Bing is enough. |
| Startpage / Qwant | Nothing — they use Google's index. |
| Brave Search | Optional: **https://search.brave.com/webmaster/tools/fast-indexing** → submit `https://wavesos.org/`. |
| Yandex | Optional: **https://webmaster.yandex.com** → add site → submit sitemap. |
| AI assistants (ChatGPT, Perplexity, Gemini) | They read your live page and the GitHub repo. Nothing to submit; just keep the page and README describing the product in plain words. |

---

## 4. The thing that actually moves the needle: backlinks

A brand-new domain with one page won't rank for "Hyprland rice" on its own,
no matter how perfect the metadata is. What ranks it is other sites pointing at
it. Worth doing, in rough order of value:

- **r/unixporn** — a screenshot post of the desktop, with the installer link in
  the comments. This is the single biggest one for a rice.
- **r/archlinux**, **r/linuxquestions**, **r/hyprland** — answer setup questions
  and link the repo where it genuinely helps.
- **The Hyprland wiki / ricing galleries** — several sites keep lists of dotfiles
  and rice projects; ask to be added.
- **GitHub** — the `WavesHyprland` repo README should link back to
  `https://wavesos.org`, and the repo description should say what it is in one
  sentence. GitHub pages themselves rank very well and pass authority to you.
- **A YouTube or X post** of the desktop in use.

---

## 5. How to check it worked

- **Is my page in Google?** Search `site:wavesos.org` in Google. If your page
  shows up, you're indexed. If nothing shows, Google hasn't gotten to it yet —
  check Search Console → **Pages** for the reason.
- **Am I verified?** Search Console's overview report starts collecting clicks
  and impressions within a day or two of verification.
- **Is the sitemap fine?** Search Console → **Sitemaps** should say
  "Success" with 1 page found.
- **Do the structured-data blocks parse?** Paste the page into
  **https://search.google.com/test/rich-results** — it should report a
  SoftwareApplication with no errors.

---

## 6. What's already done in this codebase (nothing to change)

- Page title, description, keywords, author
- Open Graph + Twitter card tags (so links look right when shared)
- Canonical URL pointing at `https://wavesos.org/`
- Structured data (Schema.org): SoftwareApplication, WebSite, Organization
- `public/sitemap.xml` and `public/robots.txt` both set to wavesos.org
- Favicon, logo, and wallpaper referenced by absolute URL
- No `noindex` anywhere; robots allows all crawlers

The only item that can't be done from inside the code is Search Console
verification, because Google issues a unique token per account — steps 1–3
above handle that.
