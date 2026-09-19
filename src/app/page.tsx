'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, TrendingUp, Users, Lightbulb, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ThesisViewer from '@/components/ThesisViewer'
import Footer from '@/components/Footer'

export default function Home() {
  const [showThesis, setShowThesis] = useState(false)

  if (showThesis) {
    return <ThesisViewer onClose={() => setShowThesis(false)} />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Hero onExplore={() => setShowThesis(true)} />

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gradient">
              Una Tesis Interactiva Completa
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              50+ secciones con análisis profundo, visualizaciones dinámicas, y comparativas detalladas
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Sparkles,
                title: 'Análisis Profundo',
                desc: 'Desde historia colonial hasta smart cities del futuro',
                color: 'from-blue-500/20 to-cyan-500/20',
                accent: 'text-blue-400',
              },
              {
                icon: TrendingUp,
                title: 'Visualizaciones',
                desc: 'Gráficos interactivos, mapas, timelines, redes de datos',
                color: 'from-purple-500/20 to-pink-500/20',
                accent: 'text-purple-400',
              },
              {
                icon: Lightbulb,
                title: 'Insights Críticos',
                desc: 'Concentración silenciosa de poder, gobernanza, innovación',
                color: 'from-emerald-500/20 to-teal-500/20',
                accent: 'text-emerald-400',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all`}
              >
                <feature.icon className={`w-12 h-12 mb-4 ${feature.accent}`} />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: '50+', label: 'Secciones de Tesis' },
              { number: '2', label: 'Sistemas Urbanos' },
              { number: '1M+', label: 'Datos Analizados' },
              { number: '∞', label: 'Preguntas Importantes' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <div className="text-3xl font-black text-blue-400 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Content preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 rounded-2xl p-12 border border-blue-500/20 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-blue-300">Hong Kong</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ Sistema de Common Law</li>
                  <li>✓ Hub financiero global</li>
                  <li>✓ Mercados abiertos</li>
                  <li>✓ Gobernanza descentralizada</li>
                  <li>✓ Alta desigualdad (Gini 0.54)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-pink-300">Shenzhen</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>✓ Modelo Estado-Corporativo</li>
                  <li>✓ Zona Económica Especial</li>
                  <li>✓ Planificación central</li>
                  <li>✓ 6.46% I+D del PIB</li>
                  <li>✓ Manufactura global</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black mb-6 text-gradient-reverse">
              Estudios de Caso Comparativos
            </h2>
            <p className="text-xl text-slate-400">
              Análisis cruzado con Bogotá, Çatalhöyük, y gobiernos de ciudades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🏛️',
                title: 'Çatalhöyük',
                subtitle: '8000-7000 BCE',
                desc: 'Autoorganización sin jerarquía explícita en la antigüedad',
              },
              {
                emoji: '🏘️',
                title: 'Bogotá',
                subtitle: 'Patio Bonito & El Amparo',
                desc: '¿Sobrevive la autoorganización después de la formalización?',
              },
              {
                emoji: '🤝',
                title: 'Zonas de Cooperación',
                subtitle: 'HK-SZ Innovation Park',
                desc: 'Complementariedad de dos sistemas en un solo espacio',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-400/50 transition-all"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{item.subtitle}</p>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Questions Section */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-6 text-gradient">Preguntas Críticas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '¿Es la jerarquía inevitable en la escala urbana?',
              '¿Quién decide qué se optimiza en smart cities?',
              '¿Cómo preservar autoorganización en sistemas formales?',
              '¿Puede complementariedad superar confrontación de sistemas?',
              '¿Concentración de datos = concentración de poder?',
              '¿Qué ciudades necesitan en un futuro digitalizado?',
            ].map((question, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/5"
              >
                <span className="text-blue-400 font-bold mr-3">?</span>
                <span className="text-slate-200">{question}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-black mb-6 text-gradient">¿Listo para explorar?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Sumérgete en un análisis completo de gobernanza urbana, modelos económicos y el futuro de las ciudades
          </p>
          <motion.button
            onClick={() => setShowThesis(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-lg text-white shadow-lg shadow-blue-500/50 hover:shadow-xl transition-all inline-flex items-center gap-3"
          >
            Comenzar Exploración
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
