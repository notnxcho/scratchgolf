// import SectionHeader from "./SectionHeader"
import Trackman from "../assets/trackman.png"
import Button from "./Button"
import ArrowDiagonal from "./icons/ArrowDiagonal"

const ScrollSection = () => {
    return (
        <div className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-[#1c1c1c]">
            {/* <SectionHeader title="Scroll Section" description="Scroll Section" theme="dark" /> */}
            
            {/* Two column layout */}
            <div className="w-full max-w-[1080px] px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
                {/* Left column - Trackman image */}
                <div className="flex flex-col items-center -mb-12 lg:mb-0">
                    <img 
                        src={Trackman} 
                        alt="Golf Course" 
                        className="w-full h-auto lg:h-[600px] max-h-screen object-contain max-w-lg sticky top-24"
                    />
                </div>
                
                {/* Right column - Three sticky divs */}
                <div className="flex flex-col">
                    <div className="h-[600px] max-h-screen sticky top-24 p-8 flex flex-col justify-center" style={{background: 'linear-gradient(180deg, #1c1c1c00 0%, #1c1c1cff 20%, #1c1c1cff 80%, #1c1c1c00 100%)'}}>
                        <div className="text-[24px] lg:text-[32px] font-bold text-white mb-4">Unparalleled Technology, For Everyone</div>
                        <p className="text-white/70 text-[16px] lg:text-[20px] leading-[150%] mb-8">Experience the same state-of-the-art technology that the pros use. Practice, play 400+ virtual courses, and get multimodal metrics from spin to impact to launch angles, on every single shot.</p>
                        <Button icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} href="/book/reservation">RESERVE NOW</Button>
                    </div>
                    
                    <div className="h-[600px] max-h-screen sticky top-24 p-8 flex flex-col justify-center" style={{background: 'linear-gradient(180deg, #1c1c1c00 0%, #1c1c1cff 20%, #1c1c1cff 80%, #1c1c1c00 100%)'}}>
                        <div className="text-[24px] lg:text-[32px] font-bold text-white mb-4">Trackman Bay Sessions</div>
                        <p className="text-white/70 text-[16px] lg:text-[20px] leading-[150%] mb-8">Play 400+ top courses or practice with advanced ball tracking in a private, climate-controlled bay. Hourly rentals available.</p>
                        <Button icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} href="/book/reservation">RESERVE NOW</Button>
                    </div>
                    
                    <div className="h-[600px] max-h-screen sticky top-24 p-8 flex flex-col justify-center" style={{background: 'linear-gradient(180deg, #1c1c1c00 0%, #1c1c1cff 20%, #1c1c1cff 80%, #1c1c1c00 100%)'}}>
                        <div className="text-[24px] lg:text-[32px] font-bold text-white mb-4">Golf Fitness & Instruction</div>
                        <p className="text-white/70 text-[16px] lg:text-[20px] leading-[150%] mb-8">Train with certified pros to improve your swing, strength, and flexibility. Personalized programs for all ages and skill levels.</p>
                        <Button icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />} href="/book/reservation">RESERVE NOW</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollSection