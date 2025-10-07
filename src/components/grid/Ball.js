const Ball = () => {
    return (
        <div className="flex flex-col gap-3 lg:h-[480px] h-[380px] bg-white lg:min-w-[400px] w-min rounded-[12px] p-5 lg:p-8 flex-grow shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
            <h4 className='text-[20px] lg:text-[24px] leading-[150%] font-bold text-deep-black'>The most advanced simulation tech</h4>
            <p className='text-[14px] lg:text-[20px] leading-[150%] text-deep-black/70 m-0 mb-4'>State of the art graphics, precise ball and impact tracking. Instant feedback with multimodal metrics on every shot.</p>
            <div className='flex items-center justify-center flex-grow'>
                <img src={require('../../assets/ball.png')} className="max-h-[280px] lg:max-w-[430px] h-full object-contain" alt="Ball"/>
            </div>
        </div>
    )
}

export default Ball