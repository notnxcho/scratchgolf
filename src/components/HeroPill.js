const HeroPill = ({ children, variant = "default" }) => {
    const baseClasses = 'flex items-center justify-center w-12 h-[40px] mx-2 lg:w-20 lg:h-[54px] lg:mx-3 2xl:w-[100px] 2xl:h-[73px] 2xl:mx-4 text-[32px] lg:text-[44px] 2xl:text-[64px] rounded-[8px] lg:rounded-[10px] 2xl:rounded-[12px] transition-all duration-200 hover:w-[56px] lg:hover:w-[88px] 2xl:hover:w-[116px]'
    
    const variantClasses = variant === "dark"
        ? 'bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.4)_100%)]'
        : 'bg-[linear-gradient(180deg,rgba(3,0,20,0.04)_0%,rgba(3,0,20,0.08)_100%)]'
    
    return (
        <span className={`${baseClasses} ${variantClasses}`}>
            {children}
        </span>
    )
}

export default HeroPill