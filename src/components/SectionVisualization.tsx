'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'
import ComparisonChart from './visualizations/ComparisonChart'
import GiniChart from './visualizations/GiniChart'
import TimelineChart from './visualizations/TimelineChart'
import MapVisualization from './visualizations/MapVisualization'
import DependencyNetwork from './visualizations/DependencyNetwork'
import InteractiveMap from './visualizations/InteractiveMap'
import AdvancedCharts from './visualizations/AdvancedCharts'

interface SectionVisualizationProps {
  type: string
  section: ThesisSection
}

const visualizationComponents: Record<string, React.ComponentType<any>> = {
  // Basic maps - now using InteractiveMap
  'map-location': InteractiveMap,
  'density-map': InteractiveMap,
  'growth-map': InteractiveMap,
  'water-system-map': InteractiveMap,
  'protected-areas-map': InteractiveMap,
  'mangrove-map': InteractiveMap,
  'cooperation-map': InteractiveMap,
  'qianhai-map': InteractiveMap,
  'lok-ma-chau-map': InteractiveMap,
  'bogota-map': InteractiveMap,
  'settlement-pattern': InteractiveMap,
  'catalhoyuk-reconstruction': InteractiveMap,
  'anchor-companies-map': InteractiveMap,
  'sponge-city': InteractiveMap,
  'park-layout': InteractiveMap,

  // Comparison and basic charts
  'skyline-comparison': ComparisonChart,
  'density-chart': ComparisonChart,
  'economic-structure': ComparisonChart,
  'four-pillars': ComparisonChart,
  'startup-ecosystem': ComparisonChart,
  'rd-intensity': ComparisonChart,
  'anchor-companies': ComparisonChart,
  'poverty-rate': ComparisonChart,
  'housing-inequality': ComparisonChart,
  'income-distribution': ComparisonChart,
  'employment-sectors': ComparisonChart,
  'hukou-system': ComparisonChart,
  'governance-structure': ComparisonChart,
  'power-concentration': ComparisonChart,
  'strategic-planning': ComparisonChart,
  'building-heights': ComparisonChart,
  'land-system': ComparisonChart,
  'lease-terms': ComparisonChart,
  'water-stress': ComparisonChart,
  'biodiversity': ComparisonChart,
  'rd-comparison': ComparisonChart,
  'intensity-chart': ComparisonChart,
  'startup-landscape': ComparisonChart,
  'incubator-data': ComparisonChart,
  'market-cap': ComparisonChart,
  'zone-comparison': ComparisonChart,
  'governance-comparison': ComparisonChart,
  'patio-bonito-phase1': ComparisonChart,
  'patio-bonito-phase2': ComparisonChart,
  'absorption-model': ComparisonChart,
  'el-amparo-phase1': ComparisonChart,
  'el-amparo-phase2': ComparisonChart,
  'formalization-comparison': ComparisonChart,
  'power-concentration-diagram': ComparisonChart,
  'smart-city-models': ComparisonChart,
  'framing-comparison': ComparisonChart,
  'centralization-risk': ComparisonChart,
  'institutional-comparison': ComparisonChart,
  'decision-making-models': ComparisonChart,
  'innovation-mechanisms': ComparisonChart,
  'diversity-efficiency-tradeoff': ComparisonChart,
  'risk-comparison': ComparisonChart,
  'resilience-models': ComparisonChart,
  'complementarity-diagram': ComparisonChart,
  'cooperation-gains': ComparisonChart,
  'organization-spectrum': ComparisonChart,
  'cooperation-design': ComparisonChart,
  'data-governance-models': ComparisonChart,
  'distributed-vs-centralized': ComparisonChart,
  'tradeoff-matrix': ComparisonChart,
  'collective-vs-state': ComparisonChart,
  'rd-investment': ComparisonChart,

  // Gini charts
  'gini-chart': GiniChart,
  'gini-comparison': GiniChart,

  // Timeline charts
  'population-growth': TimelineChart,
  'innovation-timeline': TimelineChart,
  'institutions-timeline': TimelineChart,
  'political-timeline': TimelineChart,
  'policy-timeline': TimelineChart,
  'land-reform-impact': TimelineChart,
  'ecosystem-timeline': TimelineChart,
  'timeline-both': TimelineChart,
  'synthesis-timeline': TimelineChart,

  // Network diagrams
  'huaqiangbei-network': DependencyNetwork,
  'supply-chain-visualization': DependencyNetwork,
  'jac-structure': DependencyNetwork,
  'network-centralization': DependencyNetwork,
  'corabastos-network-before': DependencyNetwork,
  'market-structure': DependencyNetwork,
  'data-flow-diagram': DependencyNetwork,
}

export default function SectionVisualization({ type, section }: SectionVisualizationProps) {
  const Component = visualizationComponents[type]

  if (!Component) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass p-8 rounded-lg border border-slate-700 text-center"
      >
        <p className="text-slate-400">Visualization: {type}</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Component section={section} type={type} />
    </motion.div>
  )
}
