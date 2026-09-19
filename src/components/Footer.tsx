'use client'

import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t border-slate-700 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">Hong Kong & Shenzhen Thesis</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              An interactive exploration of two urban systems, their governance models, innovation ecosystems, and the fundamental questions about cities in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Introduction', 'Context', 'Analysis', 'Conclusions'].map((item) => (
                <li key={item}>
                  <button className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                Research Contact
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm">
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Comparative Urban Systems Thesis. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600">Built with</span>
            <div className="flex gap-2 text-xs text-slate-600">
              <span>Next.js</span>
              <span>•</span>
              <span>React</span>
              <span>•</span>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
