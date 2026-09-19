'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { ThesisSection } from '@/data/thesis'

interface AdvancedChartsProps {
  section: ThesisSection
  type: string
}

const areaChartData = [
  { year: 1980, hk: 25, sz: 5 },
  { year: 1990, hk: 60, sz: 20 },
  { year: 2000, hk: 85, sz: 50 },
  { year: 2010, hk: 95, sz: 80 },
  { year: 2020, hk: 100, sz: 120 },
]

const scatterData = [
  { gdpPerCapita: 49000, lifeExpectancy: 85, city: 'Hong Kong', size: 500 },
  { gdpPerCapita: 23000, lifeExpectancy: 79, city: 'Shenzhen', size: 400 },
  { gdpPerCapita: 42000, lifeExpectancy: 82, city: 'Developed Cities', size: 300 },
]

const radarData = [
  { metric: 'Innovation', hk: 65, sz: 92 },
  { metric: 'Governance', hk: 90, sz: 70 },
  { metric: 'Inequality', hk: 35, sz: 40 },
  { metric: 'Sustainability', hk: 70, sz: 75 },
  { metric: 'Economic Power', hk: 95, sz: 85 },
  { metric: 'Quality of Life', hk: 85, sz: 80 },
]

export default function AdvancedCharts({ section, type }: AdvancedChartsProps) {
  const chartTypes: Record<string, JSX.Element> = {
    area: (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={areaChartData}>
          <defs>
            <linearGradient id="colorHK" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="colorSZ" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ec4899" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
          <XAxis dataKey="year" stroke="rgba(148, 163, 184, 0.5)" />
          <YAxis stroke="rgba(148, 163, 184, 0.5)" />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '8px' }} />
          <Legend />
          <Area type="monotone" dataKey="hk" stackId="1" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHK)" name="Hong Kong" />
          <Area type="monotone" dataKey="sz" stackId="1" stroke="#ec4899" fillOpacity={1} fill="url(#colorSZ)" name="Shenzhen" />
        </AreaChart>
      </ResponsiveContainer>
    ),

    scatter: (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
          <XAxis type="number" dataKey="gdpPerCapita" name="GDP per Capita ($)" stroke="rgba(148, 163, 184, 0.5)" />
          <YAxis type="number" dataKey="lifeExpectancy" name="Life Expectancy" stroke="rgba(148, 163, 184, 0.5)" />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '8px' }} cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Hong Kong" data={[scatterData[0]]} fill="#3b82f6" />
          <Scatter name="Shenzhen" data={[scatterData[1]]} fill="#ec4899" />
        </ScatterChart>
      </ResponsiveContainer>
    ),

    radar: (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(148, 163, 184, 0.3)" />
          <PolarAngleAxis dataKey="metric" stroke="rgba(148, 163, 184, 0.5)" />
          <PolarRadiusAxis stroke="rgba(148, 163, 184, 0.5)" />
          <Radar name="Hong Kong" dataKey="hk" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Radar name="Shenzhen" dataKey="sz" stroke="#ec4899" fill="#ec4899" fillOpacity={0.3} />
          <Legend />
          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '8px' }} />
        </RadarChart>
      </ResponsiveContainer>
    ),
  }

  const selectedChart = chartTypes[type.includes('area') ? 'area' : type.includes('scatter') ? 'scatter' : type.includes('radar') ? 'radar' : 'area']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <div className="h-80">
        {selectedChart}
      </div>
      <p className="text-sm text-slate-400 mt-4 text-center">{type}</p>
    </motion.div>
  )
}
