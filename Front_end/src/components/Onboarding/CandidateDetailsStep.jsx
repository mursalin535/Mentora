import InstitutionSelect from '../common/InstitutionSelect'

export default function CandidateDetailsStep({ form, onChange, onBack, onSubmit, submitting }) {
  return (
    <div>
      <h2 className="font-hand font-bold text-2xl sm:text-3xl text-[#26215C] mb-2 text-center">
        Tell us about your studies
      </h2>
      <p className="text-sm sm:text-base text-[#6B6355] text-center mb-8">
        This helps other students and mentors find you.
      </p>

      <div className="flex flex-col gap-4">
        <InstitutionSelect
          type="school"
          label="School"
          value={form.school}
          onChange={(val) => onChange('school', val)}
        />
        <InstitutionSelect
          type="college"
          label="College"
          value={form.college}
          onChange={(val) => onChange('college', val)}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField label="Class level" value={form.class_level} onChange={(v) => onChange('class_level', v)} placeholder="e.g. HSC 2nd year" />
          <TextField label="Group" value={form.group_name} onChange={(v) => onChange('group_name', v)} placeholder="e.g. Science" />
        </div>
        <TextField label="HSC year" value={form.hsc_year} onChange={(v) => onChange('hsc_year', v)} placeholder="e.g. 2027" type="number" />
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="text-sm font-bold text-[#6B6355] hover:text-[#26215C] transition">
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="bg-[#6C5CE7] text-white font-bold rounded-md px-7 py-3 text-sm hover:-translate-y-0.5 transition disabled:opacity-60"
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
        className="rounded-md border-2 border-[#ECE6D6] focus:border-[#6C5CE7] outline-none px-4 py-2.5 text-sm sm:text-base text-[#2C2C2A] font-body transition"
      />
    </label>
  )
}