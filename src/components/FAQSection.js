import React, { useState } from 'react'
import SectionHeader from './SectionHeader'
import Accordion from './Accordion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I reserve a simulator?",
      answer: "Book online. Select your date, time, and group size. Walk-ins are welcome if space allows."
    },
    {
      question: "What simulator tech is available?",
      answer: "We use Trackman simulators with real-time ball tracking, analytics, and a range of top courses."
    },
    {
      question: "Is a membership necessary?",
      answer: "No membership needed. Book as a guest or join for perks like major discounts and priority booking."
    },
    {
      question: "Do you offer lessons or fittings?",
      answer: "Yes, certified instructors and club fitting are available. Book separately or add to your session."
    },
    {
      question: "Do I need to dress in golf attire?",
      answer: "No, our dress code is casual, so feel free to wear whatever makes you feel comfortable."
    },
    {
      question: "Do I need to bring my own balls?",
      answer: "No, each simulator has their own bucket of premium golf balls for you to use during your session."
    },
    {
      question: "Do I need to bring my own clubs?",
      answer: "No, there are full sets of clubs at each simulator for you to use during your session."
    },
    {
      question: "How do I access the studio?",
      answer: "A temporary keypad access code will be included in your booking confirmation email."
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div id="faq" className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-[#f8f8f8]">
      <SectionHeader 
        title="Frequently Asked Questions" 
        description="Everything you need to know about our indoor golf simulator experience" 
        theme="light" 
      />
      
      {/* FAQ Accordion */}
      <div className="w-full max-w-[800px] px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQSection
