import { useState } from 'react'
import AchievementsHeader from './AchievementsHeader'
import UniversityDeptFilter from './UniversityDeptFilter'
import AchievementsGrid from './AchievementsGrid'

const achievements = [
  {
    id: 1,
    title: 'CSE dept ranked top research contributor in South Asia',
    university: 'BUET',
    department: 'CSE',
    description: 'Over 40 papers published in international conferences and journals by undergraduate and graduate students combined, placing the department among the top research contributors in the region this year.',
    submittedBy: 'Rafi Ahmed',
    initials: 'RA',
    date: 'Aug 2026',
    bg: '#9FE1CB',
    fg: '#04342C',
    accent: '#00B894',
  },
  {
    id: 2,
    title: 'Business students place top-3 at Asia-Pacific Case Challenge',
    university: 'Dhaka University',
    department: 'Business Studies',
    description: 'A team from the Faculty of Business Studies secured a top-3 finish at the Asia-Pacific Case Challenge, marking the third consecutive year the department has placed at this competition.',
    submittedBy: 'Nusrat Sultana',
    initials: 'NS',
    date: 'Jul 2026',
    bg: '#F0997B',
    fg: '#4A1B0C',
    accent: '#FF6B35',
  },
  {
    id: 3,
    title: 'Student-built autonomous drone wins National Robotics Olympiad',
    university: 'KUET',
    department: 'EEE',
    description: 'A fully student-led robotics project — an autonomous drone developed in the new EEE robotics lab — won first place at the National Robotics Olympiad, funded through department research grants.',
    submittedBy: 'Tanvir Hasan',
    initials: 'TH',
    date: 'Jun 2026',
    bg: '#AFA9EC',
    fg: '#26215C',
    accent: '#6C5CE7',
  },
  {
    id: 4,
    title: 'Flood-resilient housing design wins national recognition',
    university: 'RUET',
    department: 'Civil Engineering',
    description: 'A student-led sustainable housing design project was recognized by the Bangladesh Institute of Planners for its low-cost, flood-resilient architecture aimed at rural communities.',
    submittedBy: 'Imran Kabir',
    initials: 'IK',
    date: 'May 2026',
    bg: '#FDCB6E',
    fg: '#4A3600',
    accent: '#FDCB6E',
  },
  {
    id: 5,
    title: 'Pharmacy dept launches free community health camp initiative',
    university: 'Dhaka University',
    department: 'Pharmacy',
    description: 'Final-year Pharmacy students organized a series of free health camps across underserved neighborhoods, screening over 800 residents in partnership with local clinics.',
    submittedBy: 'Farhana Sumi',
    initials: 'FS',
    date: 'Apr 2026',
    bg: '#9FE1CB',
    fg: '#04342C',
    accent: '#00B894',
  },
  {
    id: 6,
    title: 'ME students design low-cost prosthetic hand',
    university: 'CUET',
    department: 'Mechanical Engineering',
    description: 'A team of mechanical engineering students designed and 3D-printed a functional, low-cost prosthetic hand, now being piloted with a local hospital for underprivileged patients.',
    submittedBy: 'Sabbir Hossain',
    initials: 'SH',
    date: 'Mar 2026',
    bg: '#F0997B',
    fg: '#4A1B0C',
    accent: '#FF6B35',
  },
]

export default function AchievementsPage() {
  const [university, setUniversity] = useState('All')
  const [department, setDepartment] = useState('All')

  const universities = ['All', ...new Set(achievements.map((a) => a.university))]
  const departments =
    university === 'All'
      ? ['All', ...new Set(achievements.map((a) => a.department))]
      : ['All', ...new Set(achievements.filter((a) => a.university === university).map((a) => a.department))]

  const filtered = achievements.filter((a) => {
    const matchUni = university === 'All' || a.university === university
    const matchDept = department === 'All' || a.department === department
    return matchUni && matchDept
  })

  return (
    <div
      className="min-h-screen font-body text-[#2C2C2A]"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <AchievementsHeader />

      <div className="px-5 sm:px-7 max-w-6xl mx-auto pb-20">
        <UniversityDeptFilter
          universities={universities}
          departments={departments}
          activeUniversity={university}
          activeDepartment={department}
          onUniversityChange={(u) => { setUniversity(u); setDepartment('All') }}
          onDepartmentChange={setDepartment}
        />

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[#6B6355] py-16">
              এই ফিল্টারে এখনো কোনো achievement নেই।
            </p>
          ) : (
            <AchievementsGrid items={filtered} />
          )}
        </div>
      </div>
    </div>
  )
}