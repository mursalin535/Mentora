const buzzwords = [
  { text: 'Connect', top: '4%', left: '50%', color: '#6C5CE7', bg: '#EEEDFE', delay: '0s' },
  { text: 'Explore', top: '20%', left: '72%', color: '#c3e50e', bg: '#d1ffe5', delay: '2.5s' },
  { text: 'Guide', top: '44%', left: '42%', color: '#00B894', bg: '#DFF6EC', delay: '5s' },
  { text: 'Know', top: '64%', left: '66%', color: '#6C5CE7', bg: '#EEEDFE', delay: '7.5s' },
  { text: 'Mentor', top: '10%', left: '18%', color: '#FF6B35', bg: '#FFE3D1', delay: '12s' },
  { text: 'Admission', top: '80%', left: '30%', color: '#dcf2ee', bg: '#7eb0e7', delay: '15s' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 sm:px-7 pt-12 sm:pt-16 pb-16 sm:pb-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* LEFT — unchanged */}
        <div className="relative z-10">
          <div className="absolute -top-6 -left-8 w-40 h-40 rounded-full pointer-events-none" style={{ backgroundColor: '#6C5CE7', opacity: 0.08 }} />
          <div className="absolute top-1/3 -left-10 w-32 h-32 rounded-2xl rotate-12 pointer-events-none" style={{ backgroundColor: '#FF6B35', opacity: 0.07 }} />
          <div className="absolute bottom-0 left-10 w-24 h-24 rounded-full pointer-events-none" style={{ backgroundColor: '#00B894', opacity: 0.08 }} />
          <div className="absolute top-10 left-1/2 w-20 h-20 rounded-xl -rotate-6 pointer-events-none" style={{ backgroundColor: '#FDCB6E', opacity: 0.07 }} />

          <div className="relative">
            <span className="inline-block text-xs sm:text-sm font-semibold text-[#FF6B35] bg-[#FFE3D1] px-3 py-1.5 rounded-full mb-5">
              For students preparing for admission
            </span>

            <h2 className="font-hand font-bold text-[#6C5CE7] text-3xl sm:text-4xl lg:text-5xl mb-3 overflow-hidden whitespace-nowrap w-fit animate-typewriter">
              Welcome to Mentora!
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-snug text-[#2C2C2A] max-w-lg font-bold">
              The first platform giving every student a{' '}
              <span className="relative whitespace-nowrap inline-block text-[#6C5CE7]">
                real chance
                <svg
                  className="absolute -left-3 -top-2 w-[calc(100%+24px)] h-[1.6em] pointer-events-none"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <ellipse cx="50" cy="20" rx="48" ry="17" fill="none" stroke="#FF6B35" strokeWidth="3" transform="rotate(-2 50 20)" />
                </svg>
              </span>{' '}
              at admission.
            </h1>

            <p className="text-base sm:text-lg text-[#4A453B] max-w-md mt-6 mb-8 leading-relaxed">
              Mentora connects you with verified current university students, trusted admission Q&amp;A, and real answers — so you stop guessing and start preparing with confidence.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-[#FF6B35] text-white font-medium rounded-md px-6 py-3 text-[15px] shadow-md hover:-translate-y-0.5 hover:shadow-lg transition">
                Ask a question
              </button>
              <button className="bg-white text-[#6C5CE7] font-medium border-2 border-[#6C5CE7] rounded-md px-6 py-3 text-[15px] hover:-translate-y-0.5 transition">
                Become a mentor
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['#9FE1CB', '#F0997B', '#AFA9EC', '#FDCB6E'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#FCFAF4]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6355]">
                <strong className="text-[#2C2C2A]">1,200+</strong> students already here
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: more symbols + sticker-style buzzwords, closer together */}
        <div className="relative h-72 sm:h-96 lg:h-[420px] hidden sm:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-[360px] h-full">
   <svg
  viewBox="0 0 360 420"
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ filter: 'blur(4px)' }}
>
  <path
    d="M40,60 Q120,20 200,70 T340,50"
    fill="none"
    stroke="#6C5CE7"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '0s', animationDuration: '9s' }}
  />

  <path
    d="M60,220 Q160,260 260,210 T330,260"
    fill="none"
    stroke="#FF6B35"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '2s', animationDuration: '11s' }}
  />

  <path
    d="M30,350 Q100,310 190,360 T320,330"
    fill="none"
    stroke="#00B894"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '5s', animationDuration: '10s' }}
  />

  <path
    d="M55,370 Q20,300 65,245 T45,120"
    fill="none"
    stroke="#FF4D6D"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '1s', animationDuration: '12s' }}
  />

  <path
    d="M290,380 Q330,310 285,250 T315,130"
    fill="none"
    stroke="#0984E3"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '4s', animationDuration: '10s' }}
  />

  <path
    d="M75,140 Q120,100 165,135 T250,125"
    fill="none"
    stroke="#FDCB6E"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '3s', animationDuration: '8s' }}
  />

  <path
    d="M120,400 Q155,350 190,300 T250,210"
    fill="none"
    stroke="#A29BFE"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '6s', animationDuration: '13s' }}
  />

  <path
    d="M210,390 Q170,350 205,315 Q245,275 280,315 T325,280"
    fill="none"
    stroke="#00CEC9"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '7s', animationDuration: '11s' }}
  />

  <path
    d="M15,190 Q55,155 90,185 T145,175"
    fill="none"
    stroke="#E84393"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '8s', animationDuration: '9s' }}
  />

  <path
    d="M250,40 Q210,80 245,115 Q280,150 250,190"
    fill="none"
    stroke="#FF7675"
    strokeWidth="2"
    strokeLinecap="round"
    pathLength="1"
    className="animate-draw-erase"
    style={{ animationDelay: '5s', animationDuration: '12s' }}
  />
</svg>
              <FloatingSymbol className=" opacity-75 top-0 left-24 text-4xl" color="#6C5CE7" delay="0s">∑</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 top-14 right-6 text-3xl" color="#FF6B35" delay="0.4s">π</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 top-32 left-2 text-3xl" color="#00B894" delay="0.8s">H₂O</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 bottom-28 right-2 text-4xl" color="#6C5CE7" delay="0.2s">√x</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 bottom-10 left-16 text-2xl" color="#FF6B35" delay="0.6s">E=mc²</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 top-20 left-1/2 text-3xl" color="#00B894" delay="1s">⚛</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 bottom-0 right-24 text-3xl" color="#6C5CE7" delay="1.4s">∞</FloatingSymbol>
              <FloatingSymbol className=" opacity-75 top-1/2 left-4 text-2xl" color="#FF6B35" delay="1.8s">DNA</FloatingSymbol>

              {buzzwords.map((w) => (
                <span
                  key={w.text}
                  className="absolute font-hand font-bold text-4xl sm:text-3xl select-none rounded-lg px-4 py-1.5 animate-buzz scale-120"
                  style={{
                    top: w.top,
                    left: w.left,
                    color: w.color,
                    backgroundColor: w.bg,
                    animationDelay: w.delay,
                    boxShadow: '2px 3px 6px rgba(60,52,50,0.12)',
                  }}
                >
                  {w.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatingSymbol({ children, className = '', color, delay = '0s' }) {
  return (
    <span
      className={`absolute font-hand font-bold select-none animate-float ${className}`}
      style={{ color, animationDelay: delay }}
    >
      {children}
    </span>
  )
}