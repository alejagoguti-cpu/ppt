'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Locate, Maximize2 } from 'lucide-react'
import { ThesisSection } from '@/data/thesis'

interface InteractiveMapProps {
  section: ThesisSection
  type: string
}

interface Location {
  name: string
  lat: number
  lng: number
  icon: string
  description: string
}

const mapLocations: Record<string, Location[]> = {
  'map-location': [
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, icon: '🇭🇰', description: 'SAR of China - Common Law System' },
    { name: 'Shenzhen', lat: 22.5431, lng: 114.0579, icon: '🇨🇳', description: 'Special Economic Zone - State-Corporate' },
  ],
  'growth-map': [
    { name: 'Shenzhen 1980', lat: 22.5431, lng: 114.0579, icon: '🌾', description: 'Rural villages' },
    { name: 'Shenzhen 2000', lat: 22.5431, lng: 114.0579, icon: '🏗️', description: 'Rapid construction' },
    { name: 'Shenzhen 2024', lat: 22.5431, lng: 114.0579, icon: '🌆', description: 'Megacity' },
  ],
  'qianhai-map': [
    { name: 'Qianhai Zone', lat: 22.2742, lng: 113.9622, icon: '🤝', description: 'Cross-border cooperation' },
  ],
  'lok-ma-chau-map': [
    { name: 'Lok Ma Chau Loop', lat: 22.5053, lng: 114.0075, icon: '🔬', description: 'HK-SZ Innovation Park' },
  ],
  'water-system-map': [
    { name: 'Dongjiang Source', lat: 24.5, lng: 113.8, icon: '💧', description: 'Water source' },
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, icon: '🚰', description: 'Receives 70-80%' },
    { name: 'Shenzhen', lat: 22.5431, lng: 114.0579, icon: '🚰', description: 'Also dependent' },
  ],
  'protected-areas-map': [
    { name: 'Mai Po (HK)', lat: 22.4742, lng: 113.9856, icon: '🦆', description: 'Ramsar site' },
    { name: 'Futian (SZ)', lat: 22.6, lng: 114.0, icon: '🌴', description: 'Mangrove reserve' },
  ],
  'bogota-map': [
    { name: 'Patio Bonito', lat: 4.6426, lng: -74.1192, icon: '🏘️', description: 'Self-organized 1985' },
    { name: 'El Amparo', lat: 4.6200, lng: -74.1400, icon: '🏘️', description: 'Formed 1991' },
  ],
  'cooperation-map': [
    { name: 'Hong Kong', lat: 22.3193, lng: 114.1694, icon: '🇭🇰', description: 'Common Law' },
    { name: 'Qianhai', lat: 22.2742, lng: 113.9622, icon: '🤝', description: 'Cooperation Zone' },
    { name: 'Shenzhen', lat: 22.5431, lng: 114.0579, icon: '🇨🇳', description: 'State-Corporate' },
  ],
}

export default function InteractiveMap({ section, type }: InteractiveMapProps) {
  const locations = mapLocations[type] || mapLocations['map-location']
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [zoom, setZoom] = useState(10)

  const bounds = locations.length > 0 ? {
    minLat: Math.min(...locations.map(l => l.lat)),
    maxLat: Math.max(...locations.map(l => l.lat)),
    minLng: Math.min(...locations.map(l => l.lng)),
    maxLng: Math.max(...locations.map(l => l.lng)),
  } : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700 overflow-hidden"
    >
      {/* Map container */}
      <div className="w-full h-96 bg-gradient-to-br from-blue-950/50 to-slate-900 rounded-lg border border-slate-700 relative overflow-hidden mb-6">
        {/* Simplified map visualization */}
        <svg className="w-full h-full" viewBox="0 0 1000 800">
          {/* Background */}
          <rect width="1000" height="800" fill="url(#mapGradient)" />

          <defs>
            <radialGradient id="mapGradient" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Water features */}
          <circle cx="500" cy="400" r="150" fill="#0ea5e9" opacity="0.1" />

          {/* Location markers */}
          {locations.map((loc, i) => {
            const x = 200 + ((loc.lng - 113.8) * 200)
            const y = 200 + ((23 - loc.lat) * 200)

            return (
              <g key={i}>
                {/* Glow effect */}
                <circle
                  cx={x}
                  cy={y}
                  r="30"
                  fill="#3b82f6"
                  opacity="0.2"
                  className="animate-pulse"
                />

                {/* Marker */}
                <circle
                  cx={x}
                  cy={y}
                  r="15"
                  fill="#3b82f6"
                  opacity="0.8"
                  className="cursor-pointer hover:opacity-100 transition-opacity"
                  onClick={() => setSelectedLocation(loc)}
                />

                {/* Icon */}
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fontSize="16"
                  className="pointer-events-none"
                >
                  {loc.icon}
                </text>
              </g>
            )
          })}

          {/* Grid lines */}
          <line x1="0" y1="400" x2="1000" y2="400" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="800" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
        </svg>

        {/* Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg border border-blue-500/50 transition-colors">
            <Locate className="w-4 h-4" />
          </button>
          <button className="p-2 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg border border-blue-500/50 transition-colors">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Location list */}
      <div className="space-y-2 mb-4">
        <p className="text-sm font-semibold text-slate-300 mb-3">Locations ({locations.length})</p>
        {locations.map((loc, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedLocation(loc)}
            whileHover={{ x: 4 }}
            className={`w-full text-left p-3 rounded-lg transition-all ${
              selectedLocation?.name === loc.name
                ? 'bg-blue-500/20 border border-blue-500/50'
                : 'hover:bg-slate-800/50 border border-slate-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{loc.icon}</span>
              <div className="flex-1">
                <div className="font-semibold text-sm">{loc.name}</div>
                <div className="text-xs text-slate-500">{loc.description}</div>
              </div>
              <div className="text-xs text-slate-600">
                {loc.lat.toFixed(2)}°, {loc.lng.toFixed(2)}°
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Selected location info */}
      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/30"
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl">{selectedLocation.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{selectedLocation.description}</p>
              <p className="text-xs text-slate-600 mt-2">
                Coordinates: {selectedLocation.lat.toFixed(4)}°N, {selectedLocation.lng.toFixed(4)}°E
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <p className="text-xs text-slate-500 mt-4 text-center">
        💡 Tip: Click on locations for more details
      </p>
    </motion.div>
  )
}
