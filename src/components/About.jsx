import { HeartHandshake, ShieldCheck, MapPinned } from 'lucide-react'
import { Container, SectionHeading } from './ui.jsx'

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Comfortable Environment',
    desc: 'Furnished rooms, home-style meals and warm housekeeping — designed to feel less like a facility, more like family.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Peaceful Stay',
    desc: 'CCTV-monitored premises, secured entry and on-site staff so residents and their families can rest easy.',
  },
  {
    icon: MapPinned,
    title: 'Convenient Location',
    desc: 'Walking distance to colleges, offices, transit and markets — everything you need is close by.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="key-tag overflow-hidden rounded-[1.75rem] shadow-card">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop"
                alt="Sai Saya PG common area with residents"
                className="h-[420px] w-full object-cover sm:h-[480px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-52 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-card sm:-right-8 sm:w-60">
              <p className="font-display text-3xl font-semibold text-navy-900">7+</p>
              <p className="mt-1 text-sm text-navy-800/70">Years of hosting students &amp; professionals with care</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Sai Saya PG"
              title="More than a room — a place that has your back"
              description="Sai Saya PG was built on a simple idea: moving cities for study or work shouldn't mean giving up comfort or peace of mind. We host students and working professionals in clean, well-maintained rooms with the kind of everyday care you'd expect at home — reliable food, dependable safety, and neighbours who feel like family."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-1">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-2xl p-1 transition-colors hover:bg-cream-100/70">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-800/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
