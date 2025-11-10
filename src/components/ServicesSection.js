import SectionHeader from "./SectionHeader"
import ServiceCard from "./grid/ServiceCard"

const ServicesSection = () => {
    const cards = [
        {
            id: 1,
            title: "PGA Professional grade personalized coaching",
            description: "One-on-one coaching with certified golf professionals to elevate your skills."
        },
        {
            id: 2,
            title: "Top-notch golf simulators",
            description: "Practice your swing and play full courses with the best simulators in the industry."
        },
        {
            id: 3,
            title: "Fitness & Training",
            description: "Physical training and fitness programs specifically designed to help you improve your golfing skills."
        },
        {
            id: 4,
            title: "Limited Edition Merchandise",
            description: "From brands like Scotty Cameron, Malbon, Bettinardi, and more"
        },
        {
            id: 5,
            title: "Precision Club Fitting",
            description: "Give your whole set of clubs a 720° optimizations from club head to shaft to grip"
        },
        {
            id: 6,
            title: "Exclusive member access",
            description: "Members get much more value from their subscription",
            hasButton: true
        }
    ]

    return (
        <div id="services" className="w-screen flex flex-col items-center gap-12 md:gap-16 py-12 lg:py-[120px] bg-[#F8F8F8]">
            <SectionHeader 
                title="More than a golf simulator" 
                description="Holistic golf training center to really bring your game to the next level" 
            />
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-3 max-w-[924px] w-full px-3 h-[600px]">
                {cards.map((card) => (
                    <ServiceCard 
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        className="h-[296px]"
                        hasButton={card.hasButton}
                        variant={card.hasButton ? 'highlight' : undefined}
                        bgColor={card.hasButton ? '#1c1c1c' : undefined}
                    />
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
                <div className="flex gap-3 px-4">
                    {/* Pane 1: Card 1 and Card 4 */}
                    <div className="flex-shrink-0 w-[calc(100vw-44px)] snap-center flex flex-col gap-3">
                        <ServiceCard 
                            title={cards[0].title}
                            description={cards[0].description}
                            className="h-[280px] ml-4"
                        />
                        <ServiceCard 
                            title={cards[3].title}
                            description={cards[3].description}
                            className="h-[280px] ml-4"
                        />
                    </div>
                    
                    {/* Pane 2: Card 2 and Card 5 */}
                    <div className="flex-shrink-0 w-[calc(100vw-64px)] snap-center flex flex-col gap-3">
                        <ServiceCard 
                            title={cards[1].title}
                            description={cards[1].description}
                            className="h-[280px]"
                        />
                        <ServiceCard 
                            title={cards[4].title}
                            description={cards[4].description}
                            className="h-[280px]"
                        />
                    </div>
                    
                    {/* Pane 3: Card 3 and Card 6 */}
                    <div className="flex-shrink-0 w-[calc(100vw-32px)] snap-center flex flex-col gap-3">
                        <ServiceCard 
                            title={cards[2].title}
                            description={cards[2].description}
                            className="h-[280px] mr-8"
                        />
                        <ServiceCard 
                            title={cards[5].title}
                            description={cards[5].description}
                            className="h-[280px] mr-8"
                            hasButton={cards[5].hasButton}
                            variant="highlight"
                            bgColor="#1c1c1c"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection