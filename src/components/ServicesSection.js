import SectionHeader from "./SectionHeader"
import Card from "./grid/Card"

const ServicesSection = () => {
    return (
        <div id="services" className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-white">
            <SectionHeader 
                title="More than just a golf simulator" 
                description="We offer a wide range of services to help you improve your golf game." 
            />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1080px] w-full px-3">
            <Card 
                title="PGA Professional grade personalized coaching" 
                description="One-on-one coaching with certified golf professionals to elevate your skills."
                className={"h-[260px] md:h-[360px] lg:h-[450px] bg-[#F8F8F8]"}
            />
            <Card 
                title="Top-notch golf simulators" 
                description="Practice your swing and play full courses with the best simulators in the industry."
                className={"h-[260px] md:h-[360px] lg:h-[450px] bg-[#F8F8F8]"}
            />
            <Card 
                title="Fitness & Training" 
                description="Physical training and fitness programs specifically designed to help you improve your golfing skills."
                className={"h-[260px] md:h-[360px] lg:h-[450px] bg-[#F8F8F8]"}
            />
            <Card 
                title="Limited Edition Merchandise" 
                description="From brands like Scotty Cameron, Malbon, Bettinardi, and more"
                className={"h-[260px] md:h-[360px] lg:h-[450px] bg-[#F8F8F8]"}
            />
        </div>
        </div>
    )
}

export default ServicesSection