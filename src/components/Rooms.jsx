import { Container, SectionHeading } from './ui.jsx'
import RoomCard from './RoomCard.jsx'
import { rooms } from '../data/rooms.js'

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream-100 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Room Options"
          title="A room for every budget and lifestyle"
          description="Every room comes fully furnished and move-in ready — pick the sharing type that fits how you live."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Container>
    </section>
  )
}
