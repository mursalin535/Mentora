export default function AlumniCard({ person, rotate = -2, tapeAlt = false }) {
  if (!person) return null

  return (
    <div className="relative w-full group">
      <div className="relative w-full" style={{ transform: `rotate(${rotate}deg)` }}>
        {/* tape */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 w-20 h-7 border border-[#E6D99C]"
          style={{
            backgroundColor: tapeAlt ? 'rgba(255,244,214,0.82)' : 'rgba(249,231,124,0.72)',
            transform: `translateX(-50%) rotate(${tapeAlt ? 3 : -2}deg)`,
          }}
        />

        {/* paper card */}
        <div
          className="relative bg-[#FFFDF7] p-3 pb-6 rounded-2xl border border-[#E9E3D5] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:rotate-0 cursor-pointer"
          style={{ boxShadow: '6px 8px 0px rgba(38,33,92,0.10), 0 10px 25px rgba(38,33,92,0.08)' }}
        >
          {/* paper texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.12] rounded-2xl z-20"
            style={{ backgroundImage: 'radial-gradient(#6B6355 0.6px, transparent 0.6px)', backgroundSize: '6px 6px' }}
          />

          {/* photo / avatar area */}
          <div
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 flex items-center justify-center"
            style={{ backgroundColor: person.bg, borderColor: person.bg }}
          >
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-[3px]"
              />
            ) : (
              <span className="font-hand font-bold text-5xl" style={{ color: person.fg }}>
                {person.initials}
              </span>
            )}

            {/* hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#26215C]/0 group-hover:bg-[#26215C]/45 transition-all duration-500">
              <div className="translate-y-5 scale-75 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400">
                <div className="px-5 py-2.5 rounded-full bg-[#FFFDF7] border-2 border-[#26215C] shadow-[4px_4px_0px_#F9E77C] font-hand text-base font-bold text-[#26215C] rotate-[-2deg]">
                  View profile →
                </div>
              </div>
            </div>

            {/* initials badge */}
            <div className="absolute bottom-2 left-2 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
              <span
                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold border-2 border-white/80 shadow-sm"
                style={{ backgroundColor: person.bg, color: person.fg }}
              >
                {person.initials}
              </span>
            </div>

            {/* year badge */}
            <div className="absolute top-2 right-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/85 text-[#26215C]">
                '{(person.year || '').toString().slice(-2)}
              </span>
            </div>
          </div>

          {/* info */}
          <div className="relative text-center pt-4 px-2">
            <h3 className="font-hand text-xl sm:text-2xl font-bold leading-tight" style={{ color: person.fg }}>
              {person.name}
            </h3>

            <div className="flex justify-center mt-2">
              <span
                className="inline-block text-xs sm:text-sm font-bold px-3 py-1 rounded-sm"
                style={{ color: person.fg, backgroundColor: `${person.bg}70` }}
              >
                {person.department}, {person.university}
              </span>
            </div>

            <p className="text-sm text-[#4A453B] leading-relaxed mt-3">{person.bio}</p>

            {/* extra alumni-specific details */}
            <div className="flex flex-col gap-1 text-xs mt-3 pt-3 border-t border-dashed border-[#ECE6D6] text-left">
              <div className="flex justify-between gap-2">
                <span className="text-[#6B6355]">School</span>
                <span className="font-semibold text-[#2C2C2A] text-right truncate">{person.school || '—'}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#6B6355]">College</span>
                <span className="font-semibold text-[#2C2C2A] text-right truncate">{person.college || '—'}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[#6B6355]">Area</span>
                <span className="font-semibold text-[#2C2C2A] text-right">{person.area || '—'}</span>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <span
                className="text-xs font-bold px-4 py-1.5 rounded-full border transition-all duration-300 group-hover:scale-105"
                style={{ color: person.fg, borderColor: person.bg, backgroundColor: `${person.bg}35` }}
              >
                Connect with me
              </span>
            </div>
          </div>

          {/* folded corner */}
          <div
            className="absolute bottom-0 right-0 w-8 h-8 opacity-30"
            style={{ backgroundColor: person.bg, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>
    </div>
  )
}