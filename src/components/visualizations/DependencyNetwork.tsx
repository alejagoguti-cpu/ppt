'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'

interface DependencyNetworkProps {
  section: ThesisSection
  type: string
}

// Estado: 0 = normal, 1 = iluminado, 2 = conexiones visibles, 3 = oculto
const networkData: Record<string, {title: string, nodes: string[], links: Array<[number, number]>}> = {
  'huaqiangbei-network': {
    title: 'Huaqiangbei Hardware Ecosystem',
    nodes: ['Suppliers', 'Designers', 'Manufacturers', 'Integrators', 'Distributors', 'Retailers'],
    links: [[0,1], [1,2], [2,3], [3,4], [4,5]]
  },
  'supply-chain-visualization': {
    title: 'Global Electronics Supply Chain',
    nodes: ['Raw Materials', 'Components', 'Assembly', 'Testing', 'Logistics', 'Markets'],
    links: [[0,1], [1,2], [2,3], [3,4], [4,5]]
  },
  'jac-structure': {
    title: 'Grassroots Governance Structure',
    nodes: ['Residents', 'JACs', 'Services', 'Gov', 'Decisions'],
    links: [[0,1], [1,2], [1,3], [1,4]]
  },
  'network-centralization': {
    title: 'Silent Centralization',
    nodes: ['Nodes', 'Data', 'Authority', 'Optimization', 'Feedback'],
    links: [[0,1], [1,2], [2,3], [3,4], [4,0]]
  },
  'data-flow-diagram': {
    title: 'Smart City Data Flow',
    nodes: ['Sensors', 'Collection', 'Hub', 'Analysis', 'Decisions', 'Implementation'],
    links: [[0,1], [1,2], [2,3], [3,4], [4,5]]
  },
}

export default function DependencyNetwork({ section, type }: DependencyNetworkProps) {
  const [clickState, setClickState] = useState(0) // 0=normal, 1=iluminado, 2=conexiones, 3=oculto

  const network = networkData[type] || {
    title: 'Network',
    nodes: ['A', 'B', 'C', 'D'],
    links: [[0,1], [1,2], [2,3]]
  }

  const toggleState = () => {
    setClickState((prev) => (prev + 1) % 4)
  }

  // Generar posiciones circulares para los nodos
  const getNodePosition = (index: number) => {
    const angle = (index / network.nodes.length) * Math.PI * 2
    const radius = 140
    return {
      x: 320 + radius * Math.cos(angle),
      y: 180 + radius * Math.sin(angle),
    }
  }

  const isIlluminated = clickState === 1
  const showConnections = clickState === 2
  const isHidden = clickState === 3

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">{network.title}</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((state) => (
            <div
              key={state}
              className={`w-2 h-2 rounded-full transition-all ${
                clickState === state ? 'bg-blue-500 scale-150' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Network visualization */}
      <motion.div
        onClick={toggleState}
        className="w-full h-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-700 flex items-center justify-center mb-6 relative overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors"
      >
        <svg className="w-full h-full absolute" viewBox="0 0 640 360">
          {/* Conexiones SVG */}
          {!isHidden && showConnections && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              {network.links.map((link, i) => {
                const from = getNodePosition(link[0])
                const to = getNodePosition(link[1])
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                )
              })}
            </motion.g>
          )}

          {/* Nodos */}
          {!isHidden && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {network.nodes.map((node, i) => {
                const pos = getNodePosition(i)
                return (
                  <motion.g
                    key={`node-${i}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {/* Glow effect cuando está iluminado */}
                    {isIlluminated && (
                      <motion.circle
                        cx={pos.x}
                        cy={pos.y}
                        r="32"
                        fill="#3b82f6"
                        opacity="0.2"
                        animate={{ r: [32, 45, 32] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Node circle */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="24"
                      fill={isIlluminated ? '#3b82f6' : '#1e293b'}
                      stroke={isIlluminated ? '#60a5fa' : '#475569'}
                      strokeWidth="2"
                    />

                    {/* Node text */}
                    <text
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dy="0.3em"
                      fontSize="11"
                      fill="#e2e8f0"
                      className="pointer-events-none font-semibold"
                    >
                      {node}
                    </text>
                  </motion.g>
                )
              })}
            </motion.g>
          )}
        </svg>

        {/* Click hint */}
        <div className="absolute top-4 left-4 text-xs text-slate-500">
          {isHidden ? '✓ Oculto - Haz clic para mostrar' : `Estado ${clickState + 1}/4 - Haz clic para cambiar`}
        </div>
      </motion.div>

      {/* Estado info */}
      <div className="space-y-2 text-sm">
        <p className="font-semibold text-slate-300">
          {isHidden ? '🔇 Red Oculta' : isIlluminated ? '💡 Nodos Iluminados' : showConnections ? '🔗 Conexiones Visibles' : '👁️ Vista Normal'}
        </p>
        <p className="text-slate-500">
          {isHidden
            ? 'Haz clic para mostrar la red nuevamente'
            : isIlluminated
            ? 'Los nodos están iluminados. Haz clic para ver las conexiones.'
            : showConnections
            ? 'Conexiones visibles entre nodos. Haz clic para ocultar.'
            : 'Haz clic para iluminar los nodos.'}
        </p>
      </div>

      {/* Conexiones en lista para referencia */}
      {showConnections && !isHidden && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-slate-700 space-y-2"
        >
          <p className="text-xs font-semibold text-slate-300 mb-3">Flujos:</p>
          {network.links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {network.nodes[link[0]]} → {network.nodes[link[1]]}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
