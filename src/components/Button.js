const Button = ({ children, icon, className, variant = "default" }) => {
    if (variant === "squared") {
        return (
            <button className={`flex items-center justify-center px-6 py-3 text-white text-center font-semibold rounded-lg text-sm bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] shadow-[0_4px_12px_0_rgba(0,205,177,0.3)] hover:shadow-[0_6px_16px_0_rgba(0,205,177,0.4)] transition-all duration-200 ${className}`}>
                {children}
            </button>
        )
    }
    
    return (
        <button className={`flex w-fit py-[7px] pr-[7px] pl-[20px] items-center gap-3 text-white text-center font-bold rounded-[40px] text-[20px] bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] shadow-[0_0_0_4px_rgba(41,233,208,0.6),0_10px_16px_-6px_rgba(0,205,177,0.2),0_4px_24px_0_rgba(0,0,0,0.1)] ${className}`}>
            {children}
            <span className='flex items-center justify-center p-3 w-12 h-12 rounded-[40px] bg-[rgba(85,85,85,0.40)]'>{icon}</span>
        </button>
    )
}

export default Button