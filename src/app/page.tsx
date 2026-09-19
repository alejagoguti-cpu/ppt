'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Map, Zap, Globe2, BookOpen } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ThesisViewer from '@/components/ThesisViewer'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const [showThesis, setShowThesis] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Gradient background mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {!showThesis ? (
          <>
            <Hero onExplore={() => setShowThesis(true)} />

            {/* Preview Section */}
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-6xl w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                    A Comparative Study of Urban Systems
                  </h2>
                  <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
                    Hong Kong and Shenzhen represent two distinct approaches to urban development,
                    innovation, and governance. This interactive thesis explores their differences,
                    complementarities, and what they teach us about cities of the future.
                  </p>
                </motion.div>

                {/* Key aspects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    { icon: Globe2, title: 'Two Systems', desc: 'Common Law vs State-Corporate' },
                    { icon: Map, title: 'Geography', desc: 'One Bay, Different Visions' },
                    { icon: Zap, title: 'Innovation', desc: 'Competing Innovation Models' },
                    { icon: BookOpen, title: 'Governance', desc: 'Deep Institutional Analysis' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass p-6 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer"
                    >
                      <item.icon className="w-12 h-12 mb-4 text-blue-400" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <button
                    onClick={() => setShowThesis(true)}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                  >
                    Explore the Thesis
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </section>

            <Footer />
          </>
        ) : (
          <ThesisViewer onClose={() => setShowThesis(false)} />
        )}
      </div>
    </div>
  )
}
