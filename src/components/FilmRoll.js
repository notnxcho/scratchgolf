import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import venue1 from '../assets/venue1.jpeg'
import venue2 from '../assets/venue2.jpeg'

const FilmRoll = () => {
    const [containerRef, translateX] = useScrollAnimation(0, 400, 400)
    const venues = [venue1, venue2, venue1, venue2, venue1]
    const VenueImage = ({ image, index }) => (
        <div 
            key={index}
            className="min-w-[600px] w-[600px] h-[400px] rounded-[12px] overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
        />
    )
    return (
        <div 
            ref={containerRef}
            className="flex items-center justify-center gap-4 overflow-hidden w-screen flex-grow flex-shrink-0"
        >
            <div 
                className="flex items-center gap-4 transition-transform duration-75 ease-out"
                style={{ transform: `translateX(${translateX}px)` }}
            >
                {venues.map((venue, index) => (
                    <VenueImage key={index} image={venue} index={index} />
                ))}
            </div>
        </div>
    )
}

export default FilmRoll