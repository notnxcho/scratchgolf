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
    if (tab && ['reservation', /* 'event', */ 'prepaid', 'membership', 'giftcard'].includes(tab)) {
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
            script.src = 'https://bookla.pages.dev/booking-widget-standalone-v1.2.0.global.js'
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
              "codeEnabled": true,
              "addonsEnabled": true,
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
                  "acceptText": "I accept the terms and conditions, privacy policy, and waiver of liability. I acknowledge that I will be directly charged for going over my reservation's intended duration.",
                  "urls":[{
                    "text": "terms and conditions",
                    "url": "/legal/terms"
                  },{
                    "text": "privacy policy",
                    "url": "/legal/privacy"
                  },{
                    "text": "waiver of liability",
                    "url": "/legal/liability"
                  }]
                },
                "code":{
                  "fieldLabel": "Pre-Paid or Membership Code"
                },
                "addons":{
                  "title": "Add Guests or Club Rentals"
                }
              },
              "servicesConfig":{
                "services":[{
                  "serviceId": "d576a2c3-f330-41a7-9b21-decf19751acd",
                  "title": "",
                  "description": "Includes 1 complimentary guest.",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "0368b030-c55b-4748-8744-c8deeb669183",
                  "title": "",
                  "description": "Professional golf instruction for all ages.",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "5d517c62-5d37-447b-8813-7a555ed00c88",
                  "title": "",
                  "description": "Personal training to elevate your strength and flexibility.",
                  "hideResourcePicker": false,
                  "selectResourceTitle": "",
                  "anyResourceOption": ""
                },{
                  "serviceId": "717b8c1d-94e5-4ec8-961a-cbe3c264c20a",
                  "title": "",
                  "description": "Don't want to leave your house? Install a Trackman of your own.",
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
      // } else if (activeTab === 'event') {
      //   // Load Typeform for events
      //   if (widgetRef.current) {
      //     widgetRef.current.innerHTML = '<div data-tf-live="01K7BQWT8R0EER4PYVFHD9ZH2R"></div>'
      //     
      //     // Remove existing Typeform script to force reload
      //     const existingScript = document.querySelector('script[src*="embed.typeform.com"]')
      //     if (existingScript) {
      //       existingScript.remove()
      //     }
      //     
      //     // Load Typeform script
      //     const script = document.createElement('script')
      //     script.src = '//embed.typeform.com/next/embed.js'
      //     script.async = true
      //     document.head.appendChild(script)
      //   }
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
        // Load Bookla subscription widget for memberships
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
              "customFormFields": [{
                "type": "text",
                "labelText": "Phone Number",
                "required": true,
                "errorText": "Please enter your address",
                "inputWidth": "auto/span 1"
              }, {
                "type": "textarea",
                "labelText": "Address",
                "required": true,
                "errorText": "Please enter your address",
                "inputWidth": "auto/span 1"
              }],
              "localization": {
                "terms": {
                  "urls": [{
                    "text": "terms and conditions",
                    "url": "/terms"
                  }, {
                    "text": "privacy policy",
                    "url": "/privacy"
                  }, {
                    "text": "waiver of liability",
                    "url": "/waiver-of-liability"
                  }]
                },
                "subscriptions": {
                  "title": "Choose Membership Tier",
                  "subtitle": "Select an member",
                  "summaryTitle": "Membership Summary",
                  "noSubscriptions": "No memberships available"
                }
              },
              "subscriptionsConfig": {
                "subscriptions": [{
                  "subscriptionId": "39a096c9-f607-4300-b098-2197e8fbe574",
                  "title": "Monthly Unlimited Bronze",
                  "description": "24/7, unlimited bookings. 1 hour max. per day. $40 per additional hour. 2 free guest tickets per month."
                }, {
                  "subscriptionId": "ce9811ad-1834-4aac-b088-1f3ef2264c86",
                  "title": "Monthly Unlimited Silver",
                  "description": "24/7, unlimited bookings. 2 hours max. per day. $35 per additional hour. 4 free guest tickets per month"
                }, {
                  "subscriptionId": "82677688-7802-4719-9a63-771c2807980e",
                  "title": "Monthly Unlimited Gold",
                  "description": "24/7, unlimited bookings. 3 hours max. per day. $30 per additional hour. 8 free guest tickets per month"
                }]
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize the Bookla subscription widget:', error)
        }
      } else if (activeTab === 'giftcard') {
        // Load Bookla gift card widget
        try {
          // Load the Bookla script if not already loaded (v1.1.2 for gift card widget)
          const scriptId = 'bookla-giftcard-widget-script'
          let script = document.getElementById(scriptId)
          
          if (!script) {
            script = document.createElement('script')
            script.id = scriptId
            script.src = 'https://bookla.pages.dev/booking-widget-standalone-v1.1.2.global.js'
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

          // Initialize the gift card widget
          if (window.BookingWidgetStandalone && widgetRef.current) {
            window.BookingWidgetStandalone.initGiftCardWidget(widgetRef.current, {
              "apiKey": "oEwJ3Wdm3A2UDSMxG1tynDk59zuUA1eLjpd9",
              "region": "US",
              "companyId": "59971f2d-4659-473d-8e67-2bf27fc62971",
              "transitionType": "slide",
              "guestEnabled": true,
              "termsEnabled": false,
              "customFormFields": [],
              "localization": {
                "terms": {
                  "urls": [{
                    "text": "terms and conditions",
                    "url": "/terms"
                  }]
                }
              },
              "giftCardsConfig": {
                "giftCards": []
              }
            })
          }
        } catch (error) {
          console.error('Failed to initialize the Bookla gift card widget:', error)
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
    // { id: 'event', label: 'Event' },
    { id: 'prepaid', label: 'Pre-Paid Package' },
    { id: 'membership', label: 'Membership' },
    { id: 'giftcard', label: 'Gift Card' }
  ]

  const renderWidget = () => {
    // All tabs now use the widget container
    return <div ref={widgetRef} className="w-screen min-h-[500px] md:w-[600px]"></div>
  }

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO 
        title="Book a Time - Reserve Your Golf Session"
        description="Book your indoor golf simulator session at Scratch Lab Golf. Choose from reservations, events, pre-paid packages, or memberships. Available 24/7 in Walnut Creek, CA."
        keywords="book golf simulator, reserve golf bay, golf booking, Walnut Creek golf reservation, indoor golf booking"
        image="/og-image-home.jpg"
        url="https://scratchlabgolf.com/book"
      />
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto px-4 py-16 mt-[40px] md:mt-[80px]">
        {/* Header */}
        <SectionHeader title="Book a Time" description="Choose your booking type and get started with your golf experience" />

        {/* Tab Navigation */}
        <div className="flex justify-center w-full">
          <div className="bg-white rounded-lg space-x-1 md:space-x-2 p-1 shadow-lg border border-gray-200 flex items-center justify-center flex-wrap w-full md:w-auto">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => handleTabChange(tabItem.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-all duration-200 flex-shrink-0 min-w-max flex-grow ${
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
          className="bg-white rounded-2xl shadow-lg min-h-[500px] w-screen md:w-[600px]"
        >
          {renderWidget()}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Book
