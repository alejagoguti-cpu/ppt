'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search } from 'lucide-react'
import { thesisSections } from '@/data/thesis'

interface NavigationProps {
  currentSectionId?: string
  onSelectSection: (id: string) => void
}

export default function Navigation({ currentSectionId, onSelectSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSections = thesisSections.filter(
    s => s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         s.subtitle?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Fixed navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">HK ↔ SZ</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 left-0 h-screen w-96 glass border-r border-slate-700 z-40 overflow-y-auto pt-20"
          >
            {/* Search */}
            <div className="p-4 border-b border-slate-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-900 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Sections list */}
            <div className="p-4 space-y-2">
              {filteredSections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => {
                    onSelectSection(section.id)
                    setIsOpen(false)
                  }}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentSectionId === section.id
                      ? 'bg-blue-500/20 border border-blue-500/50 text-blue-300'
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <div className="font-semibold text-sm">{section.order}. {section.title}</div>
                  {section.subtitle && (
                    <div className="text-xs text-slate-500 mt-1">{section.subtitle}</div>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30"
          />
        )}
      </AnimatePresence>
    </>
  )
}
