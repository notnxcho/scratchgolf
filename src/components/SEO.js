import { useEffect } from 'react'

const SEO = ({ 
  title = "Scratch Lab Golf - Indoor Golf Simulator & Training",
  description = "Professional indoor golf simulator with Trackman technology. Book sessions, get PGA-level instruction, and improve your game 24/7 at our Walnut Creek location.",
  keywords = "indoor golf simulator, Trackman, golf training, PGA instruction, Walnut Creek golf, golf lessons, golf simulator bay",
  image = "/logo512.png",
  url = "https://scratchlabgolf.com",
  type = "website"
}) => {
  const fullTitle = title.includes("Scratch Lab Golf") ? title : `${title} | Scratch Lab Golf`
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle
    
    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
    
    // Update or create link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }
    
    // Basic Meta Tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Scratch Lab Golf')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('theme-color', '#12AF9A')
    updateMetaTag('msapplication-TileColor', '#12AF9A')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    updateMetaTag('apple-mobile-web-app-title', 'Scratch Lab Golf')
    
    // Open Graph / Facebook
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:site_name', 'Scratch Lab Golf', true)
    updateMetaTag('og:locale', 'en_US', true)
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:url', url, true)
    updateMetaTag('twitter:title', fullTitle, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    
    // Canonical URL
    updateLinkTag('canonical', url)
    
    // Structured Data
    const structuredData = {
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
    }
    
    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Add new structured data script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
    
  }, [fullTitle, description, keywords, image, url, type])
  
  return null
}

export default SEO
