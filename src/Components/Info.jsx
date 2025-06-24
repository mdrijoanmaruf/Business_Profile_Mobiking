import React from 'react'

const Info = () => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">🕒</span> Working Hours
        </h3>
        <div className="text-gray-300 text-sm space-y-1">
          <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
          <p>Sunday: 11:00 AM - 6:00 PM</p>
          <p className="text-green-200">Emergency repairs available</p>
        </div>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">🛡️</span> Warranty
        </h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Original & high-quality parts</li>
          <li>• Free diagnosis</li>
        </ul>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">💳</span> Payment Methods
        </h3>
        <p className="text-gray-300 text-sm">
          Cash, Card, Bkash , Nagad
        </p>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <span className="mr-2">⭐</span> Experience
        </h3>
        <p className="text-gray-300 text-sm">
          1+ years in mobile repair industry with 100+ satisfied customers
        </p>
      </div>
    </div>
  )
}

export default Info