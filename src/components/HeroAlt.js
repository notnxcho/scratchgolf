import React from 'react'
import heroSimVideo from '../assets/herosimshort.mp4'
import Button from './Button'
import ArrowDiagonal from './icons/ArrowDiagonal'

const HeroAlt = () => {
  return (
    <div className='relative w-screen  h-[calc(100vh-80px)] md:h-screen 2xl:h-[calc(100vh-40px)] flex items-center bg-deep-black overflow-hidden'>
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
      <div 
        className='absolute inset-0 pointer-events-none z-0 sm:hidden'
        style={{
          background: 'linear-gradient(to top, rgba(27, 30, 28, 0.9), rgba(27, 30, 28, 0.7), transparent)'
        }}
      />
      <div 
        className='absolute inset-0 pointer-events-none z-0 hidden sm:block'
        style={{
          // background: 'radial-gradient(farthest-side at 50% 90%, rgba(27, 30, 28, 0.7), rgba(27, 30, 28, 0.5), transparent)',
          // backgroundSize: '200% 100%',
          // backgroundPosition: 'center'
          background: 'radial-gradient(circle at top, rgba(27, 30, 28, 0.4), transparent)'
        }}
      />
      {/* <div 
        className='absolute inset-0 pointer-events-none z-0'
        style={{
          background: 'linear-gradient(to bottom, rgba(15, 25, 23, 0.7), rgba(15, 25, 23, 0.5), transparent)'
        }}
      />
      <div 
        className='absolute inset-0 pointer-events-none z-0 hidden sm:block'
        style={{
          background: 'linear-gradient(to right, rgba(15, 25, 23, 0.9), rgba(15, 25, 23, 0.7), transparent)'
        }}
      /> */}


      {/* Left Side - Text Content */}
      <div className='text-center relative z-10 w-full h-full max-w-[1160px] mx-auto flex flex-col justify-end items-center pb-[48px] sm:pb-0 sm:justify-center px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 md:gap-8 max-w-2xl'>
          {/* Main Heading */}
          <h1 className='text-[48px] drop-shadow-lg md:text-[64px] lg:text-[80px] 2xl:text-[96px] font-bold text-white leading-[110%] tracking-tight'>
            <div>24/7 GOLF</div>
            <div>STUDIO</div>
          </h1>
          
          {/* Subtitle */}
          <p className='text-[18px] md:text-[20px] lg:text-[22px] text-white/90 max-w-[600px] leading-relaxed drop-shadow-lg'>
            Fully autonomous indoor golf simulator. Creating a formula for a better game.
          </p>
          
          {/* Buttons */}
          <div className='flex flex-col justify-center items-center sm:flex-row gap-4 mt-4'>
            <Button 
              icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} 
              href="/book/reservation"
              className='w-full sm:w-auto text-center sm:text-left !gap-0 sm:!gap-4 pl-[62px] sm:pl-5'
            >
              BOOK NOW
            </Button>
            <Button 
              variant="transparent"
              icon={null}
              href="/book/reservation"
              className='w-full sm:w-auto h-[62px] text-center sm:text-left'
            >
              LESSONS
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAlt

