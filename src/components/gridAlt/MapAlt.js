const MapAlt = () => {
    return (
        <div className="
            flex flex-col items-center justify-center flex-grow
            max-h-[312px] min-w-[260px] md:max-w-[calc(600px-24px-200px-12px)] md:h-[312px] md:flex-grow lg:flex-grow-0 
            rounded-[12px] relative overflow-hidden border-[5px] border-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]
        ">
            <img src={require('../../assets/map-bg.png')} className="w-full h-full object-cover" alt="Walnut Creek Indoor Golf Location Pin"/>
            <div className='absolute top-0 left-0 w-full h-full gap-2 flex flex-col justify-end p-4 lg:p-6' style={{background: 'radial-gradient(farthest-side at 0% 100%, #fff, transparent)'}}>
                <h4 className='text-[24px] lg:text-[22px] leading-[150%] font-bold text-deep-black'>Located in Walnut Creek, California</h4>
                <p className='text-[16px] lg:text-[18px] leading-[150%] text-deep-black/70 m-0'>1637 Mount Diablo Blvd</p>
            </div>
        </div>
    )
}

export default MapAlt

