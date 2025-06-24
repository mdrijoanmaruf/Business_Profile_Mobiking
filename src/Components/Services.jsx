import React from 'react'

const Services = () => {
  const brands = ['iPhone', 'Samsung', 'Huawei', 'Xiaomi', 'OnePlus', 'Google', 'Oppo', 'Vivo', 'Realme', 'Nokia', 'Sony', 'LG', 'Motorola', 'Nothing', 'Honor', 'Infinix']
  
  return (
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
          <li>• Motherboard Repair</li>
          <li>• Others..</li>
        </ul>
      </div>
      
      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-semibold mb-3 flex items-center">
          <span className="mr-2">📱</span> Supported Brands
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {brands.map((brand) => (
            <span key={brand} className="px-2 py-1 bg-green-500/20 text-green-200 rounded-full text-xs text-center">
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
          Most repairs completed within 1-2 hours. Same day service available.
        </p>
      </div>
    </div>
  )
}

export default Services