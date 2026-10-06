function Field({ label, value }) {
  return (
    <div className="flex items-baseline gap-3 py-2.5">
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#6B6355] shrink-0">
        {label}
      </span>
      <span className="flex-1 border-b border-dotted border-[#B4B2A9] h-4" />
      <span className="text-sm sm:text-base text-[#2C2C2A] font-medium text-right">
        {value || '—'}
      </span>
    </div>
  )
}

export default function ProfileDetails({ profile, roleData }) {
  return (
    <div
      className="rounded-2xl bg-white p-6 sm:p-8"
      style={{ boxShadow: '3px 6px 16px rgba(60,52,50,0.1)' }}
    >
      <h2 className="font-hand font-bold text-xl sm:text-2xl text-[#26215C] mb-4">
        Details
      </h2>

      <div className="divide-y divide-[#ECE6D6]">
        {profile.role === 'mentor' && roleData && (
          <>
            <Field label="University" value={roleData.universityName} />
            <Field label="Department" value={roleData.departmentName} />
            <Field label="Admission year" value={roleData.admission_year} />
            <Field label="Current year" value={roleData.current_year} />
            <Field
              label="Verification"
              value={roleData.verification_status?.charAt(0).toUpperCase() + roleData.verification_status?.slice(1)}
            />
          </>
        )}

        {profile.role === 'candidate' && roleData && (
          <>
            <Field label="School" value={roleData.schoolName} />
            <Field label="College" value={roleData.collegeName} />
            <Field label="Class level" value={roleData.class_level} />
            <Field label="Group" value={roleData.group_name} />
            <Field label="HSC year" value={roleData.hsc_year} />
          </>
        )}

        {profile.facebook_url && <Field label="Facebook" value={profile.facebook_url} />}
        {profile.linkedin_url && <Field label="LinkedIn" value={profile.linkedin_url} />}
        {profile.instagram_url && <Field label="Instagram" value={profile.instagram_url} />}
        {profile.whatsapp_number && <Field label="WhatsApp" value={profile.whatsapp_number} />}
      </div>
    </div>
  )
}