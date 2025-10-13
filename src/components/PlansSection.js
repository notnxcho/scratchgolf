import SectionHeader from "./SectionHeader"
import PlanCard from "./PlanCard"

const PlansSection = () => {
    const plans = [
        {
            title: "SIMULATOR ACCESS",
            price: "$25/half hour",
            description: "Book Trackman simulator sessions",
            features: [
                "400+ virtual courses",
                "Advanced ball tracking",
                "Climate-controlled bays"
            ],
            buttonText: "Book",
            disclaimer: "$5 per half hour, for each additional party member."
        },
        {
            title: "UNLIMITED MEMBERSHIP",
            price: "Weekly or Monthly",
            description: "Unlimited bookings. One price.",
            features: [
                "Priority booking access",
                "Guest privileges included",
                "Exclusive member events",
                "Performance analytics"
            ],
            buttonText: "View Options",
            disclaimer: "No fees. Cancel anytime. Hour and guest limitations vary per tier.",
            isBestValue: true
        },
        {
            title: "PRO INSTRUCTION",
            price: "$150/hour",
            description: "PGA-level coaching included",
            features: [
                "Personalized swing analysis",
                "Video breakdown sessions",
                "Custom practice plans",
                "Mental game coaching"
            ],
            buttonText: "Book",
            disclaimer: "All ages, all skill levels."
        }
    ]

    return (
        <div className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-[#f8f8f8]">
            <SectionHeader 
                title="Choose your perfect golf plan" 
                description="Select the plan that fits your golf journey and start improving your game today" 
                theme="light" 
            />
            
            {/* Plans Grid */}
            <div className="w-full max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
                {plans.map((plan, index) => (
                    <PlanCard
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                        features={plan.features}
                        buttonText={plan.buttonText}
                        disclaimer={plan.disclaimer}
                        isBestValue={plan.isBestValue}
                    />
                ))}
            </div>
        </div>
    )
}

export default PlansSection
