import React from 'react'
import SectionHeader from './SectionHeader'
import { Mail, Phone, MapPin, ShoppingBag } from 'iconoir-react'

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Reach us anytime by email.",
      contactInfo: "info@scratchlabgolf.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "Call or text us.",
      contactInfo: "+1 (551) 556-4469"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Studio",
      description: "Open 24 hours, 7 days a week.",
      contactInfo: ["1637 Mount Diablo Blvd", "Walnut Creek, CA 94596"]
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Shop",
      description: "Browse exclusive golf gear.",
      contactInfo: ["1637 Mount Diablo Blvd", "Walnut Creek, CA 94596"]
    }
  ]

  return (
    <div className="w-screen flex flex-col items-center gap-16 py-12 lg:py-[120px] bg-white">
      <SectionHeader 
        title="Book, inquire, or get support" 
        description="Our team is ready to help you." 
        theme="light" 
      />
      
      {/* Contact Methods Grid */}
      <div className="w-full max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            {/* Icon Container */}
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-deep-black">
              {method.icon}
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[18px] font-bold text-deep-black">{method.title}</h3>
              <p className="text-[14px] text-deep-black/70 leading-[150%]">{method.description}</p>
              
              {/* Contact Info */}
              <div className="text-[14px] text-deep-black leading-[150%]">
                {Array.isArray(method.contactInfo) ? (
                  method.contactInfo.map((line, lineIndex) => (
                    <div key={lineIndex}>{line}</div>
                  ))
                ) : (
                  <div>{method.contactInfo}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContactSection
