import React from 'react'
import HeroPill from './HeroPill'
import Button from './Button'
import ArrowDiagonal from './icons/ArrowDiagonal'
import HeroBall from '../assets/heroball.png'
import HeroClub from '../assets/heroclub.png'
import heroVideo from '../assets/hero.mp4'
import trackmanLogo from '../assets/trackmanlogo.png'

const HeroBackgroundVideo = () => {
  return (
    <div className='relative w-screen h-[calc(100vh-80px)] md:h-[calc(100vh-20px)] 2xl:h-[calc(100vh-40px)] flex flex-col items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <video
        className='absolute inset-0 w-full h-full object-cover'
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Radial Gradient Overlay */}
      <div 
        className='absolute inset-0'
        style={{
          background: 'radial-gradient(farthest-side at top, rgba(13, 26, 23, 0.1), rgba(0, 26, 20, 0.7))'
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center gap-4 px-4'>
        <h1 className='text-[14px] lg:text-[16px] font-semibold text-white/80 uppercase'>Indoor Golf Simulators</h1>
        <div className='text-[32px] lg:text-[44px] 2xl:text-[64px] font-bold text-white'>
          <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>CREATING THE </div>
          <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>FORMULA <HeroPill variant="dark"><img src={HeroBall} alt="golf ball in swing support" className='h-full' /></HeroPill> FOR</div>
          <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>A <HeroPill variant="dark"><img src={HeroClub} alt="golf club head" className='h-full' /></HeroPill> BETTER GAME</div>
        </div>
        <div className="px-4 pt-3 pb-4 text-[14px] lg:text-[16px] 2xl:text-[20px] max-w-[520px] text-center text-white leading-[150%]">
          We bring the same technology, instruction, training, and equipment that the pros use - to everyone. 24/7.
        </div>
        <Button 
          variant="transparent" 
          icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} 
          href="/book/reservation"
        >
          RESERVE NOW
        </Button>
        
        {/* Powered By Section */}
        <div className='flex flex-col items-center gap-2 mt-4'>
          <p className='text-white text-sm'>powered by</p>
          <img src={trackmanLogo} alt="Trackman" className='h-[14px] w-auto' />
        </div>
      </div>
    </div>
  )
}

export default HeroBackgroundVideo

