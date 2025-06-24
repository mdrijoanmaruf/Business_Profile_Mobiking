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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-600/50 overflow-hidden">
        
        {/* Profile Section */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <Header />
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-600/50 bg-gradient-to-r from-slate-800/40 via-blue-800/30 to-slate-700/40">
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
              activeTab === 'contact'
                ? 'text-white bg-gradient-to-r from-blue-500/30 via-slate-600/20 to-blue-400/30 border-b-2 border-blue-400 shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:via-blue-800/20 hover:to-slate-600/40'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
              activeTab === 'services'
                ? 'text-white bg-gradient-to-r from-blue-500/30 via-slate-600/20 to-blue-400/30 border-b-2 border-blue-400 shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:via-blue-800/20 hover:to-slate-600/40'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${
              activeTab === 'info'
                ? 'text-white bg-gradient-to-r from-blue-500/30 via-slate-600/20 to-blue-400/30 border-b-2 border-blue-400 shadow-lg'
                : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:via-blue-800/20 hover:to-slate-600/40'
            }`}
          >
            Info
          </button>
        </div>

        {/* Content Sections */}
        <div className="p-6 bg-gradient-to-b from-slate-800/30 via-blue-900/20 to-slate-900/40">
          {renderContent()}
        </div>

        {/* Action Buttons */}
        <div className="bg-gradient-to-t from-slate-900/60 to-slate-800/40">
          <Footer />
        </div>
      </div>
    </div>
  )
}

function App() {
  return <BusinessCard />
}

export default App
