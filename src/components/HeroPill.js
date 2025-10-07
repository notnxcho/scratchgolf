const HeroPill = ({ children }) => {
    return (
        <span className='flex items-center justify-center w-12 h-[40px] mx-2 lg:w-16 lg:h-[54px] lg:mx-3 xl:w-20 xl:h-[73px] xl:mx-4 text-[32px] lg:text-[44px] xl:text-[64px] rounded-[8px] lg:rounded-[10px] xl:rounded-[12px] bg-[linear-gradient(180deg,rgba(3,0,20,0.04)_0%,rgba(3,0,20,0.08)_100%)]'>
            {children}
        </span>
    )
}

export default HeroPill