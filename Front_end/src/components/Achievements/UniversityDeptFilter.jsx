export default function UniversityDeptFilter({
  universities, departments, activeUniversity, activeDepartment, onUniversityChange, onDepartmentChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-xs font-bold uppercase tracking-wide text-[#6B6355] mb-2">
          University
        </label>
        <select
          value={activeUniversity}
          onChange={(e) => onUniversityChange(e.target.value)}
          className="w-full rounded-md bg-white border-2 border-[#6C5CE7] px-4 py-2.5 text-sm sm:text-base text-[#2C2C2A] font-body outline-none appearance-none cursor-pointer"
          style={{ boxShadow: '2px 3px 8px rgba(60,52,50,0.06)' }}
        >
          {universities.map((u) => (
            <option key={u} value={u}>{u === 'All' ? 'All universities' : u}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-xs font-bold uppercase tracking-wide text-[#6B6355] mb-2">
          Department
        </label>
        <select
          value={activeDepartment}
          onChange={(e) => onDepartmentChange(e.target.value)}
          className="w-full rounded-md bg-white border-2 border-[#FF6B35] px-4 py-2.5 text-sm sm:text-base text-[#2C2C2A] font-body outline-none appearance-none cursor-pointer"
          style={{ boxShadow: '2px 3px 8px rgba(60,52,50,0.06)' }}
        >
          {departments.map((d) => (
            <option key={d} value={d}>{d === 'All' ? 'All departments' : d}</option>
          ))}
        </select>
      </div>
    </div>
  )
}