import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FilmRoll from '../components/FilmRoll'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import PlansSection from '../components/PlansSection'
import ScrollSection from '../components/ScrollSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import FAQSection from '../components/FAQSection'
import GradualBlur from '../components/reactbits/GradualBlur'
import Footer from '../components/Footer'

const Home = () => {
  const location = useLocation()

  // Handle hash navigation when coming from other routes
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.offsetTop - navbarHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO />
      <Navbar />
      <Hero />
      <FilmRoll />
      <FeaturesSection />
      <ServicesSection />
      <ScrollSection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
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
