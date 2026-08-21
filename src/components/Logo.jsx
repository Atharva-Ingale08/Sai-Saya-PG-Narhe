export default function Logo({ light = false }) {
  return (
    <a href="#home" className="group flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 font-display text-lg font-semibold text-navy-950 shadow-card transition-transform duration-300 group-hover:-rotate-3">
        S
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-semibold tracking-tight ${light ? 'text-cream-50' : 'text-navy-900'}`}>
          Sai Saya <span className="text-gold-500">PG</span>
        </span>
        <span className={`eyebrow mt-0.5 text-[0.6rem] ${light ? 'text-cream-100/60' : 'text-navy-800/50'}`}>
          Home Away From Home
        </span>
      </span>
    </a>
  )
}
