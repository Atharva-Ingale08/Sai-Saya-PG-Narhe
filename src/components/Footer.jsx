import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import { Container } from './ui.jsx'
import Logo from './Logo.jsx'

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-20">
      <Container>
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/60">
              Safe, clean and affordable PG accommodation for students and working professionals —
              a true home away from home.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow text-gold-400">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream-100/70 transition-colors hover:text-cream-50">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold-400">Contact</h4>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-cream-100/70">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream-100/70">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
                hello@saisayapg.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream-100/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                123, College Road, Near City Chowk, Pune
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-gold-400">Office Hours</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              <li>Mon – Sat: 8:00 AM – 8:00 PM</li>
              <li>Sunday: 9:00 AM – 2:00 PM</li>
              <li className="pt-2 text-cream-100/50">Walk-ins welcome for room visits.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream-50/10 py-7 text-xs text-cream-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Sai Saya PG. All rights reserved.</p>
          <p>Designed with care for a home away from home.</p>
        </div>
      </Container>
    </footer>
  )
}
