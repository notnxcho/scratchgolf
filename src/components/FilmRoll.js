import React, { useMemo, useEffect, useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import venue1 from '../assets/venue1.jpeg'
import venue2 from '../assets/venue2.jpeg'

const VenueImage = React.memo(({ image, index, onClick }) => (
    <div 
        className="min-w-[600px] w-[600px] h-[400px] rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat flex-shrink-0 cursor-pointer transition-transform duration-200"
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => onClick(index)}
    />
))

const ImageOverlay = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return
            
            if (e.key === 'Escape') {
                onClose()
            } else if (e.key === 'ArrowLeft') {
                onNavigate('prev')
            } else if (e.key === 'ArrowRight') {
                onNavigate('next')
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden' // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose, onNavigate])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors z-10"
            >
                ✕
            </button>

            {/* Navigation buttons */}
            <button
                onClick={() => onNavigate('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            >
                ‹
            </button>
            <button
                onClick={() => onNavigate('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            >
                ›
            </button>

            {/* Main image */}
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`Venue ${currentIndex + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    )
}

const FilmRoll = () => {
    const [containerRef, scrollTranslateX] = useScrollAnimation(0, 400, 400)
    const [infiniteTranslateX, setInfiniteTranslateX] = useState(0)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [overlayImageIndex, setOverlayImageIndex] = useState(0)
    
    // Drag/swipe state
    const [isDragging, setIsDragging] = useState(false)
    const [dragStartX, setDragStartX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [manualTranslateX, setManualTranslateX] = useState(0)
    const [hasDragged, setHasDragged] = useState(false)
    
    // Original venues array
    const originalVenues = useMemo(() => [venue1, venue2], [])
    
    // Create infinite loop by duplicating venues multiple times
    const infiniteVenues = useMemo(() => {
        const duplicates = 6 // Number of times to duplicate the original array
        return Array(duplicates).fill(originalVenues).flat()
    }, [originalVenues])
    
    // Calculate the width of one complete set of venues
    const singleSetWidth = useMemo(() => {
        const imageWidth = 600 // w-[600px]
        const gap = 16 // gap-4 = 1rem = 16px
        return (imageWidth + gap) * originalVenues.length
    }, [originalVenues.length])
    
    useEffect(() => {
        // Create infinite loop effect
        const updateInfinitePosition = () => {
            setInfiniteTranslateX(prev => {
                const newPosition = prev - 0.5 // Adjust speed here (pixels per frame)
                
                // Reset position when we've moved one complete set width
                if (Math.abs(newPosition) >= singleSetWidth) {
                    return 0
                }
                
                return newPosition
            })
        }
        
        // Use requestAnimationFrame for smooth animation
        let animationId
        const animate = () => {
            updateInfinitePosition()
            animationId = requestAnimationFrame(animate)
        }
        
        animationId = requestAnimationFrame(animate)
        
        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId)
            }
        }
    }, [singleSetWidth])
    
    // Drag/swipe event handlers
    const handleDragStart = (clientX) => {
        setIsDragging(true)
        setDragStartX(clientX)
        setDragOffset(0)
        setHasDragged(false)
    }

    const handleDragMove = (clientX) => {
        if (!isDragging) return
        const offset = clientX - dragStartX
        setDragOffset(offset)
        
        // Mark as dragged if movement is significant
        if (Math.abs(offset) > 20) {
            setHasDragged(true)
        }
    }

    const handleDragEnd = () => {
        if (!isDragging) return
        
        // Apply the drag offset to manual translation
        setManualTranslateX(prev => prev + dragOffset)
        
        // Reset drag state after a short delay to prevent click events
        setTimeout(() => {
            setIsDragging(false)
            setDragOffset(0)
            setHasDragged(false)
        }, 100)
    }

    // Mouse event handlers
    const handleMouseDown = (e) => {
        e.preventDefault()
        handleDragStart(e.clientX)
    }

    const handleMouseMove = (e) => {
        handleDragMove(e.clientX)
    }

    const handleMouseUp = () => {
        handleDragEnd()
    }

    // Touch event handlers
    const handleTouchStart = (e) => {
        handleDragStart(e.touches[0].clientX)
    }

    const handleTouchMove = (e) => {
        handleDragMove(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        handleDragEnd()
    }

    // Add global mouse events when dragging
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            return () => {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging, dragStartX])

    // Combine all translations: scroll + infinite + manual drag
    const totalTranslateX = scrollTranslateX + infiniteTranslateX + manualTranslateX + dragOffset
    
    // Handle image click (prevent when dragging)
    const handleImageClick = (clickedIndex) => {
        // Don't open overlay if we were dragging or have dragged
        if (isDragging || hasDragged || Math.abs(dragOffset) > 20) return
        
        // Convert infinite array index to original array index
        const originalIndex = clickedIndex % originalVenues.length
        setOverlayImageIndex(originalIndex)
        setIsOverlayOpen(true)
    }
    
    // Handle overlay navigation
    const handleOverlayNavigate = (direction) => {
        if (direction === 'next') {
            setOverlayImageIndex((prev) => (prev + 1) % originalVenues.length)
        } else if (direction === 'prev') {
            setOverlayImageIndex((prev) => (prev - 1 + originalVenues.length) % originalVenues.length)
        }
    }
    
    // Close overlay
    const handleCloseOverlay = () => {
        setIsOverlayOpen(false)
    }
    
    return (
        <>
            <div 
                ref={containerRef}
                className="flex items-center justify-center gap-4 overflow-hidden w-screen flex-grow flex-shrink-0"
            >
                <div 
                    className={`flex items-center gap-4 ${isDragging ? '' : 'transition-transform duration-75 ease-out'}`}
                    style={{ transform: `translateX(${totalTranslateX}px)` }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {infiniteVenues.map((venue, index) => (
                        <VenueImage 
                            key={`${venue}-${index}`} 
                            image={venue} 
                            index={index}
                            onClick={handleImageClick}
                        />
                    ))}
                </div>
            </div>
            
            <ImageOverlay
                isOpen={isOverlayOpen}
                onClose={handleCloseOverlay}
                images={originalVenues}
                currentIndex={overlayImageIndex}
                onNavigate={handleOverlayNavigate}
            />
        </>
    )
}

export default FilmRoll