import Button from "./Button"

const PlanCard = ({ 
    title, 
    price, 
    description, 
    features, 
    buttonText, 
    disclaimer, 
    isBestValue = false 
}) => {
    return (
        <div className="bg-white rounded-2xl p-8 pb-5 shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col relative min-h-[500px]">
            {/* Best Value Tag */}
            {isBestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        Best Value
                    </div>
                </div>
            )}
            
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                {title}
            </div>
            <div className="text-3xl font-bold text-deep-black mb-2">
                {price}
            </div>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {description}
            </p>
            
            {/* Features List */}
            <div className="mb-8 space-y-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-auto">
                <Button variant="squared" className="w-full" href="/book/reservation">
                    {buttonText}
                </Button>
                {disclaimer && (
                    <p className="text-sm flex items-end justify-center text-gray-500 mt-4 min-h-12 text-center">
                        {disclaimer}
                    </p>
                )}
            </div>
        </div>
    )
}

export default PlanCard
