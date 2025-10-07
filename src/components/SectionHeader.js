const SectionHeader = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center max-w-[400px] lg:max-w-[600px] px-4 text-center gap-4">
            <h2 className="text-[28px] lg:text-[44px] font-bold text-deep-black leading-[120%]">{title}</h2>
            <p className="text-[16px] lg:text-[20px] max-w-[560px] text-center text-deep-black/70 leading-[150%]">{description}</p>
        </div>
    )
}

export default SectionHeader