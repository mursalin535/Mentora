import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'ASK',
    color: '#6C5CE7',
    text:
      'Have a doubt, confusion, or something you want to know? Ask anything about admission, academics, university life, campus experience, career choices, or a decision you are trying to make.',
  },
  {
    number: '02',
    title: 'LEARN',
    color: '#00B894',
    text:
      'Learn from seniors and mentors who have already been through it. Get real experiences, practical advice, different perspectives, and answers that go beyond what you find in brochures or search results.',
  },
  {
    number: '03',
    title: 'DECIDE',
    color: '#FF6B35',
    text:
      'Use what you learn to understand your options better, clear your confusion, and make the decision that feels right for you — with a little more confidence.',
  },
]

export default function AddPost() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-7 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-9 sm:mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-[0.18em] text-[#8B857A]">
              HOW IT WORKS
            </span>

            <span className="h-px w-16 bg-[#26215C]/20" />

            <span className="font-hand text-lg text-[#FF6B35] rotate-[-4deg]">
              ✦ simple enough
            </span>
          </div>

          <h2 className="font-hand font-bold text-4xl sm:text-5xl text-[#26215C]">
            Ask. Learn. Decide.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#625D54] max-w-2xl leading-relaxed">
            Whatever is on your mind — ask it here. Learn from people who
            have already walked that path, then use what you learn to take
            your next step.
          </p>
        </motion.div>

        {/* notebook paper */}
        <div className="relative">

          {/* vertical notebook margin */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-px bg-[#FF6B35]/20 hidden sm:block" />

          {/* rows */}
          <div className="border-t border-[#26215C]/15">

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                  rotate: index % 2 === 0 ? -0.5 : 0.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] border-b border-[#26215C]/15 min-h-[125px]"
              >

                {/* number */}
                <div className="flex items-start justify-center pt-6 sm:pt-7">
                  <span
                    className="font-hand text-lg sm:text-xl font-bold rotate-[-4deg]"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* content */}
                <div className="py-6 sm:py-7 pr-2 sm:pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="font-hand text-3xl sm:text-4xl font-bold"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>

                    <span
                      className="hidden sm:block w-10 h-[2px] opacity-30"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  <p className="text-sm sm:text-[15px] text-[#504B43] leading-relaxed max-w-3xl">
                    {step.text}
                  </p>
                </div>

                {/* tiny handwritten mark */}
                <span
                  className="absolute right-2 sm:right-5 bottom-4 font-hand text-sm opacity-40 rotate-[-5deg]"
                  style={{ color: step.color }}
                >
                  {index === 0 && 'start here'}
                  {index === 1 && 'listen & learn'}
                  {index === 2 && 'your call'}
                </span>
              </motion.div>
            ))}

          </div>

          {/* hand-drawn underline */}
          <svg
            className="absolute -bottom-4 left-[20%] w-[60%] h-3 pointer-events-none"
            viewBox="0 0 500 20"
            preserveAspectRatio="none"
          >
            <path
              d="M5 12 C90 5, 150 17, 235 9 S390 5, 495 11"
              fill="none"
              stroke="#FDCB6E"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        </div>

        {/* Ask area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 sm:mt-18"
        >

          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="font-hand text-2xl sm:text-3xl font-bold text-[#26215C] rotate-[-1deg]">
                Have a doubt?
              </p>

              <p className="text-sm text-[#716B61] mt-1">
                Ask a question and let someone help you figure it out.
              </p>
            </div>

            <span className="hidden sm:block font-hand text-sm text-[#FF6B35] rotate-3">
              just write it down →
            </span>
          </div>

          {/* question writing box */}
          <div
            className="relative border-2 border-[#26215C]/20 rounded-lg bg-[#FFFDF7] overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(rgba(108,92,231,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(108,92,231,0.07) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              boxShadow: '4px 5px 0px rgba(220,215,255,0.8)',
            }}
          >
            {/* red notebook line */}
            <div className="absolute left-10 top-0 bottom-0 w-px bg-[#FF6B35]/20" />

            <div className="p-5 sm:p-7 pl-16 sm:pl-20">

              <textarea
                placeholder="What do you want to know?"
                rows={4}
                className="w-full resize-none bg-transparent outline-none border-none text-base sm:text-lg text-[#3F3A34] placeholder:text-[#A39D92] leading-8"
              />

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#26215C]/10">
                <span className="text-xs text-[#999287]">
                  Ask about admission, academics, university life...
                </span>

                <button
                  className="shrink-0 font-hand text-lg font-bold text-[#6C5CE7] hover:text-[#FF6B35] transition-colors"
                >
                  Ask a question →
                </button>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}