import { motion } from 'framer-motion'

export default function FeaturedNews({ news }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="relative rounded-xl bg-[#26215C] px-6 sm:px-10 py-8 sm:py-10 overflow-hidden"
      style={{ boxShadow: '5px 7px 16px rgba(38,33,92,0.25)' }}
    >
      <div className="absolute top-4 right-6 text-[#FDCB6E] text-2xl">✦</div>

      <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FDCB6E] mb-3">
        Breaking · {news.tag}
      </span>

      <h2 className="font-hand font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-2xl leading-snug">
        {news.title}
      </h2>

      <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
        {news.excerpt}
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-6">
        <span className="text-xs sm:text-sm text-white/60">{news.date}</span>
        <span className="text-xs sm:text-sm text-white/60">·</span>
        <span className="text-xs sm:text-sm text-white/60">{news.source}</span>
        <button className="ml-auto text-sm font-bold text-[#FF6B35] hover:text-[#FDCB6E] transition-colors">
          Read full circular →
        </button>
      </div>
    </motion.div>
  )
}