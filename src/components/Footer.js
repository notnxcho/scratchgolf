import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Footer = () => {
  const [videoRef, isVideoVisible, hasVideoIntersected] = useIntersectionObserver({
    threshold: 0.3
  })
  const videoElementRef = useRef(null)

  useEffect(() => {
    if (isVideoVisible && hasVideoIntersected && videoElementRef.current) {
      videoElementRef.current.play().catch(error => {
        console.log('Footer video autoplay failed:', error)
      })
    }
  }, [isVideoVisible, hasVideoIntersected])

  return (
    <footer className="relative w-screen min-h-screen overflow-hidden">
      {/* Video Background */}
      <div ref={videoRef} className="absolute inset-0 w-full h-full">
        <video 
          ref={videoElementRef}
          src="https://stokt.b-cdn.net/Golf%20Ball%20Render%20V1.webm" 
          preload="auto" 
          playsInline 
          muted
          // loop
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, black 0%, transparent 100%)'
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 lg:p-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          {/* Left Side - Brand and CTA */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider">
              SCRATCH LAB
            </h2>
            <Link to="/book/reservation" className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-fit">
              Book now
            </Link>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.297v1.297h1.297V7.707zm-3.323 1.297c.718 0 1.297.579 1.297 1.297s-.579 1.297-1.297 1.297-1.297-.579-1.297-1.297.579-1.297 1.297-1.297z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mt-16">
          {/* Studio */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">Studio</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">About</a></li>
              <li><Link to="/book/reservation" className="text-white hover:text-gray-300 transition-colors">Booking</Link></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Trainers</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Lessons</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Shop</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Simulators</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Fitting</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Events</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Liability Waiver</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Terms</a></li>
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Gallery</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-16 pt-8 border-t border-gray-600">
          <p className="text-gray-300 text-sm">
            © 2025 Scratch Lab Golf. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Accessibility</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookies</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
