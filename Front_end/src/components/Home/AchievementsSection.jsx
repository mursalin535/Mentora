import { motion } from 'framer-motion'
import Sticker from '../common/Sticker'

const achievements = [
  {
    uni: 'BUET',
    name: 'CSE Department',
    detail: 'Ranked among the top for research output in South Asia this year, with over 40 papers published in international conferences and journals by undergraduate and graduate students combined.',
    emoji: '🎓',
    bg: '#9FE1CB',
    fg: '#04342C',
    accent: '#00B894',
  },
  {
    uni: 'Dhaka University',
    name: 'Faculty of Business Studies',
    detail: 'Students placed in 5 international case competitions in 2026, including a top-3 finish at the Asia-Pacific Case Challenge, bringing home recognition for the department for the third year running.',
    emoji: '📊',
    bg: '#F0997B',
    fg: '#4A1B0C',
    accent: '#FF6B35',
  },
  {
    uni: 'KUET',
    name: 'EEE Department',
    detail: 'New robotics lab launched with fully student-led projects, including an autonomous drone that won first place at the National Robotics Olympiad, funded through department research grants.',
    emoji: '🤖',
    bg: '#AFA9EC',
    fg: '#26215C',
    accent: '#6C5CE7',
  },
  {
    uni: 'RUET',
    name: 'Civil Engineering',
    detail: 'Led a award-winning sustainable housing design project, recognized by the Bangladesh Institute of Planners for its low-cost, flood-resilient architecture aimed at rural communities.',
    emoji: '🏗️',
    bg: '#FDCB6E',
    fg: '#4A3600',
    accent: '#FDCB6E',
  },
]

export default function AchievementsSection() {
  return (
    <section className="px-5 sm:px-7 py-14 sm:py-20 max-w-4xl mx-auto overflow-hidden">
      <h2 className="font-hand text-3xl sm:text-4xl font-bold text-[#26215C] text-center mb-16">
        See different university achievements
      </h2>

      <div className="relative isolate">
        {/* main visible vertical line (double, running the full length) */}
        <div className="hidden sm:flex absolute left-1/2 top-0 h-full -translate-x-1/2 gap-1 -z-10">
          <div className="w-[2px] h-full bg-[#B4B2A9]" />
          <div className="w-[2px] h-full bg-[#B4B2A9]" />
        </div>

        <div className="flex flex-col gap-16 sm:gap-24">
          {achievements.map((a, i) => (
            <motion.div
              key={a.uni}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                i % 2 === 0 ? '' : 'sm:flex-row-reverse'
              }`}
            >
              {/* extra double-line marker where content branches off */}
              <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-1 z-10">
                <div className="w-[2px] h-12" style={{ backgroundColor: a.accent }} />
                <div className="w-[2px] h-12" style={{ backgroundColor: a.accent }} />
              </div>

              <div className="flex-1 flex justify-center sm:justify-end">
                <Sticker rotate={i % 2 === 0 ? -2 : 2} className="p-4">
                  <div
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-md flex items-center justify-center text-4xl"
                    style={{ backgroundColor: a.bg, color: a.fg }}
                  >
                    {a.emoji}
                  </div>
                </Sticker>
              </div>

              <div className="hidden sm:block w-3 h-3 rounded-full shrink-0 z-10" style={{ backgroundColor: a.accent }} />

              <div className="flex-1 max-w-sm">
                <div
                  className="rounded-lg p-5 bg-transparent"
                  style={{ border: `2px solid ${a.accent}` }}
                >
                  <h3 className="font-hand text-xl sm:text-2xl font-bold mb-1" style={{ color: a.accent }}>
                    {a.uni}
                  </h3>
                  <p className="text-sm font-medium text-[#4A453B] mb-3">{a.name}</p>
                  <p className="text-[15px] text-[#2C2C2A] leading-relaxed mb-4">{a.detail}</p>
                  <button className="text-sm font-semibold hover:underline" style={{ color: a.accent }}>
                    Know more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}9