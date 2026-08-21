import { Quote } from 'lucide-react'
import { Container, SectionHeading } from './ui.jsx'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="bg-cream-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resident Voices"
          title="What students & professionals say"
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="key-tag flex flex-col rounded-[1.5rem] border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <Quote className="text-gold-500" size={28} strokeWidth={1.5} />
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-navy-800/80">{t.quote}</p>
              <div className="mt-6 flex items-center justify-between border-t border-dashed border-navy-900/15 pt-5">
                <div>
                  <p className="font-display text-base font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-800/55">{t.role}</p>
                </div>
                <span className="eyebrow rounded-full bg-cream-100 px-3 py-1.5 text-navy-800/60">{t.stay}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
