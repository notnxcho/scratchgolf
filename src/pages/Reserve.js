import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Book = () => {
  const { tab } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('reservation')
  const widgetRef = useRef(null)

  // Set active tab based on URL parameter
  useEffect(() => {
    if (tab && ['reservation', 'event', 'membership'].includes(tab)) {
      setActiveTab(tab)
    } else {
      // Default to reservation if no valid tab
      navigate('/book/reservation', { replace: true })
    }
  }, [tab, navigate])

  // Load and initialize widgets when tab changes
  useEffect(() => {
    const loadWidget = async () => {
      // Clear previous widget content
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''
      }

      if (activeTab === 'reservation') {
        // Load Bookla widget
        try {
          // Load the Bookla script if not already loaded
          if (!window.BookingWidgetStandalone) {
            const script = document.createElement('script')
            script.src = 'https://bookla.pages.dev/booking-widget-standalone-v1.1.0.global.js'
            script.async = true
            document.head.appendChild(script)
            
            // Wait for script to load
            await new Promise((resolve, reject) => {
              script.onload = resolve
              script.onerror = reject
            })
          }

          // Initialize the widget
          if (window.BookingWidgetStandalone && widgetRef.current) {
            window.BookingWidgetStandalone.initBookingWidget(widgetRef.current, {
              "apiKey": "oEwJ3Wdm3A2UDSMxG1tynDk59zuUA1eLjpd9",
              "region": "US",
              "companyId": "59971f2d-4659-473d-8e67-2bf27fc62971",
              "transitionType": "slide",
              "hideResourcePicker": false,
              "showServiceSelector": true,
              "guestEnabled": true,
              "termsEnabled": true,
              "codeEnabled": false,
              "customFormFields":[{
                "type": "textarea",
                "labelText": "Address",
                "required": true,
                "errorText": "Please enter your address",
                "inputWidth": "auto/span 1"
              }],
              "localization":{
                "terms":{
                  "acceptText": "I accept the terms and conditions, privacy policy, and waiver of liability.",
                  "urls":[{
                    "text": "terms and conditions",
                    "url": "/terms"
                  },{
                    "text": "privacy policy",
                    "url": "/privacy"
                  },{
                    "text": "waiver of liability",
                    "url": "/waiver-of-liability"
                  }]
                },
                "subscriptions":{
                  "title": "Choose Membership",
                  "subtitle": "Select a membership plan",
                  "summaryTitle": "Membership Summary",
                  "buyText": "Subscribe",
                  "noSubscriptions": "No memberships available"
                }
              },
              "servicesConfig":{
                "services":[{
                  "serviceId": "d576a2c3-f330-41a7-9b21-decf19751acd",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "848109ca-81e3-47e6-b17d-f73b5505aa90",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "5d517c62-5d37-447b-8813-7a555ed00c88",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "36d624d4-88a7-49d6-8afc-89ad49631471",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "6e388075-3417-4cda-ad3f-2f3bc4588a98",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "0b2b062a-ffd6-4e27-8423-e54ea2f10729",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "5db1cd00-dbe2-4fb5-8072-06863e44b6d4",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "5dfdeae1-c686-4a91-b0f7-393a7ce157fb",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "717b8c1d-94e5-4ec8-961a-cbe3c264c20a",
                  "title": "",
                  "description": "",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                }]
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize Bookla widget:', error)
        }
      } else if (activeTab === 'event') {
        // Load Typeform for events
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '<div data-tf-live="01K7BQWT8R0EER4PYVFHD9ZH2R"></div>'
          
          // Load Typeform script if not already loaded
          if (!document.querySelector('script[src*="embed.typeform.com"]')) {
            const script = document.createElement('script')
            script.src = '//embed.typeform.com/next/embed.js'
            script.async = true
            document.head.appendChild(script)
          }
        }
      } else if (activeTab === 'membership') {
        // Load Typeform for membership
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '<div data-tf-live="01K7BQH959GWGF8D5Y6EFF1XNC"></div>'
          
          // Load Typeform script if not already loaded
          if (!document.querySelector('script[src*="embed.typeform.com"]')) {
            const script = document.createElement('script')
            script.src = '//embed.typeform.com/next/embed.js'
            script.async = true
            document.head.appendChild(script)
          }
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadWidget, 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  const handleTabChange = (newTab) => {
    setActiveTab(newTab)
    navigate(`/book/${newTab}`)
  }

  const tabs = [
    { id: 'reservation', label: 'Reservation' },
    { id: 'event', label: 'Event' },
    { id: 'membership', label: 'Membership' }
  ]

  const renderWidget = () => {
    return <div ref={widgetRef} className="w-full min-h-[500px]"></div>
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO />
      <Navbar />
      
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Book a Time
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your booking type and get started with your golf experience
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg border border-gray-200">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
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

        {/* Widget Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[600px]">
          {renderWidget()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Book
