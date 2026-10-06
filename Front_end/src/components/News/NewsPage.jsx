import { useState } from 'react'
import NewsHeader from './NewsHeader'
import NewsGrid from './NewsGrid'
import CategoryFilter from '../common/CategoryFilter'

const categories = ['All', 'Admission', 'University', 'Scholarship', 'Academic', 'Circular', 'Exam Result']

const newsItems = [
  { id: 1, title: 'DU admission circular 2026 officially published', excerpt: 'Dhaka University has released the full admission circular for the 2026-27 academic year, covering unit-wise eligibility, exam dates, and required GPA thresholds for each faculty.', tag: 'Admission', date: 'Sep 5, 2026' },
  { id: 2, title: 'BUET adds new AI department starting next academic year', excerpt: 'The new Department of Artificial Intelligence will accept its first batch of 60 students, with a curriculum co-designed with industry partners.', tag: 'University', date: 'Sep 2, 2026' },
  { id: 3, title: 'Scholarship deadline extended for HSC 2025 batch', excerpt: 'The Ministry of Education has extended the merit scholarship application deadline by two weeks following requests from students in flood-affected districts.', tag: 'Scholarship', date: 'Aug 30, 2026' },
  { id: 4, title: 'RU cluster admission test result to be published this week', excerpt: 'Results for the humanities and science units of the cluster admission system are expected to be released within the next 5 working days.', tag: 'Exam Result', date: 'Aug 28, 2026' },
  { id: 5, title: 'KUET introduces new robotics and automation program', excerpt: 'Starting this fall, KUET will offer a specialized undergraduate track in robotics under the Mechanical Engineering department.', tag: 'Academic', date: 'Aug 25, 2026' },
  { id: 6, title: 'National University releases honors admission circular', excerpt: 'Affiliated colleges under NU can now begin their online application process, with seat allocation expected by the end of October.', tag: 'Circular', date: 'Aug 20, 2026' },
  { id: 7, title: 'CSE department at JU ranked among top research contributors', excerpt: "A regional academic index placed Jahangirnagar University's CSE department among the top 10 in Bangladesh for research paper output this year.", tag: 'University', date: 'Aug 18, 2026' },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? newsItems : newsItems.filter((n) => n.tag === activeCategory)

  return (
    <div
      className="min-h-screen font-body text-[#2C2C2A]"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <NewsHeader />

      <div className="px-5 sm:px-7 max-w-5xl mx-auto pb-20">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[#6B6355] py-10">
              এই ক্যাটাগরিতে এখনো কোনো আপডেট নেই।
            </p>
          ) : (
            <NewsGrid items={filtered} />
          )}
        </div>
      </div>
    </div>
  )
}