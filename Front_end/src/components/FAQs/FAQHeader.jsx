import { motion } from 'framer-motion'

const words = ['Frequently', 'Asked', 'Questions']
const palette = ['#6C5CE7', '#00B894', '#FF6B35', '#FDCB6E']

export default function FAQHeader() {
  let globalIndex = 0

  return (
    <section className="relative isolate overflow-hidden px-5 sm:px-7 pt-14 sm:pt-20 pb-14 sm:pb-20">

      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="absolute -top-10 -left-10 w-56 h-56 rounded-full pointer-events-none -z-10"
        style={{
          backgroundColor: '#6C5CE7',
          opacity: 0.08,
          filter: 'blur(50px)',
        }}
      />

      <div
        className="absolute top-10 right-0 w-40 h-40 rounded-2xl rotate-12 pointer-events-none -z-10"
        style={{
          backgroundColor: '#FDCB6E',
          opacity: 0.1,
          filter: 'blur(40px)',
        }}
      />


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="max-w-6xl mx-auto relative">

        {/* =========================
            LEFT SIDE
        ========================== */}

        <div className="max-w-4xl">

          {/* Community Q&A badge */}
          <motion.span
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              inline-block
              text-xs
              sm:text-sm
              font-semibold
              text-[#FF6B35]
              bg-[#FFE3D1]
              px-3
              py-1.5
              rounded-full
              mb-10
            "
          >
            Community Q&amp;A
          </motion.span>


          {/* =========================
              HANGING LETTERS
          ========================== */}

          <div className="flex flex-col gap-4 sm:gap-6 items-start">

            {words.map((word) => {

              const letters = word.split('')

              return (
                <div
                  key={word}
                  className="
                    flex
                    flex-wrap
                    justify-start
                    gap-1.5
                    sm:gap-2
                  "
                >

                  {letters.map((letter, i) => {

                    const color =
                      palette[globalIndex % palette.length]

                    const delay =
                      globalIndex * 0.05

                    const swayDelay =
                      `${globalIndex * 0.3}s`

                    globalIndex++

                    return (
                      <motion.div
                        key={`${word}-${i}`}

                        initial={{
                          opacity: 0,
                          y: -24,
                          rotate: i % 2 === 0 ? -3 : 3,
                        }}

                        animate={{
                          opacity: 1,
                          y: 0,
                          rotate: 0,
                        }}

                        transition={{
                          duration: 0.45,
                          delay,
                          ease: [0.16, 1, 0.3, 1],
                        }}

                        className="flex flex-col items-center"
                      >

                        {/* Thread */}
                        <div
                          className="w-px h-4 sm:h-5"
                          style={{
                            backgroundColor: '#B4B2A9',
                          }}
                        />


                        {/* Swinging sticker */}
                        <div
                          className="animate-sway origin-top"
                          style={{
                            animationDelay: swayDelay,
                          }}
                        >

                          <div
                            className="
                              relative
                              w-10
                              h-16
                              sm:w-[52px]
                              sm:h-[86px]
                              rounded-md
                              bg-white
                              flex
                              items-center
                              justify-center
                              border-2
                              overflow-hidden
                            "
                            style={{
                              borderColor: color,
                              boxShadow:
                                '3px 5px 10px rgba(60,52,50,0.16)',
                            }}
                          >

                            {/* Tape */}
                            <div
                              className="
                                absolute
                                w-7
                                sm:w-8
                                h-3
                                sm:h-4
                                -top-1
                                left-1/2
                                -translate-x-1/2
                                border
                                border-black/5
                                z-10
                              "
                              style={{
                                backgroundColor:
                                  'rgba(255,233,168,0.75)',
                              }}
                            />


                            {/* Paper grain */}
                            <div
                              className="
                                absolute
                                inset-0
                                opacity-[0.15]
                                pointer-events-none
                              "
                              style={{
                                backgroundImage:
                                  'radial-gradient(#6B6355 0.6px, transparent 0.6px)',
                                backgroundSize: '5px 5px',
                              }}
                            />


                            {/* Letter */}
                            <span
                              className="
                                relative
                                font-hand
                                font-bold
                                text-2xl
                                sm:text-3xl
                              "
                              style={{
                                color,
                              }}
                            >
                              {letter}
                            </span>

                          </div>

                        </div>

                      </motion.div>
                    )
                  })}

                </div>
              )
            })}

          </div>


          {/* =========================
              DESCRIPTION
          ========================== */}

          <motion.p
  initial={{
    opacity: 0,
    y: 12,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.5,
    delay: globalIndex * 0.05 + 0.2,
  }}
  className="
    text-2xl
    sm:text-xl
    text-[#4A453B]
    max-w-xl
    mt-10
    leading-relaxed
  "
>
  Ask real questions about admission, academic life,
  or anything university-related — verified mentors
  are here to answer.
</motion.p>


          {/* =========================
              BUTTONS
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.5,
              delay: globalIndex * 0.05 + 0.35,
            }}

            className="
              mt-8
              flex
              flex-col
              sm:flex-row
              items-start
              gap-3
            "
          >

         

          </motion.div>

        </div>


        {/* =========================
            RIGHT SIDE VISUAL
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            rotate: -8,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            rotate: -6,
          }}

          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
            hidden
            lg:block
            absolute
            right-4
            xl:right-12
            top-1/2
            -translate-y-1/2
          "
        >

          <div className="relative">

            {/* =========================
                BIG QUESTION CIRCLE
            ========================== */}

            <div
              className="
                w-64
                h-64
                xl:w-80
                xl:h-80
                rounded-full
                flex
                items-center
                justify-center
                animate-float-slow
              "
              style={{
                backgroundColor: '#EEEDFE',
              }}
            >

              <span
                className="
                  font-hand
                  font-bold
                  text-[#6C5CE7]
                  select-none
                "
                style={{
                  fontSize: '13rem',
                  lineHeight: 1,
                }}
              >
                ?
              </span>

            </div>


            {/* =========================
                VERIFIED MENTORS BADGE
            ========================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              transition={{
                duration: 0.5,
                delay: 0.9,
              }}

              className="
                absolute
                -bottom-6
                -left-12
                bg-white
                border-2
                border-[#00B894]
                rounded-lg
                px-4
                py-3
                rotate-[-4deg]
                shadow-[4px_5px_0px_#C8EDE1]
              "
            >

              <p className="text-xl font-bold text-[#085041]">
                ✓From Verified mentors
              </p>

            

            </motion.div>


            {/* =========================
                ORANGE STAR
            ========================== */}

            <motion.span
              animate={{
                rotate: [0, 12, 0],
                scale: [1, 1.1, 1],
              }}

              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
                absolute
                -top-8
                -right-4
                text-4xl
                text-[#FF6B35]
              "
            >
              ✦
            </motion.span>


            {/* =========================
                GREEN ARROW
            ========================== */}

            <motion.span
              animate={{
                y: [0, -5, 0],
                x: [0, 3, 0],
              }}

              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}

              className="
                absolute
                top-12
                -left-12
                text-3xl
                text-[#00B894]
              "
            >
              ↗
            </motion.span>


            {/* =========================
                SMALL PURPLE DOTS
            ========================== */}

            <span
              className="
                absolute
                bottom-10
                -right-10
                w-4
                h-4
                rounded-full
                bg-[#6C5CE7]
                opacity-70
              "
            />

            <span
              className="
                absolute
                bottom-20
                -right-16
                w-2
                h-2
                rounded-full
                bg-[#FF6B35]
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}