import React from 'react'
import HeroPill from './HeroPill'
import Button from './Button'
import ArrowDiagonal from './icons/ArrowDiagonal'
import HeroBall from '../assets/heroball.png'
import HeroClub from '../assets/heroclub.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-screen h-[calc(100vh-60px)] 2xl:h-[calc(100vh-80px)]'>
      <h1 className='text-[16px] lg:text-[20px] font-semibold text-highlight-green'>Indoor Golf Simulator</h1>
      <div className='text-[32px] lg:text-[44px] xl:text-[64px] font-bold text-deep-black'>
        <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>CREATING THE </div>
        <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>FORMULA <HeroPill><img src={HeroBall} alt="golf ball in swing support" className='h-full' /></HeroPill> FOR</div>
        <div className='w-full flex justify-center items-center tracking-tight leading-[130%]'>A <HeroPill><img src={HeroClub} alt="golf club head" className='h-full' /></HeroPill> BETTER GAME</div>
      </div>
      <div className="px-4 pt-3 pb-4 text-[16px] lg:text-[20px] max-w-[560px] text-center text-deep-black/70 text-deep-black leading-[150%]">
        We bring the same technology, instruction, training, and equipment that the pros use – to everyone. 24/7.
      </div>
      <Button icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />}>RESERVE NOW</Button>
    </div>
  )
}

export default Hero
