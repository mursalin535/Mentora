import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AchievementCard({
  item,
  rotate = -1.5,
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="relative w-full"
      whileHover={{
        y: -5,
        rotate: 0,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
    >

      {/* =====================================================
          TAPE
      ====================================================== */}

      <div
        className="
          absolute
          -top-4
          left-1/2
          -translate-x-1/2
          z-20
          w-20
          h-6
          border
          border-black/5
        "
        style={{
          backgroundColor: 'rgba(255,233,168,0.78)',
          transform: `translateX(-50%) rotate(${rotate}deg)`,
        }}
      />


      {/* =====================================================
          MAIN STICKER / PAPER
      ====================================================== */}

      <div
        className="
          relative
          bg-[#FFFDF7]
          rounded-lg
          overflow-hidden
          cursor-pointer
          border
          border-[#E8E1D4]
        "
        style={{
          boxShadow: open
            ? '7px 9px 0px rgba(108,92,231,0.13), 0 12px 25px rgba(60,52,50,0.14)'
            : '5px 7px 0px rgba(108,92,231,0.10), 0 8px 18px rgba(60,52,50,0.10)',
        }}
        onClick={() => setOpen(!open)}
      >

        {/* =================================================
            PAPER TEXTURE
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            pointer-events-none
            z-10
          "
          style={{
            backgroundImage:
              'radial-gradient(#6B6355 0.6px, transparent 0.6px)',
            backgroundSize: '6px 6px',
          }}
        />


        {/* =================================================
            LITTLE CORNER FOLD
        ================================================== */}

        <div
          className="
            absolute
            right-0
            top-0
            w-10
            h-10
            bg-[#F3EEDF]
            z-10
          "
          style={{
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }}
        />


        <div className="relative z-10 p-5 sm:p-7">


          {/* =================================================
              HEADING
          ================================================== */}

          <div className="mb-5 pr-6">

            <h3
              className="
                font-hand
                font-bold
                text-3xl
                sm:text-4xl
                leading-tight
                text-[#26215C]
              "
            >
              {item.title}
            </h3>

          </div>


          {/* =================================================
              UNIVERSITY + DEPARTMENT
          ================================================== */}

          <div className="flex flex-wrap items-center gap-2 mb-5">

            <span
              className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                text-xs
                sm:text-sm
                font-bold
              "
              style={{
                backgroundColor: item.bg || '#EEEDFE',
                color: item.fg || '#3C3489',
              }}
            >
              {item.university}
            </span>


            <span
              className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                bg-[#FCFAF4]
                border
                border-[#E8E1D4]
                text-[#6B6355]
              "
            >
              {item.department}
            </span>

          </div>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <AnimatePresence initial={false}>

            <motion.div
              initial={false}
              animate={{
                height: open ? 'auto' : 100,
              }}
              transition={{
                duration: 0.35,
                ease: 'easeInOut',
              }}
              className="overflow-hidden"
            >

              <p
                className="
                  text-sm
                  sm:text-base
                  text-[#4A453B]
                  leading-7
                "
              >
                {item.description}
              </p>

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              IMAGE
          ================================================== */}

          {item.image && (
            <motion.div
              className="
                relative
                mt-6
                w-full
                rounded-md
                overflow-hidden
                bg-[#F1EEE5]
                border
                border-[#DDD6C8]
              "
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <img
                src={item.image}
                alt={item.title || 'Achievement'}
                className="
                  block
                  w-full
                  max-h-[420px]
                  object-cover
                "
              />

              {/* image grain */}

              <div
                className="
                  absolute
                  inset-0
                  pointer-events-none
                  opacity-[0.08]
                "
                style={{
                  backgroundImage:
                    'radial-gradient(#000 0.5px, transparent 0.5px)',
                  backgroundSize: '5px 5px',
                }}
              />

            </motion.div>
          )}


          {/* =================================================
              AUTHOR
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              mt-5
              pt-4
              border-t
              border-dashed
              border-[#E4DDCF]
            "
          >

            <div className="flex items-center gap-2">

              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  font-hand
                  font-bold
                  text-xs
                  shrink-0
                "
                style={{
                  backgroundColor: item.bg || '#EEEDFE',
                  color: item.fg || '#3C3489',
                }}
              >
                {item.initials || '?'}
              </div>


              <div>

                <p className="text-xs font-semibold text-[#4A453B]">
                  {item.submittedBy || 'Anonymous'}
                </p>

                {item.date && (
                  <p className="text-[11px] text-[#8A8479]">
                    {item.date}
                  </p>
                )}

              </div>

            </div>


            {/* =================================================
                KNOW MORE
            ================================================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(!open)
              }}
              className="
                text-xs
                sm:text-sm
                font-bold
                shrink-0
                transition-transform
                duration-200
                hover:-translate-y-0.5
              "
              style={{
                color: item.accent || '#6C5CE7',
              }}
            >
              {open ? 'Show less ↑' : 'Know more ↓'}
            </button>

          </div>


          {/* =================================================
              SMALL HANDWRITTEN NOTE
          ================================================== */}

          <div
            className="
              mt-4
              font-hand
              text-xs
              sm:text-sm
              text-[#8A8479]
              rotate-[-1deg]
            "
          >
            another story worth sharing ✦
          </div>

        </div>

      </div>

    </motion.div>
  )
}