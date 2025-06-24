import { useState } from 'react'
import './App.css'

function BusinessCard() {
  const [activeTab, setActiveTab] = useState('contact')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        
        {/* Profile Section */}
        <div className="relative p-8 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-700">
              📱
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Rihan Mobile Repair</h1>
          <p className="text-green-200 text-lg mb-4">Mobile Phone Technician</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Professional mobile phone repair services. Quick fixes, quality parts, and affordable prices.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/20">
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'contact'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'services'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'info'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Info
          </button>
        </div>

        {/* Content Sections */}
        <div className="p-6">
          {activeTab === 'contact' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white">📞</span>
                </div>
                <div>
                  <p className="text-gray-300 text-xs">Call / WhatsApp</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white">💬</span>
                </div>
                <div>
                  <p className="text-gray-300 text-xs">SMS</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white">📧</span>
                </div>
                <div>
                  <p className="text-gray-300 text-xs">Email</p>
                  <p className="text-white font-medium">rihan.repair@gmail.com</p>
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

              <div className="flex items-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white">🏠</span>
                </div>
                <div>
                  <p className="text-gray-300 text-xs">Home Service</p>
                  <p className="text-white font-medium">Available on request</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="mr-2">🔧</span> Repair Services
                </h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Screen Replacement (LCD/OLED)</li>
                  <li>• Battery Replacement</li>
                  <li>• Charging Port Repair</li>
                  <li>• Camera Repair</li>
                  <li>• Speaker & Microphone Fix</li>
                  <li>• Water Damage Repair</li>
                </ul>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="mr-2">📱</span> Supported Brands
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['iPhone', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google'].map((brand) => (
                    <span key={brand} className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="mr-2">⚡</span> Quick Service
                </h3>
                <p className="text-gray-300 text-sm">
                  Most repairs completed within 30-60 minutes. Same day service available.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'info' && (
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
                  <li>• 3 months warranty on repairs</li>
                  <li>• Original & high-quality parts</li>
                  <li>• Free diagnosis</li>
                </ul>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="mr-2">💳</span> Payment Methods
                </h3>
                <p className="text-gray-300 text-sm">
                  Cash, Card, UPI, PayPal accepted
                </p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="mr-2">⭐</span> Experience
                </h3>
                <p className="text-gray-300 text-sm">
                  5+ years in mobile repair industry with 1000+ satisfied customers
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-white/20">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105">
              Call Now
            </button>
            <button className="bg-white/10 text-white py-3 px-4 rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return <BusinessCard />
}

export default App
