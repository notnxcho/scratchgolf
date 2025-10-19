import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state
      setIsScrolled(currentScrollY > 20)
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false)
      } else {
        // Scrolling up - show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  // Smooth scroll function
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80 // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-18">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#12AF9A] to-[#15CBB3] rounded-lg flex items-center justify-center">
                <span className="text-deep-black font-bold text-sm lg:text-lg">SG</span>
              </div>
              <span className={`ml-2 font-bold text-lg lg:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-deep-black'
              }`}>
                Scratch Golf
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#12AF9A] ${
                    isScrolled ? 'text-gray-700' : 'text-deep-black/50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Reserve Button */}
            <Link to="/book/reservation" className="hidden sm:inline-flex items-center text-[#12AF9A] hover:text-[#0F9A87] font-semibold text-[14px] lg:text-[18px] bg-transparent p-0 m-0 transition-colors duration-200" style={{ width: 'auto' }}>
              Reserve Now
              <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Iconoir: ArrowRight */}
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-deep-black hover:text-gray-300 hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                scrollToSection(item.href)
                setIsMobileMenuOpen(false)
              }}
              className="block w-full text-left px-3 py-2 text-[16px] font-medium text-gray-700 hover:text-[#12AF9A] hover:bg-gray-50 rounded-md transition-colors duration-300"
            >
              {item.name}
            </button>
          ))}
          <div className="px-3 py-2">
            <Link to="/book/reservation" className="inline-flex items-center text-[#12AF9A] hover:text-[#0F9A87] font-semibold text-[16px] bg-transparent p-0 m-0 transition-colors duration-200" style={{ width: 'auto' }} onClick={() => setIsMobileMenuOpen(false)}>
              Reserve Now
              <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Iconoir: ArrowRight */}
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
