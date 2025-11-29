const PricingCard = () => {
    return (
        <div className="flex flex-row md:flex-col items-center justify-center gap-3 min-w-[200px] w-full md:w-[200px] md:h-[312px]">
            {/* OPEN 24/7 Card */}
            <div className="
                flex flex-col items-center justify-center
                h-[240px] md:h-[82px] w-full md:w-full 
                rounded-[12px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] p-4 lg:p-5
            ">
                <div className="text-[24px] md:text-[32px] leading-[120%] font-bold text-transparent bg-clip-text w-full text-left bg-gradient-to-r from-primary-green-light to-primary-green-dark text-center">
                    OPEN 24/7
                </div>
            </div>
            
            {/* Golf Club & Pricing Card */}
            <div className="flex flex-col-reverse items-center flex-grow h-[240px] md:max-h-[calc(100%-82px-12px)] rounded-[12px] bg-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] w-full overflow-hidden">
                
                {/* Pricing Information */}
                <div className="flex flex-col items-center gap-0.5 w-full pb-6">
                    <p className="text-[14px] text-deep-black/70">Starting at</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-[32px] font-bold text-deep-black">30</span>
                        <span className="text-[16px] font-bold text-deep-black">USD</span>
                    </div>
                    <p className="text-[14px] text-deep-black/70">30 min session</p>
                </div>

                {/* Golf Club Image */}
                <div className="flex items-center justify-center flex-shrink flex-grow-0 w-full">
                    <img 
                        src={require('../../assets/heroclub.png')} 
                        className="max-h-[120px] object-contain" 
                        alt="Golf Club"
                    />
                </div>
            </div>
        </div>
    )
}

export default PricingCard

