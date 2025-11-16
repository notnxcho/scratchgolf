import React from 'react'
import heroSimVideo from '../assets/herosimshort.mp4'

const HeroAlt = () => {
  return (
    <div className='relative w-screen h-[calc(100vh-80px)] md:h-[calc(100vh-20px)] 2xl:h-[calc(100vh-40px)] flex items-center bg-deep-black overflow-hidden'>
      {/* Single Video Background */}
      <video
        className='absolute inset-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroSimVideo} type="video/mp4" />
      </video>

      {/* Gradient overlay for better text readability */}
      <div className='absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/70 to-transparent pointer-events-none z-0' />

      {/* Left Side - Text Content */}
      <div className='relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 h-full max-w-2xl'>
        <div className='flex flex-col gap-6 md:gap-8'>
          {/* Main Heading */}
          <h1 className='text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold text-white leading-[110%] tracking-tight'>
            <div>24/7 GOLF</div>
            <div>STUDIO</div>
          </h1>
          
          {/* Subtitle */}
          <p className='text-[18px] md:text-[20px] lg:text-[22px] text-white/90 max-w-[600px] leading-relaxed'>
            Fully autonomous indoor golf sim. Formula for a better game.
          </p>
          
          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-4'>
            <a
              href="/book/reservation"
              className='inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[18px] rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'
            >
              BOOK NOW
            </a>
            <a
              href="/book/reservation"
              className='inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-[18px] rounded-lg transition-all duration-200'
            >
              LESSONS
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAlt

