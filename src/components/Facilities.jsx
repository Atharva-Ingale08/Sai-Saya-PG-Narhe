import {
  Wifi,
  Droplets,
  Zap,
  Camera,
  ShowerHead,
  WashingMachine,
  UtensilsCrossed,
  ParkingCircle,
  Sparkles,
} from 'lucide-react'
import { Container, SectionHeading } from './ui.jsx'
import { facilities } from '../data/facilities.js'

const iconMap = {
  Wifi,
  Droplets,
  Zap,
  Camera,
  ShowerHead,
  WashingMachine,
  UtensilsCrossed,
  ParkingCircle,
  Sparkles,
}

export default function Facilities() {
  return (
    <section id="facilities" className="relative overflow-hidden bg-navy-950 py-24 sm:py-28">
      <div className="bg-noise absolute inset-0" />
      <Container className="relative">
        <SectionHeading
          eyebrow="What's Included"
          title="Everything you need, already taken care of"
          description="No surprise chores, no missing basics — just a place that runs smoothly so you don't have to think about it."
          align="center"
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map(({ icon, title, desc }) => {
            const Icon = iconMap[icon] ?? Sparkles
            return (
              <div
                key={title}
                className="group rounded-2xl border border-cream-50/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-cream-50">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream-100/65">{desc}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
