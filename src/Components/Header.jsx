import React from 'react'
import rihan from '../../public/Rihan.jpg'

const Header = () => {
  const handleProfileClick = () => {
    window.open('https://www.facebook.com/rihan.hasan69', '_blank')
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
      <p className="text-gray-300 text-sm leading-relaxed">
        Professional mobile phone repair services. Quick fixes, quality parts, and affordable prices.
      </p>
    </div>
  )
}

export default Header