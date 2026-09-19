'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Zap, Globe2, Network } from 'lucide-react'

interface HeroProps {
  onExplore: () => void
}

export default function Hero({ onExplore }: HeroProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="min-h-screen w-full overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(217, 70, 239, 0.1)" />
            </linearGradient>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />
          <rect width="1200" height="800" fill="url(#heroGrad1)" />
        </svg>

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-between p-8">
        {/* Top section */}
        <div className="pt-20 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-gradient block">Hong Kong</span>
              <span className="text-white">vs</span>
              <span className="text-gradient-reverse block">Shenzhen</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl text-slate-300 mb-4 font-light"
          >
            Two Cities. Two Systems. One Question.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Cómo dos modelos radicalmente diferentes de gobernanza e innovación tackean los mismos desafíos urbanos
          </motion.p>

          {/* Key metrics */}
          <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            {[
              { icon: '🏙️', label: '7M+ inhabitants', value: 'Each' },
              { icon: '💡', label: 'Innovation', value: 'Different paths' },
              { icon: '⚖️', label: 'Governance', value: 'Contrasting models' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs text-slate-400 mb-1">{item.label}</div>
                <div className="text-sm font-bold text-blue-300">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive cards section */}
        <div className="w-full max-w-6xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '🇭🇰 Hong Kong',
                subtitle: 'Common Law System',
                desc: 'Market-driven, decentralized decision-making, financial hub',
                color: 'from-blue-600 to-blue-500',
                icon: '💰',
              },
              {
                title: '🇨🇳 Shenzhen',
                subtitle: 'State-Corporate Model',
                desc: 'Centralized planning, strategic industries, manufacturing power',
                color: 'from-pink-600 to-purple-500',
                icon: '⚙️',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all overflow-hidden group`}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />

                {/* Border glow */}
                {hoveredCard === i && (
                  <motion.div
                    layoutId="cardBorder"
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    style={{
                      backgroundImage: `linear-gradient(${i === 0 ? 'to right, #3b82f6' : 'to right, #ec4899'}, ${i === 0 ? '#06b6d4' : '#d946ef'})`,
                      backgroundClip: 'padding-box',
                      WebkitBackgroundClip: 'padding-box',
                      padding: '2px',
                    }}
                  />
                )}
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 mb-1">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Hover effect */}
                {hoveredCard === i && (
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.button
            onClick={onExplore}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-bold text-lg text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            Explorar la Tesis (50+ secciones)
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-slate-400">Desliza para ver más</span>
            <ArrowDown className="w-5 h-5 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
