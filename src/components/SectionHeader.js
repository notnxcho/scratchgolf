import useFadeInAnimation from '../hooks/useFadeInAnimation'

const SectionHeader = ({ title, description, theme, className }) => {
    const [ref, isVisible] = useFadeInAnimation()

    return (
        <div 
            ref={ref}
            className={`flex flex-col items-center justify-center max-w-[400px] lg:max-w-[600px] px-4 text-center gap-4 transition-all duration-500 ease-out ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-90px)'
            }}
        >
            <h2 className={`text-[28px] lg:text-[44px] font-bold ${theme === 'dark' ? 'text-white' : 'text-deep-black'} leading-[120%]`}>{title}</h2>
            <p className={`text-[16px] lg:text-[20px] max-w-[560px] text-center ${theme === 'dark' ? 'text-white/70' : 'text-deep-black/70'} leading-[150%]`}>{description}</p>
        </div>
    )
}

export default SectionHeader