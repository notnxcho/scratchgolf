import { useState } from 'react'
import SectionHeader from "./SectionHeader"
import CoachCard from "./grid/CoachCard"
import CoachCardOverlay from "./grid/CoachCardOverlay"
import { coaches } from "../data/coaches.js"

const CoachesSection = () => {
    const [selectedCoach, setSelectedCoach] = useState(null)
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const handleCardClick = (coach) => {
        setSelectedCoach(coach)
        setIsOverlayOpen(true)
    }

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false)
        setSelectedCoach(null)
    }

    return (
        <>
            <div id="about" className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px]">
                <SectionHeader
                    title="Meet our coaches" 
                    description="We offer tailored lessons for players at every level and experience." 
                />
                <div className="w-full max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {coaches.map((coach) => (
                            <CoachCard
                                key={coach.id}
                                coach={coach}
                                onClick={() => handleCardClick(coach)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <CoachCardOverlay
                coach={selectedCoach}
                isOpen={isOverlayOpen}
                onClose={handleCloseOverlay}
            />
        </>
    )
}

export default CoachesSection