import { MapPin, GraduationCap, Briefcase, BusFront, ShoppingBasket } from 'lucide-react'
import { Container, SectionHeading } from './ui.jsx'

const nearby = [
  { icon: GraduationCap, label: 'Colleges', items: ['City Engineering College — 0.8 km', 'St. Xavier\u2019s Junior College — 1.2 km'] },
  { icon: Briefcase, label: 'Offices', items: ['Riverside IT Park — 1.5 km', 'Sector 12 Business Hub — 2.1 km'] },
  { icon: BusFront, label: 'Public Transport', items: ['College Road Bus Depot — 400 m', 'Central Metro Station — 1.8 km'] },
  { icon: ShoppingBasket, label: 'Markets', items: ['Laxmi Market — 600 m', 'Sunrise Super Mart — 900 m'] },
]

export default function Location() {
  return (
    <section id="location" className="bg-cream-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Find Us"
          title="Right where you need to be"
          description="Centrally located with colleges, offices, transit and markets all within easy reach."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="key-tag overflow-hidden rounded-[1.75rem] shadow-card lg:col-span-3">
            <div className="relative flex h-[420px] w-full items-center justify-center bg-navy-900 sm:h-[480px]">
              <iframe
                title="Sai Saya PG location map"
                className="absolute inset-0 h-full w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
              />
              <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-navy-950/85 px-4 py-2.5 text-sm text-cream-50 backdrop-blur-sm">
                <MapPin size={16} className="text-gold-400" />
                123, College Road, Near City Chowk
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {nearby.map(({ icon: Icon, label, items }) => (
              <div key={label} className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition-colors hover:border-gold-500/40">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-navy-900">{label}</h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-navy-800/70">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
