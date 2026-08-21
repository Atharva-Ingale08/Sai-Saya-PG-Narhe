import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "border-b border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-lg text-primary-foreground">
            S
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-semibold">
              Sai Saya PG
            </span>
            <span className="block text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
              Narhe, Pune
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Enquire Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[26rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="mx-auto max-w-6xl px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
