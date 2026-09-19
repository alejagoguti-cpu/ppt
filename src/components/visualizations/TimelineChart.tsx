'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'

interface TimelineChartProps {
  section: ThesisSection
  type: string
}

const timelineEvents: Record<string, Array<{year: string, event: string, icon: string}>> = {
  'innovation-timeline': [
    { year: '1980', event: 'Shenzhen becomes Special Economic Zone', icon: '🚀' },
    { year: '1990s', event: 'Manufacturing boom begins', icon: '🏭' },
    { year: '2000s', event: 'Tech sector emergence', icon: '💻' },
    { year: '2010s', event: 'Innovation ecosystem matures', icon: '🔬' },
    { year: '2020s', event: 'Hardware innovation leadership', icon: '⚡' },
  ],
  'political-timeline': [
    { year: '1842', event: 'Hong Kong ceded to Britain', icon: '🏛️' },
    { year: '1997', event: 'Hong Kong handover to China', icon: '🇭🇰' },
    { year: '2019-2020', event: 'Pro-democracy protests', icon: '✊' },
    { year: '2020', event: 'National Security Law implemented', icon: '📜' },
    { year: '2021', event: 'Electoral reforms, "patriots governing"', icon: '🗳️' },
  ],
  'synthesis-timeline': [
    { year: '1842-1997', event: 'Hong Kong colonial period', icon: '🏰' },
    { year: '1980-2000', event: 'Shenzhen manufacturing rise', icon: '🏭' },
    { year: '2000-2015', event: 'Convergence and competition', icon: '⚔️' },
    { year: '2015-present', event: 'Cooperation zones development', icon: '🤝' },
    { year: '2025+', event: 'Smart cities & digital governance', icon: '🤖' },
  ],
  default: [
    { year: '1980', event: 'Timeline event 1', icon: '📅' },
    { year: '1990', event: 'Timeline event 2', icon: '📅' },
    { year: '2000', event: 'Timeline event 3', icon: '📅' },
    { year: '2010', event: 'Timeline event 4', icon: '📅' },
    { year: '2020', event: 'Timeline event 5', icon: '📅' },
  ],
}

export default function TimelineChart({ section, type }: TimelineChartProps) {
  const events = timelineEvents[type] || timelineEvents.default

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass p-6 rounded-lg border border-slate-700"
    >
      <div className="space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-lg">
                {event.icon}
              </div>
              {index < events.length - 1 && (
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent mt-2" />
              )}
            </div>
            <div className="pt-2 flex-1">
              <div className="font-bold text-blue-300">{event.year}</div>
              <div className="text-slate-300">{event.event}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
