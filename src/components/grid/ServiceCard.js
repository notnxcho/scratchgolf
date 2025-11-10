import Button from "../Button"
import ArrowDiagonal from "../icons/ArrowDiagonal"

const ServiceCard = ({title, description, className, hasButton, variant, bgColor}) => {
    const isHighlight = variant === 'highlight'
    const bgClass = bgColor ? `bg-[${bgColor}]` : 'bg-white'
    
    return (
        <div 
            className={`flex flex-col justify-end rounded-[12px] relative overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.04)] ${bgClass} ${className}`}
            style={bgColor ? { backgroundColor: bgColor } : {}}
        >
            <div className='w-full gap-3 flex flex-col p-5 lg:p-6'>
                <h4 className={`text-[18px] md:text-[20px] lg:text-[22px] leading-[150%] font-bold ${isHighlight ? 'text-white' : 'text-deep-black'}`}>{title}</h4>
                <p className={`text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] m-0 ${isHighlight ? 'text-white/70' : 'text-deep-black/70'}`}>{description}</p>
            {hasButton && (
                <Button 
                    variant="transparent"
                    size="small"
                    icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />}
                    href="/book/reservation"
                    className="w-full justify-center"
                >
                    BECOME A MEMBER
                </Button>
            )}
            </div>
        </div>
    )
}

export default ServiceCard

