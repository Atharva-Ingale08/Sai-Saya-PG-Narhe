import { useMemo, useState } from 'react'
import { Container, SectionHeading } from './ui.jsx'
import { gallery } from '../data/gallery.js'

export default function Gallery() {
  const categories = useMemo(() => ['All', ...new Set(gallery.map((g) => g.category))], [])
  const [active, setActive] = useState('All')

  const items = active === 'All' ? gallery : gallery.filter((g) => g.category === active)

  return (
    <section id="gallery" className="bg-cream-100 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="A Look Inside"
          title="See Sai Saya PG for yourself"
          description="From tidy rooms to the shared spaces where residents actually spend their evenings."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? 'bg-navy-900 text-cream-50 shadow-card'
                  : 'bg-white text-navy-800/70 hover:bg-navy-900/5'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((img, i) => (
            <figure
              key={img.src + i}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                i % 5 === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/0 to-navy-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 text-sm font-medium text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
