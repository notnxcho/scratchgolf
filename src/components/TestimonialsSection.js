import React, { useState, useEffect, useRef } from 'react'
import SplitText from './reactbits/SplitText'
import SectionHeader from './SectionHeader'

const TestimonialContent = ({ testimonial, useSplitText = false, isCurrent = false }) => {
  return (
    <>
      {/* Quote section */}
      <div className="flex-1 mb-6">
        <div className="mb-6">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.2203C0 10.678 7.08861 0 7.08861 0H15.9494C15.9494 0 10.3797 10.1695 9.62025 11.1864C8.86076 12.2034 5.56962 12.9661 6.07595 14.2373C6.58228 15.5085 7.8481 13.7288 11.8987 13.7288C15.9494 13.7288 16.2025 13.7288 16.2025 13.7288V30H0V13.2203Z" fill="#1C1C1C"></path>
            <path d="M23.7975 13.2203C23.7975 10.678 30.8861 0 30.8861 0H39.7468C39.7468 0 34.1772 10.1695 33.4177 11.1864C32.6582 12.2034 29.3671 12.9661 29.8734 14.2373C30.3797 15.5085 31.6456 13.7288 35.6962 13.7288C39.7468 13.7288 40 13.7288 40 13.7288V30H23.7975V13.2203Z" fill="#1C1C1C"></path>
          </svg>
        </div>
        {useSplitText ? (
          <SplitText
            key={`${testimonial.id}-${isCurrent}`}
            text={testimonial.quote}
            className="text-[24px] lg:text-[28px] font-semibold text-left"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 16 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        ) : (
          <p className="text-[24px] lg:text-[28px] font-semibold text-left">{testimonial.quote}</p>
        )}
      </div>
      
      {/* Bottom section */}
      <div className="pt-3 lg:pt-6 mb-2 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.occupation}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">{testimonial.skillLevel}</p>
          </div>
        </div>
      </div>
    </>
  )
}

const TestimonialCard = ({ testimonial, isVisible, isCurrent }) => {
  return (
    <div
      className={`absolute inset-0 p-4 lg:p-8 flex flex-col transition-all duration-700 ease-in-out ${
        isCurrent
          ? 'opacity-100 translate-x-0'
          : isVisible
          ? 'opacity-0 -translate-x-full'
          : 'opacity-0 translate-x-full'
      }`}
    >
      <TestimonialContent testimonial={testimonial} useSplitText={true} isCurrent={isCurrent} />
    </div>
  )
}

const TestimonialHeightCalc = ({ testimonial }) => {
  return (
    <div className="testimonial-height-calc">
      <div className="flex flex-col">
        <TestimonialContent testimonial={testimonial} useSplitText={false} />
      </div>
    </div>
  )
}


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  const testimonials = [
    {
      id: 1,
      quote: "Really helpful and friendly staff. The simulators are great and the training is helpful.",
      name: "Sarah Mitchell",
      occupation: "Marketing Director",
      skillLevel: "Handicap 12"
    },
    {
      id: 2,
      quote: "I noticed a significant improvement in my game after just a few sessions.",
      name: "Michael Chen",
      occupation: "Software Engineer",
      skillLevel: "Handicap 8"
    },
    {
      id: 3,
      quote: "I love the training sessions. They are really helpful and the trainers are great.",
      name: "Emily Rodriguez",
      occupation: "Financial Analyst",
      skillLevel: "Handicap 15"
    }
  ]


  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change testimonial every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, testimonials.length])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    // Reset the auto-scroll timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      // Swipe left - go to next testimonial
      setCurrentIndex(currentIndex + 1)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    } else if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous testimonial
      setCurrentIndex(currentIndex - 1)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    // Reset touch values
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section className="w-screen py-20 lg:py-[120px] bg-gradient-to-b from-[#fff] to-[#f8f8f8]">
      <div className="max-w-4xl gap-11 mx-auto px-4 flex flex-col items-center justify-center">
        <SectionHeader 
          title="Take it from our clients" 
          description="What our community of passionate golfers say about us" 
          theme="light" 
        />
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Static card container */}
          <div className="bg-white rounded-lg shadow-[0_12px_24px_0_rgba(0,0,0,0.04)] p-4 lg:p-8 relative overflow-hidden testimonial-container">
            {/* Hidden content for height calculation */}
            <TestimonialHeightCalc testimonial={testimonials[currentIndex]} />
            
            {/* Visible sliding content */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isCurrent={index === currentIndex}
                isVisible={index < currentIndex}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-900 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
