export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
}

export function Eyebrow({ children, light = false }) {
  return (
    <span className={`eyebrow ${light ? 'text-gold-300' : 'text-gold-600'}`}>
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-3 font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.6rem] ${
          light ? 'text-cream-50' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-cream-100/80' : 'text-navy-800/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function PrimaryButton({ children, href = '#', className = '', ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold tracking-wide text-navy-950 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-card-hover active:translate-y-0 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export function GhostButton({ children, href = '#', className = '', ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-wide text-cream-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cream-50/60 hover:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}

export function DarkButton({ children, href = '#', className = '', ...props }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold tracking-wide text-cream-50 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-card-hover ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
