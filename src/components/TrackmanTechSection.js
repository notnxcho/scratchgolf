import SectionHeader from "./SectionHeader"
import TrackmanIOCard from "./grid/TrackmanIOCard"
import Ball from "./grid/Ball"

const TrackmanTechSection = () => {
    return (
        <div className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-[radial-gradient(farthest-side_at_top,#292929,#101012_50%)] bg-[length:300%_100%] md:bg-[length:100%_100%]">
            <SectionHeader 
                title="The ultimate indoor ball tracking system" 
                description="Trackman devices provide the most precise swing tracking and physics simulation, guaranteeing an immersive game"
                theme="dark"
            />

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full px-3 max-w-[924px]">
                <div className="w-full md:flex-1">
                    <TrackmanIOCard />
                </div>
                <div className="w-full md:w-[550px]">
                    <Ball className="!h-[340px] md:!h-[480px] !w-full md:!w-[550px] !min-w-0" />
                </div>
            </div>
        </div>
    )
}

export default TrackmanTechSection

