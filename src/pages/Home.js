import React from 'react'
import Hero from '../components/Hero'
import FilmRoll from '../components/FilmRoll'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import PlansSection from '../components/PlansSection'
import ScrollSection from '../components/ScrollSection'
import GradualBlur from '../components/reactbits/GradualBlur'

const Home = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <Hero />
      <FilmRoll />
      <FeaturesSection />
      <ServicesSection />
      <ScrollSection />
      <PlansSection />
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={4}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  )
}

export default Home
