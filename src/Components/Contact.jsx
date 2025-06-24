import React from 'react'

const Contact = () => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white">📞</span>
        </div>
        <div>
          <p className="text-gray-300 text-xs">Call / WhatsApp</p>
          <p className="text-white font-medium">01617061569</p>
        </div>
      </div>
      
      <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white">📧</span>
        </div>
        <div>
          <p className="text-gray-300 text-xs">Email</p>
          <p className="text-white font-medium">rihanhasan01617@gmail.com</p>
        </div>
      </div>
      
      <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-4">
          <span className="text-white">📍</span>
        </div>
        <div>
          <p className="text-gray-300 text-xs">Shop Location</p>
          <p className="text-white font-medium">123 Tech Street, Downtown</p>
        </div>
      </div>
    </div>
  )
}

export default Contact