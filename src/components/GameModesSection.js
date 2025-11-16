import SectionHeader from "./SectionHeader"
import GameModeCard from "./grid/GameModeCard"
import gamemodeCourse from '../assets/gamemode-course.png'
import gamemodePractice from '../assets/gamemode-practice.png'
import gamemodeGames from '../assets/gamemode-games.png'

const GameModesSection = () => {
    return (
        <div className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-white">
            <SectionHeader 
                title="Perfect for everyone" 
                description="We offer a wide range of services to help you improve your golf game." 
            />

            <div className="flex flex-col items-center justify-center gap-3 w-full px-3 w-full md:max-w-[600px] lg:max-w-[1080px]">
                <div className="flex flex-col md:flex-row items-center justify-center w-full flex-wrap lg:flex-nowrap gap-3">
                    <GameModeCard 
                        title="Play courses"
                        description="Play golf on some of the world's best and most iconic courses"
                        src={gamemodeCourse}
                    />
                    <GameModeCard 
                        title="Practice drills"
                        description="Work on any aspect of your game and get insightful reports"
                        src={gamemodePractice}
                    />
                    <GameModeCard 
                        title="Casual games"
                        description="Play alone or challenge your friends to earn bragging rights"
                        src={gamemodeGames}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameModesSection

