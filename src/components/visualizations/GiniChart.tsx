'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ThesisSection } from '@/data/thesis'

interface GiniChartProps {
  section: ThesisSection
  type: string
}

const giniData = [
  { year: 2010, hk: 0.50, sz: 0.52 },
  { year: 2012, hk: 0.54, sz: 0.54 },
  { year: 2015, hk: 0.54, sz: 0.51 },
  { year: 2018, hk: 0.54, sz: 0.50 },
  { year: 2021, hk: 0.54, sz: 0.50 },
  { year: 2024, hk: 0.54, sz: 0.50 },
]

export default function GiniChart({ section, type }: GiniChartProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <h3 className="font-bold mb-4">Gini Coefficient Over Time</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={giniData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.2)" />
            <XAxis
              dataKey="year"
              stroke="rgba(148, 163, 184, 0.5)"
            />
            <YAxis
              domain={[0.48, 0.56]}
              stroke="rgba(148, 163, 184, 0.5)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="hk"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              name="Hong Kong"
            />
            <Line
              type="monotone"
              dataKey="sz"
              stroke="#ec4899"
              strokeWidth={2}
              dot={{ fill: '#ec4899', r: 4 }}
              name="Shenzhen"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-slate-400 mt-4 text-center">
        Higher values indicate more inequality. Both cities show persistent high inequality despite different economic models.
      </p>
    </motion.div>
  )
}
