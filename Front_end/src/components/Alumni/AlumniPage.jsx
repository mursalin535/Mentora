import { useState } from 'react'
import AlumniHeader from './AlumniHeader'
import SearchFilters from './SearchFilters'
import AlumniGrid from './AlumniGrid'

const filterTypes = ['University', 'School', 'College', 'Area']

const alumni = [
  { id: 1, name: 'Rafi Ahmed', initials: 'RA', university: 'BUET', department: 'CSE', school: 'Notre Dame College', college: 'Notre Dame College', area: 'Dhaka', year: '2022', bg: '#9FE1CB', fg: '#04342C', bio: 'Loves competitive programming and helping juniors crack the admission test strategy.' },
  { id: 2, name: 'Nusrat Sultana', initials: 'NS', university: 'Dhaka University', department: 'BBA', school: 'Viqarunnisa Noon School', college: 'Holy Cross College', area: 'Dhaka', year: '2021', bg: '#F0997B', fg: '#4A1B0C', bio: 'Business student passionate about case competitions and mentoring first-year students.' },
  { id: 3, name: 'Tanvir Hasan', initials: 'TH', university: 'KUET', department: 'EEE', school: 'Khulna Zilla School', college: 'Khulna Public College', area: 'Khulna', year: '2023', bg: '#AFA9EC', fg: '#26215C', bio: 'Robotics enthusiast, happy to talk about EEE admission and campus life at KUET.' },
  { id: 4, name: 'Farhana Sumi', initials: 'FS', university: 'Dhaka University', department: 'Pharmacy', school: 'Rajuk Uttara Model College', college: 'Rajuk Uttara Model College', area: 'Dhaka', year: '2020', bg: '#FDCB6E', fg: '#4A3600', bio: 'Pharmacy grad, glad to guide anyone confused between medical and pharmacy admission paths.' },
  { id: 5, name: 'Imran Kabir', initials: 'IK', university: 'RUET', department: 'Civil Engineering', school: 'Rajshahi Collegiate School', college: 'Rajshahi College', area: 'Rajshahi', year: '2022', bg: '#9FE1CB', fg: '#04342C', bio: 'Interested in sustainable architecture, always up for a chat about engineering admission.' },
  { id: 6, name: 'Sabbir Hossain', initials: 'SH', university: 'CUET', department: 'ME', school: 'Chittagong Collegiate School', college: 'Chittagong College', area: 'Chattogram', year: '2021', bg: '#F0997B', fg: '#4A1B0C', bio: 'Mechanical engineering senior, active mentor for CUET admission questions.' },
]

export default function AlumniPage() {
  const [query, setQuery] = useState('')
  const [activeFilterType, setActiveFilterType] = useState('University')

  const filtered = alumni.filter((a) => {
    if (!query.trim()) return true
    const field = activeFilterType.toLowerCase()
    return a[field]?.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div
      className="min-h-screen font-body text-[#2C2C2A]"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <AlumniHeader />

      <div className="px-5 sm:px-7 max-w-6xl mx-auto pb-20">
        <SearchFilters
          filterTypes={filterTypes}
          activeFilterType={activeFilterType}
          onFilterTypeChange={setActiveFilterType}
          query={query}
          onQueryChange={setQuery}
        />

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[#6B6355] py-16">
              কোনো ফলাফল পাওয়া যায়নি। অন্য কিছু দিয়ে খুঁজে দেখো।
            </p>
          ) : (
            <AlumniGrid people={filtered} />
          )}
        </div>
      </div>
    </div>
  )
}