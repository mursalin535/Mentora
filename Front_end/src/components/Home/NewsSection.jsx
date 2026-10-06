import { motion } from 'framer-motion'

const news = [
  { title: 'DU admission circular 2026 published', tag: 'Admission', date: 'Sep 5', bg: '#EEEDFE', fg: '#3C3489', pin: '#6C5CE7' },
  { title: 'BUET adds new AI department', tag: 'University', date: 'Sep 2', bg: '#DFF6EC', fg: '#04342C', pin: '#00B894' },
  { title: 'Scholarship deadline extended for HSC 2025 batch', tag: 'Scholarship', date: 'Aug 30', bg: '#FFE3D1', fg: '#4A1B0C', pin: '#FF6B35' },
]

export default function NewsSection() {
  return (
    <section className="relative isolate px-5 sm:px-7 py-14 sm:py-20 max-w-5xl mx-auto">
      <h2 className="font-hand text-3xl sm:text-4xl font-bold text-[#26215C] mb-14 text-center sm:text-left">
        Latest news &amp;{' '}
        <span className="relative inline-block">
          <span className="relative z-10">updates</span>
          <span
            className="absolute left-0 right-0 bottom-0 h-[0.45em] -z-0"
            style={{ backgroundColor: 'rgba(253, 203, 110, 0.55)' }}
          />
        </span>
      </h2>

      <div className="relative">
        {/* two colored lines running BEHIND the sticker row */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 -z-10">
          <div className="h-[3px] rounded-full" style={{ backgroundColor: '#6C5CE7', opacity: 0.35 }} />
          <div className="h-[3px] rounded-full" style={{ backgroundColor: '#FF6B35', opacity: 0.35 }} />
        </div>

        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-16">
          {news.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="relative flex flex-col items-center"
            >
              <div
                className="w-3 h-3 rounded-full z-10 mb-[-2px]"
                style={{ backgroundColor: n.pin, boxShadow: `0 0 0 3px ${n.bg}` }}
              />
              <div className="w-px h-4" style={{ backgroundColor: n.pin }} />

              <div className="animate-sway origin-top w-full" style={{ animationDelay: `${i * 0.6}s` }}>
                {/* individual colored box per card */}
                <div
                  className="bg-white rounded-lg p-5 w-full border-2"
                  style={{ borderColor: n.pin, boxShadow: '3px 5px 12px rgba(60,52,50,0.14)' }}
                >
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: n.bg, color: n.fg }}
                  >
                    {n.tag}
                  </span>
                  <h3 className="text-base sm:text-lg leading-snug text-[#2C2C2A] mb-3">{n.title}</h3>
                  <span className="text-xs text-[#6B6355]">{n.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button className="bg-white text-[#6C5CE7] font-medium border-2 border-[#6C5CE7] rounded-md px-7 py-3 text-[15px] hover:-translate-y-0.5 hover:shadow-md transition">
          Explore more
        </button>
      </div>
    </section>
  )
}