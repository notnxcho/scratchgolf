import React from 'react'
import Hero from '../components/Hero'
import FilmRoll from '../components/FilmRoll'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import PlansSection from '../components/PlansSection'
import ScrollSection from '../components/ScrollSection'

const Home = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <Hero />
      <FilmRoll />
      <FeaturesSection />
      <ServicesSection />
      <ScrollSection />
      <PlansSection />
    </div>
  )
}

export default Home
