import React from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import ArrowDiagonal from '../components/icons/ArrowDiagonal'
import illustration404 from '../assets/404.png'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='w-screen min-h-screen flex flex-col items-center bg-[#f8f8f8]'>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        robots="noindex, nofollow"
      />
      <Navbar />
      
      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16 mt-[40px] md:mt-[80px]">
        <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
          {/* 404 Illustration */}
          <div className="w-full max-w-md">
            <img 
              src={illustration404} 
              alt="404 illustration" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Out of bounds!
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Looks like the page you're looking for doesn't exist.
            </p>
          </div>
          
          {/* Back to Home Button */}
          <div className="pt-4">
            <Button 
              onClick={() => navigate('/')}
              variant="default"
              icon={<ArrowDiagonal stroke="white" strokeWidth="1.5" />}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound

