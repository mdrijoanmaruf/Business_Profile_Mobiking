import React from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import rihan from '../../public/Rihan.jpg'

const Header = () => {
  const handleProfileClick = () => {
    window.open('https://www.facebook.com/rihan.hasan69', '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+8801617061569', '_self')
  }

  const handleWhatsAppClick = () => {
    const message = "Hi! I found your mobile repair service. I need help with my phone."
    const whatsappUrl = `https://wa.me/8801617061569?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:rihanhasan01617@gmail.com', '_self')
  }

  return (
    <div className="relative p-8 text-center">
      <div 
        onClick={handleProfileClick}
        className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-1 cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <img 
          src={rihan}
          alt="Rihan"
          className="w-full h-full object-cover object-top rounded-full"
        />
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">Rihan Mobile Repair</h1>
      <p className="text-green-200 text-lg mb-4">Mobile Phone Technician</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        Professional mobile phone repair services. Quick fixes, quality parts, and affordable prices.
      </p>
      
      {/* Quick Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleCallClick}
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer hover:scale-110 transform"
          title="Call Now"
        >
          <FaPhone className="text-white text-lg" />
        </button>
        
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer hover:scale-110 transform"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-white text-lg" />
        </button>
        
        <button
          onClick={handleEmailClick}
          className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer hover:scale-110 transform"
          title="Email"
        >
          <FaEnvelope className="text-white text-lg" />
        </button>
      </div>
    </div>
  )
}

export default Header