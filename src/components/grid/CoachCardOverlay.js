import { useState, useEffect, useRef } from 'react'
import Button from '../Button'

const CoachCardOverlay = ({ coach, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Reset to first image when overlay opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0)
    }
  }, [isOpen])

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!isOpen) return

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, coach?.images?.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + coach.images.length) % coach.images.length
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % coach.images.length
    )
  }

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !coach) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center overflow-y-auto"
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center p-2 rounded-full hover:bg-white hover:bg-opacity-10 z-10"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Content Container */}
      <div
        className="w-full max-w-6xl mx-4 my-8 bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image Carousel Section */}
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] bg-black">
            <img
              src={coach.images[currentImageIndex]}
              alt={`${coach.name}`}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Navigation Arrows */}
            {coach.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevious()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center p-2 rounded-full hover:bg-white hover:bg-opacity-20 bg-black bg-opacity-30"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNext()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center p-2 rounded-full hover:bg-white hover:bg-opacity-20 bg-black bg-opacity-30"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Image Counter */}
            {coach.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {coach.images.length}
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="w-full p-6 lg:p-8 overflow-y-auto max-h-[600px] relative">
                <div className="mb-6">
                <h2 className="text-[24px] lg:text-[32px] font-bold text-deep-black mb-2">
                    {coach.name}
                </h2>
                <p className="text-[14px] lg:text-[16px] text-deep-black/60 uppercase tracking-wide mb-4">
                    {coach.title}
                </p>
                <p className="text-[28px] lg:text-[36px] font-bold text-primary-green mb-6">
                    {coach.price}
                </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                    <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-1">
                    Teaches
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-deep-black">
                    {coach.teaches.join(', ')}
                    </p>
                </div>
                <div>
                    <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-1">
                    Levels
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-deep-black">
                    {coach.levels.join(', ')}
                    </p>
                </div>
                <div>
                    <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-1">
                    Years Playing
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-deep-black">
                    {coach.yearsPlaying}
                    </p>
                </div>
                <div>
                    <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-1">
                    Lessons Given
                    </p>
                    <p className="text-[14px] lg:text-[16px] text-deep-black">
                    {coach.lessonsGiven}
                    </p>
                </div>
                </div>

                {/* Qualification */}
                <div className="mb-6">
                <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-2">
                    Qualification
                </p>
                <p className="text-[14px] lg:text-[16px] text-deep-black">
                    {coach.qualification}
                </p>
                </div>

                {/* Description */}
                <div className="mb-6">
                <p className="text-[12px] text-deep-black/50 uppercase tracking-wide mb-2">
                    About
                </p>
                <p className="text-[14px] lg:text-[16px] text-deep-black/80 leading-relaxed">
                    {coach.description}
                </p>
                </div>
            </div>
            <div className="flex w-full p-6 lg:p-8 bg-white z-10 ">
                <Button
                onClick={() => {
                    // Navigate to booking page with coach ID
                    window.location.href = `/reserve?coach=${coach.id}`
                }}
                className="w-full justify-center"
                >
                Book a Lesson
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachCardOverlay

