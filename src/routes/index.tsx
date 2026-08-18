import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { FaqSearch } from "@/components/FaqSearch";
import { Reveal } from "@/components/Reveal";
import { LUMA_URL, content, pricing, type Lang } from "@/lib/content";
import heroAsset from "@/assets/photo-1.png.asset.json";
import portraitAsset from "@/assets/photo-2.png.asset.json";
import yogaAsset from "@/assets/photo-3.png.asset.json";
import pilatesAsset from "@/assets/photo-4.png.asset.json";
import studioAsset from "@/assets/photo-5.png.asset.json";

const heroStudio = heroAsset.url;
const sierraPortrait = portraitAsset.url;
const yogaImg = yogaAsset.url;
const pilatesImg = pilatesAsset.url;
const studioCorner = studioAsset.url;

const TITLE = "Sierra Wellness Space — Yoga & Pilates à Strasbourg Cronenbourg";
const DESCRIPTION =
  "Studio de yoga et Pilates à Strasbourg Cronenbourg. Cours collectifs et sessions privées en français, anglais et chinois, 51 Route d'Oberhausbergen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "yoga Strasbourg, Pilates Strasbourg, yoga Cronenbourg, Pilates Cronenbourg, cours de yoga Oberhausbergen",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Sierra Wellness Space",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "51 Route d'Oberhausbergen",
            postalCode: "67200",
            addressLocality: "Strasbourg",
            addressCountry: "FR",
          },
          areaServed: "Strasbourg",
          founder: { "@type": "Person", name: "Sierra Wang" },
          sameAs: [
            "https://instagram.com/sierrawng",
            "https://tiktok.com/@sierrawng",
            LUMA_URL,
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const MAP_SRC =
  "https://www.google.com/maps?q=51%20Route%20d'Oberhausbergen%2067200%20Strasbourg&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=51+Route+d%27Oberhausbergen+67200+Strasbourg";

function BookButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={LUMA_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 ${className}`}
    >
      {label}
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = content[lang];
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["#accueil", t.nav.home],
    ["#a-propos", t.nav.about],
    ["#yoga", t.nav.yoga],
    ["#pilates", t.nav.pilates],
    ["#tarifs", t.nav.pricing],
    ["#studio", t.nav.studio],
    ["#faq", t.nav.faq],
    ["#contact", t.nav.contact],
  ] as const;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#accueil" className="font-display text-lg tracking-wide">
            Sierra Wellness Space
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
              {(["fr", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                    lang === l ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <BookButton label={t.book} className="hidden px-5 py-2.5 sm:inline-flex" />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="rounded-full border border-border px-3 py-2 text-xs lg:hidden"
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="grid gap-1 border-t border-border/60 px-5 py-4 lg:hidden">
            {navItems.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-1.5 text-sm text-muted-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      {/* Hero */}
      <section id="accueil" className="mx-auto max-w-6xl px-5 pb-6 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {t.hero.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton label={t.book} />
              <a
                href="#a-propos"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                {t.hero.cta2}
              </a>
            </div>
            <p className="mt-8 rounded-2xl bg-secondary/70 px-4 py-3 text-sm text-muted-foreground">
              {t.hero.banner}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[999px_999px_28px_28px] border border-border/60">
              <img
                src={heroStudio}
                alt="Sierra assise au sommet d'un rocher face aux montagnes, respiration et pleine conscience"
                width={571}
                height={789}
                className="h-[440px] w-full object-cover object-center sm:h-[620px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="a-propos" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px_28px_999px_999px] border border-border/60">
              <img
                src={sierraPortrait}
                alt="Sierra Wang, fondatrice et professeure de yoga et Pilates"
                width={1008}
                height={1264}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle eyebrow={t.about.caption} title={t.about.title} />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Yoga */}
      <Discipline
        id="yoga"
        image={yogaImg}
        alt="Crique turquoise entre les falaises, image d'inspiration pour la respiration et le calme en cours de yoga"
        data={t.yoga}
        bookLabel={t.book}
      />

      {/* Pilates */}
      <Discipline
        id="pilates"
        image={pilatesImg}
        alt="Sierra en posture d'ouverture, travail du gainage et de la mobilité inspiré du Pilates"
        data={t.pilates}
        bookLabel={t.book}
        reverse
      />

      {/* Pricing */}
      <section id="tarifs" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <SectionTitle title={t.pricingS.title} />
            <p className="-mt-6 mb-12 max-w-xl text-muted-foreground">{t.pricingS.intro}</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((p, i) => {
              const item = t.pricingS.items[p.id] ?? { name: p.id, detail: "" };
              const suffix = p.note ? p.note.split("|")[lang === "fr" ? 0 : 1] : "";
              return (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <article
                    className={`flex h-full flex-col rounded-3xl border bg-card p-7 ${
                      p.popular ? "border-primary shadow-[0_18px_50px_-30px_var(--sage)]" : "border-border"
                    }`}
                  >
                    {p.popular ? (
                      <span className="mb-3 inline-flex w-fit rounded-full bg-primary px-3 py-1 text-[11px] uppercase tracking-widest text-primary-foreground">
                        {t.pricingS.popular}
                      </span>
                    ) : null}
                    <h3 className="text-2xl">{item.name}</h3>
                    <p className="mt-3 font-display text-3xl text-foreground">
                      {p.price}
                      <span className="ml-1 font-sans text-sm text-muted-foreground">{suffix}</span>
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                    <BookButton label={t.pricingS.book} className="mt-6 w-full" />
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">{t.pricingS.disclaimer}</p>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <SectionTitle title={t.studio.title} />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={studioCorner}
                alt="Tapis de yoga, tasse de thé et intentions écrites au sol lors d'un atelier au studio"
                width={571}
                height={789}
                loading="lazy"
                className="h-80 w-full object-cover object-center sm:h-[26rem]"
              />
            </div>
            <address className="mt-6 not-italic text-lg">{t.studio.address}</address>
            <p className="mt-4 text-muted-foreground">{t.studio.access}</p>
            <p className="mt-3 text-muted-foreground">{t.studio.ambiance}</p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm text-primary underline underline-offset-4"
            >
              {t.studio.directions}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <iframe
              title="Carte — 51 Route d'Oberhausbergen, 67200 Strasbourg"
              src={MAP_SRC}
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[28px] border border-border"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
        <Reveal>
          <SectionTitle title={t.faq.title} />
        </Reveal>
        <Reveal>
          <FaqSearch items={t.faq.items} searchLabel={t.faq.search} emptyLabel={t.faq.empty} />
        </Reveal>
        <div className="mt-10">
          <BookButton label={t.book} />
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
          <Reveal>
            <SectionTitle title={t.contact.title} />
            <p className="-mt-6 max-w-sm text-muted-foreground">{t.contact.intro}</p>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.contact.follow}
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href="https://instagram.com/sierrawng"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  Instagram @sierrawng
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@sierrawng"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  TikTok @sierrawng
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sierrawng"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <address className="mt-6 not-italic text-sm text-muted-foreground">
              {t.studio.address}
            </address>
            <div className="mt-8">
              <BookButton label={t.book} />
            </div>
            <p className="mt-10 text-xs text-muted-foreground">{t.contact.legal}</p>
          </Reveal>
          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7">
              <label className="block text-sm">
                {t.contact.name}
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="mt-5 block text-sm">
                {t.contact.email}
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="mt-5 block text-sm">
                {t.contact.message}
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full border border-foreground/20 px-6 py-3 text-sm transition-colors hover:bg-background"
              >
                {t.contact.send}
              </button>
              {sent ? <p className="mt-4 text-sm text-primary">{t.contact.sent}</p> : null}
            </form>
          </Reveal>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sticky bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <BookButton label={t.book} className="w-full" />
      </div>
    </div>
  );
}

function Discipline({
  id,
  image,
  alt,
  data,
  bookLabel,
  reverse = false,
}: {
  id: string;
  image: string;
  alt: string;
  data: { title: string; intro: string; classes: { name: string; desc: string }[]; benefits: string[] };
  bookLabel: string;
  reverse?: boolean;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="overflow-hidden rounded-[28px_999px_28px_999px]">
            <img
              src={image}
              alt={alt}
              width={1200}
              height={900}
              loading="lazy"
              className="h-80 w-full object-cover sm:h-[26rem]"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionTitle title={data.title} />
          <p className="-mt-6 text-muted-foreground">{data.intro}</p>
          <ul className="mt-8 space-y-5">
            {data.classes.map((c) => (
              <li key={c.name}>
                <h3 className="text-xl">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-2">
            {data.benefits.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookButton label={bookLabel} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
