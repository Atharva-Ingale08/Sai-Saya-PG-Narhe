import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Rooms from './components/Rooms.jsx'
import Facilities from './components/Facilities.jsx'
import Location from './components/Location.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Facilities />
        <Location />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
