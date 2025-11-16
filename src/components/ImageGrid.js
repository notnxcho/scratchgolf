import { useState, useEffect, useRef } from 'react'
import venue1 from '../assets/venue1.jpeg'
import venue2 from '../assets/venue2.jpeg'
import venue3 from '../assets/venue3.jpeg'
import venue4 from '../assets/venue4.jpeg'
import venue5 from '../assets/venue5.jpeg'
import venue6 from '../assets/venue6.jpeg'

const ImageGrid = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [overlayIndex, setOverlayIndex] = useState(0)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)
    
    const images = [venue1, venue2, venue3, venue4, venue5, venue6]
    
    const handleImageClick = (index) => {
        setOverlayIndex(index)
        setIsOverlayOpen(true)
    }
    
    // Navigation functions
    const goToPrevious = () => {
        setOverlayIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    
    const goToNext = () => {
        setOverlayIndex((prev) => (prev + 1) % images.length)
    }
    
    const closeOverlay = () => {
        setIsOverlayOpen(false)
    }
    
    // Keyboard event handler and body scroll lock
    useEffect(() => {
        if (!isOverlayOpen) return
        
        // Lock body scroll
        document.body.style.overflow = 'hidden'
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOverlayOpen(false)
            } else if (e.key === 'ArrowLeft') {
                setOverlayIndex((prev) => (prev - 1 + images.length) % images.length)
            } else if (e.key === 'ArrowRight') {
                setOverlayIndex((prev) => (prev + 1) % images.length)
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOverlayOpen, images.length])
    
    // Touch handlers for swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }
    
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }
    
    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return
        
        const diff = touchStartX.current - touchEndX.current
        const minSwipeDistance = 50 // Minimum distance for a swipe
        
        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                // Swiped left - next image
                goToNext()
            } else {
                // Swiped right - previous image
                goToPrevious()
            }
        }
        
        // Reset
        touchStartX.current = 0
        touchEndX.current = 0
    }
    
    // Handle background click to close
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeOverlay()
        }
    }
    
    return (
        <>
            <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                                onClick={() => handleImageClick(index)}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {isOverlayOpen && (
                <div 
                    className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
                    onClick={handleOverlayClick}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            closeOverlay()
                        }}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center p-2 rounded-full hover:bg-white hover:bg-opacity-10"
                        aria-label="Close"
                    >
                        ✕
                    </button>
                    
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToPrevious()
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors min-w-[64px] min-h-[64px] flex items-center justify-center p-4 rounded-full hover:bg-white hover:bg-opacity-10"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>
                    
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            goToNext()
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors min-w-[64px] min-h-[64px] flex items-center justify-center p-4 rounded-full hover:bg-white hover:bg-opacity-10"
                        aria-label="Next image"
                    >
                        ›
                    </button>
                    
                    <img
                        src={images[overlayIndex]}
                        alt={`Venue ${overlayIndex + 1}`}
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg select-none"
                        draggable={false}
                        onClick={(e) => e.stopPropagation()}
                    />
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        {overlayIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    )
}

export default ImageGrid

