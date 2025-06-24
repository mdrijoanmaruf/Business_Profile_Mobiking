import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const phoneNumber = "01833432077"
  const email = "mamunbhuiyan733@gmail.com"
  const location = "Jamuna Future Park, Dhaka"

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_self')
  }

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/mamunz33', '_blank')
  }

  const handleLocationClick = () => {
    const encodedLocation = encodeURIComponent(location)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank')
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      <div 
        onClick={handleCallClick}
        className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
          <FaPhone className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-300 text-xs">Call / WhatsApp</p>
          <p className="text-white font-medium">01833432077</p>
        </div>
      </div>
      
      <div 
        onClick={handleEmailClick}
        className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
          <FaEnvelope className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-300 text-xs">Email</p>
          <p className="text-white font-medium">mamunbhuiyan733@gmail.com</p>
        </div>
      </div>
      
      <div 
        onClick={handleFacebookClick}
        className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
          <FaFacebook className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-300 text-xs">Facebook</p>
          <p className="text-white font-medium">Mamun Bhuiyan</p>
        </div>
      </div>
      
      <div 
        onClick={handleLocationClick}
        className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-4">
          <FaMapMarkerAlt className="text-white text-lg" />
        </div>
        <div>
          <p className="text-gray-300 text-xs">Shop Location</p>
          <p className="text-white font-medium">Level 4, Block D, Shop: 0051C1, Jamuna Future Park , Dhaka</p>
        </div>
      </div>
    </div>
  )
}

export default Contact