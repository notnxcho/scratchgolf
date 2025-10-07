const Card = ({title, description, src, className}) => {
    return (
        <div className={`flex flex-col items-center justify-center flex-basis-50 lg:min-w-[256px] h-[360px] rounded-[12px] flex-grow xl:flex-grow-0 relative overflow-hidden border-[5px] border-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] ${className}`}>
            {src && <img src={src} className="w-full h-full object-cover" alt="Walnut Creek Indoor Golf Location Pin"/>}
            <div className='absolute top-0 left-0 w-full h-full gap-3 flex flex-col justify-end p-5 lg:p-8' style={{background: 'radial-gradient(farthest-side at 0% 100%, #fff, transparent)'}}>
                <h4 className='text-[20px] lg:text-[24px] leading-[150%] font-bold text-deep-black'>{title}</h4>
                <p className='text-[14px] lg:text-[20px] leading-[150%] text-deep-black/70 m-0'>{description}</p>
            </div>
        </div>
    )
}

export default Card