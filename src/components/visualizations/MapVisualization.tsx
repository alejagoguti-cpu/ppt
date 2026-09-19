'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'

interface MapVisualizationProps {
  section: ThesisSection
  type: string
}

export default function MapVisualization({ section, type }: MapVisualizationProps) {
  const locations: Record<string, {title: string, description: string, coords: string}> = {
    'map-location': {
      title: 'Hong Kong & Shenzhen Location',
      description: 'Pearl River Delta, Southern China',
      coords: 'Distance: 40km across border'
    },
    'growth-map': {
      title: 'Shenzhen Growth Pattern',
      description: 'Rapid horizontal expansion from border',
      coords: '1980s-2020s: 10,000% population growth'
    },
    'qianhai-map': {
      title: 'Qianhai Cooperation Zone',
      description: 'Cross-border innovation area',
      coords: 'Shenzhen side: designed for HK integration'
    },
    'lok-ma-chau-map': {
      title: 'Lok Ma Chau Loop',
      description: 'Hong Kong Innovation & Technology Park',
      coords: 'Two regulatory systems in one park'
    },
    'density-map': {
      title: 'Urban Density Comparison',
      description: 'Hong Kong: vertical density',
      coords: 'Shenzhen: horizontal expansion'
    },
    'protected-areas-map': {
      title: 'Protected Ecological Areas',
      description: 'Mai Po Wetlands (HK), Futian Mangroves (SZ)',
      coords: '40% HK territory protected, SZ expanding protection'
    },
    'water-system-map': {
      title: 'Dongjiang Water Transfer System',
      description: '83km system supplying both cities',
      coords: 'HK imports 70-80%, SZ also dependent'
    },
    'bogota-map': {
      title: 'Bogotá Case Study Areas',
      description: 'Patio Bonito & El Amparo neighborhoods',
      coords: 'Kennedy district, Bogotá, Colombia'
    },
    'settlement-pattern': {
      title: 'Urban Settlement Patterns',
      description: 'Self-organized vs planned development',
      coords: 'From autonomous to formalized'
    },
    'anchor-companies-map': {
      title: 'Shenzhen Anchor Company Locations',
      description: 'Tech ecosystem distribution',
      coords: 'Huawei, Tencent, DJI, BYD, ZTE, BGI hubs'
    },
    'cooperation-map': {
      title: 'Hong Kong-Shenzhen Cooperation Zones',
      description: 'Cross-border integration areas',
      coords: 'Testing complementarity of two systems'
    },
    'catalhoyuk-reconstruction': {
      title: 'Çatalhöyük Ancient City',
      description: '8000-7000 BCE urban settlement',
      coords: 'Central Turkey: self-organized without hierarchy'
    },
  }

  const location = locations[type] || {
    title: 'Geographic Visualization',
    description: 'Location map for this section',
    coords: 'Pearl River Delta region'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      {/* Placeholder map */}
      <div className="w-full h-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg border border-slate-700 flex flex-col items-center justify-center text-center p-6">
        <div className="text-4xl mb-4">🗺️</div>
        <h3 className="font-bold text-lg mb-2">{location.title}</h3>
        <p className="text-sm text-slate-400 mb-4">{location.description}</p>
        <p className="text-xs text-slate-500">{location.coords}</p>
      </div>

      <div className="mt-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 text-sm text-slate-300">
        <p className="mb-2">
          <strong>Note:</strong> Interactive map visualization for {location.title}
        </p>
        <p className="text-xs text-slate-500">
          Mapbox integration enables detailed geographic analysis of urban systems, resource dependencies, and cooperation zones.
        </p>
      </div>
    </motion.div>
  )
}
