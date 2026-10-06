import { motion } from 'framer-motion'

const stats = [
  { value: 'Daily', label: 'Updates tracked', color: '#6C5CE7' },
  { value: 'All', label: 'Universities covered', color: '#00B894' },
  { value: 'Latest', label: 'Official News', color: '#FF6B35' },
]

export default function NewsHeader() {
  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-7 pt-14 sm:pt-20 pb-14">
      <div className="absolute -top-10 -right-16 w-64 h-64 rounded-full pointer-events-none -z-10" style={{ backgroundColor: '#00B894', opacity: 0.09, filter: 'blur(60px)' }} />
      <div className="absolute top-20 -left-10 w-48 h-48 rounded-2xl -rotate-12 pointer-events-none -z-10" style={{ backgroundColor: '#6C5CE7', opacity: 0.08, filter: 'blur(50px)' }} />
      <div className="absolute bottom-0 right-10 w-32 h-32 rounded-xl rotate-6 pointer-events-none -z-10" style={{ backgroundColor: '#FDCB6E', opacity: 0.09, filter: 'blur(40px)' }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#00B894] bg-[#DFF6EC] px-3 py-1.5 rounded-full mb-6">
            📰 Stay updated, always
          </span>

          <h1 className="relative inline-block font-hand text-5xl sm:text-6xl lg:text-7xl font-bold text-[#26215C] leading-none">
            News &amp;{' '}
            <span className="relative whitespace-nowrap text-[#FF6B35]">
              updates
              <svg
                viewBox="0 0 200 34"
                className="absolute -left-2 -top-2 w-[calc(100%+16px)] h-[1.5em] pointer-events-none"
                preserveAspectRatio="none"
              >
                <ellipse cx="100" cy="17" rx="96" ry="14" fill="none" stroke="#FDCB6E" strokeWidth="4" transform="rotate(-1 100 17)" />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A453B] max-w-xl mt-7 leading-relaxed">
            Admission circulars, application deadlines, exam results, and academic announcements — all verified, all in one place, so nothing important gets buried in a random forwarded post.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-white px-4 py-3 border-2"
                style={{ borderColor: s.color, boxShadow: '2px 3px 8px rgba(60,52,50,0.08)' }}
              >
                <div className="font-hand font-bold text-xl" style={{ color: s.color }}>{s.value}</div>
                <div className="text-xs text-[#6B6355]">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}