import React from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import rihan from '../../public/Mamun.png'

const Header = () => {
  const handleProfileClick = () => {
    window.open('https://www.facebook.com/mamunz33', '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+8801833432077', '_self')
  }

  const handleWhatsAppClick = () => {
    const message = "Hi! I found your mobile repair service. I need help with my phone."
    const whatsappUrl = `https://wa.me/8801833432077?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:mamunbhuiyan733@gmail.com', '_self')
  }

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/mamunz33', '_blank')
  }

  const handleLocationClick = () => {
    const location = "Jamuna Future Park, Dhaka"
    const encodedLocation = encodeURIComponent(location)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank')
  }

  return (
    <div className="relative p-8 text-center bg-gradient-to-b from-transparent to-black/10">
      {/* Profile Image with enhanced styling */}
      <div 
        onClick={handleProfileClick}
        className="relative w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 via-green-400 to-blue-600 p-1 cursor-pointer hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
      >
        <img 
          src={rihan}
          alt="Mamun Bhuiyan"
          className="w-full h-full object-cover object-top rounded-full border-2 border-white/20"
        />
        {/* Online indicator */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Name and Title with enhanced styling */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-3 tracking-wide">
          Mamun Bhuiyan
        </h1>
        
        {/* Shop Name with special styling */}
        <div className="relative inline-block mb-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-1 relative">
            MovieKing
          </h2>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
        </div>
        
        <p className="text-green-200 text-lg font-medium mb-2">Mobile Phone Technician</p>
      </div>

      {/* Enhanced description */}
      <div className="mb-8">
        <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-sm mx-auto">
          🔧 Professional mobile phone repair services with 5+ years experience. 
          <span className="text-green-200 font-medium"> Quick fixes, quality parts, and affordable prices.</span>
        </p>
        
        {/* Service highlights */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-medium border border-green-500/30">
            ⚡ Same Day Service
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-medium border border-blue-500/30">
            🛡️ Warranty
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-medium border border-purple-500/30">
            💯 Quality Parts
          </span>
        </div> */}
      </div>
      
      {/* Enhanced Quick Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleCallClick}
          className="group w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center hover:from-green-500 hover:to-green-700 transition-all duration-300 cursor-pointer hover:scale-110 transform shadow-lg hover:shadow-green-500/25"
          title="Call Now"
        >
          <FaPhone className="text-white text-sm group-hover:animate-bounce" />
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="group w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center hover:from-green-600 hover:to-green-800 transition-all duration-300 cursor-pointer hover:scale-110 transform shadow-lg hover:shadow-green-600/25"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-white text-sm group-hover:animate-bounce" />
        </button>
        
        <button
          onClick={handleEmailClick}
          className="group w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center hover:from-purple-600 hover:to-purple-800 transition-all duration-300 cursor-pointer hover:scale-110 transform shadow-lg hover:shadow-purple-500/25"
          title="Email"
        >
          <FaEnvelope className="text-white text-sm group-hover:animate-bounce" />
        </button>

        <button
          onClick={handleFacebookClick}
          className="group w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300 cursor-pointer hover:scale-110 transform shadow-lg hover:shadow-blue-500/25"
          title="Facebook"
        >
          <FaFacebook className="text-white text-sm group-hover:animate-bounce" />
        </button>

        <button
          onClick={handleLocationClick}
          className="group w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-800 transition-all duration-300 cursor-pointer hover:scale-110 transform shadow-lg hover:shadow-red-500/25"
          title="Location"
        >
          <FaMapMarkerAlt className="text-white text-sm group-hover:animate-bounce" />
        </button>
      </div>
    </div>
  )
}

export default Header