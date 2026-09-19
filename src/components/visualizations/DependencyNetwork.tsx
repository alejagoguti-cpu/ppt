'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'

interface DependencyNetworkProps {
  section: ThesisSection
  type: string
}

const networkDescriptions: Record<string, {title: string, nodes: string[], connections: string[]}> = {
  'huaqiangbei-network': {
    title: 'Huaqiangbei Hardware Ecosystem',
    nodes: ['Component Suppliers', 'Designers', 'Manufacturers', 'Integrators', 'Distributors', 'Retailers'],
    connections: [
      'Suppliers → Designers (specs)',
      'Designers → Manufacturers (CAD)',
      'Manufacturers → Integrators (assembly)',
      'Integrators → Distributors (logistics)',
      'Distributors → Retailers (sales)',
    ]
  },
  'supply-chain-visualization': {
    title: 'Global Electronics Supply Chain',
    nodes: ['Raw Materials', 'Components', 'Assembly', 'Testing', 'Logistics', 'Markets'],
    connections: [
      'Materials flow to components',
      'Components to assembly hubs',
      'Assembly to testing',
      'Testing to logistics',
      'Logistics to markets',
    ]
  },
  'jac-structure': {
    title: 'Grassroots Governance Structure',
    nodes: ['Residents', 'JACs (Community Orgs)', 'Local Services', 'City Gov', 'Decision-making'],
    connections: [
      'Residents organize in JACs',
      'JACs coordinate local needs',
      'JACs interface with city government',
      'Decisions made at community level',
    ]
  },
  'network-centralization': {
    title: 'Silent Centralization Pattern',
    nodes: ['Distributed Nodes', 'Data Hub', 'Central Authority', 'Optimization', 'Feedback'],
    connections: [
      'Multiple nodes generate data',
      'Data flows to central hub',
      'Authority makes decisions',
      'Optimization rules apply',
      'Feedback to all nodes',
    ]
  },
  'corabastos-network-before': {
    title: 'Traditional Market Network',
    nodes: ['Producers', 'Vendors', 'Traders', 'Consumers', 'Price Discovery'],
    connections: [
      'Producers bring goods',
      'Multiple vendors compete',
      'Traders add value',
      'Consumers decide',
      'Prices emerge from transactions',
    ]
  },
  'market-structure': {
    title: 'Market Structure & Networks',
    nodes: ['Supply', 'Distribution', 'Exchange', 'Consumption', 'Feedback'],
    connections: [
      'Supply meets distribution',
      'Exchange at market',
      'Consumers decide purchases',
      'Feedback to suppliers',
    ]
  },
  'data-flow-diagram': {
    title: 'Smart City Data Flow',
    nodes: ['Sensors', 'Data Collection', 'Central Hub', 'Analysis', 'Decisions', 'Implementation'],
    connections: [
      'Sensors collect real-time data',
      'Data aggregated centrally',
      'Hub analyzes patterns',
      'Authority makes decisions',
      'Systems implement changes',
    ]
  },
}

export default function DependencyNetwork({ section, type }: DependencyNetworkProps) {
  const network = networkDescriptions[type] || {
    title: 'Network Visualization',
    nodes: ['Node A', 'Node B', 'Node C', 'Node D', 'Node E'],
    connections: ['A→B', 'B→C', 'C→D', 'D→E'],
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <h3 className="font-bold mb-6 text-lg">{network.title}</h3>

      {/* Network diagram placeholder */}
      <div className="w-full h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-slate-700 flex items-center justify-center mb-6 relative overflow-hidden">
        {/* Animated nodes */}
        <div className="flex flex-wrap justify-center gap-4 w-full p-4">
          {network.nodes.map((node, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity }}
              className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/50 text-xs font-semibold text-center whitespace-nowrap"
            >
              {node}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connections list */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-300 mb-4">Key Connections:</p>
        {network.connections.map((conn, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 text-sm text-slate-400"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            {conn}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
