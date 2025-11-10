import trackmanIODevice from '../../assets/trackman-io-device.png'

const TrackmanIOCard = () => {
    return (
        <div className="h-[340px] md:h-[480px] rounded-[12px] relative overflow-hidden bg-[#090909]">
            {/* Background Image Layer */}
            <div 
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    backgroundImage: `url(${trackmanIODevice})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Gradient Overlay Layer */}
            <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 65%)'
                }}
            />
            
            {/* Text Content */}
            <div className="relative z-10 w-full h-full flex flex-col gap-2 p-6 md:p-8 text-center md:text-left">
                <h4 className="text-[22px] md:text-[24px] font-bold text-white leading-[150%]">Trackman iO</h4>
                <p className="text-[16px] md:text-[18px] text-white/70 leading-[150%] m-0">
                    Combining radar, infrared and high-speed imaging to deliver real ball and club data — including measured 3D spin and spin axis — in real time.
                </p>
            </div>
        </div>
    )
}

export default TrackmanIOCard

