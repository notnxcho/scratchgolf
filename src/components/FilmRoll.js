import { useState, useRef, useEffect } from 'react'
import venue1 from '../assets/venue1.jpeg'
import venue2 from '../assets/venue2.jpeg'

const FilmRoll = () => {
    const [scrollTranslateX, setScrollTranslateX] = useState(0)
    const [dragTranslateX, setDragTranslateX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [startDragTranslateX, setStartDragTranslateX] = useState(0)
    const [hasDragged, setHasDragged] = useState(false)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)
    const [overlayIndex, setOverlayIndex] = useState(0)
    
    const containerRef = useRef(null)
    const originalImages = [venue1, venue2]
    
    // Create infinite loop with duplicates
    const images = [...originalImages, ...originalImages, ...originalImages, ...originalImages]
    const singleSetWidth = 600 + 16 // 600px width + 16px gap
    
    // Simple scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (!rect) return
            
            // Calculate scroll progress based on element position
            const elementTop = rect.top
            const elementHeight = rect.height
            const windowHeight = window.innerHeight
            
            // Start animation when element enters viewport
            const animationStart = windowHeight
            const animationEnd = -elementHeight
            
            // Calculate progress (0 to 1)
            const progress = Math.max(0, Math.min(1, (animationStart - elementTop) / (animationStart - animationEnd)))
            
            // Apply scroll translation
            setScrollTranslateX(progress * 400)
        }
        
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll, { passive: true })
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])
    
    // Drag handlers
    const handleStart = (clientX) => {
        setIsDragging(true)
        setStartX(clientX)
        setStartDragTranslateX(dragTranslateX)
        setHasDragged(false)
    }
    
    const handleMove = (clientX) => {
        if (!isDragging) return
        const deltaX = clientX - startX
        setDragTranslateX(startDragTranslateX + deltaX)
        
        // Check if dragged more than 40px
        if (Math.abs(deltaX) > 40) {
            setHasDragged(true)
        }
    }
    
    const handleEnd = () => {
        setIsDragging(false)
        // Reset hasDragged after a short delay to prevent click events
        setTimeout(() => {
            setHasDragged(false)
        }, 100)
    }
    
    // Infinite scroll logic
    useEffect(() => {
        const totalTranslateX = scrollTranslateX + dragTranslateX
        
        // Reset to beginning when we've scrolled past the first set
        if (totalTranslateX > singleSetWidth) {
            setDragTranslateX(prev => prev - singleSetWidth)
        }
        // Reset to end when we've scrolled past the last set
        else if (totalTranslateX < -singleSetWidth) {
            setDragTranslateX(prev => prev + singleSetWidth)
        }
    }, [scrollTranslateX, dragTranslateX, singleSetWidth])
    
    // Mouse events
    const onMouseDown = (e) => {
        e.preventDefault()
        handleStart(e.clientX)
    }
    
    const onMouseMove = (e) => {
        handleMove(e.clientX)
    }
    
    const onMouseUp = () => {
        handleEnd()
    }
    
    // Touch events
    const onTouchStart = (e) => {
        handleStart(e.touches[0].clientX)
    }
    
    const onTouchMove = (e) => {
        handleMove(e.touches[0].clientX)
    }
    
    const onTouchEnd = () => {
        handleEnd()
    }
    
    // Global mouse events
    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', onMouseMove)
            document.addEventListener('mouseup', onMouseUp)
            return () => {
                document.removeEventListener('mousemove', onMouseMove)
                document.removeEventListener('mouseup', onMouseUp)
            }
        }
    }, [isDragging, startX, startDragTranslateX])
    
    // Image click
    const handleImageClick = (index) => {
        if (isDragging || hasDragged) return
        setOverlayIndex(index % originalImages.length)
        setIsOverlayOpen(true)
    }
    
    return (
        <>
            <div ref={containerRef} className="flex items-center justify-center gap-4 overflow-hidden w-screen flex-grow flex-shrink-0">
                <div 
                    className="flex items-center gap-4"
                    style={{ 
                        transform: `translateX(${scrollTranslateX + dragTranslateX}px)`,
                        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                    }}
                    onMouseDown={onMouseDown}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="min-w-[600px] w-[600px] h-[400px] rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat flex-shrink-0 cursor-pointer"
                            style={{ backgroundImage: `url(${image})` }}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
            
            {/* Simple overlay */}
            {isOverlayOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
                    <button
                        onClick={() => setIsOverlayOpen(false)}
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                    >
                        ✕
                    </button>
                    
                    <button
                        onClick={() => setOverlayIndex((prev) => (prev - 1 + originalImages.length) % originalImages.length)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ‹
                    </button>
                    
                    <button
                        onClick={() => setOverlayIndex((prev) => (prev + 1) % originalImages.length)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                    >
                        ›
                    </button>
                    
                    <img
                        src={originalImages[overlayIndex]}
                        alt="Venue"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                    />
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        {overlayIndex + 1} / {originalImages.length}
                    </div>
                </div>
            )}
        </>
    )
}

export default FilmRoll