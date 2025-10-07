import SectionHeader from "./SectionHeader"
import Map from "./grid/Map"
import Ball from "./grid/Ball"
import Card from "./grid/Card"
import Course from "./grid/Course"

const FeaturesSection = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center gap-16 py-12 lg:py-[120px]">
            <SectionHeader 
                title="Redefined indoors for a Luxurious golf experience" 
                description="Experience premium simulator, gear and training in one single exclusive studio." 
            />

            <div className="flex flex-col items-center justify-center gap-4 w-screen px-3 lg:max-w-[800px] xl:max-w-[1080px]">
                <div className="flex items-center justify-center w-full flex-wrap gap-4">
                    <Map />
                    <div className="flex flex-row lg:flex-col items-center justify-center min-w-full lg:min-w-[200px] lg:w-[200px] gap-4 h-[200px] lg:h-[480px]">
                        <div className="flex flex-col items-center justify-center w-full h-[200px] min-h-[200px] bg-white rounded-[12px] bg-white">
                            <div className="flex flex-col items-center bg-gradient-to-b from-[#026262] to-[#96EFD1] bg-clip-text p-6">
                                <span className="text-transparent select-none text-[80px] font-bold mt-[-4px]">24</span>
                                <p className="text-[16px] lg:text-[20px] font-medium text-deep-black leading-[120%] text-center text-transparent select-none">Hours a day. 7 days a week.</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center h-full w-full flex-grow bg-white p-6 rounded-[12px]">
                            <p className="flex text-[24px] font-bold text-deep-black leading-[150%] min text-center">Don’t let time be an excuse</p>
                        </div>
                    </div>
                    <Ball />
                </div>
                <div className="flex items-center justify-center w-full flex-wrap xl:flex-nowrap gap-4">
                    <Card title={"Expert Golf Instruction"} description={"Train with certified professionals for skill improvement and fitness"} />
                    <div className="hidden xl:block">
                        <Course/>
                    </div>
                    <Card title={"Expert Golf Instruction"} description={"Train with certified professionals for skill improvement and fitness"} />
                    <div className="xl:hidden block">
                        <Course/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default FeaturesSection