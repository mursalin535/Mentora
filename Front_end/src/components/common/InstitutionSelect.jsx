import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useAuth } from '../../context/AuthContext'

export default function InstitutionSelect({ type, label, value, onChange, universityId = null }) {
  const { session } = useAuth()
  const [query, setQuery] = useState(value?.name || '')
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [creating, setCreating] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const timeout = setTimeout(async () => {
      let q = supabase
        .from(type === 'department' ? 'departments' : 'institutions')
        .select('id, name')
        .ilike('name', `%${query}%`)
        .limit(6)

      if (type === 'department' && universityId) {
        q = q.eq('university_id', universityId)
      } else if (type !== 'department') {
        q = q.eq('type', type)
      }

      const { data } = await q
      setResults(data || [])
    }, 300)

    return () => clearTimeout(timeout)
  }, [query, type, universityId])

  const handleSelectExisting = (row) => {
    onChange({ id: row.id, name: row.name, isNew: false })
    setQuery(row.name)
    setOpen(false)
  }

  const handleCreateNew = async () => {
    if (!query.trim() || !session?.user?.id) return
    setCreating(true)

    const table = type === 'department' ? 'departments' : 'institutions'
    const payload =
      type === 'department'
        ? { name: query.trim(), university_id: universityId, status: 'pending', submitted_by: session.user.id }
        : { name: query.trim(), type, status: 'pending', submitted_by: session.user.id }

    const { data, error } = await supabase.from(table).insert(payload).select().single()

    setCreating(false)
    if (!error && data) {
      onChange({ id: data.id, name: data.name, isNew: true })
      setOpen(false)
    }
  }

  const exactMatch = results.some((r) => r.name.toLowerCase() === query.trim().toLowerCase())

  return (
    <div ref={wrapperRef} className="relative flex flex-col gap-1.5">
      <span className="text-xs font-bold uppercase tracking-wide text-[#6B6355]">{label}</span>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setOpen(true)
          onChange(null)
        }}
        onFocus={() => setOpen(true)}
        placeholder={`Type your ${label.toLowerCase()}...`}
        disabled={type === 'department' && !universityId}
        className="rounded-md border-2 border-[#ECE6D6] focus:border-[#6C5CE7] outline-none px-4 py-2.5 text-sm sm:text-base text-[#2C2C2A] font-body transition disabled:bg-[#F4F1EA] disabled:cursor-not-allowed"
      />

      {open && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md border-2 border-[#ECE6D6] shadow-lg z-20 max-h-56 overflow-y-auto">
          {results.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => handleSelectExisting(r)}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#F4F1EA] transition"
            >
              {r.name}
            </button>
          ))}

          {!exactMatch && (
            <button
              type="button"
              onClick={handleCreateNew}
              disabled={creating}
              className="w-full text-left px-4 py-2.5 text-sm text-[#6C5CE7] font-semibold hover:bg-[#F4F1EA] transition border-t border-[#ECE6D6]"
            >
              {creating ? 'Adding...' : `+ Add "${query}" (pending admin review)`}
            </button>
          )}
        </div>
      )}
    </div>
  )
}