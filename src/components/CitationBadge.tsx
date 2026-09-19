import { ThesisSection } from '@/data/thesis'

const typeLabels = {
  intro: 'Introduction',
  context: 'Context',
  analysis: 'Analysis',
  comparison: 'Comparison',
  'case-study': 'Case Study',
  conclusion: 'Conclusion',
}

const typeBgColors = {
  intro: 'bg-blue-500/20 text-blue-300',
  context: 'bg-green-500/20 text-green-300',
  analysis: 'bg-yellow-500/20 text-yellow-300',
  comparison: 'bg-pink-500/20 text-pink-300',
  'case-study': 'bg-purple-500/20 text-purple-300',
  conclusion: 'bg-red-500/20 text-red-300',
}

interface CitationBadgeProps {
  type: ThesisSection['type']
}

export default function CitationBadge({ type }: CitationBadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${typeBgColors[type]}`}>
      {typeLabels[type]}
    </span>
  )
}
