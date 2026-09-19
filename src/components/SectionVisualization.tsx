'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'
import ComparisonChart from './visualizations/ComparisonChart'
import GiniChart from './visualizations/GiniChart'
import TimelineChart from './visualizations/TimelineChart'
import MapVisualization from './visualizations/MapVisualization'
import DependencyNetwork from './visualizations/DependencyNetwork'

interface SectionVisualizationProps {
  type: string
  section: ThesisSection
}

const visualizationComponents: Record<string, React.ComponentType<any>> = {
  'skyline-comparison': ComparisonChart,
  'map-location': MapVisualization,
  'density-chart': ComparisonChart,
  'population-growth': TimelineChart,
  'innovation-timeline': TimelineChart,
  'rd-investment': ComparisonChart,
  'economic-structure': ComparisonChart,
  'four-pillars': ComparisonChart,
  'startup-ecosystem': ComparisonChart,
  'rd-intensity': ComparisonChart,
  'anchor-companies': ComparisonChart,
  'poverty-rate': ComparisonChart,
  'housing-inequality': ComparisonChart,
  'gini-chart': GiniChart,
  'income-distribution': ComparisonChart,
  'employment-sectors': ComparisonChart,
  'hukou-system': ComparisonChart,
  'gini-comparison': GiniChart,
  'governance-structure': ComparisonChart,
  'institutions-timeline': TimelineChart,
  'political-timeline': TimelineChart,
  'power-concentration': ComparisonChart,
  'strategic-planning': ComparisonChart,
  'land-reform-impact': TimelineChart,
  'density-map': MapVisualization,
  'building-heights': ComparisonChart,
  'land-system': ComparisonChart,
  'lease-terms': ComparisonChart,
  'growth-map': MapVisualization,
  'sponge-city': MapVisualization,
  'land-reform': TimelineChart,
  'collective-vs-state': ComparisonChart,
  'water-system-map': MapVisualization,
  'water-stress': ComparisonChart,
  'protected-areas-map': MapVisualization,
  'biodiversity': ComparisonChart,
  'mangrove-map': MapVisualization,
  'ecosystem-timeline': TimelineChart,
  'rd-comparison': ComparisonChart,
  'intensity-chart': ComparisonChart,
  'startup-landscape': ComparisonChart,
  'incubator-data': ComparisonChart,
  'anchor-companies-map': MapVisualization,
  'market-cap': ComparisonChart,
  'huaqiangbei-network': DependencyNetwork,
  'supply-chain-visualization': DependencyNetwork,
  'cooperation-map': MapVisualization,
  'zone-comparison': ComparisonChart,
  'qianhai-map': MapVisualization,
  'policy-timeline': TimelineChart,
  'lok-ma-chau-map': MapVisualization,
  'park-layout': MapVisualization,
  'catalhoyuk-reconstruction': MapVisualization,
  'governance-comparison': ComparisonChart,
  'bogota-map': MapVisualization,
  'timeline-both': TimelineChart,
  'patio-bonito-phase1': ComparisonChart,
  'jac-structure': DependencyNetwork,
  'patio-bonito-phase2': ComparisonChart,
  'absorption-model': ComparisonChart,
  'el-amparo-phase1': ComparisonChart,
  'settlement-pattern': MapVisualization,
  'el-amparo-phase2': ComparisonChart,
  'formalization-comparison': ComparisonChart,
  'corabastos-network-before': DependencyNetwork,
  'market-structure': DependencyNetwork,
  'network-centralization': DependencyNetwork,
  'power-concentration-diagram': ComparisonChart,
  'smart-city-models': ComparisonChart,
  'framing-comparison': ComparisonChart,
  'data-flow-diagram': DependencyNetwork,
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
  'synthesis-timeline': TimelineChart,
  'tradeoff-matrix': ComparisonChart,
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
