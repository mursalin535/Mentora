import { motion } from 'framer-motion'
import Sticker from '../common/Sticker'

const items = [
  {
    title: 'Real connections, not random groups',
    text: "We built Mentora so school and college students can directly connect with verified current university students — one-on-one, trustworthy, and organized. No more scattered, unreliable Facebook groups where you never know who's actually answering.",
    emoji: '🤝',
    bg: '#9FE1CB',
    fg: '#04342C',
    accent: '#00B894',
    rotate: -2,
  },
  {
    title: 'An Alumni touch, right when you need it',
    text: "Search for seniors from your own school, college, area, or the university you're targeting. See their journey, ask them directly, and get advice from someone who has actually walked the path you're about to take.",
    emoji: '🎓',
    bg: '#F0997B',
    fg: '#4A1B0C',
    accent: '#FF6B35',
    rotate: 2,
  },
  {
    title: 'FAQs on admission & university life',
    text: 'A structured Q&A space organized by category — Admission, Academic, University Life, Department, Career, Scholarship, and Hostel. Ask a real question and get a real answer from someone currently living that university life.',
    emoji: '💬',
    bg: '#AFA9EC',
    fg: '#26215C',
    accent: '#6C5CE7',
    rotate: -1.5,
  },
  {
    title: 'Latest news & updates on admissions',
    text: 'Admission circulars, application deadlines, and academic announcements — sourced and verified, so you never miss an important date buried inside a random forwarded post.',
    emoji: '📰',
    bg: '#FDCB6E',
    fg: '#4A3600',
    accent: '#FDCB6E',
    rotate: 1.5,
  },
  {
    title: 'See what other universities have achieved',
    text: 'Browse verified achievements shared by students across different universities and departments — real proof, real inspiration, and a clearer picture of what becomes possible once you get in.',
    emoji: '🏆',
    bg: '#9FE1CB',
    fg: '#04342C',
    accent: '#00B894',
    rotate: -2,
  },
]

export default function Intro() {
  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-7 py-14 sm:py-20 max-w-5xl mx-auto">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="relative inline-block font-hand text-4xl sm:text-5xl font-bold text-[#26215C]">
          What Mentora gives you
          <svg
            viewBox="0 0 300 20"
            className="absolute left-0 -bottom-3 w-full h-4 pointer-events-none"
            preserveAspectRatio="none"
          >
            <path d="M5,8 Q150,0 295,7" fill="none" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
            <path d="M8,14 Q150,20 292,13" fill="none" stroke="#6C5CE7" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </h2>
      </div>

      <div className="flex flex-col gap-16 sm:gap-24">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`relative flex flex-col ${
              i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } items-center gap-8 sm:gap-14`}
          >
            {/* decorative blurred shapes behind this row */}
            <div
              className={`absolute -z-10 w-40 h-40 rounded-full pointer-events-none ${
                i % 2 === 0 ? '-left-6 top-4' : '-right-6 top-4'
              }`}
              style={{ backgroundColor: item.accent, opacity: 0.6, filter: 'blur(40px)' }}
            />
            <div
              className={`absolute -z-10 w-24 h-24 rounded-2xl rotate-12 pointer-events-none ${
                i % 2 === 0 ? 'right-10 bottom-0' : 'left-10 bottom-0'
              }`}
              style={{ backgroundColor: item.accent, opacity: 0.4, filter: 'blur(30px)' }}
            />

            <Sticker rotate={item.rotate} className="p-5 shrink-0">
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-md flex items-center justify-center text-5xl sm:text-6xl"
                style={{ backgroundColor: item.bg, color: item.fg }}
              >
                {item.emoji}
              </div>
            </Sticker>

            <div className="relative text-center sm:text-left max-w-lg">
              <h3 className="font-hand text-2xl sm:text-3xl font-bold text-[#6C5CE7] mb-3">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-[#4A453B] leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}