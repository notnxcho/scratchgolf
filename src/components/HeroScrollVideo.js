import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import HeroPill from './HeroPill'
import Button from './Button'
import ArrowDiagonal from './icons/ArrowDiagonal'
import HeroBall from '../assets/heroball.png'
import HeroClub from '../assets/heroclub.png'
import swingVideo from '../assets/swing_optimized.mp4'

gsap.registerPlugin(ScrollTrigger)

const HeroScrollVideo = () => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const videoContainerRef = useRef(null)
  const textContentRef = useRef(null)

  // Helper function to add event listener once
  const once = (el, event, fn, opts) => {
    const onceFn = (e) => {
      el.removeEventListener(event, onceFn)
      fn(e)
    }
    el.addEventListener(event, onceFn, opts)
    return onceFn
  }

  // iOS video activation
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    once(document.documentElement, 'touchstart', () => {
      video.play()
      video.pause()
    })
  }, [])

  // GSAP ScrollTrigger setup
  useGSAP(() => {
    const video = videoRef.current
    const container = containerRef.current
    const videoContainer = videoContainerRef.current

    if (!video || !container || !videoContainer) return

    let tl = null
    let growTl = null

    const handleLoadedMetadata = () => {
      // Video scrubbing timeline
      tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })

      tl.fromTo(
        video,
        {
          currentTime: 0
        },
        {
          currentTime: video.duration || 1
        }
      )

      // Video container growth animation
      growTl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: container,
          start: 'top bottom', // Starts earlier: when top of container hits bottom of viewport
          end: 'bottom bottom',
          scrub: true
        }
      })

      growTl.fromTo(
        videoContainer,
        {
          top: '15vh',
          width: '80%',
          height: '70vh',
          borderRadius: '32px',
          maxWidth: '90%'
        },
        {
          top: '0',
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          maxWidth: '100vw',
          ease: 'power2.inOut'
        }
      )
    }

    // Wait for video metadata to load
    let metadataHandler = null

    const handleLoadedMetadataWrapper = () => {
      handleLoadedMetadata()
      metadataHandler = handleLoadedMetadataWrapper
    }

    if (video.readyState >= 1) {
      // Metadata already loaded
      handleLoadedMetadata()
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadataWrapper)
      metadataHandler = handleLoadedMetadataWrapper
    }

    // Blob URL trick for better loading (from original code)
    setTimeout(() => {
      if (window.fetch && video.currentSrc) {
        fetch(video.currentSrc)
          .then((response) => response.blob())
          .then((response) => {
            const blobURL = URL.createObjectURL(response)
            const t = video.currentTime

            // Reactivate iOS video
            once(document.documentElement, 'touchstart', () => {
              video.play()
              video.pause()
            })

            video.setAttribute('src', blobURL)
            video.currentTime = t + 0.01
          })
          .catch((error) => {
            console.warn('Blob URL fetch failed:', error)
          })
      }
    }, 1000)

    // Cleanup
    return () => {
      if (tl) {
        tl.kill()
      }
      if (growTl) {
        growTl.kill()
      }
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) {
          st.kill()
        }
      })
      if (metadataHandler) {
        video.removeEventListener('loadedmetadata', metadataHandler)
      }
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} id="container" className="relative w-screen h-[500vh] bg-[#f8f8f8] flex flex-col items-center">
      {/* Text Content */}
      <div ref={textContentRef} className="relative z-30 flex flex-col items-center justify-center gap-4 w-full pt-[15vh] pb-[10vh]">
        <h1 className="text-[16px] lg:text-[20px] font-semibold text-highlight-green">Indoor Golf Simulator</h1>
        <div className="text-[32px] lg:text-[44px] 2xl:text-[64px] font-bold text-deep-black">
          <div className="w-full flex justify-center items-center tracking-tight leading-[130%]">CREATING THE </div>
          <div className="w-full flex justify-center items-center tracking-tight leading-[130%]">
            FORMULA <HeroPill><img src={HeroBall} alt="golf ball in swing support" className="h-full" /></HeroPill> FOR
          </div>
          <div className="w-full flex justify-center items-center tracking-tight leading-[130%]">
            A <HeroPill><img src={HeroClub} alt="golf club head" className="h-full" /></HeroPill> BETTER GAME
          </div>
        </div>
        <div className="px-4 pt-3 pb-4 text-[14px] lg:text-[16px] 2xl:text-[20px] max-w-[520px] text-center text-deep-black/70 leading-[150%]">
          We bring the same technology, instruction, training, and equipment that the pros use – to everyone. 24/7.
        </div>
        <Button icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} href="/book/reservation">RESERVE NOW</Button>
      </div>

      {/* Video Container - starts as rounded white rectangle, grows to full screen */}
      <div
        ref={videoContainerRef}
        className="sticky top-[15vh] w-[80%] h-[70vh] max-w-[90%] rounded-[32px] bg-white overflow-hidden"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}
      >
        <video
          ref={videoRef}
          className="video-background w-full h-full object-cover"
          playsInline
          muted
          preload="auto"
        >
          <source src={swingVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default HeroScrollVideo
