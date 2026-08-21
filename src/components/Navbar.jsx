import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 py-3 shadow-[0_1px_0_rgba(15,42,64,0.08)] backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? 'text-navy-900/80 hover:text-navy-900' : 'text-navy-900/70 hover:text-navy-900'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-500 hover:text-navy-950"
          >
            Book Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <nav className="mx-5 mt-4 flex flex-col gap-1 rounded-2xl border border-navy-900/10 bg-cream-50 p-3 shadow-card">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-navy-900/80 transition-colors hover:bg-cream-100 hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gold-500 px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
