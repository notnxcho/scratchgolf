const Course = () => {
    return (
        <div
            className="flex flex-col lg:flex-row min-w-[300px] lg:h-[360px] rounded-[12px] flex-grow relative overflow-hidden bg-[#F2F2F2]"
            style={{
                boxShadow: '0px 0px 24px 8px rgba(255,255,255,0.8), inset 0px 0px 24px 0px rgba(0,0,0,0.06)'
            }}
        > 
            {/* Left Section - Text Content */}
            <div className="flex flex-col gap-3 basis-1/2 p-5 lg:p-8 pr-4 lg:pr-6">
                <h4 className="text-[24px] leading-[120%] font-bold text-deep-black">Play 400+ Courses</h4>
                <p className="text-[16px] lg:text-[20px] leading-[150%] text-deep-black/70 m-0">Choose from a virtually endless library of curated golf scenarios. Create a truly bespoke experience for your golfing needs.</p>
            </div>
            
            {/* Right Section - Golf Course Illustration */}
            <div className="flex pt-6 px-6 lg:pr-6 basis-1/2 min-h-[240px] relative">
                <div
                    className="absolute top-6 right-6"
                    style={{
                        width: 'calc(100% - 48px)',
                        height: 'calc(100% - 24px)'
                    }}
                >
                    <img
                        src={require('../../assets/course.png')}
                        className="w-full object-contain"
                        alt="Golf Course Illustration"
                        style={{
                            filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.24)) drop-shadow(12px 8px 12px rgba(0,0,0,0.10))'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Course
