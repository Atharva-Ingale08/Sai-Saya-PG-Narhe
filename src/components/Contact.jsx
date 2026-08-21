import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { Container, SectionHeading } from './ui.jsx'

const contactDetails = [
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email Us', value: 'hello@saisayapg.com', href: 'mailto:hello@saisayapg.com' },
  { icon: MapPin, label: 'Visit Us', value: '123, College Road, Near City Chowk, Pune', href: '#location' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream-100 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Ready to move in? Let's talk."
          description="Reach out for room availability, pricing or a quick visit — we usually respond within an hour."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-5 lg:col-span-2">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:shadow-card"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="eyebrow text-navy-800/50">{label}</p>
                  <p className="mt-0.5 font-medium text-navy-900">{value}</p>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
            >
              <MessageCircle size={20} />
              Chat With Us on WhatsApp
            </a>
          </div>

          <div className="rounded-[1.75rem] border border-navy-900/10 bg-white p-7 shadow-card lg:col-span-3 sm:p-9">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={44} className="text-sage" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900">Message received</h3>
                <p className="mt-2 max-w-sm text-sm text-navy-800/70">
                  Thanks for reaching out — our team will get back to you shortly on the details you shared.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:bg-cream-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="name" placeholder="Your name" required />
                <Field label="Phone Number" id="phone" type="tel" placeholder="+91 98765 43210" required />
                <Field label="Email" id="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
                <Field label="Preferred Room Type" id="roomType" as="select" className="sm:col-span-2">
                  <option>Single Sharing</option>
                  <option>Double Sharing</option>
                  <option>Triple Sharing</option>
                  <option>Not sure yet</option>
                </Field>
                <Field
                  label="Message"
                  id="message"
                  as="textarea"
                  rows={4}
                  placeholder="Tell us when you're looking to move in..."
                  className="sm:col-span-2"
                />

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-500 hover:text-navy-950 sm:col-span-2"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, id, as = 'input', className = '', children, ...props }) {
  const Tag = as
  const baseClasses =
    'w-full rounded-xl border border-navy-900/15 bg-cream-50/60 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/35 transition-colors focus:border-gold-500 focus:bg-white focus:outline-none'

  return (
    <label htmlFor={id} className={`flex flex-col gap-1.5 text-sm font-medium text-navy-900/80 ${className}`}>
      {label}
      <Tag id={id} name={id} className={baseClasses} {...props}>
        {children}
      </Tag>
    </label>
  )
}
