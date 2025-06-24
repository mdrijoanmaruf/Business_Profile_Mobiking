import React from 'react'

const Footer = () => {
  const phoneNumber = "8801833432077" // Added country code +880 and removed leading 0
  
  const handleCallNow = () => {
    window.open(`tel:+8801833432077`, '_self') // Added + for international format
  }
  
  const handleWhatsApp = () => {
    const message = "Hi! I found your mobile repair service. I need help with my phone."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="p-6 border-t border-white/20">
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={handleCallNow}
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105"
        >
          Call Now
        </button>
        <button 
          onClick={handleWhatsApp}
          className="bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20"
        >
          WhatsApp
        </button>
      </div>
    </div>
  )
}

export default Footer