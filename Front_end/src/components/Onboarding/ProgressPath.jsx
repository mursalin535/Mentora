import { motion } from 'framer-motion'

export default function ProgressPath({ step, totalSteps }) {
  const percent = ((step - 1) / (totalSteps - 1)) * 100

  return (
    <div className="relative mb-10 sm:mb-12">
      <div className="relative h-1 bg-[#ECE6D6] rounded-full overflow-visible">
        {/* dashed path */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, #B4B2A9 0, #B4B2A9 4px, transparent 4px, transparent 9px)', opacity: 0.5 }}
        />
        {/* filled progress */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-[#6C5CE7]"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* paper plane marker */}
        <motion.div
          className="absolute -top-3 text-xl"
          initial={{ left: 0 }}
          animate={{ left: `calc(${percent}% - 12px)` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          ✈️
        </motion.div>
      </div>

      <div className="flex justify-between mt-4">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className="text-xs font-bold"
            style={{ color: i + 1 <= step ? '#6C5CE7' : '#B4B2A9' }}
          >
            Step {i + 1}
          </span>
        ))}
      </div>
    </div>
  )
}