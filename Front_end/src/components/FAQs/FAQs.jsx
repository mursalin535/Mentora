import { useState } from 'react'
import FAQHeader from './FAQHeader'
import CategoryFilter from '../common/CategoryFIlter'
import QuestionCard from './QuestionCard'
import AddPost from './AddPost'

const categories = ['All', 'Admission', 'Academic', 'University Life', 'Department', 'Career', 'Scholarship', 'Hostel', 'General']

const questions = [
  {
    id: 1,
    title: 'GPA কম হলেও কি DU-তে চান্স পাওয়া সম্ভব?',
    category: 'Admission',
    askedBy: { name: 'Tanjila Akter', initials: 'TA', bg: '#F0997B', fg: '#4A1B0C' },
    votes: 24,
    answers: [
      {
        id: 101,
        by: { name: 'Rafi Ahmed', initials: 'RA', bg: '#9FE1CB', fg: '#04342C', mentor: true, dept: 'CSE, BUET' },
        text: 'GPA কম হলেও সম্ভব, তবে ইউনিট ভিত্তিক ভর্তি পরীক্ষায় ভালো করাটা জরুরি। DU-তে GPA আর ভর্তি পরীক্ষা দুইটার সম্মিলিত স্কোর হিসাব হয়।',
        votes: 12,
        replies: [
          {
            id: 1011,
            by: { name: 'Tanjila Akter', initials: 'TA', bg: '#F0997B', fg: '#4A1B0C' },
            text: 'ধন্যবাদ! তাহলে কোন ইউনিটে পরীক্ষা দিলে ভালো হবে?',
            votes: 2,
            replies: [
              {
                id: 10111,
                by: { name: 'Rafi Ahmed', initials: 'RA', bg: '#9FE1CB', fg: '#04342C', mentor: true, dept: 'CSE, BUET' },
                text: 'তোমার আগ্রহ অনুযায়ী — সাইন্স ব্যাকগ্রাউন্ড হলে GA (Ka) ইউনিট, নাহলে D ইউনিট বিবেচনা করতে পারো।',
                votes: 4,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'CSE first year e ki ki subject thake?',
    category: 'Academic',
    askedBy: { name: 'Imran Kabir', initials: 'IK', bg: '#AFA9EC', fg: '#26215C' },
    votes: 18,
    answers: [
      {
        id: 102,
        by: { name: 'Nusrat Sultana', initials: 'NS', bg: '#FDCB6E', fg: '#4A3600', mentor: true, dept: 'BBA, DU' },
        text: 'সাধারণত Physics, Math, Programming Fundamentals, আর Bangla/English থাকে প্রথম বর্ষে — তবে ইউনিভার্সিটিভেদে একটু আলাদা হতে পারে।',
        votes: 7,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    title: 'Hostel seat pete koto CGPA lage?',
    category: 'Hostel',
    askedBy: { name: 'Sabbir Hossain', initials: 'SH', bg: '#F0997B', fg: '#4A1B0C' },
    votes: 9,
    answers: [],
  },
]

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? questions : questions.filter((q) => q.category === activeCategory)

  return (
    <div
      className="min-h-screen font-body text-[#2C2C2A]"
      style={{
        backgroundColor: '#FCFAF4',
        backgroundImage: 'repeating-linear-gradient(#FCFAF4 0px, #FCFAF4 31px, #DCE6ED 32px)',
      }}
    >
      <FAQHeader />
      <AddPost/>
      <div className="px-5 sm:px-7 max-w-4xl mx-auto pb-20">
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="flex flex-col gap-8 mt-10">
          {filtered.length === 0 ? (
            <p className="text-center text-[#6B6355] py-10">
              এই ক্যাটাগরিতে এখনো কোনো প্রশ্ন নেই। প্রথম প্রশ্নটা তুমিই করো!
            </p>
          ) : (
            filtered.map((q, i) => <QuestionCard key={q.id} question={q} index={i} />)
          )}
        </div>
      </div>
    </div>
  )
}