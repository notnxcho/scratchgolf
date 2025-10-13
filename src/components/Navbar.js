import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#12AF9A] to-[#15CBB3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">SG</span>
              </div>
              <span className={`ml-3 font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Scratch Golf
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-[#12AF9A] ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Reserve Button */}
            <button className="hidden sm:inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-[#12AF9A] to-[#15CBB3] text-white text-sm lg:text-base font-semibold rounded-full hover:from-[#0F9A87] hover:to-[#12B8A3] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Reserve Now
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:text-gray-300 hover:bg-white/10'
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
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#12AF9A] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#12AF9A] to-[#15CBB3] text-white text-base font-semibold rounded-full hover:from-[#0F9A87] hover:to-[#12B8A3] transition-all duration-300">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
