import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import { Nav } from './component/Nav'
import { Hero } from './component/Hero'
import { Service } from './component/Service'
import AboutUs from './component/Abiutus'
import BusinessHero from './component/Banner'
import TeamSection from './Team';
import Testimonials from './Testm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <Service />
      <AboutUs />
      <BusinessHero />
      <TeamSection />
      <Testimonials />
    </>
  )
}

export default App
