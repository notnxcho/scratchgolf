import SectionHeader from "./SectionHeader"
import TrackmanIOCard from "./grid/TrackmanIOCard"
import Ball from "./grid/Ball"
import useFadeInAnimation from "../hooks/useFadeInAnimation"
import SlideShow from "./SlideShow"
import metricSwingDirection from "../assets/metric-swingdirection.png"
import metricClubSpeed from "../assets/metric-clubspeed.png"
import metricLaunchAngle from "../assets/metric-launchangle.png"
import metricFaceToPath from "../assets/metric-facetopath.png"
import metricCarry from "../assets/metric-carry.png"
import metricSmashFactor from "../assets/metric-smashfactor.png"

const TrackmanTechSection = () => {
    const [contentRef, isContentVisible] = useFadeInAnimation()

    return (
        <div className="w-screen flex flex-col items-center gap-8 lg:gap-16 pt-12 lg:pt-[120px] bg-[radial-gradient(farthest-side_at_top,#292929,#101012_50%)] bg-[length:300%_100%] md:bg-[length:100%_100%]">
            <SectionHeader 
                title="The ultimate indoor ball tracking system" 
                description="Trackman devices provide the most precise swing tracking and physics simulation, guaranteeing an immersive game"
                theme="dark"
            />

            <div 
                ref={contentRef}
                className="flex flex-col md:flex-row items-center justify-center gap-3 w-full px-3 max-w-[924px] transition-all duration-500 ease-out"
                style={{
                    opacity: isContentVisible ? 1 : 0,
                    transform: isContentVisible ? 'translateY(0)' : 'translateY(90px)'
                }}
            >
                <div className="w-full md:flex-1">
                    <TrackmanIOCard />
                </div>
                <div className="w-full md:w-[550px]">
                    <Ball className="!h-[340px] md:!h-[480px] !w-full md:!w-[550px] !min-w-0" />
                </div>
            </div>
            <SectionHeader
                className="mt-[64px]"
                title="Key Metrics to improve your game" 
                description="Tracking more than 20 metrics on every shot, you can see exactly what you need to improve"
                theme="dark"
            />
            <div 
                className="flex flex-col md:flex-row items-center justify-center gap-3 w-full px-3 max-w-[924px] transition-all duration-500 ease-out"
                style={{
                    opacity: isContentVisible ? 1 : 0,
                    transform: isContentVisible ? 'translateY(0)' : 'translateY(90px)'
                }}
            >
                {/* Mobile: 2 SlideShows with 3 slides each, side by side */}
                <div className="flex flex-row gap-3 w-full md:hidden">
                    <div className="flex-1">
                        <SlideShow 
                            delay={0}
                            slides={[
                                <img src={metricSwingDirection} alt="Swing Direction" className="w-full h-full object-cover" />,
                                <img src={metricClubSpeed} alt="Club Speed" className="w-full h-full object-cover" />,
                                <img src={metricLaunchAngle} alt="Launch Angle" className="w-full h-full object-cover" />
                            ]} 
                        />
                    </div>
                    <div className="flex-1">
                        <SlideShow 
                            delay={0.2}
                            slides={[
                                <img src={metricFaceToPath} alt="Face to Path" className="w-full h-full object-cover" />,
                                <img src={metricCarry} alt="Carry" className="w-full h-full object-cover" />,
                                <img src={metricSmashFactor} alt="Smash Factor" className="w-full h-full object-cover" />
                            ]} 
                        />
                    </div>
                </div>
                
                {/* Desktop: 3 SlideShows with 2 slides each */}
                <div className="hidden md:flex md:flex-row gap-3">
                    <SlideShow 
                        delay={0}
                        slides={[
                            <img src={metricSwingDirection} alt="Swing Direction" className="w-full h-full object-cover" />,
                            <img src={metricClubSpeed} alt="Club Speed" className="w-full h-full object-cover" />
                        ]} 
                    />
                    <SlideShow 
                        delay={0.2}
                        slides={[
                            <img src={metricLaunchAngle} alt="Launch Angle" className="w-full h-full object-cover" />,
                            <img src={metricFaceToPath} alt="Face to Path" className="w-full h-full object-cover" />
                        ]} 
                    />
                    <SlideShow 
                        delay={0.4}
                        slides={[
                            <img src={metricCarry} alt="Carry" className="w-full h-full object-cover" />,
                            <img src={metricSmashFactor} alt="Smash Factor" className="w-full h-full object-cover" />
                        ]} 
                    />
                </div>
            </div>
        </div>
    )
}

export default TrackmanTechSection

