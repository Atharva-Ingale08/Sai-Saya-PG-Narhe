import { BedDouble, Ruler, CircleCheck, CircleAlert } from 'lucide-react'

export default function RoomCard({ room }) {
  const isAvailable = room.availability === 'Available'

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        <span className="eyebrow absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1.5 text-navy-900">
          {room.tag}
        </span>
        <span
          className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
            isAvailable ? 'bg-sage/90 text-white' : 'bg-gold-500/95 text-navy-950'
          }`}
        >
          {isAvailable ? <CircleCheck size={14} /> : <CircleAlert size={14} />}
          {room.availability}
        </span>
      </div>

      {/* Perforated "tear" divider — reinforces the key-tag motif */}
      <div className="relative h-0">
        <div className="absolute -top-3 left-0 flex w-full justify-between px-1">
          <span className="h-6 w-6 -translate-x-1/2 rounded-full bg-cream-50" />
          <span className="h-6 w-6 translate-x-1/2 rounded-full bg-cream-50" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-7">
        <h3 className="font-display text-xl font-semibold text-navy-900">{room.name}</h3>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-display text-3xl font-semibold text-navy-900">₹{room.price.toLocaleString('en-IN')}</span>
          <span className="text-sm text-navy-800/60">/ month</span>
        </div>

        <div className="mt-5 space-y-2.5 border-y border-dashed border-navy-900/15 py-5">
          <div className="flex items-center gap-2.5 text-sm text-navy-800/75">
            <BedDouble size={16} className="text-gold-600" strokeWidth={1.75} />
            {room.bed}
          </div>
          <div className="flex items-center gap-2.5 text-sm text-navy-800/75">
            <Ruler size={16} className="text-gold-600" strokeWidth={1.75} />
            {room.size}
          </div>
        </div>

        <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-navy-800/65">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <span className="h-1 w-1 shrink-0 rounded-full bg-gold-500" />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-gold-500 hover:text-navy-950"
        >
          View Details
        </a>
      </div>
    </div>
  )
}
