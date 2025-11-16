import SectionHeader from "./SectionHeader"
import CourseAlt from "./gridAlt/CourseAlt"
import PricingCard from "./gridAlt/PricingCard"
import MapAlt from "./gridAlt/MapAlt"

const FeaturesSectionAlt = () => {
    return (
        <div
            id="about"
            className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-gradient-to-b from-[#fff] to-[#f2f2f2]"
        >
            <SectionHeader 
                title="Golf around the clock and on demand" 
                description="Experience premium simulator, gear and training in one single exclusive studio." 
            />

            <div className="flex flex-col items-center justify-center gap-3 w-full px-3 w-full md:max-w-[600px] lg:max-w-[1080px]">
                <div className="flex flex-col md:flex-row items-center justify-center w-full flex-wrap lg:flex-nowrap gap-3">
                    <CourseAlt />
                    <PricingCard />
                    <MapAlt />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSectionAlt

