import React from 'react'
import ScrollStack, { ScrollStackItem } from './reactbits/ScrollStack'

const TestimonialsSection = () => {
  // const testimonials = [
  //   {
  //     id: 1,
  //     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     name: "Sarah Mitchell",
  //     occupation: "Marketing Director",
  //     skillLevel: "Handicap 12"
  //   },
  //   {
  //     id: 2,
  //     quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     name: "Michael Chen",
  //     occupation: "Software Engineer",
  //     skillLevel: "Handicap 8"
  //   },
  //   {
  //     id: 3,
  //     quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  //     name: "Emily Rodriguez",
  //     occupation: "Financial Analyst",
  //     skillLevel: "Handicap 15"
  //   }
  // ]

  return (
    <section className="w-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollStack useWindowScroll={true}>
          <ScrollStackItem>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Card 1</h2>
              <p className="text-gray-600">This is the first card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Card 2</h2>
              <p className="text-gray-600">This is the second card in the stack</p>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Card 3</h2>
              <p className="text-gray-600">This is the third card in the stack</p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  )
}

export default TestimonialsSection
