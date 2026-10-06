export default function ProfileStats({ profile }) {
  const stats = [
    { label: 'Mentor points', value: profile.mentor_points ?? 0, color: '#6C5CE7' },
    { label: 'Role', value: profile.role, color: '#00B894' },
    {
      label: 'Joined',
      value: profile.created_at
        ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : '—',
      color: '#FF6B35',
    },
  ]

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl bg-white text-center px-3 py-4"
          style={{ boxShadow: '2px 4px 10px rgba(60,52,50,0.08)', borderBottom: `3px solid ${s.color}` }}
        >
          <div className="font-hand font-bold text-lg sm:text-xl capitalize" style={{ color: s.color }}>
            {s.value}
          </div>
          <div className="text-[11px] sm:text-xs text-[#6B6355] mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
  )
}