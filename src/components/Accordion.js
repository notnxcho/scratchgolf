import React from 'react'
import { NavArrowDown } from 'iconoir-react'

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-[16px] lg:text-[18px] font-semibold text-deep-black pr-4">
          {question}
        </h3>
        <NavArrowDown 
          className={`w-5 h-5 text-deep-black transition-transform duration-200 ${
            isOpen ? 'rotate-0' : '-rotate-90'
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 px-6">
          <p className="text-[16px] lg:text-[20px] text-deep-black/70 leading-[150%]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
