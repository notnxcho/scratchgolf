const MapAlt = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-[260px] max-h-[312px] rounded-[12px] relative overflow-hidden border-[5px] border-white shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]">
            <img src={require('../../assets/map-bg.png')} className="w-full h-full object-cover" alt="Walnut Creek Indoor Golf Location Pin"/>
            <div className='absolute top-0 left-0 w-full h-full gap-3 flex flex-col justify-end p-4 lg:p-6' style={{background: 'radial-gradient(farthest-side at 0% 100%, #fff, transparent)'}}>
                <h4 className='text-[20px] lg:text-[24px] leading-[150%] font-bold text-deep-black'>Located in Walnut Creek, California</h4>
                <p className='text-[14px] lg:text-[20px] leading-[150%] text-deep-black/70 m-0'>1637 Mount Diablo Blvd</p>
            </div>
        </div>
    )
}

export default MapAlt

