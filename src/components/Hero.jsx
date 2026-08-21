import { ShieldCheck, MapPin, Users } from 'lucide-react'
import { PrimaryButton, GhostButton, Eyebrow } from './ui.jsx'

const stats = [
  { icon: Users, label: '120+ Happy Residents' },
  { icon: ShieldCheck, label: 'CCTV Monitored 24/7' },
  { icon: MapPin, label: '5 Min from College Road' },
]

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-28 sm:pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1800&auto=format&fit=crop"
          alt="Modern, sunlit PG room at Sai Saya PG"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        <div className="bg-noise absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl animate-fadeUp">
          <Eyebrow light>Sai Saya PG · Since 2018</Eyebrow>
          <h1 className="mt-5 font-display text-balance text-4xl font-semibold leading-[1.08] text-cream-50 sm:text-5xl md:text-6xl">
            Find Your Perfect <span className="text-gold-400">Home Away</span> From Home
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-cream-100/80 sm:text-lg">
            Comfortable, safe and affordable PG accommodation for students and professionals —
            clean rooms, home-style food and a community that looks out for you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="#rooms">Explore Rooms</PrimaryButton>
            <GhostButton href="#contact">Contact Us</GhostButton>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-cream-50/15 pt-7">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-cream-100/85">
                <Icon size={18} className="text-gold-400" strokeWidth={1.75} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-drift flex-col items-center gap-2 text-cream-100/50 sm:flex">
        <span className="eyebrow">Scroll</span>
        <span className="h-8 w-px bg-cream-100/40" />
      </div>
    </section>
  )
}
