import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'

const Book = () => {
  const { tab } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('reservation')
  const widgetRef = useRef(null)

  // Set active tab based on URL parameter
  useEffect(() => {
    if (tab && ['reservation', 'event', 'prepaid', 'membership'].includes(tab)) {
      setActiveTab(tab)
    } else {
      // Default to reservation if no valid tab
      navigate('/book/reservation', { replace: true })
    }
  }, [tab, navigate])

  // Load and initialize widgets when tab changes
  useEffect(() => {
    const loadWidget = async () => {
      // Clear previous widget content - do this for all tabs
      if (widgetRef.current) {
        widgetRef.current.innerHTML = ''
        // Remove any child nodes that might persist
        while (widgetRef.current.firstChild) {
          widgetRef.current.removeChild(widgetRef.current.firstChild)
        }
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
                "type": "textfield",
                "labelText": "Phone Number",
                "required": true,
                "errorText": "Please enter your phone number",
                "inputWidth": "auto/span 1"
              },{
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
                  "serviceId": "0368b030-c55b-4748-8744-c8deeb669183",
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
          
          // Remove existing Typeform script to force reload
          const existingScript = document.querySelector('script[src*="embed.typeform.com"]')
          if (existingScript) {
            existingScript.remove()
          }
          
          // Load Typeform script
          const script = document.createElement('script')
          script.src = '//embed.typeform.com/next/embed.js'
          script.async = true
          document.head.appendChild(script)
        }
      } else if (activeTab === 'prepaid') {
        // Load Bookla subscription widget for pre-paid packages
        try {
          // Load the Bookla script if not already loaded (v1.1.1 for subscription widget)
          const scriptId = 'bookla-subscription-widget-script'
          let script = document.getElementById(scriptId)
          
          if (!script) {
            script = document.createElement('script')
            script.id = scriptId
            script.src = 'https://bookla.pages.dev/booking-widget-standalone-v1.1.1.global.js'
            script.async = true
            document.head.appendChild(script)
            
            // Wait for script to load
            await new Promise((resolve, reject) => {
              script.onload = resolve
              script.onerror = reject
            })
          } else if (!window.BookingWidgetStandalone) {
            // Script element exists but not loaded yet, wait for it
            await new Promise((resolve, reject) => {
              script.onload = resolve
              script.onerror = reject
            })
          }

          // Initialize the subscription widget
          if (window.BookingWidgetStandalone && widgetRef.current) {
            window.BookingWidgetStandalone.initSubscriptionWidget(widgetRef.current, {
              "apiKey": "oEwJ3Wdm3A2UDSMxG1tynDk59zuUA1eLjpd9",
              "region": "US",
              "companyId": "59971f2d-4659-473d-8e67-2bf27fc62971",
              "transitionType": "slide",
              "guestEnabled": true,
              "termsEnabled": true,
              "customFormFields":[{
                "type": "text",
                "labelText": "Phone Number",
                "required": true,
                "errorText": "Please enter your address",
                "inputWidth": "auto/span 1"
              },{
                "type": "textarea",
                "labelText": "Address",
                "required": true,
                "errorText": "Please enter your address",
                "inputWidth": "auto/span 1"
              }],
              "localization":{
                "terms":{
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
                  "title": "Choose Pre-Paid Plan",
                  "subtitle": "Select an hour pack",
                  "summaryTitle": "Pre-Paid Pack Summary",
                  "noSubscriptions": "No pre-paid packs available"
                }
              },
              "subscriptionsConfig":{
                "subscriptions":[{
                  "subscriptionId": "1cf42f4b-709e-4770-a5a6-04ea1b1fcd60",
                  "title": "5 Hour Pack",
                  "description": "5 pre-paid hours. No expiration. Includes 2 free guest tickets."
                },{
                  "subscriptionId": "d005b303-b64e-4625-b211-463fa8541dd0",
                  "title": "10 Hour Pack",
                  "description": "10 pre-paid hours. No expiration. Includes 4 free guest tickets."
                },{
                  "subscriptionId": "06bdfb8a-37a5-45be-a136-fdbd7c359358",
                  "title": "15 Hour Pack",
                  "description": "15 pre-paid hours. No expiration. Includes 8 free guest tickets."
                }]
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize the Bookla subscription widget:', error)
        }
      } else if (activeTab === 'membership') {
        // Membership cards - no widget needed
        // Ensure widget container is completely cleared
        if (widgetRef.current) {
          widgetRef.current.innerHTML = ''
          while (widgetRef.current.firstChild) {
            widgetRef.current.removeChild(widgetRef.current.firstChild)
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
    { id: 'prepaid', label: 'Pre-Paid Package' },
    { id: 'membership', label: 'Membership' }
  ]

  const membershipPlans = [
    {
      id: 'bronze',
      title: 'Monthly Unlimited – Bronze',
      price: '$399',
      perks: [
        '24/7',
        'Unlimited Visits',
        '1 Hour Max Per Day, $40 Per Additional Hour',
        '2 Free Guest Tickets Per Month',
        'Incredible Savings',
        'Access to member\'s only simulator and golf gym'
      ],
      link: 'https://buy.stripe.com/3cI7sL2Ghg929CMaxtgQE07'
    },
    {
      id: 'silver',
      title: 'Monthly Unlimited – Silver',
      price: '$499',
      perks: [
        '24/7',
        'Unlimited Visits',
        '2 Hour Max Per Day, $35 Per Additional Hour',
        '4 Free Guest Tickets Per Month',
        'Incredible Savings',
        'Access to member\'s only simulator and golf gym'
      ],
      link: 'https://buy.stripe.com/28E5kD3Klf4YeX60WTgQE08'
    },
    {
      id: 'gold',
      title: 'Monthly Unlimited – Gold',
      price: '$599',
      perks: [
        '24/7',
        'Unlimited Visits',
        '3 Hour Max Per Day, $30 Per Additional Hour',
        '8 Free Guest Tickets Per Month',
        'Incredible Savings',
        'Access to member\'s only simulator and golf gym'
      ],
      link: 'https://buy.stripe.com/28E5kD3Klf4YeX60WTgQE08'
    }
  ]

  const renderWidget = () => {
    if (activeTab === 'membership') {
      return (
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-primary-green mb-6">{plan.price}</div>
                <ul className="flex-1 space-y-3 mb-6">
                  {plan.perks.map((perk, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-primary-green mr-2">•</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  className="w-full bg-gradient-to-b from-primary-green to-primary-green-light text-white font-semibold py-3 px-6 rounded-lg text-center hover:opacity-90 transition-opacity shadow-md"
                >
                  Join
                </a>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We will follow up with your membership code via email.
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <div ref={widgetRef} className="w-screen min-h-[500px] md:w-[600px]"></div>
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO />
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto px-4 py-16 mt-[40px] md:mt-[80px]">
        {/* Header */}
        <SectionHeader title="Book a Time" description="Choose your booking type and get started with your golf experience" />

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg space-x-1 md:space-x-2 p-1 shadow-lg border border-gray-200">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeTab === tabItem.id
                    ? 'bg-gradient-to-b from-primary-green to-primary-green-light text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Widget Container */}
        <div 
          key={activeTab}
          className={`bg-white rounded-2xl shadow-lg min-h-[500px] ${activeTab === 'membership' ? 'w-full max-w-6xl' : 'w-screen md:w-[600px]'}`}
        >
          {renderWidget()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Book
