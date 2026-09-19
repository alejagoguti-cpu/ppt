'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { ThesisSection } from '@/data/thesis'

interface ComparisonChartProps {
  section: ThesisSection
  type: string
}

const chartData: Record<string, any[]> = {
  'rd-intensity': [
    { city: 'Hong Kong', value: 0.8, year: '2024' },
    { city: 'Shenzhen', value: 6.46, year: '2024' },
  ],
  'gini-chart': [
    { city: 'Hong Kong', value: 0.54 },
    { city: 'Shenzhen', value: 0.5 },
  ],
  'poverty-rate': [
    { city: 'Hong Kong', value: 17.1, metric: '% Official Poverty' },
    { city: 'Shenzhen', value: 12, metric: '% Official Poverty' },
  ],
  default: [
    { name: 'Hong Kong', value: 65 },
    { name: 'Shenzhen', value: 78 },
  ],
}

export default function ComparisonChart({ section, type }: ComparisonChartProps) {
  const data = chartData[type] || chartData.default

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis
              dataKey="name"
              dataKey2="city"
              stroke="rgba(148, 163, 184, 0.5)"
            />
            <YAxis stroke="rgba(148, 163, 184, 0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '8px'
              }}
              cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
            />
            <Legend />
            <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-slate-400 mt-4 text-center">{type}</p>
    </motion.div>
  )
}
