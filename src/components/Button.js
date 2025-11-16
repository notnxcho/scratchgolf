const Button = ({ children, icon, className, variant = "default", size = "default", onClick, href }) => {
    const isSmall = size === "small"
    const containerSize = isSmall ? "w-fit py-[6px] pr-[6px] pl-[20px]" : "w-fit py-[7px] pr-[7px] pl-[20px]"
    const textSize = isSmall ? "text-[16px]" : "text-[20px]"
    const iconBoxSize = isSmall ? "w-10 h-10" : "w-12 h-12"
    const iconPadding = isSmall ? "p-2" : "p-3"
    
    let buttonClasses = ''
    
    if (variant === "squared") {
        buttonClasses = `flex items-center justify-center px-6 py-3 text-white text-center font-semibold rounded-lg text-sm bg-gradient-to-b from-primary-green to-primary-green-light shadow-[0_4px_12px_0_rgba(4,120,87,0.3)] hover:shadow-[0_6px_16px_0_rgba(4,120,87,0.4)] transition-all duration-200 ${className}`
    } else if (variant === "transparent") {
        const justifyClass = icon ? "justify-between" : "justify-center"
        const paddingClass = icon ? containerSize : (isSmall ? "w-fit py-[6px] px-[20px]" : "w-fit py-[7px] px-[20px]")
        buttonClasses = `flex ${paddingClass} items-center ${justifyClass} gap-3 text-white text-center font-bold rounded-[40px] ${textSize} bg-transparent border border-white/50 hover:border-white transition-all duration-200 ${className}`
    } else {
        buttonClasses = `flex ${containerSize} items-center justify-between gap-3 text-white text-center font-bold rounded-[40px] ${textSize} bg-gradient-to-b from-primary-green to-primary-green-light shadow-[0_0_0_4px_rgba(4,120,87,0.6),0_10px_16px_-6px_rgba(4,120,87,0.2),0_4px_24px_0_rgba(0,0,0,0.1)] ${className}`
    }

    const buttonContent = variant === "squared" ? children : (
        <>
            <div className="flex-grow">{children}</div>
            {icon && (
                <span className={`flex items-center justify-center ${iconPadding} ${iconBoxSize} rounded-[40px] ${variant === "transparent" ? 'bg-white/20' : 'bg-[rgba(85,85,85,0.40)]'}`}>
                    {icon}
                </span>
            )}
        </>
    )

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {buttonContent}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={buttonClasses}>
            {buttonContent}
        </button>
    )
}

export default Button