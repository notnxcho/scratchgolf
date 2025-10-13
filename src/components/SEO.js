import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Scratch Lab Golf - Indoor Golf Simulator & Training",
  description = "Professional indoor golf simulator with Trackman technology. Book sessions, get PGA-level instruction, and improve your game 24/7 at our Walnut Creek location.",
  keywords = "indoor golf simulator, Trackman, golf training, PGA instruction, Walnut Creek golf, golf lessons, golf simulator bay",
  image = "/logo512.png",
  url = "https://scratchlabgolf.com",
  type = "website"
}) => {
  const fullTitle = title.includes("Scratch Lab Golf") ? title : `${title} | Scratch Lab Golf`
  
  // Structured data as a string to avoid hydration issues
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Scratch Lab Golf",
    "description": "Professional indoor golf simulator with Trackman technology and PGA-level instruction",
    "url": "https://scratchlabgolf.com",
    "telephone": "+1 (551) 556-4469",
    "email": "info@scratchlabgolf.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1637 Mount Diablo Blvd",
      "addressLocality": "Walnut Creek",
      "addressRegion": "CA",
      "postalCode": "94596",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.9101",
      "longitude": "-122.0652"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$25-$150",
    "sport": "Golf",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Trackman Simulator",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "PGA Instruction",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Climate Controlled",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/scratchlabgolf",
      "https://www.instagram.com/scratchlabgolf"
    ]
  })
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Scratch Lab Golf" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Scratch Lab Golf" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#12AF9A" />
      <meta name="msapplication-TileColor" content="#12AF9A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Scratch Lab Golf" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
    </Helmet>
  )
}

export default SEO
