const GameModeCard = ({title, description, src, className}) => {
    return (
        <div className={`h-[240px] md:h-[460px] rounded-[12px] overflow-hidden bg-white flex-grow min-w-[300px] max-w-[400px] relative ${className}`}>
            {src && <img src={src} className="w-full h-full object-cover" alt={title}/>}
            <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 80%)'
                }}
            />
            <div className='absolute bottom-0 left-0 w-full p-6 lg:p-8'>
                <h4 className='text-white text-[22px] font-bold mb-3'>{title}</h4>
                <p className='text-white/70 text-[18px] leading-[150%] m-0'>{description}</p>
            </div>
        </div>
    )
}

export default GameModeCard

