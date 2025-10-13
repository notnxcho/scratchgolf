import { useEffect, useState, useRef } from 'react'

const useScrollAnimation = (startOffset = 80, endOffset = 80, animationDistance = 400) => {
  const [translateX, setTranslateX] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const element = ref.current
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate when animation should start and end
      const animationStart = windowHeight + startOffset
      const animationEnd = -endOffset
      
      // Calculate progress (0 to 1)
      let progress = 0
      if (rect.top <= animationStart && rect.bottom >= animationEnd) {
        // Element is in the animation range
        const totalRange = animationStart - animationEnd
        const currentPosition = animationStart - rect.top
        progress = Math.max(0, Math.min(1, currentPosition / totalRange))
      } else if (rect.top > animationStart) {
        // Element hasn't entered animation range yet
        progress = 0
      } else if (rect.bottom < animationEnd) {
        // Element has left animation range
        progress = 1
      }
      
      // Calculate translateX value
      const translateValue = progress * animationDistance
      setTranslateX(translateValue)
    }

    // Initial calculation
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [startOffset, endOffset, animationDistance])

  return [ref, translateX]
}

export default useScrollAnimation
