import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  BedDouble,
  ShieldCheck,
  Bike,
  Droplets,
  Zap,
  Sparkles,
  Sofa,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Navigation,
  GraduationCap,
  UtensilsCrossed,
  ShoppingBasket,
  Stethoscope,
  Bus,
  Heart,
  Users,
  Leaf,
  Route as RouteIcon,
  CheckCircle2,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { BackToTop } from "@/components/site/BackToTop";
import { Gallery } from "@/components/site/Gallery";
import { Reveal } from "@/components/site/Reveal";

import heroImg from "@/assets/hero.jpg";
import roomSingle from "@/assets/room-single.jpg";
import roomDouble from "@/assets/room-double.jpg";
import roomTriple from "@/assets/room-triple.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

// Editable contact placeholders — replace with real details.
const PHONE = "[PHONE NUMBER]";
const WHATSAPP = "[WHATSAPP NUMBER]";
const EMAIL = "[EMAIL]";
const ADDRESS = "[FULL ADDRESS]";
const MAPS_EMBED_URL = "[GOOGLE MAPS EMBED URL]";
const MAPS_DIRECTIONS_URL = "[GOOGLE MAPS DIRECTIONS URL]";

const TITLE = "Sai Saya PG | Comfortable PG Accommodation in Narhe, Pune";
const DESCRIPTION =
  "Sai Saya PG offers comfortable, convenient PG accommodation in Narhe, Pune for students and working professionals. Single, double and triple sharing rooms.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Sai Saya PG",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Narhe",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

const rooms = [
  {
    title: "Single Sharing",
    image: roomSingle,
    alt: "Single sharing PG room with a bed, study desk and wardrobe at Sai Saya PG",
    blurb: "A private room for those who prefer quiet, focused personal space.",
    points: ["One occupant per room", "Personal storage space", "[ADD ROOM DETAIL]"],
  },
  {
    title: "Double Sharing",
    image: roomDouble,
    alt: "Double sharing PG room with two single beds and study desks at Sai Saya PG",
    blurb: "A balanced option — shared living with room to keep your own routine.",
    points: ["Two occupants per room", "Individual beds and storage", "[ADD ROOM DETAIL]"],
  },
  {
    title: "Triple Sharing",
    image: roomTriple,
    alt: "Triple sharing PG room with three beds and lockers at Sai Saya PG",
    blurb: "The most economical choice, ideal for students on a budget.",
    points: ["Three occupants per room", "Shared common storage", "[ADD ROOM DETAIL]"],
  },
];

const facilities = [
  { icon: Wifi, title: "Wi-Fi", desc: "[ADD FACILITY DETAIL — e.g. availability and timings]" },
  { icon: BedDouble, title: "Furnished Rooms", desc: "[ADD FACILITY DETAIL — furniture provided]" },
  { icon: ShieldCheck, title: "CCTV / Security", desc: "[ADD FACILITY DETAIL — security arrangements]" },
  { icon: Bike, title: "Parking", desc: "[ADD FACILITY DETAIL — parking availability]" },
  { icon: Droplets, title: "Water Supply", desc: "[ADD FACILITY DETAIL — water arrangement]" },
  { icon: Zap, title: "Electricity", desc: "[ADD FACILITY DETAIL — billing and backup]" },
  { icon: Sparkles, title: "Housekeeping", desc: "[ADD FACILITY DETAIL — cleaning schedule]" },
  { icon: Sofa, title: "Common Areas", desc: "[ADD FACILITY DETAIL — shared spaces]" },
];

const reasons = [
  { icon: Heart, title: "Comfortable Living", desc: "Rooms and shared spaces designed for everyday comfort." },
  { icon: MapPin, title: "Convenient Narhe Location", desc: "Situated in Narhe, Pune — close to everyday essentials." },
  { icon: GraduationCap, title: "Student Friendly", desc: "A calm, practical setup that suits study routines." },
  { icon: Leaf, title: "Clean Environment", desc: "Regular upkeep of rooms and common areas." },
  { icon: Users, title: "Essential Amenities", desc: "The basics you need for day-to-day living." },
  { icon: RouteIcon, title: "Easy Connectivity", desc: "Convenient access to local transport routes." },
];

const nearby = [
  { icon: GraduationCap, label: "Colleges" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: ShoppingBasket, label: "Grocery Stores" },
  { icon: Stethoscope, label: "Hospitals" },
  { icon: Bus, label: "Transport" },
];

const galleryImages = [
  { src: gallery1, alt: "Common dining area at Sai Saya PG, Narhe" },
  { src: gallery2, alt: "Clean shared bathroom at Sai Saya PG, Narhe" },
  { src: gallery3, alt: "Corridor and staircase inside Sai Saya PG building" },
  { src: gallery4, alt: "Rooftop terrace common area at Sai Saya PG" },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Warm, furnished common lounge area of a modern co-living PG"
            width={1920}
            height={1280}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/25" />
          <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-background uppercase backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" /> Narhe, Pune
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-background sm:text-5xl lg:text-6xl">
                Your Comfortable Home Away From Home
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-background/80">
                Comfortable and convenient PG accommodation in Narhe, Pune.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#rooms"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Explore Rooms
                </a>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-background/40 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="About Us"
                title="A calm, well-kept place to live in Narhe"
                subtitle="Sai Saya PG is a paying guest accommodation in Narhe, Pune, offering comfortable living for students and working professionals. The focus is simple — clean rooms, essential amenities and a convenient location that keeps daily life easy."
              />
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                [ADD ABOUT TEXT — describe the property, the people who stay here, house rules,
                meal arrangements and anything else residents should know. This text is a
                placeholder and can be edited freely.]
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Students & working professionals", "Single, double & triple sharing", "Essential amenities", "[ADD HIGHLIGHT]"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={120} className="relative">
              <img
                src={roomSingle}
                alt="Furnished room interior at Sai Saya PG in Narhe, Pune"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card px-6 py-5 shadow-[var(--shadow-soft)] sm:block">
                <p className="eyebrow">Located in</p>
                <p className="mt-1 font-display text-xl font-semibold">Narhe, Pune</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="bg-sand py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionHeading
                eyebrow="Accommodation"
                title="Rooms & Sharing Options"
                subtitle="Choose the sharing option that fits you best. Pricing details are available on enquiry."
              />
            </Reveal>
            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {rooms.map((room, i) => (
                <Reveal key={room.title} delay={i * 100} as="article">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                    <div className="overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.alt}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-semibold">{room.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{room.blurb}</p>
                      <ul className="mt-5 space-y-2">
                        {room.points.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-foreground/75">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex items-end justify-between border-t border-border pt-5">
                        <div>
                          <p className="eyebrow">Rent</p>
                          <p className="mt-1 font-display text-lg font-semibold">[PRICE]</p>
                        </div>
                        <a
                          href="#contact"
                          className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Enquire Now
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FACILITIES */}
        <section id="facilities" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Facilities"
              title="Everyday Essentials"
              subtitle="Details marked as placeholders can be updated once confirmed."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-soft)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-accent">
                    <f.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="eyebrow">Why Us</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Why Choose Sai Saya PG</h2>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 90}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-accent">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold">{r.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/70">{r.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="A Look Inside"
              subtitle="Tap any photo to view it full screen."
            />
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <Gallery images={galleryImages} />
          </Reveal>
        </section>

        {/* LOCATION */}
        <section id="location" className="bg-sand py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionHeading eyebrow="Location" title="Find Sai Saya PG" />
            </Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <Reveal>
                <div className="h-full rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-accent">
                    <MapPin className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">Narhe, Pune, Maharashtra</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ADDRESS}</p>
                  <a
                    href={MAPS_DIRECTIONS_URL}
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid min-h-[22rem] place-items-center rounded-3xl border border-dashed border-border bg-card p-8 text-center">
                  <div>
                    <p className="eyebrow">Map</p>
                    <p className="mt-3 font-display text-lg font-semibold">{MAPS_EMBED_URL}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Paste the Google Maps embed URL here to display the interactive map.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* NEARBY */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Neighbourhood"
              title="What's Nearby"
              subtitle="Add the nearby landmarks and distances once confirmed."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((n, i) => (
              <Reveal key={n.label} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                      <n.icon className="h-5 w-5" />
                    </span>
                    <h3 className="min-w-0 truncate text-base font-semibold">{n.label}</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {[0, 1].map((k) => (
                      <li
                        key={k}
                        className="flex items-center justify-between gap-3 border-b border-border/70 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="min-w-0 truncate text-foreground/75">[PLACE NAME]</span>
                        <span className="shrink-0 text-muted-foreground">[DISTANCE]</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-sand py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Get in Touch"
                subtitle="Reach out for room availability, pricing and a visit."
              />
            </Reveal>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Phone, label: "Phone", value: PHONE },
                { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP },
                { icon: Mail, label: "Email", value: EMAIL },
                { icon: MapPin, label: "Address", value: ADDRESS },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <div className="h-full rounded-2xl bg-card p-7 shadow-[var(--shadow-soft)]">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <p className="eyebrow mt-5">{c.label}</p>
                    <p className="mt-1.5 text-sm font-medium break-words text-foreground/85">{c.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-card"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-display text-2xl font-semibold">Sai Saya PG</p>
              <p className="mt-2 text-sm text-primary-foreground/70">Narhe, Pune, Maharashtra</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
                Comfortable and convenient PG accommodation for students and working professionals.
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <p className="eyebrow">Quick Links</p>
              <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-sm">
                {["Home", "About", "Rooms", "Facilities", "Gallery", "Location", "Contact"].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase()}`}
                      className="text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="eyebrow">Contact</p>
              <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
                <li>Phone: {PHONE}</li>
                <li>WhatsApp: {WHATSAPP}</li>
                <li>Email: {EMAIL}</li>
                <li className="break-words">Address: {ADDRESS}</li>
              </ul>
            </div>
          </div>
          <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
            © 2026 Sai Saya PG. All Rights Reserved.
          </p>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
