const roles = [
  {
    key: 'candidate',
    title: "I'm a student",
    subtitle: 'Preparing for university admission',
    emoji: '🎒',
    accent: '#6C5CE7',
    bg: '#EEEDFE',
  },
  {
    key: 'mentor',
    title: "I'm a mentor",
    subtitle: 'Currently studying at a university',
    emoji: '🎓',
    accent: '#00B894',
    bg: '#DFF6EC',
  },
]

export default function RoleSelectStep({ onSelect }) {
  return (
    <div>
      <h2 className="font-hand font-bold text-2xl sm:text-3xl text-[#26215C] mb-2 text-center">
        Which one are you?
      </h2>
      <p className="text-sm sm:text-base text-[#6B6355] text-center mb-8">
        This helps us set up your profile the right way.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {roles.map((r) => (
          <button
            key={r.key}
            onClick={() => onSelect(r.key)}
            className="text-left rounded-2xl border-2 p-6 transition hover:-translate-y-1"
            style={{ borderColor: r.accent, backgroundColor: r.bg, boxShadow: '3px 5px 12px rgba(60,52,50,0.08)' }}
          >
            <div className="text-4xl mb-3">{r.emoji}</div>
            <h3 className="font-hand font-bold text-xl" style={{ color: r.accent }}>{r.title}</h3>
            <p className="text-sm text-[#4A453B] mt-1">{r.subtitle}</p>
          </button>
        ))}
      </div>
    </div>
  )
}   