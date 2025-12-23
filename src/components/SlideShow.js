import React, { useState, useEffect } from 'react'

const SlideShow = ({ slides = [], delay = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (slides.length === 0) return

    let interval = null
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, 3000)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [slides.length, delay])

  if (slides.length === 0) {
    return null
  }

  return (
    <div className="relative w-[calc(50vw-18px)] h-[calc((50vw-18px)*1.24)] md:w-[290px] md:h-[360px] bg-black overflow-hidden rounded-[12px]">
      {slides.map((slide, index) => {
        const offset = index - currentIndex
        return (
          <div
            key={index}
            className="absolute inset-0 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(${offset * 100}%)`,
            }}
          >
            {slide}
          </div>
        )
      })}
    </div>
  )
}

export default SlideShow

