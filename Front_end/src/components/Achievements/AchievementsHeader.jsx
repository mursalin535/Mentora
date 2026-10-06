import { motion } from 'framer-motion'

export default function AchievementsHeader() {
  return (
    <section className="w-full relative overflow-hidden bg-[#FFFDF7]">

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <motion.div
        className="
          w-full
          min-h-[120vh]
          sm:min-h-[110vh]
          lg:min-h-[100vh]
          relative
          overflow-hidden
        "
      >

        {/* =================================================
            BACKGROUND DOODLES
        ================================================== */}

        <div className="absolute inset-0 pointer-events-none">

          <span className="absolute left-[8%] top-[18%] font-hand text-5xl text-[#6C5CE7]/15 rotate-12">
            ✦
          </span>

          <span className="absolute left-[45%] top-[8%] font-hand text-4xl text-[#FF6B35]/15 rotate-[-12deg]">
            +
          </span>

          <span className="absolute left-[52%] top-[65%] font-hand text-5xl text-[#00B894]/15 rotate-12">
            ✦
          </span>

          <span className="absolute right-[5%] top-[12%] font-hand text-3xl text-[#6C5CE7]/20 rotate-[-15deg]">
            ↗
          </span>

          <span className="absolute right-[12%] bottom-[18%] font-hand text-5xl text-[#FF6B35]/15 rotate-12">
            ★
          </span>

          <span className="absolute left-[35%] bottom-[8%] font-hand text-4xl text-[#00B894]/15">
            ~
          </span>

          <div className="absolute left-[48%] top-[35%] w-3 h-3 rounded-full bg-[#6C5CE7]/15" />

          <div className="absolute right-[7%] top-[50%] w-2 h-2 rounded-full bg-[#FF6B35]/20" />

          <div className="absolute left-[5%] bottom-[15%] w-4 h-4 rounded-full border border-[#00B894]/20" />

        </div>


        {/* =================================================
            MAIN RED BUBBLE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            x: -30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            w-[78vw]
            h-[78vw]
            sm:w-[72vh]
            sm:h-[72vh]
            lg:w-[76vh]
            lg:h-[76vh]
            max-w-[820px]
            max-h-[820px]
            rounded-full
            bg-red-200/65
            left-[-22vw]
            sm:left-[-14vh]
            lg:left-[-12vh]
            top-[2vh]
            flex
            items-center
            justify-center
          "
        >

          {/* inner border */}

          <div
            className="
              absolute
              inset-[7%]
              rounded-full
              border
              border-red-400/10
            "
          />


          {/* =================================================
              MAIN WRITING
          ================================================== */}

          <div
            className="
              relative
              w-[65%]
              ml-[18%]
              mt-[-5%]
            "
          >

            <p
              className="
                font-hand
                text-xl
                sm:text-2xl
                text-[#6B3B3B]/60
                rotate-[-3deg]
                mb-3
              "
            >
              your story matters ✦
            </p>


            <h1
              className="
                font-hand
                font-bold
                text-5xl
                sm:text-6xl
                lg:text-7xl
                text-[#6B3B3B]
                leading-[0.95]
              "
            >
              Celebrate
              <br />

              <span className="text-[#FF6B35]">
                what you've
              </span>

              <br />

              achieved.
            </h1>


            <p
              className="
                mt-7
                text-sm
                sm:text-base
                lg:text-lg
                text-[#6B3B3B]/75
                leading-relaxed
                max-w-md
              "
            >
              From winning competitions to building something meaningful,
              every achievement tells a story. Share yours and inspire
              students and mentors from across universities.
            </p>


            {/* handwritten underline */}

        

          </div>

        </motion.div>


        {/* =================================================
            SMALL BUBBLES AROUND RED BUBBLE
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="
            absolute
            left-[20%]
            top-[10%]
            w-12
            h-12
            sm:w-16
            sm:h-16
            rounded-full
            bg-orange-200/60
          "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="
            absolute
            left-[27%]
            top-[22%]
            w-5
            h-5
            sm:w-7
            sm:h-7
            rounded-full
            bg-red-300/60
          "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="
            absolute
            left-[5%]
            top-[42%]
            w-7
            h-7
            sm:w-10
            sm:h-10
            rounded-full
            bg-[#FDCB6E]/55
          "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="
            absolute
            left-[28%]
            bottom-[10%]
            w-9
            h-9
            sm:w-12
            sm:h-12
            rounded-full
            bg-[#6C5CE7]/20
          "
        />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="
            absolute
            left-[42%]
            top-[8%]
            w-4
            h-4
            sm:w-6
            sm:h-6
            rounded-full
            bg-[#00B894]/25
          "
        />


        {/* =================================================
            PHOTO WALL
        ================================================== */}

        <div
          className="
            absolute
            right-[2%]
            top-[7%]
            w-[50%]
            h-[62%]
            hidden
            md:block
          "
        >

          {/* wall doodles */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.35]
              pointer-events-none
            "
          >

            <span
              className="
                absolute
                right-[8%]
                top-[3%]
                font-hand
                text-2xl
                text-[#26215C]
                rotate-12
              "
            >
              good stuff!
            </span>

            <span
              className="
                absolute
                left-[5%]
                bottom-[8%]
                font-hand
                text-3xl
                text-[#00B894]
                rotate-[-8deg]
              "
            >
              keep going →
            </span>

            <span
              className="
                absolute
                right-[30%]
                bottom-[18%]
                font-hand
                text-4xl
                text-[#FF6B35]
                rotate-12
              "
            >
              ✦
            </span>

          </div>


          {/* =================================================
              IMAGE 1
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              rotate: -8,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -5,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              rotate: -2,
              y: -5,
              scale: 1.03,
            }}
            className="
              absolute
              left-[10%]
              top-[8%]
              w-[27%]
              h-[42%]
              bg-white
              p-2
              pb-5
              shadow-[4px_6px_14px_rgba(60,52,50,0.16)]
            "
          >

            <div
              className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                w-20
                h-7
                bg-yellow-200/70
                rotate-[-3deg]
                z-20
              "
            />

            <img
              src="/ach1.webp"
              alt="Achievement"
              className="
                w-full
                h-full
                object-cover
              "
            />

            <span
              className="
                absolute
                bottom-1
                left-2
                font-hand
                text-xs
                text-[#26215C]/60
              "
            >
              proud moment ✦
            </span>

          </motion.div>


          {/* =================================================
              IMAGE 2
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              rotate: 8,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 4,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              rotate: 1,
              y: -5,
              scale: 1.03,
            }}
            className="
              absolute
              right-[4%]
              top-[18%]
              w-[27%]
              h-[43%]
              bg-white
              p-2
              pb-5
              shadow-[4px_6px_14px_rgba(60,52,50,0.16)]
            "
          >

            <div
              className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                w-20
                h-7
                bg-blue-200/65
                rotate-[4deg]
                z-20
              "
            />

            <img
              src="/ach2.webp"
              alt="Achievement"
              className="
                w-full
                h-full
                object-cover
              "
            />

            <span
              className="
                absolute
                bottom-1
                left-2
                font-hand
                text-xs
                text-[#26215C]/60
              "
            >
              made it happen →
            </span>

          </motion.div>


          {/* =================================================
              IMAGE 3
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              rotate: -4,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: -2,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              rotate: 0,
              y: -5,
              scale: 1.03,
            }}
            className="
              absolute
              left-[35%]
              bottom-[0%]
              w-[30%]
              h-[42%]
              bg-white
              p-2
              pb-5
              shadow-[4px_6px_14px_rgba(60,52,50,0.16)]
            "
          >

            <div
              className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                w-20
                h-7
                bg-green-200/65
                rotate-[-5deg]
                z-20
              "
            />

            <img
              src="/ach3.webp"
              alt="Achievement"
              className="
                w-full
                h-full
                object-cover
              "
            />

            <span
              className="
                absolute
                bottom-1
                left-2
                font-hand
                text-xs
                text-[#26215C]/60
              "
            >
              one for the wall ✦
            </span>

          </motion.div>

        </div>


        {/* =================================================
            SHARE YOUR ACHIEVEMENTS BUBBLE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 1,
            type: 'spring',
            stiffness: 160,
            damping: 13,
          }}
          className="
            absolute
            left-[36%]
            top-[60%]
            w-[195px]
            h-[195px]
            sm:w-[220px]
            sm:h-[220px]
            lg:w-[235px]
            lg:h-[235px]
            rounded-full
            bg-purple-200/70
            flex
            items-center
            justify-center
            rotate-[-8deg]
            z-20
          "
        >

          {/* little bubble attached to main bubble */}

          <div
            className="
              absolute
              -left-8
              top-[35%]
              w-12
              h-12
              bg-purple-200/70
              rounded-full
            "
          />

          <div
            className="
              absolute
              -left-3
              top-[22%]
              w-4
              h-4
              bg-purple-300/45
              rounded-full
            "
          />


          <div
            className="
              relative
              text-center
              px-7
            "
          >

            <span
              className="
                font-hand
                text-sm
                text-[#6C5CE7]/70
              "
            >
              got something?
            </span>

            <h2
              className="
                font-hand
                font-bold
                text-3xl
                sm:text-4xl
                lg:text-5xl
                text-[#3C3489]
                leading-none
                mt-1
              "
            >
              Share
              <br />
              your
              <br />
              achievements
            </h2>

            <span
              className="
                block
                font-hand
                text-sm
                text-[#3C3489]/60
                mt-2
                rotate-[-2deg]
              "
            >
              ↓ right here
            </span>

          </div>

        </motion.div>

      </motion.div>


      {/* =====================================================
          ACHIEVEMENT FORM
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          w-full
          px-5
          sm:px-8
          pb-24
          mt-[-8vh]
        "
      >

        <div className="max-w-4xl mx-auto">

          {/* =================================================
              FORM HEADING
          ================================================== */}

          <div className="mb-7">

            <p
              className="
                font-hand
                text-2xl
                text-[#FF6B35]
                rotate-[-2deg]
              "
            >
              write it down ✎
            </p>

            <h2
              className="
                font-hand
                font-bold
                text-4xl
                sm:text-5xl
                text-[#26215C]
                mt-1
              "
            >
              Tell us what you achieved.
            </h2>

            <p
              className="
                text-sm
                sm:text-base
                text-[#625D54]
                mt-2
              "
            >
              Share your achievement with students and mentors across the community.
            </p>

          </div>


          {/* =================================================
              FORM PAPER
          ================================================== */}

          <div
            className="
              relative
              bg-[#FFFDF7]
              border-2
              border-[#26215C]/15
              rounded-xl
              overflow-hidden
              shadow-[5px_7px_0px_#EEEDFE]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(108,92,231,0.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(108,92,231,0.055) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
            }}
          >

            {/* notebook margin */}

            <div
              className="
                absolute
                left-10
                sm:left-14
                top-0
                bottom-0
                w-px
                bg-[#FF6B35]/20
              "
            />


            <div
              className="
                p-6
                sm:p-9
                pl-16
                sm:pl-20
              "
            >

              {/* =================================================
                  ACHIEVEMENT
              ================================================== */}

              <div className="mb-7">

                <label
                  className="
                    block
                    font-hand
                    text-xl
                    font-bold
                    text-[#26215C]
                    mb-2
                  "
                >
                  What did you achieve?
                </label>

                <input
                  type="text"
                  placeholder="e.g. Won 1st place in a national programming contest"
                  className="
                    w-full
                    bg-transparent
                    border-b-2
                    border-[#26215C]/15
                    py-2
                    outline-none
                    text-sm
                    sm:text-base
                    text-[#3F3A34]
                    placeholder:text-[#AAA49A]
                    focus:border-[#6C5CE7]
                    transition-colors
                  "
                />

              </div>


              {/* =================================================
                  UNIVERSITY + DEPARTMENT
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-6
                  mb-7
                "
              >

                {/* UNIVERSITY */}

                <div>

                  <label
                    className="
                      block
                      font-hand
                      text-xl
                      font-bold
                      text-[#26215C]
                      mb-2
                    "
                  >
                    University
                  </label>

                  <input
                    type="text"
                    placeholder="Your university"
                    className="
                      w-full
                      bg-transparent
                      border-b-2
                      border-[#26215C]/15
                      py-2
                      outline-none
                      text-sm
                      text-[#3F3A34]
                      placeholder:text-[#AAA49A]
                      focus:border-[#00B894]
                      transition-colors
                    "
                  />

                </div>


                {/* DEPARTMENT */}

                <div>

                  <label
                    className="
                      block
                      font-hand
                      text-xl
                      font-bold
                      text-[#26215C]
                      mb-2
                    "
                  >
                    Department
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. CSE, BBA, EEE"
                    className="
                      w-full
                      bg-transparent
                      border-b-2
                      border-[#26215C]/15
                      py-2
                      outline-none
                      text-sm
                      text-[#3F3A34]
                      placeholder:text-[#AAA49A]
                      focus:border-[#FF6B35]
                      transition-colors
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  SHORT STORY
              ================================================== */}

              <div className="mb-7">

                <label
                  className="
                    block
                    font-hand
                    text-xl
                    font-bold
                    text-[#26215C]
                    mb-2
                  "
                >
                  Tell us a little about it
                </label>

                <textarea
                  rows={3}
                  placeholder="What happened? Why was this achievement special to you?"
                  className="
                    w-full
                    resize-none
                    bg-transparent
                    border-b-2
                    border-[#26215C]/15
                    py-2
                    outline-none
                    text-sm
                    sm:text-base
                    text-[#3F3A34]
                    placeholder:text-[#AAA49A]
                    leading-7
                    focus:border-[#6C5CE7]
                    transition-colors
                  "
                />

              </div>


              {/* =================================================
                  FORM BOTTOM
              ================================================== */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  justify-between
                  gap-4
                  pt-4
                  border-t
                  border-dashed
                  border-[#26215C]/15
                "
              >

                <span
                  className="
                    font-hand
                    text-sm
                    text-[#716B61]
                    rotate-[-2deg]
                  "
                >
                  every achievement deserves a little applause ✦
                </span>


                <button
                  type="button"
                  className="
                    self-start
                    sm:self-auto
                    rounded-lg
                    bg-[#26215C]
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[4px_4px_0px_#FDCB6E]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[5px_6px_0px_#FDCB6E]
                    active:translate-y-0
                  "
                >
                  Share achievement →
                </button>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}