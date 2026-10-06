import { useEffect, useRef, useState } from 'react'

const options = [
  {
    label: 'University',
    sub: 'Alumni',
    emoji: '🏛️',
    bg: '#EEEDFE',
    border: '#DCD7FF',
    fg: '#3C3489',
    rotate: '-rotate-2',
  },
  {
    label: 'School',
    sub: 'Alumni',
    emoji: '🏫',
    bg: '#E1F5EE',
    border: '#C8EDE1',
    fg: '#085041',
    rotate: 'rotate-2',
  },
  {
    label: 'College',
    sub: 'Alumni',
    emoji: '🎓',
    bg: '#FAECE7',
    border: '#F6D8CE',
    fg: '#993C1D',
    rotate: '-rotate-2',
  },
  {
    label: 'Area',
    sub: 'Alumni',
    emoji: '📍',
    bg: '#FFF4D6',
    border: '#F7E5AE',
    fg: '#8A5A00',
    rotate: 'rotate-2',
  },
]

/* =====================================================
   VIEWPORT HOOK
===================================================== */

function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Only animate once
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -80px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

/* =====================================================
   MENTOR CONNECT
===================================================== */

export default function MentorConnect() {
  const [sectionRef, sectionVisible] = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -100px 0px',
  })

  const [headingRef, headingVisible] = useInView({
    threshold: 0.2,
  })

  const [networkRef, networkVisible] = useInView({
    threshold: 0.12,
    rootMargin: '0px 0px -100px 0px',
  })

  const [ctaRef, ctaVisible] = useInView({
    threshold: 0.3,
  })

  return (
    <section
      ref={sectionRef}
      className="
        relative
        px-5
        sm:px-8
        py-16
        sm:py-24
        max-w-5xl
        mx-auto
        my-6
        overflow-hidden
      "
    >
      {/* =================================================
          HEADING
      ================================================= */}

      <div
        ref={headingRef}
        className={`
          text-center

          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            headingVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-[0.96]'
          }
        `}
      >
        <div className="relative inline-block">
          {/* Highlight */}

          <span
            className={`
              absolute
              left-1
              right-1
              bottom-1
              h-3
              sm:h-4
              bg-[#F9E77C]/70
              rounded-sm
              -rotate-1

              transition-all
              duration-[900ms]
              delay-200

              ${
                headingVisible
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
              }
            `}
          />

          <h2
            className="
              relative
              font-hand
              text-4xl
              sm:text-5xl
              font-bold
              text-[#26215C]
              leading-tight
            "
          >
            Get connected with
            <br className="sm:hidden" />
            {' '}mentors &amp; alumni
          </h2>

          {/* Doodle */}

          <span
            className={`
              absolute
              -right-8
              -top-5
              text-[#FF6B35]
              text-lg
              rotate-12

              transition-all
              duration-700
              delay-400

              ${
                headingVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }
            `}
          >
            ✦
          </span>
        </div>

        <p
          className={`
            text-base
            sm:text-lg
            font-bold
            text-[#6B6355]
            max-w-xl
            mx-auto
            mt-5
            leading-relaxed

            transition-all
            duration-700
            delay-300

            ${
              headingVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }
          `}
        >
          Find seniors from your university, school, college, or area —
          real people who have already been where you are now.
        </p>
      </div>

      {/* =================================================
          NETWORK
      ================================================= */}

      <div
        ref={networkRef}
        className="
          relative
          max-w-[850px]
          mx-auto
          mt-16
          sm:mt-20
          h-[650px]
        "
      >
        {/* =================================================
            CONNECTION LINES
        ================================================= */}

        <svg
          viewBox="0 0 850 650"
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          {/* TOP */}

          <path
            d="M425 325 C425 270 425 205 425 145"
            fill="none"
            stroke="#BDB7D8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className={`
              transition-all
              duration-[1200ms]
              ease-out

              ${
                networkVisible
                  ? 'opacity-100 [stroke-dashoffset:0]'
                  : 'opacity-0 [stroke-dashoffset:150]'
              }
            `}
            style={{
              strokeDasharray: '5 7',
              strokeDashoffset: networkVisible ? 0 : 150,
            }}
          />

          {/* LEFT */}

          <path
            d="M425 325 C350 325 260 325 155 325"
            fill="none"
            stroke="#B9DCD1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            className="
              transition-all
              duration-[1200ms]
              delay-100
              ease-out
            "
            style={{
              opacity: networkVisible ? 1 : 0,
              strokeDashoffset: networkVisible ? 0 : 270,
              transition: 'stroke-dashoffset 1200ms ease, opacity 500ms ease',
            }}
          />

          {/* RIGHT */}

          <path
            d="M425 325 C500 325 590 325 695 325"
            fill="none"
            stroke="#E8C6BA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            style={{
              opacity: networkVisible ? 1 : 0,
              strokeDashoffset: networkVisible ? 0 : 270,
              transition:
                'stroke-dashoffset 1200ms 150ms ease, opacity 500ms 150ms ease',
            }}
          />

          {/* BOTTOM */}

          <path
            d="M425 325 C425 380 425 445 425 505"
            fill="none"
            stroke="#E8D79E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            style={{
              opacity: networkVisible ? 1 : 0,
              strokeDashoffset: networkVisible ? 0 : 180,
              transition:
                'stroke-dashoffset 1200ms 200ms ease, opacity 500ms 200ms ease',
            }}
          />

          {/* Endpoint nodes */}

          <circle
            cx="425"
            cy="145"
            r="6"
            fill="#FFFDF7"
            stroke="#BDB7D8"
            strokeWidth="2"
            className={`
              transition-all
              duration-500
              delay-[900ms]

              ${
                networkVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }
            `}
          />

          <circle
            cx="155"
            cy="325"
            r="6"
            fill="#FFFDF7"
            stroke="#B9DCD1"
            strokeWidth="2"
            className={`
              transition-all
              duration-500
              delay-[950ms]

              ${
                networkVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }
            `}
          />

          <circle
            cx="695"
            cy="325"
            r="6"
            fill="#FFFDF7"
            stroke="#E8C6BA"
            strokeWidth="2"
            className={`
              transition-all
              duration-500
              delay-[1000ms]

              ${
                networkVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }
            `}
          />

          <circle
            cx="425"
            cy="505"
            r="6"
            fill="#FFFDF7"
            stroke="#E8D79E"
            strokeWidth="2"
            className={`
              transition-all
              duration-500
              delay-[1050ms]

              ${
                networkVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-0'
              }
            `}
          />
        </svg>

        {/* =================================================
            UNIVERSITY
        ================================================= */}

        <div
          className={`
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            z-10

            transition-all
            duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              networkVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-20 scale-75'
            }
          `}
          style={{
            transitionDelay: '150ms',
          }}
        >
          <div
            className={`
              relative
              w-[150px]
              h-[150px]
              sm:w-[175px]
              sm:h-[175px]

              rounded-full
              border-[3px]

              flex
              flex-col
              items-center
              justify-center
              text-center

              ${options[0].rotate}

              transition-all
              duration-300

              hover:rotate-0
              hover:scale-105

              cursor-pointer
            `}
            style={{
              backgroundColor: options[0].bg,
              borderColor: options[0].border,
              boxShadow:
                '4px 7px 0px rgba(38,33,92,0.10), 0 4px 15px rgba(38,33,92,0.08)',
            }}
          >
            {/* Tape */}

            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#F9E7A9]/80 rotate-1 border border-[#EBD995]" />

            {/* Texture */}

            <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(#6B6355_0.7px,transparent_0.7px)] [background-size:7px_7px]" />

            <div className="relative text-3xl sm:text-4xl">
              {options[0].emoji}
            </div>

            <h4
              className="relative font-hand text-xl sm:text-2xl font-bold mt-2"
              style={{
                color: options[0].fg,
              }}
            >
              {options[0].label}
            </h4>

            <span
              className="relative text-sm sm:text-base font-semibold"
              style={{
                color: options[0].fg,
              }}
            >
              {options[0].sub}
            </span>
          </div>
        </div>

        {/* =================================================
            SCHOOL
        ================================================= */}

        <div
          className={`
            absolute
            left-0
            top-1/2
            -translate-y-1/2
            z-10

            transition-all
            duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              networkVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-20 scale-75'
            }
          `}
          style={{
            transitionDelay: '300ms',
          }}
        >
          <div
            className={`
              relative
              w-[150px]
              h-[150px]
              sm:w-[175px]
              sm:h-[175px]

              rounded-full
              border-[3px]

              flex
              flex-col
              items-center
              justify-center
              text-center

              ${options[1].rotate}

              transition-all
              duration-300

              hover:rotate-0
              hover:scale-105

              cursor-pointer
            `}
            style={{
              backgroundColor: options[1].bg,
              borderColor: options[1].border,
              boxShadow:
                '4px 7px 0px rgba(38,33,92,0.10), 0 4px 15px rgba(38,33,92,0.08)',
            }}
          >
            <div className="absolute -top-3 -right-4 w-14 h-5 bg-[#FFF4D6]/80 rotate-12 border border-[#EBD995]" />

            <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(#6B6355_0.7px,transparent_0.7px)] [background-size:7px_7px]" />

            <div className="relative text-3xl sm:text-4xl">
              {options[1].emoji}
            </div>

            <h4
              className="relative font-hand text-xl sm:text-2xl font-bold mt-2"
              style={{
                color: options[1].fg,
              }}
            >
              {options[1].label}
            </h4>

            <span
              className="relative text-sm sm:text-base font-semibold"
              style={{
                color: options[1].fg,
              }}
            >
              {options[1].sub}
            </span>
          </div>
        </div>

        {/* =================================================
            COLLEGE
        ================================================= */}

        <div
          className={`
            absolute
            right-0
            top-1/2
            -translate-y-1/2
            z-10

            transition-all
            duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              networkVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-20 scale-75'
            }
          `}
          style={{
            transitionDelay: '450ms',
          }}
        >
          <div
            className={`
              relative
              w-[150px]
              h-[150px]
              sm:w-[175px]
              sm:h-[175px]

              rounded-full
              border-[3px]

              flex
              flex-col
              items-center
              justify-center
              text-center

              ${options[2].rotate}

              transition-all
              duration-300

              hover:rotate-0
              hover:scale-105

              cursor-pointer
            `}
            style={{
              backgroundColor: options[2].bg,
              borderColor: options[2].border,
              boxShadow:
                '4px 7px 0px rgba(38,33,92,0.10), 0 4px 15px rgba(38,33,92,0.08)',
            }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#F8D8C8]/80 -rotate-3 border border-[#E8C1B2]" />

            <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(#6B6355_0.7px,transparent_0.7px)] [background-size:7px_7px]" />

            <div className="relative text-3xl sm:text-4xl">
              {options[2].emoji}
            </div>

            <h4
              className="relative font-hand text-xl sm:text-2xl font-bold mt-2"
              style={{
                color: options[2].fg,
              }}
            >
              {options[2].label}
            </h4>

            <span
              className="relative text-sm sm:text-base font-semibold"
              style={{
                color: options[2].fg,
              }}
            >
              {options[2].sub}
            </span>
          </div>
        </div>

        {/* =================================================
            AREA
        ================================================= */}

        <div
          className={`
            absolute
            left-1/2
            bottom-0
            -translate-x-1/2
            z-10

            transition-all
            duration-[800ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              networkVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-20 scale-75'
            }
          `}
          style={{
            transitionDelay: '600ms',
          }}
        >
          <div
            className={`
              relative
              w-[150px]
              h-[150px]
              sm:w-[175px]
              sm:h-[175px]

              rounded-full
              border-[3px]

              flex
              flex-col
              items-center
              justify-center
              text-center

              ${options[3].rotate}

              transition-all
              duration-300

              hover:rotate-0
              hover:scale-105

              cursor-pointer
            `}
            style={{
              backgroundColor: options[3].bg,
              borderColor: options[3].border,
              boxShadow:
                '4px 7px 0px rgba(38,33,92,0.10), 0 4px 15px rgba(38,33,92,0.08)',
            }}
          >
            <div className="absolute -bottom-3 -left-3 w-16 h-5 bg-[#F9E7A9]/80 rotate-[-8deg] border border-[#EBD995]" />

            <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(#6B6355_0.7px,transparent_0.7px)] [background-size:7px_7px]" />

            <div className="relative text-3xl sm:text-4xl">
              {options[3].emoji}
            </div>

            <h4
              className="relative font-hand text-xl sm:text-2xl font-bold mt-2"
              style={{
                color: options[3].fg,
              }}
            >
              {options[3].label}
            </h4>

            <span
              className="relative text-sm sm:text-base font-semibold"
              style={{
                color: options[3].fg,
              }}
            >
              {options[3].sub}
            </span>
          </div>
        </div>

        {/* =================================================
            CENTER MENTORA
        ================================================= */}

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            z-20

            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              networkVisible
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-50 rotate-[-8deg]'
            }
          `}
          style={{
            transitionDelay: '800ms',
          }}
        >
          <div
            className="
              relative

              w-[230px]
              h-[230px]

              sm:w-[259px]
              sm:h-[259px]

              rounded-2xl

              bg-[#6f6aa7]

              border-[5px]
              border-white

              flex
              flex-col
              items-center
              justify-center
              text-center

              px-7

              rotate-[1deg]

              transition-transform
              duration-300

              hover:rotate-0
            "
            style={{
              boxShadow:
                '7px 9px 0px rgba(38,33,92,0.12), 0 10px 30px rgba(38,33,92,0.14)',
            }}
          >
            {/* Tape */}

            <div
              className="
                absolute
                -top-5
                left-1/2
                -translate-x-1/2
                w-24
                h-7
                bg-[#F9E7A9]/80
                rotate-[-2deg]
                border
                border-[#EBD995]
              "
            />

            {/* Texture */}

            <div
              className="
                absolute
                inset-0
                rounded-2xl
                opacity-[0.08]
                pointer-events-none

                bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)]
                [background-size:6px_6px]
              "
            />

            {/* Corner */}

            <div
              className="
                absolute
                bottom-0
                right-0
                w-9
                h-9
                bg-[#5f5a94]
                [clip-path:polygon(100%_0,100%_100%,0_100%)]
                opacity-60
              "
            />

            <h3 className="relative font-hand text-3xl sm:text-4xl font-bold text-white">
              Mentora
            </h3>

            <p className="relative text-sm sm:text-base font-medium text-[#EEEDFE] mt-3 leading-relaxed max-w-[190px]">
              Allows you to connect with alumni who can guide your next step.
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          CTA
      ================================================= */}

      <div
        ref={ctaRef}
        className={`
          flex
          justify-center
          mt-8

          transition-all
          duration-[800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            ctaVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-[0.94]'
          }
        `}
      >
        <button
          type="button"
          className="
            relative
            group

            bg-[#26215C]
            text-[#EEEDFE]

            rounded-md

            px-8
            py-4

            text-base
            sm:text-lg
            font-bold

            shadow-[5px_5px_0px_#DCD7FF]

            rotate-[-1deg]

            hover:rotate-0
            hover:-translate-y-1

            transition-all
            duration-300
          "
        >
          <span className="flex items-center gap-2">
            Find your alumni

            <span
              className="
                text-xl
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}