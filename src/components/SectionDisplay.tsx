'use client'

import { motion } from 'framer-motion'
import { ThesisSection } from '@/data/thesis'
import SectionVisualization from './SectionVisualization'
import CitationBadge from './CitationBadge'

interface SectionDisplayProps {
  section: ThesisSection
}

const typeColors = {
  intro: 'from-blue-500/20 to-cyan-500/20',
  context: 'from-green-500/20 to-emerald-500/20',
  analysis: 'from-yellow-500/20 to-orange-500/20',
  comparison: 'from-pink-500/20 to-rose-500/20',
  'case-study': 'from-purple-500/20 to-indigo-500/20',
  conclusion: 'from-red-500/20 to-orange-500/20',
}

const typeLabels = {
  intro: 'Introduction',
  context: 'Context',
  analysis: 'Analysis',
  comparison: 'Comparison',
  'case-study': 'Case Study',
  conclusion: 'Conclusion',
}

export default function SectionDisplay({ section }: SectionDisplayProps) {
  const paragraphs = section.content.split('\n\n')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className={`p-8 rounded-xl bg-gradient-to-br ${typeColors[section.type]} border border-slate-700`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <CitationBadge type={section.type} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-3">
              {section.title}
            </h1>
            {section.subtitle && (
              <p className="text-lg text-slate-300">{section.subtitle}</p>
            )}
          </div>
          {section.city && (
            <div className="flex gap-2 flex-wrap justify-end">
              {section.city !== 'both' && (
                <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">
                  {section.city === 'hong-kong' ? '🇭🇰 Hong Kong' : '🇨🇳 Shenzhen'}
                </span>
              )}
              {section.city === 'both' && (
                <>
                  <span className="px-4 py-2 bg-slate-800 rounded-full text-sm font-semibold">🇭🇰 Both</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {paragraphs.map((paragraph, idx) => {
          const lines = paragraph.split('\n')
          const isListItem = lines[0]?.trim().startsWith('•')

          if (isListItem) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="space-y-3"
              >
                {lines.map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                    <p className="text-slate-300 leading-relaxed">
                      {line.replace(/^•\s*/, '')}
                    </p>
                  </div>
                ))}
              </motion.div>
            )
          }

          return (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          )
        })}
      </div>

      {/* Visualizations */}
      {section.visualizations && section.visualizations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {section.visualizations.map((viz) => (
            <SectionVisualization key={viz} type={viz} section={section} />
          ))}
        </motion.div>
      )}

      {/* References */}
      {section.references && section.references.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-slate-700"
        >
          <h3 className="font-bold text-slate-300 mb-4">References:</h3>
          <ul className="space-y-2">
            {section.references.map((ref, i) => (
              <li key={i} className="text-slate-400 text-sm">
                • {ref}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}
