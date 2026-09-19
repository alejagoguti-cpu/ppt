'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Navigation from './Navigation'
import SectionDisplay from './SectionDisplay'
import { thesisSections, getSectionById } from '@/data/thesis'

interface ThesisViewerProps {
  onClose: () => void
}

export default function ThesisViewer({ onClose }: ThesisViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentSection = thesisSections[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : thesisSections.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((i) => (i < thesisSections.length - 1 ? i + 1 : 0))
  }

  const handleSelectSection = (id: string) => {
    const index = thesisSections.findIndex(s => s.id === id)
    if (index !== -1) {
      setCurrentIndex(index)
    }
  }

  return (
    <>
      <Navigation
        currentSectionId={currentSection?.id}
        onSelectSection={handleSelectSection}
      />

      <div className="pt-16 min-h-screen flex flex-col">
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onClose}
          className="fixed top-20 right-6 z-40 p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Main content */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
          <AnimatePresence mode="wait">
            {currentSection && (
              <motion.div
                key={currentSection.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <SectionDisplay section={currentSection} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-700">
            <button
              onClick={goToPrevious}
              className="flex items-center gap-2 px-6 py-3 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="text-center">
              <div className="text-sm text-slate-500">
                Section {currentIndex + 1} of {thesisSections.length}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {currentSection?.title}
              </div>
            </div>

            <button
              onClick={goToNext}
              className="flex items-center gap-2 px-6 py-3 hover:bg-slate-800 rounded-lg transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentIndex + 1) / thesisSections.length }}
            transition={{ duration: 0.5 }}
            className="mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          />
        </div>
      </div>
    </>
  )
}
