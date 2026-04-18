@AGENTS.md

# Zach Fleishman · Zero to Six Landing Page

This is a single-page marketing site selling a $47 low-ticket video course ("Zero to Six") to Zach's personal Instagram audience (@zachfleishman). The site funnels from Instagram DMs → VSL → Stripe checkout → (future) upsell ladder.

> **Before writing any code:** This is Next.js 16 + Tailwind v4. The API surface has breaking changes from older Next.js. Read `node_modules/next/dist/docs/` when in doubt. See `AGENTS.md`.

---

## 1. Business context

**Who the site is for**
- Instagram followers Zach collected emails from via a free PDF playbook
- Freelancer-curious people who want to build something outside a day job
- Warm traffic. They already like Zach, just need the nudge to buy

**What the offer is (Zach's own definition, verbatim):**
> "It's a voice note to my younger self, made public, with receipts and a door into the room. A short, honest voice note from someone a few steps ahead, plus the playbook and the people to do something with it. Ten videos, under an hour total, where I walk someone through how I built a life of time and location freedom. Not as a course, as a conversation. Paired with a one-page playbook (The Starting Line) that gives the skill-curious buyer the actual moves to book their first paid gig, and a community plus monthly Q&A so the relationship doesn't end when the videos do."

- **Name:** Zero to Six
- **Legal entity:** Fleishman Collective LLC (use on footer, legal pages, receipts)
- **Price:** $47 one-time
- **Comparison price shown:** $197 (struck through, "Founders pricing" badge)
- **Contents:** Video 0 (Welcome · Before You Press Play) + Videos 1-10 (the ten short conversations) + The Starting Line Playbook + The Room (community + **live monthly Q&A with Zach**)
- **Total runtime:** under an hour across all 11 videos
- **Refund policy:** Not advertised on the page. (Earlier drafts had a 14-day refund promise; Zach removed it.) Don't reintroduce.
- **Checkout:** Stripe Payment Link (hosted checkout, not API-integrated)

**Note on the VSL.** The VSL (sales video on the landing page) is **NOT** Video 0. Video 0 is inside the product as the welcome. The VSL is a separate, yet-to-be-recorded sales video that will eventually be embedded in `components/VSL.tsx` via `NEXT_PUBLIC_VSL_EMBED_URL`. Until then, the VSL slot shows a neutral placeholder (pulsing play button, "A voice note" ribbon).

**The 11 videos (authoritative titles + approximate runtime)**
0. Before You Press Play · ~1 min (welcome video inside the product, not the VSL)
1. Where I Am Now · ~3 min (Idaho, the Tacoma, the friends, the honest morning)
2. Why I Left the Script · ~3 min (family wanted cybersecurity, picked up the camera instead)
3. Picking a Vehicle · ~4 min (content as the skill, vehicle ≠ lifestyle, ikigai framing)
4. The First Move · ~5 min (first paid gig: $1k for a 50-min doc in Mexico, spec work, Bud Light)
5. The Gap No One Warns You About · ~4 min (avoidance that looks like motion)
6. The Hard Conversation · ~3 min (the one with yourself)
7. What "Working" Actually Feels Like · ~4 min (loneliness, normalization, staying a student)
8. The Lifestyle You're Actually Buying · ~3 min (freedom = responsibility)
9. The Community · ~4 min (scenes vs communities, "show me your friends...")
10. Your Move · ~3 min (one thing to do this week, "pay attention to your why")

**Included alongside the videos (Zach frames these as part of the offer, not "bonuses")**
- **The Starting Line Playbook.** The tactical companion for the skill-curious. Purpose: "the actual moves to book your first paid gig." Companion to Video 4. **Do not describe it as "a one-page playbook" in user-facing copy** — Zach felt "one-page" made it sound small/weak. Just call it "The Starting Line Playbook" or "The Playbook."
- **The Room.** A small community for buyers **plus a live monthly Q&A with Zach**. Framed as "a door into the room" in Zach's own language. Purpose: "so the relationship doesn't end when the videos do." The monthly Q&A is confirmed live, not theoretical — always list it prominently.

**What the offer sells**
A voice note, not a course. A conversation, not instruction. Zach narrates how he built a life of time + location freedom (Connecticut → San Diego → Idaho arc). The videos are mindset + narrative, the Starting Line is the tactical layer, the Room is the relational layer. Intentionally NOT positioned as a "course." **Do not use the word "course" in user-facing copy.** The product description word to use is "voice note" or "conversation."

**Funnel position**
1. Free PDF Playbook (already happening). Warms up the IG audience.
2. **This page → Zero to Six ($47).** Voice note + Starting Line playbook + Room.
3. **Coaching ($$$).** Explicitly teased in Video 10 as the upsell for people who want hands-on help.
4. Potential future offers (higher-ticket retreat / in-person in Idaho?). Not scoped yet.

**Voice guide (paraphrased from Zach's actual scripts + explicit feedback):**
- Plainspoken, but **editorial on the page**, not transcript-raw. The scripts are very casual; the page should channel the voice without lifting verbatim chatty lines. Paragraphs should flow as prose, not as staccato script fragments.
- Never "guru bag." Never "unlock your potential." Never framework-y.
- **Avoid framings that put Zach above the reader.** "Someone a few steps ahead" tested as egotistical when on a landing page, even though Zach himself used it in his positioning doc. Use humbler framings: "voice note to my younger self," "the real version," "the conversation I wish I'd had."
- **Never call it a course.** Anywhere. Use "voice note" or "conversation."
- **Don't call the videos "videos" when you can call them "conversations."** Zach's preferred framing is "Ten short conversations" over "Ten videos." Use "conversations" in the headline copy and prose; "videos" is fine for catalog entries and file-count facts.
- **Don't describe The Starting Line as "one-page."** It makes it sound small. Just call it "The Starting Line Playbook" or "The Playbook."
- **Don't advertise a refund / money-back guarantee.** Removed intentionally.
- Real phrases he uses: "you and I are not that different," "I'm not smarter than you," "pushing a Corolla on an F1 track," "stop lying to myself," "show me your friends and I'll show you your future."
- **No em dashes (`—`).** Use periods, commas, or middle-dots (`·`). His actual scripts use short punchy sentences broken with periods, not em dashes. Do not reintroduce them.
- Italic `<em>` inside display headlines for the gold accent moment.
- No emojis. No hype-stack bullets. Editorial.

---

## 2. Design references

**Layout / funnel structure modeled on** [freedomclub.com](https://www.freedomclub.com/)
- Hero → social proof strip → founder story → what's inside → results → pricing → FAQ → final CTA → footer
- Multiple CTAs stacked throughout (Zach's Stripe link repeats 4× on the page)
- Stat callouts + specific-number testimonials for credibility

**Visual treatment borrowed from** `/Users/zach/Documents/Claude/Scheduled/conetic-website`
- Glass panels (`backdrop-filter: blur + saturate`)
- Ambient radial-gradient orbs with slow `drift` animation
- Animated flowing gradient text
- Scroll-reveal `animate-on-scroll` + `stagger` pattern

**Key inversion from Conetic:** Conetic is a dark SaaS dashboard aesthetic. This site is a **light** editorial aesthetic. Cream `#f7f5f1` background, Playfair Display serif headlines, gold italic accents on key words. Same glassy/fluid vibe, inverted palette.

---

## 3. Tech stack

| | |
|---|---|
| Framework | Next.js 16.2.3 (App Router, Turbopack) |
| React | 19.2.4 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Fonts | Inter (body) + Playfair Display (display serif), both via `next/font/google` |
| Type | TypeScript (strict) |
| Lint | ESLint + `eslint-config-next` |
| Deploy | Static marketing page. Any Next.js host (Vercel recommended). |

Dev port is **3002** (`npm run dev`).

---

## 4. File map

```
/
├── app/
│   ├── layout.tsx         # Fonts, metadata (OG/Twitter), html+body shell
│   ├── page.tsx           # Composes all sections in order
│   ├── globals.css        # Theme tokens, glass utilities, animations
│   └── favicon.ico
│
├── components/            # All section components (one file each)
│   ├── Nav.tsx            # Fixed nav, gains glass-nav bg on scroll
│   ├── Hero.tsx           # Headline + VSL + CTAs + micro-proof
│   ├── VSL.tsx            # Wistia/Vidalytics iframe slot w/ placeholder
│   ├── LogoStrip.tsx      # Marquee of "featured work" credits
│   ├── Story.tsx          # 3-beat narrative (script / vehicle / flip)
│   ├── WhatsInside.tsx    # 11 videos + 2 included items
│   ├── Results.tsx        # Stat banner + 4 real script pull-quotes
│   ├── Pricing.tsx        # The $47 offer card. Main conversion point.
│   ├── FAQ.tsx            # 6 accordion items
│   ├── FinalCTA.tsx       # Last-ditch conversion panel
│   ├── Footer.tsx         # Instagram, email, copyright
│   └── ScrollReveal.tsx   # IntersectionObserver → .visible class
│
├── .env.local.example     # Copy to .env.local and fill in
├── .claude/launch.json    # Preview-server config (port 3002)
├── next.config.ts         # Empty, stock config
├── postcss.config.mjs     # Only plugin: @tailwindcss/postcss
├── eslint.config.mjs      # Stock next config
├── package.json
└── tsconfig.json          # Path alias: @/* → ./*
```

**Page composition is fixed in `app/page.tsx`.** Reordering sections means editing that file.

---

## 5. Environment variables

Both are optional. Both are `NEXT_PUBLIC_*` so they're inlined at build time.

| Variable | What it does | Fallback |
|---|---|---|
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | The `https://buy.stripe.com/...` URL. All 4 CTA buttons link to it. | `#pricing` (scroll to pricing section) |
| `NEXT_PUBLIC_VSL_EMBED_URL` | Iframe `src` for Wistia/Vidalytics/YouTube/Vimeo embed | Renders a branded placeholder with a pulsing play button |

**To ship**: copy `.env.local.example` → `.env.local` and fill both.

Payment is handled entirely by Stripe's hosted checkout. There's no API route, no webhook, no order DB. If the user later needs order tracking or fulfillment, switch to Stripe Checkout via API (new route handler in `app/api/checkout/route.ts`).

---

## 6. Design system

### Color tokens (in `app/globals.css`)

```
--bg: #f7f5f1          /* warm cream background */
--bg-tint: #fbf9f6     /* off-white */
--surface: rgba(255,255,255,.72)   /* glass panel */
--surface-2: rgba(255,255,255,.55) /* lighter glass */
--border: rgba(17,24,39,.08)
--border-strong: rgba(17,24,39,.14)
--ink: #0b0d12         /* near-black body text */
--ink-soft: #2a2f3a
--muted: #5b6470
--muted-2: #8a93a0
--accent: #0b0d12      /* primary CTA = near-black */
--gold: #c9a063        /* editorial accent on italic <em> */
--peach / --mint / --sky / --lilac   /* ambient orb tints */
```

### Key utility classes

| Class | What it does |
|---|---|
| `.glass` | White 72% bg + blur + saturate + inset highlights |
| `.glass-soft` | Lighter glass, used for secondary cards |
| `.glass-nav` | Cream 72% bg for fixed header on scroll |
| `.display` | Playfair Display, 500wt, tight letter-spacing |
| `.display em` | Gold italic (the aesthetic moment) |
| `.btn-primary` | Near-black button w/ drop shadow, lifts on hover |
| `.btn-ghost` | Bordered text button |
| `.flow-text` | Animated gradient text (used on stat numbers) |
| `.orb` | Big blurred colored circle w/ `orb-float` animation |
| `.fade-up` + `.d1`-`.d5` | Staggered entrance, used in hero |
| `.animate-on-scroll` | IntersectionObserver target (see `ScrollReveal`) |
| `.stagger` | Children of this class stagger their reveal delays |
| `.lift` | Hover transform + shadow (used on cards) |
| `.vsl-frame` | 16:9 container for the sales video |
| `.marquee` / `.marquee-mask` | Logo/credit strip scroll |

### Typography rules

- **Display headlines** use Playfair Display (serif, italic `<em>` in gold)
- **Body + UI** use Inter
- **Eyebrow labels** are always `text-[12px] tracking-[0.22em] uppercase text-[var(--muted)]`

### The "fluid/glassy" effect is achieved by three stacked layers:

1. `body::before`. Drifting pastel radial gradients (lavender, peach, sky, mint).
2. `body::after`. Subtle paper-grain dot pattern.
3. Section-local `.orb` divs. Single large blurred circles for emphasis.

Cards sit on top with `.glass` so the background tints leak through.

---

## 7. Where the copy lives

Most copy is inline in the component files. Not ideal for a real CMS but fine for a single landing page. To edit:

| Surface | File | Notes |
|---|---|---|
| Headline / subhead / VSL caption | [components/Hero.tsx](components/Hero.tsx) | Preserve `<em>` gold-italic highlights |
| VSL ribbon + placeholder text | [components/VSL.tsx](components/VSL.tsx) | "Video 0 · Before You Press Play" |
| Partner/work credits | [components/LogoStrip.tsx:1](components/LogoStrip.tsx#L1) | `credits` array. Swap for real brand names. |
| The 3 story beats | [components/Story.tsx:1](components/Story.tsx#L1) | `beats` array. Connecticut → San Diego → the shower moment. |
| 11 videos + 2 included items | [components/WhatsInside.tsx:1](components/WhatsInside.tsx#L1) | `lessons` (0-10) + `bonuses` arrays. Hints are paraphrased from the actual scripts. |
| Video pull-quotes + stat banner | [components/Results.tsx:1](components/Results.tsx#L1) | `pulls` array holds real quotes from videos 2/3/5/6. Do not fabricate. |
| Price, features list | [components/Pricing.tsx](components/Pricing.tsx) | `includes` array for the bullet list |
| FAQ | [components/FAQ.tsx:1](components/FAQ.tsx#L1) | `items` array. Voice-matched to Zach's scripts. |
| Final panel | [components/FinalCTA.tsx](components/FinalCTA.tsx) | "Your worst outcome from trying..." (from Video 10) |
| Footer links | [components/Footer.tsx](components/Footer.tsx) | Instagram + email |
| Page title / OG / Twitter | [app/layout.tsx](app/layout.tsx) | |

**Voice guide (short version):** plainspoken, slightly self-deprecating, specific over grand. No em dashes. No emojis. If a sentence reads like it came from a course-selling guru ("Unlock your potential!"), rewrite it.

---

## 8. Placeholders / TODOs

Things shipped as placeholders that Zach will fill in:

- [ ] Stripe Payment Link in `.env.local`
- [ ] **VSL** needs to be recorded. It is NOT Video 0. When done, drop embed URL into `NEXT_PUBLIC_VSL_EMBED_URL`.
- [ ] **Brand logos.** `components/LogoStrip.tsx` currently renders the confirmed brand names as uniform uppercase text wordmarks: Red Bull, GoPro, DJI, Artlist, Sesh+, Yacht Week. When real SVG/PNG logos are available, drop them into `/public/logos/*.svg` and swap the `<span>` rendering for `<Image>`. Keep them uniform height (~20px grayscale works for this aesthetic).
- [ ] Real favicon (currently inherited from conetic reference)
- [ ] OG image (metadata declares one, none is actually served yet). Add `app/opengraph-image.png`.
- [ ] Domain + email in `Footer.tsx` (currently `hello@zachfleishman.com`)

**Results section, special note.** The Results section (`components/Results.tsx`) used to hold fabricated testimonials. It's been reworked to show *real pull-quotes from Zach's video scripts* (Video 2, 3, 5, 6). These are genuine content, not social proof. Once the product has real buyers + real testimonials, swap the `pulls` array back to testimonials. Do not fabricate. Fake testimonials on a personal-brand product are a trust landmine.

The site works and can be demoed without any of these, but should not go live to paying traffic until at least Stripe + VSL + OG image are set.

---

## 9. Running + verifying

```bash
npm install      # already done
npm run dev      # http://localhost:3002
npm run build    # production build
npm run lint     # eslint
```

There is a `.claude/launch.json` so the Claude Preview MCP can boot the server with `preview_start {name: "landing"}`. If port 3002 is held by another process, set `autoPort: true` or free the port.

**Smoke test after edits:**
1. `npm run dev`, visit localhost:3002
2. Confirm no console errors (`preview_console_logs` with `level: "error"`)
3. Scroll through all sections. Reveal animations should fire, cards should lift on hover.
4. Click every CTA. Should route to `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` (or `#pricing` fallback).
5. Resize to mobile (`preview_resize preset: "mobile"`). Hero should stack, nav should collapse menu.

---

## 10. Likely next changes

If the user comes back asking for changes, the most likely asks + where to look:

| Request | Touch |
|---|---|
| "Change the price to $X" | `Pricing.tsx` (big number + strikethrough), `Nav.tsx` + `Hero.tsx` (CTA label) |
| "Add testimonials" | `Results.tsx` `pulls` array. Can hold any number, grid is 2-col on md+. |
| "Swap the VSL to YouTube" | Set `NEXT_PUBLIC_VSL_EMBED_URL` to the YouTube `/embed/VIDEO_ID` URL. Done. |
| "Add an order bump / upsell" | Would require Stripe Checkout API (new `app/api/checkout/route.ts`). Currently just Payment Link. |
| "Dark mode toggle" | Not built. Theme is hardcoded light. Would require reworking `globals.css` with `[data-theme]` selectors. |
| "Add a waitlist for mid-ticket" | New component + simple API route to Resend/ConvertKit/etc. |
| "Change the brand color" | `--gold: #c9a063` in `globals.css` is the single editorial accent. Everything else is greyscale. |

---

## 11. Source of truth for copy

Every on-page sentence should be derivable from, or directly lifted from, Zach's actual video scripts (Video 0 through Video 10). If a new request comes in to "write a new hook" or "add a section," cross-reference the scripts before writing. They are the voice, the facts, and the emotional register.

**Specific factual claims that appear on the page and come from the scripts:**
- "Connecticut" → hometown (Video 2)
- "San Diego" → first move (Video 2)
- "Idaho" → current home (Video 1)
- "2009 Tacoma" → dream truck (Video 1)
- "40 countries by 21" → Video 1
- First paid gig: "$1k for a 50-minute doc in Mexico, November 2022" → Video 4
- "Bud Light" spec work → Video 4
- "Pushing a Corolla on an F1 track" → Video 2
- "Show me your friends and I'll show you your future" → Videos 1 and 9
- Coaching = the upsell → Video 10 explicitly
- "The Starting Line PDF" = included, tactical companion → Video 10 explicitly

**If Zach adds a Video 11+, or changes any of the above**, update:
1. `components/WhatsInside.tsx`. `lessons` array.
2. `components/Pricing.tsx`. `includes` array if the count changed.
3. `components/Results.tsx`. Stat banner if it references "11 videos".
4. `components/Hero.tsx`. Eyebrow + CTA if it references "11 videos".
5. This file, section 1.

---

## 12. Things NOT to do

- **Don't mix the dark Conetic palette back in.** The glassy effect translates, the dark colors don't. The whole point of this page is it feels premium/editorial, not SaaS-dashboard-y.
- **Don't add gradient text to every headline.** `.flow-text` is used intentionally on one stat row. Spreading it everywhere cheapens it.
- **Don't replace Playfair with another serif** without seeing the whole page. The italic gold `<em>` is tuned to Playfair's italic weights.
- **Don't convert the Stripe Payment Link to an API route without asking.** The link flow is deliberate: it means no secrets in the repo, no webhook infra, no PCI surface. If Zach wants custom fields, order bumps, or tracking, then yes, swap to API.
- **Don't add marketing/analytics scripts by default.** Zach may want Meta Pixel / TikTok Pixel later, but should explicitly confirm. Those scripts are a privacy/consent surface and should be wired deliberately.
- **Don't reintroduce em dashes (`—`).** See the voice guide in section 1. Earlier drafts had too many, the user explicitly removed them. Use periods, commas, or middle-dots (`·`) instead.
- **Don't call it a "course."** Ever. Voice note or conversation. See section 1 voice guide.
- **Don't reintroduce a 14-day refund (or any refund promise).** Explicitly removed by the user.
- **Don't describe The Starting Line as "one-page" or "a PDF."** It sounds small. It is The Starting Line Playbook.
- **Don't use "a few steps ahead" as a hero framing.** Tested as egotistical on the page. Humble framings only ("voice note to my younger self," etc).
