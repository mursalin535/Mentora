import { useEffect, useRef, useState } from 'react'

const mentors = [
  {
    initials: 'RA',
    name: 'Rafi Ahmed',
    dept: 'CSE, BUET',
    image: '/rafi_ahmed.webp',
    bg: '#9FE1CB',
    fg: '#04342C',
    rotate: -3,
  },
  {
    initials: 'NS',
    name: 'Nusrat Sultana',
    dept: 'BBA, DU',
    image: '/nusrat_sultana.webp',
    bg: '#F0997B',
    fg: '#4A1B0C',
    rotate: 2,
  },
  {
    initials: 'TH',
    name: 'Tanvir Hasan',
    dept: 'EEE, KUET',
    image: '/tanvir_islam.webp',
    bg: '#AFA9EC',
    fg: '#26215C',
    rotate: -1.5,
  },
  {
    initials: 'FS',
    name: 'Farhana Sumi',
    dept: 'Pharmacy, DU',
    image: '/farhana_sumi.webp',
    bg: '#EEEDFE',
    fg: '#3C3489',
    rotate: 1.5,
  },
  {
    initials: 'AG',
    name: 'Aronno Ghosh',
    dept: 'CSE, DU',
    image: '/aronno_ghosh.jpg',
    bg: '#FFF4D6',
    fg: '#8A5A00',
    rotate: -2,
  },
  {
    initials: 'KA',
    name: 'Kafi',
    dept: 'CSE, BUET',
    image: '/kafi.jpg',
    bg: '#FAECE7',
    fg: '#993C1D',
    rotate: 2.5,
  },
  {
    initials: 'MJ',
    name: 'Miftahul Jannat',
    dept: 'BBA, DU',
    image: '/miftahul_jannat.webp',
    bg: '#E1F5EE',
    fg: '#085041',
    rotate: -1.5,
  },
  {
    initials: 'MU',
    name: 'Mursalin',
    dept: 'CSE, KUET',
    image: '/mursalin.jpg',
    bg: '#EEEDFE',
    fg: '#3C3489',
    rotate: 2,
  },
  {
    initials: 'TA',
    name: 'Tamanna Akter',
    dept: 'CSE, DU',
    image: '/tamanna_akhter.jpg',
    bg: '#FDE7D7',
    fg: '#8A3B12',
    rotate: -2.5,
  },
]

/* =====================================================
   VIEWPORT ANIMATION HOOK
===================================================== */

function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    // Respect reduced motion preference
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

          // Animate only once
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -70px 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

/* =====================================================
   TOP MENTORS
===================================================== */

export default function TopMentors() {
  const [sectionRef, sectionVisible] = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -100px 0px',
  })

  const [headingRef, headingVisible] = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -60px 0px',
  })

  const [cardsRef, cardsVisible] = useInView({
    threshold: 0.08,
    rootMargin: '0px 0px -80px 0px',
  })

  const [ctaRef, ctaVisible] = useInView({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  })

  return (
    <section
      ref={sectionRef}
      className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 overflow-hidden"
    >
      {/* =================================================
          HEADING
      ================================================= */}

      <div
        ref={headingRef}
        className={`
          text-center
          mb-14
          sm:mb-18
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
        {/* Small notebook label */}

        <div className="flex items-center justify-center gap-3 mb-5">
          <span
            className={`
              w-10
              h-[2px]
              bg-[#DCD7FF]
              rotate-[-2deg]
              transition-all
              duration-700
              delay-100
              ${
                headingVisible
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
              }
            `}
          />

          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#EEEDFE]
              border-2
              border-[#DCD7FF]
              text-[#3C3489]
              text-xs
              sm:text-sm
              font-bold
              tracking-wide
              rotate-[-1deg]
              shadow-[2px_2px_0px_#DCD7FF]
            "
          >
            ✦ YOUR SENIOR CIRCLE
          </span>

          <span
            className={`
              w-10
              h-[2px]
              bg-[#DCD7FF]
              rotate-[2deg]
              transition-all
              duration-700
              delay-100
              ${
                headingVisible
                  ? 'opacity-100 scale-x-100'
                  : 'opacity-0 scale-x-0'
              }
            `}
          />
        </div>

        {/* Main heading */}

        <div className="relative inline-block">
          {/* Hand drawn underline */}

          <svg
            className="
              absolute
              -bottom-4
              left-1/2
              -translate-x-1/2
              w-[90%]
              h-5
              pointer-events-none
            "
            viewBox="0 0 300 20"
            fill="none"
          >
            <path
              d="M5 12 Q75 4 150 11 T295 9"
              stroke="#F9E77C"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.8"
              className={`
                transition-all
                duration-[1000ms]
                delay-300
                ${
                  headingVisible
                    ? '[stroke-dasharray:400] [stroke-dashoffset:0]'
                    : '[stroke-dasharray:400] [stroke-dashoffset:400]'
                }
              `}
            />

            <path
              d="M8 15 Q80 9 150 14 T292 12"
              stroke="#F4D94E"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>

          {/* Decorative doodles */}

          <span
            className={`
              absolute
              -left-7
              sm:-left-10
              top-1
              text-[#FF6B35]
              text-lg
              rotate-[-15deg]
              transition-all
              duration-700
              delay-500
              ${
                headingVisible
                  ? 'opacity-100 scale-100 rotate-[-15deg]'
                  : 'opacity-0 scale-0 rotate-[30deg]'
              }
            `}
          >
            ✦
          </span>

          <span
            className={`
              absolute
              -right-7
              sm:-right-10
              bottom-1
              text-[#00B894]
              text-base
              rotate-[12deg]
              transition-all
              duration-700
              delay-500
              ${
                headingVisible
                  ? 'opacity-100 scale-100 rotate-[12deg]'
                  : 'opacity-0 scale-0 rotate-[-30deg]'
              }
            `}
          >
            ✦
          </span>

          <h2
            className="
              relative
              font-hand
              text-4xl
              sm:text-5xl
              lg:text-[54px]
              font-bold
              text-[#26215C]
              leading-[1.05]
              tracking-[-0.02em]
            "
          >
            Meet the people
            <br className="sm:hidden" />

            <span className="relative ml-2">
              behind the journey
            </span>
          </h2>
        </div>

        {/* Description */}

        <div className="relative max-w-2xl mx-auto mt-8">
          <p
            className={`
              text-base
              sm:text-lg
              font-semibold
              text-[#6B6355]
              leading-relaxed

              transition-all
              duration-700
              delay-300

              ${
                headingVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }
            `}
          >
            Seniors who have already walked the path
            <br className="hidden sm:block" />
            and are ready to help you take your next step.
          </p>

          {/* Tiny handwritten note */}

          <div
            className={`
              inline-block
              mt-5
              px-10
              py-3
              bg-[#FFF4D6]
              border
              border-[#F7E5AE]
              text-[#8A5A00]
              text-xs
              sm:text-sm
              lg:text-lg
              font-bold
              rotate-[-1.5deg]
              shadow-[2px_2px_0px_rgba(138,90,0,0.08)]

              transition-all
              duration-700
              delay-500

              ${
                headingVisible
                  ? 'opacity-100 translate-y-0 rotate-[-1.5deg]'
                  : 'opacity-0 translate-y-5 rotate-[3deg]'
              }
            `}
          >
            real people · real experience · real guidance
          </div>
        </div>
      </div>

      {/* =================================================
          MENTOR CARDS
      ================================================= */}

      <div
        ref={cardsRef}
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-12
          sm:gap-14
          lg:gap-12
          items-start
          justify-items-center
        "
      >
        {mentors.map((mentor, index) => (
          <div
            key={mentor.name}
            className={`
              relative
              w-full
              max-w-[250px]

              transition-all
              duration-[800ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${
                cardsVisible
                  ? 'opacity-100 translate-y-0 scale-100 rotate-0'
                  : index % 2 === 0
                    ? 'opacity-0 translate-y-24 -rotate-6 scale-75'
                    : 'opacity-0 translate-y-24 rotate-6 scale-75'
              }
            `}
            style={{
              transitionDelay: cardsVisible
                ? `${index * 140}ms`
                : '0ms',
              transitionDuration: '900ms',
            }}
          >
            <div
              className="relative w-full group"
              style={{
                transform: `rotate(${mentor.rotate}deg)`,
              }}
            >
              {/* Tape */}

              <div
                className="
                  absolute
                  -top-4
                  left-1/2
                  -translate-x-1/2
                  z-30
                  w-20
                  h-7
                  border
                  border-[#E6D99C]
                "
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? 'rgba(249,231,124,0.72)'
                      : 'rgba(255,244,214,0.82)',

                  transform: `translateX(-50%) rotate(${
                    index % 2 === 0 ? -2 : 3
                  }deg)`,
                }}
              />

              {/* Paper Card */}

              <div
                className="
                  relative
                  bg-[#FFFDF7]
                  p-3
                  pb-6
                  rounded-2xl
                  border
                  border-[#E9E3D5]

                  transition-all
                  duration-500
                  ease-out

                  group-hover:-translate-y-3
                  group-hover:rotate-0

                  group-hover:shadow-[9px_12px_0px_rgba(38,33,92,0.13),0_18px_35px_rgba(38,33,92,0.12)]

                  cursor-pointer
                "
                style={{
                  boxShadow:
                    '6px 8px 0px rgba(38,33,92,0.10), 0 10px 25px rgba(38,33,92,0.08)',
                }}
              >
                {/* Paper Texture */}

                <div
                  className="
                    absolute
                    inset-0
                    pointer-events-none
                    opacity-[0.12]
                    rounded-2xl
                    z-20
                  "
                  style={{
                    backgroundImage:
                      'radial-gradient(#6B6355 0.6px, transparent 0.6px)',
                    backgroundSize: '6px 6px',
                  }}
                />

                {/* Photo */}

                <div
                  className="
                    relative
                    w-full
                    aspect-[4/3]
                    rounded-xl
                    overflow-hidden
                    border-2
                  "
                  style={{
                    backgroundColor: mentor.bg,
                    borderColor: mentor.bg,
                  }}
                >
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="
                      w-full
                      h-full
                      object-cover

                      transition-all
                      duration-500
                      ease-out

                      group-hover:scale-110
                      group-hover:blur-[3px]
                    "
                  />

                  {/* Hover Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center

                      bg-[#26215C]/0
                      group-hover:bg-[#26215C]/45

                      transition-all
                      duration-500
                    "
                  >
                    <div
                      className="
                        translate-y-5
                        scale-75
                        opacity-0

                        group-hover:translate-y-0
                        group-hover:scale-100
                        group-hover:opacity-100

                        transition-all
                        duration-400
                      "
                    >
                      <div
                        className="
                          px-5
                          py-2.5
                          rounded-full
                          bg-[#FFFDF7]
                          border-2
                          border-[#26215C]
                          shadow-[4px_4px_0px_#F9E77C]

                          font-hand
                          text-lg
                          font-bold
                          text-[#26215C]

                          rotate-[-2deg]
                        "
                      >
                        View profile →
                      </div>
                    </div>
                  </div>

                  {/* Initial Badge */}

                  <div
                    className="
                      absolute
                      bottom-2
                      left-2

                      transition-all
                      duration-300

                      group-hover:opacity-0
                      group-hover:translate-y-2
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        border-2
                        border-white/80
                        shadow-sm
                      "
                      style={{
                        backgroundColor: mentor.bg,
                        color: mentor.fg,
                      }}
                    >
                      {mentor.initials}
                    </span>
                  </div>
                </div>

                {/* Mentor Information */}

                <div className="relative text-center pt-5 px-2">
                  <h3
                    className="
                      font-hand
                      text-2xl
                      sm:text-[27px]
                      font-bold
                      leading-tight

                      transition-transform
                      duration-300

                      group-hover:-translate-y-1
                    "
                    style={{
                      color: mentor.fg,
                    }}
                  >
                    {mentor.name}
                  </h3>

                  {/* Department */}

                  <div className="flex justify-center mt-2">
                    <span
                      className="
                        inline-block
                        text-sm
                        font-bold
                        px-3
                        py-1
                        rounded-sm

                        transition-all
                        duration-300

                        group-hover:-rotate-2
                      "
                      style={{
                        color: mentor.fg,
                        backgroundColor: `${mentor.bg}70`,
                      }}
                    >
                      {mentor.dept}
                    </span>
                  </div>

                  <p
                    className="
                      font-hand
                      text-base
                      mt-4
                      opacity-75
                    "
                    style={{
                      color: mentor.fg,
                    }}
                  >
                    Ready to help you ✦
                  </p>

                  {/* Connect */}

                  <div className="flex justify-center mt-3">
                    <span
                      className="
                        relative
                        text-xs
                        font-bold
                        px-4
                        py-1.5
                        rounded-full
                        border

                        transition-all
                        duration-300

                        group-hover:scale-105
                      "
                      style={{
                        color: mentor.fg,
                        borderColor: mentor.bg,
                        backgroundColor: `${mentor.bg}35`,
                      }}
                    >
                      Connect with me
                    </span>
                  </div>
                </div>

                {/* Folded Corner */}

                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-8
                    h-8
                    opacity-30
                  "
                  style={{
                    backgroundColor: mentor.bg,
                    clipPath:
                      'polygon(100% 0, 100% 100%, 0 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =================================================
          CTA
      ================================================= */}

      <div
        ref={ctaRef}
        className={`
          flex
          justify-center
          mt-16
          sm:mt-20

          transition-all
          duration-[800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            ctaVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-10 scale-[0.92]'
          }
        `}
      >
        <button
          type="button"
          className="
            group
            relative
            bg-[#26215C]
            text-[#EEEDFE]

            px-8
            py-4

            rounded-md

            text-base
            sm:text-lg
            font-bold

            shadow-[5px_5px_0px_#DCD7FF]

            rotate-[-1deg]

            hover:rotate-0
            hover:-translate-y-1
            hover:shadow-[7px_7px_0px_#DCD7FF]

            active:translate-y-0

            transition-all
            duration-300
          "
        >
          <span className="flex items-center gap-2">
            Meet all mentors

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