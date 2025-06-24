import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Info from './Components/Info'

function BusinessCard() {
  const [activeTab, setActiveTab] = useState('contact')

  const renderContent = () => {
    switch(activeTab) {
      case 'contact':
        return <Contact />
      case 'services':
        return <Services />
      case 'info':
        return <Info />
      default:
        return <Contact />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
        
        {/* Profile Section */}
        <Header />

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-700/50">
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'contact'
                ? 'text-white bg-slate-800/50 border-b-2 border-blue-400'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'services'
                ? 'text-white bg-slate-800/50 border-b-2 border-blue-400'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'info'
                ? 'text-white bg-slate-800/50 border-b-2 border-blue-400'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
            }`}
          >
            Info
          </button>
        </div>

        {/* Content Sections */}
        <div className="p-6">
          {renderContent()}
        </div>

        {/* Action Buttons */}
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return <BusinessCard />
}

export default App
