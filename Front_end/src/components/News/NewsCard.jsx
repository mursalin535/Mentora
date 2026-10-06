import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tagStyles = {
  Admission: {
    bg: '#EEEDFE',
    fg: '#3C3489',
    accent: '#6C5CE7',
  },
  University: {
    bg: '#DFF6EC',
    fg: '#04342C',
    accent: '#00B894',
  },
  Scholarship: {
    bg: '#FFE3D1',
    fg: '#4A1B0C',
    accent: '#FF6B35',
  },
  Academic: {
    bg: '#FFF4D6',
    fg: '#4A3600',
    accent: '#FDCB6E',
  },
  Circular: {
    bg: '#EEEDFE',
    fg: '#3C3489',
    accent: '#6C5CE7',
  },
  'Exam Result': {
    bg: '#DFF6EC',
    fg: '#04342C',
    accent: '#00B894',
  },
}

export default function NewsCard({ item }) {
  const [open, setOpen] = useState(false)

  const style = tagStyles[item.tag] || tagStyles.Admission

  // Different cards slightly move/rotate differently
  const noteRotations = [-1.2, 1, -0.7, 1.3, -1, 0.8]

  const cardRotation =
    noteRotations[item.id ? String(item.id).length % noteRotations.length : 0]

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: cardRotation,
      }}
      whileHover={{
        y: -4,
        rotate: 0,
        transition: {
          duration: 0.25,
        },
      }}
      transition={{
        layout: {
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.4,
        },
        y: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      className="relative rounded-xl p-5 sm:p-6 cursor-pointer border-2 overflow-visible"
      style={{
        backgroundColor: style.bg,
        borderColor: open ? style.accent : 'transparent',
        boxShadow: open
          ? `4px 7px 18px rgba(60,52,50,0.13)`
          : '3px 5px 12px rgba(60,52,50,0.08)',
      }}
    >

      {/* PIN */}
      <motion.div
        className="absolute -top-3 -left-3 z-20"
        animate={
          open
            ? {
                rotate: [-5, 4, -2, 0],
                scale: [1, 1.08, 1],
              }
            : {
                rotate: [-3, 3, -3],
              }
        }
        transition={
          open
            ? {
                duration: 0.45,
                ease: 'easeOut',
              }
            : {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      >
        {/* pin shadow */}
        <div className="absolute top-[5px] left-[5px] w-5 h-5 rounded-full bg-black/15 blur-[2px]" />

        {/* pin */}
        <div
          className="relative w-6 h-6 rounded-full border-2 border-white/70 shadow-md"
          style={{
            backgroundColor: style.accent,
          }}
        >
          {/* pin highlight */}
          <div className="absolute top-[3px] left-[4px] w-2 h-2 rounded-full bg-white/60" />

          {/* pin center */}
          <div className="absolute inset-[7px] rounded-full bg-black/15" />
        </div>
      </motion.div>

      {/* little paper movement */}
      <motion.div
        animate={{
          rotate: [0, 0.35, -0.25, 0],
          y: [0, -0.7, 0.5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-xl pointer-events-none"
      />

      <div className="relative z-10">

        {/* top row */}
        <div className="flex items-start justify-between gap-3">

          <div>

            {/* TAG */}
            <motion.span
              animate={{
                scale: open ? 1.03 : 1,
              }}
              transition={{ duration: 0.25 }}
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{
                backgroundColor: open
                  ? 'rgba(255,255,255,0.75)'
                  : 'rgba(255,255,255,0.6)',
                color: style.fg,
              }}
            >
              {item.tag}
            </motion.span>

            {/* TITLE */}
            <motion.h3
              layout
              className="font-hand font-bold text-2xl sm:text-3xl leading-snug"
              animate={{
                color: style.fg,
              }}
              transition={{ duration: 0.25 }}
            >
              {item.title}
            </motion.h3>

          </div>

          {/* arrow */}
          <motion.span
            animate={{
              rotate: open ? 180 : 0,
              color: style.accent,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            className="text-lg shrink-0 mt-2"
          >
            ▾
          </motion.span>

        </div>

        {/* expanded content */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >

              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.05,
                }}
              >

                {/* hand drawn divider */}
                <div className="relative mt-4 mb-4 h-px overflow-visible">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundColor: style.accent,
                    }}
                  />

                  <div
                    className="absolute left-0 -top-[2px] w-16 h-[3px] rounded-full"
                    style={{
                      backgroundColor: style.accent,
                    }}
                  />
                </div>

                {/* excerpt */}
                <p
                  className="text-sm sm:text-[15px] leading-relaxed mb-4"
                  style={{
                    color: style.fg,
                  }}
                >
                  {item.excerpt}
                </p>

                {/* bottom */}
                <div
                  className="flex items-center justify-between pt-3"
                  style={{
                    borderTop: `1px dashed ${style.accent}55`,
                  }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: style.fg,
                      opacity: 0.65,
                    }}
                  >
                    {item.date}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    className="text-xs font-bold transition-transform hover:translate-x-1"
                    style={{
                      color: style.accent,
                    }}
                  >
                    Read more →
                  </button>
                </div>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}