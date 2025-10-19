import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

const Legal = () => {
  const { tab } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('privacy')

  // Set active tab based on URL parameter
  useEffect(() => {
    if (tab && ['privacy', 'terms', 'liability'].includes(tab)) {
      setActiveTab(tab)
    } else {
      // Default to privacy if no valid tab
      navigate('/legal/privacy', { replace: true })
    }
  }, [tab, navigate])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    navigate(`/legal/${newTab}`)
  }

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of Service' },
    { id: 'liability', label: 'Liability Waiver' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Policy</h2>
            <p className="text-gray-600 mb-6">Last updated: January 2025</p>
            
            <h3>Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create an account, make a reservation, or contact us for support.</p>
            
            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            
            <h3>Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            
            <h3>Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h3>Your Rights</h3>
            <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
            
            <h3>Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at info@scratchlabgolf.com</p>
          </div>
        )
      
      case 'terms':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service</h2>
            <p className="text-gray-600 mb-6">Last updated: January 2025</p>
            
            <h3>Acceptance of Terms</h3>
            <p>By accessing and using Scratch Lab Golf services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h3>Use License</h3>
            <p>Permission is granted to temporarily use Scratch Lab Golf services for personal, non-commercial transitory viewing only.</p>
            
            <h3>Reservations and Cancellations</h3>
            <p>All reservations are subject to availability. Cancellations must be made at least 24 hours in advance to avoid charges.</p>
            
            <h3>Code of Conduct</h3>
            <p>Users must conduct themselves in a respectful manner and follow all facility rules and safety guidelines.</p>
            
            <h3>Liability</h3>
            <p>Scratch Lab Golf is not liable for any injuries, damages, or losses that may occur during the use of our facilities.</p>
            
            <h3>Modifications</h3>
            <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
            
            <h3>Contact Information</h3>
            <p>For questions about these Terms of Service, contact us at info@scratchlabgolf.com</p>
          </div>
        )
      
      case 'liability':
        return (
          <div className="prose prose-lg max-w-none">
            <h2>Liability Waiver</h2>
            <p className="text-gray-600 mb-6">Last updated: January 2025</p>
            
            <h3>Assumption of Risk</h3>
            <p>I acknowledge that golf and related activities involve inherent risks of injury, including but not limited to physical injury, property damage, and other risks.</p>
            
            <h3>Release of Liability</h3>
            <p>I hereby release, waive, and discharge Scratch Lab Golf, its officers, employees, and agents from any and all liability for any injury, damage, or loss that may occur during my participation in activities at the facility.</p>
            
            <h3>Indemnification</h3>
            <p>I agree to indemnify and hold harmless Scratch Lab Golf from any claims, damages, or expenses arising from my participation in activities at the facility.</p>
            
            <h3>Safety Guidelines</h3>
            <p>I agree to follow all safety guidelines and instructions provided by Scratch Lab Golf staff and to use equipment properly and safely.</p>
            
            <h3>Medical Conditions</h3>
            <p>I certify that I am physically fit and have no medical conditions that would prevent me from safely participating in golf activities.</p>
            
            <h3>Photography and Media</h3>
            <p>I consent to the use of my likeness in photographs, videos, or other media for promotional purposes by Scratch Lab Golf.</p>
            
            <h3>Acknowledgment</h3>
            <p>I have read and understand this liability waiver and voluntarily agree to its terms.</p>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO />
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto px-4 py-16 mt-[40px] md:mt-[80px]">
        {/* Header */}
        <SectionHeader 
          title="Legal Information" 
          description="Important legal documents and policies for Scratch Lab Golf" 
        />

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg space-x-1 md:space-x-2 p-1 shadow-lg border border-gray-200">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === tabItem.id
                    ? 'bg-gradient-to-b from-[#12AF9A] to-[#15CBB3] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Legal
