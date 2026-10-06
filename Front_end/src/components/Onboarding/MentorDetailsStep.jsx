import InstitutionSelect from '../common/InstitutionSelect'

export default function MentorDetailsStep({ form, onChange, onBack, onSubmit, submitting }) {
  return (
    <div>
      <h2 className="font-hand font-bold text-2xl sm:text-3xl text-[#26215C] mb-2 text-center">
        Tell us about your university life
      </h2>
      <p className="text-sm sm:text-base text-[#6B6355] text-center mb-8">
        An admin will verify this before you can answer as a mentor.
      </p>

      <div className="flex flex-col gap-4">
        <InstitutionSelect
          type="university"
          label="University"
          value={form.university}
          onChange={(val) => onChange('university', val)}
        />
        <InstitutionSelect
          type="department"
          label="Department"
          value={form.department}
          onChange={(val) => onChange('department', val)}
          universityId={form.university?.id}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField label="Admission year" value={form.admission_year} onChange={(v) => onChange('admission_year', v)} placeholder="e.g. 2022" type="number" />
          <TextField label="Current year" value={form.current_year} onChange={(v) => onChange('current_year', v)} placeholder="e.g. 3" type="number" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="text-sm font-bold text-[#6B6355] hover:text-[#26215C] transition">
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="bg-[#00B894] text-white font-bold rounded-md px-7 py-3 text-sm hover:-translate-y-0.5 transition disabled:opacity-60"
        >
          {submitting ? 'Saving...' : 'Finish setup →'}
        </button>
      </div>
    </div>
  )
}

function TextField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-wide text-[#6B6355]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-md border-2 border-[#ECE6D6] focus:border-[#00B894] outline-none px-4 py-2.5 text-sm sm:text-base text-[#2C2C2A] font-body transition"
      />
    </label>
  )
}