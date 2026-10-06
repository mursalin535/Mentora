import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const floatingIcons = [
  { icon: '🎓', top: '8%', left: '6%', delay: '0s' },
  { icon: '📍', top: '78%', left: '10%', delay: '0.6s' },
  { icon: '💬', top: '15%', left: '92%', delay: '1.1s' },
  { icon: '📚', top: '85%', left: '90%', delay: '0.3s' },
]

export default function AlumniHeader() {
  const containerRef = useRef(null)
  const nodeRefs = useRef({})
  const [lines, setLines] = useState([])

  const centerLabel = 'Alumni'
  const nodeLabels = ['Alumni', 'Uni', 'School', 'Clg', 'Area']

  useEffect(() => {
    function measure() {
      const container = containerRef.current
      if (!container) return
      const containerRect = container.getBoundingClientRect()

      const centerEl = nodeRefs.current[centerLabel]
      if (!centerEl) return
      const centerRect = centerEl.getBoundingClientRect()
      const cx = centerRect.left + centerRect.width / 2 - containerRect.left
      const cy = centerRect.top + centerRect.height / 2 - containerRect.top
      const cRadius = Math.min(centerRect.width, centerRect.height) / 2

      const newLines = nodeLabels
        .filter((label) => label !== centerLabel)
        .map((label) => {
          const el = nodeRefs.current[label]
          if (!el) return null
          const rect = el.getBoundingClientRect()
          const x = rect.left + rect.width / 2 - containerRect.left
          const y = rect.top + rect.height / 2 - containerRect.top
          const radius = Math.min(rect.width, rect.height) / 2

          const dx = x - cx
          const dy = y - cy
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const ux = dx / dist
          const uy = dy / dist

          return {
            x1: cx + ux * cRadius,
            y1: cy + uy * cRadius,
            x2: x - ux * radius,
            y2: y - uy * radius,
          }
        })
        .filter(Boolean)

      setLines(newLines)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const setRef = (label) => (el) => {
    nodeRefs.current[label] = el
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-[60vh] bg-amber-50 border border-black rounded-4xl flex flex-row justify-center items-center isolate overflow-hidden"
    >
      {/* floating decorative icons */}
      {floatingIcons.map((f) => (
        <span
          key={f.icon}
          className="absolute text-3xl sm:text-4xl opacity-40 animate-float-slow select-none pointer-events-none"
          style={{ top: f.top, left: f.left, animationDelay: f.delay }}
        >
          {f.icon}
        </span>
      ))}

      {/* edges */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        {lines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#8A8578"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
          />
        ))}
      </svg>

      {/* nodes */}
      <motion.div
        ref={setRef('Alumni')}
        className="absolute left-[70%] bottom-[40%] w-[20vh] h-[20vh] bg-blue-300/45 rounded-full transition -skew-y-20 origin-center rotate-[30deg] flex justify-center items-center"
      >
        <motion.span className="font-hand text-3xl text-black/50">Alumni</motion.span>
      </motion.div>

      <motion.div
        ref={setRef('Uni')}
        className="absolute left-[55%] bottom-[30%] w-[18vh] h-[18vh] bg-red-300/45 rounded-full transition -skew-y-20 origin-center rotate-[30deg] flex justify-center items-center"
      >
        <motion.span className="font-hand text-3xl text-black/50">Uni</motion.span>
      </motion.div>

      <motion.div
        ref={setRef('School')}
        className="absolute left-[85%] bottom-[40%] w-[18vh] h-[18vh] bg-green-300/45 rounded-full transition -skew-y-20 origin-center rotate-[30deg] flex justify-center items-center"
      >
        <motion.span className="font-hand text-3xl text-black/50">School</motion.span>
      </motion.div>

      <motion.div
        ref={setRef('Clg')}
        className="absolute left-[65%] bottom-[65%] w-[20vh] h-[20vh] bg-cyan-300/45 rounded-full transition -skew-y-20 origin-center rotate-[30deg] flex justify-center items-center"
      >
        <motion.span className="font-hand text-3xl text-black/50">Clg</motion.span>
      </motion.div>

      <motion.div
        ref={setRef('Area')}
        className="absolute left-[70%] bottom-[5%] w-[20vh] h-[20vh] bg-yellow-300/45 rounded-full transition -skew-y-20 origin-center rotate-[30deg] flex justify-center items-center"
      >
        <motion.span className="font-hand text-3xl text-black/50">Area</motion.span>
      </motion.div>

      {/* OVERLAY — sits above everything, styled to match the notebook/sticker theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-5"
      >
        <div
          className="relative w-full max-w-md rounded-lg bg-white p-6 sm:p-7 text-center overflow-hidden"
          style={{
            transform: 'translateX(-15%)',
            boxShadow: '4px 6px 14px rgba(60,52,50,0.18)',
          }}
        >
          {/* washi tape at top, consistent with Sticker.jsx */}
          <div
            className="absolute w-16 h-5 -top-2.5 left-1/2 -translate-x-1/2 border border-black/5 z-10"
            style={{ backgroundColor: 'rgba(255,233,168,0.75)' }}
          />

          {/* paper grain texture */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#6B6355 0.6px, transparent 0.6px)',
              backgroundSize: '5px 5px',
            }}
          />

          <div className="relative">
            <h2 className="relative inline-block font-hand text-2xl sm:text-3xl font-bold text-[#26215C] mb-6">
              Find your Alumni
              <svg
                viewBox="0 0 200 20"
                className="absolute left-0 -bottom-2 w-full h-3 pointer-events-none"
                preserveAspectRatio="none"
              >
                <path d="M5,8 Q100,0 195,7" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </h2>

            <div
              className="flex items-center gap-2 rounded-md bg-[#FCFAF4] border-2 border-[#6C5CE7] px-3 py-2.5"
            >
              <span className="text-base text-[#6C5CE7]">🔍</span>
              <input
                type="text"
                placeholder="Name, university, school..."
                className="flex-1 min-w-0 bg-transparent outline-none text-sm sm:text-base text-[#2C2C2A] placeholder:text-[#A39D92] font-body"
              />
              <button className="shrink-0 text-sm font-bold text-white bg-[#6C5CE7] rounded-md px-3.5 py-2 hover:-translate-y-0.5 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}