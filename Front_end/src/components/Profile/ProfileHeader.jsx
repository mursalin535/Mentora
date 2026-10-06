const roleColors = {
  admin: { accent: '#FF6B35', label: 'Admin' },
  mentor: { accent: '#00B894', label: 'Mentor' },
  candidate: { accent: '#6C5CE7', label: 'Candidate' },
}

export default function ProfileHeader({ profile, roleData, isOwnProfile }) {
  const role = roleColors[profile.role] || roleColors.candidate
  const subtitle =
    profile.role === 'mentor'
      ? [roleData?.departmentName, roleData?.universityName].filter(Boolean).join(', ')
      : profile.role === 'candidate'
      ? [roleData?.school_id ? 'Student' : null, roleData?.collegeName || roleData?.schoolName].filter(Boolean).join(' · ')
      : 'Platform Administrator'

  return (
    <div className="relative">
      {/* lanyard hole */}
      <div className="absolute -top-3 left-8 w-6 h-6 rounded-full bg-[#FCFAF4] border-4 border-[#26215C] z-10" />

      <div
        className="relative rounded-2xl bg-white overflow-hidden"
        style={{ boxShadow: '4px 8px 20px rgba(60,52,50,0.15)' }}
      >
        {/* top ID stripe */}
        <div
          className="flex items-center justify-between px-6 py-2.5"
          style={{ backgroundColor: '#26215C' }}
        >
          <span className="font-hand font-bold text-sm text-white tracking-wide">MENTORA · ID</span>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
            style={{ backgroundColor: role.accent, color: '#fff' }}
          >
            {role.label}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 p-6 sm:p-7">
          {/* avatar */}
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl border-4 flex items-center justify-center shrink-0 overflow-hidden"
            style={{ borderColor: role.accent, backgroundColor: '#EEEDFE' }}
          >
            {profile.profile_image_url ? (
              <img src={profile.profile_image_url} alt={profile.full_name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-hand font-bold text-4xl text-[#3C3489]">
                {profile.full_name?.charAt(0) || '?'}
              </span>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left min-w-0">
            <h1 className="font-hand font-bold text-2xl sm:text-3xl text-[#26215C] truncate">
              {profile.full_name}
            </h1>
            {profile.username && <p className="text-sm text-[#6B6355]">@{profile.username}</p>}
            {subtitle && (
              <p className="text-sm font-semibold mt-1" style={{ color: role.accent }}>
                {subtitle}
              </p>
            )}
          </div>

          {isOwnProfile && (
            <button
              className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-md text-white transition hover:-translate-y-0.5"
              style={{ backgroundColor: role.accent }}
            >
              Edit profile
            </button>
          )}
        </div>

        {profile.bio && (
          <p className="px-6 sm:px-7 pb-5 text-sm text-[#4A453B] leading-relaxed border-t border-dashed border-[#ECE6D6] pt-4 mx-6 sm:mx-7 -mt-1 mb-2">
            {profile.bio}
          </p>
        )}

        {/* barcode-style bottom strip, purely decorative */}
        <div className="flex gap-[2px] px-6 sm:px-7 pb-4 opacity-40">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#26215C]"
              style={{ width: i % 3 === 0 ? '2px' : '1px', height: '14px' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}