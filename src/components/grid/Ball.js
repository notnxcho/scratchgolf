const Ball = ({ className }) => {
    return (
        <div className={`flex flex-col gap-3 lg:h-[480px] h-[400px] bg-white/10 lg:min-w-[400px] w-min rounded-[12px] p-5 lg:p-8 flex-grow shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] ${className || ''}`}>
            <h4 className='text-[22px] md:text-[24px] font-bold text-white leading-[150%] text-center lg:text-left'>The most advanced simulation tech</h4>
            <p className='text-[16px] md:text-[18px] text-white/70 leading-[150%] m-0 text-center lg:text-left'>State of the art graphics, precise ball and impact tracking. Instant feedback with multimodal metrics on every shot.</p>
            <div className='flex items-center justify-center flex-grow'>
                <img src={require('../../assets/ball-dark.png')} className="max-h-[280px] lg:max-w-[430px] h-full object-contain" alt="Ball"/>
            </div>
        </div>
    )
}

export default Ball