import { useState } from 'react'
import { motion } from 'framer-motion'
import AnswerThread from './AnswerThread'

const categoryColors = {
  Admission: { bg: '#EEEDFE', fg: '#3C3489' },
  Academic: { bg: '#DFF6EC', fg: '#04342C' },
  'University Life': { bg: '#FFE3D1', fg: '#4A1B0C' },
  Department: { bg: '#FFF4D6', fg: '#4A3600' },
  Career: { bg: '#EEEDFE', fg: '#3C3489' },
  Scholarship: { bg: '#DFF6EC', fg: '#04342C' },
  Hostel: { bg: '#FFE3D1', fg: '#4A1B0C' },
  General: { bg: '#FFF4D6', fg: '#4A3600' },
}

export default function QuestionCard({ question, index }) {
  const [open, setOpen] = useState(false)
  const tagColor = categoryColors[question.category] || { bg: '#EEEDFE', fg: '#3C3489' }

  const countReplies = (answers) =>
    answers.reduce((sum, a) => sum + 1 + countReplies(a.replies || []), 0)
  const totalAnswers = countReplies(question.answers)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.08, 0.4) }}
      className="bg-white rounded-lg p-5 sm:p-6"
      style={{ boxShadow: '3px 5px 12px rgba(60,52,50,0.12)' }}
    >
      <div className="flex items-start gap-3">
        {/* vote column */}
        <div className="flex flex-col items-center shrink-0 pt-1">
          <button className="text-[#6C5CE7] hover:scale-110 transition">▲</button>
          <span className="text-sm font-bold text-[#2C2C2A]">{question.votes}</span>
          <button className="text-[#6B6355] hover:scale-110 transition">▼</button>
        </div>

        <div className="flex-1 min-w-0">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2"
            style={{ backgroundColor: tagColor.bg, color: tagColor.fg }}
          >
            {question.category}
          </span>

          <h3 className="text-lg sm:text-xl leading-snug text-[#2C2C2A] mb-2">{question.title}</h3>

          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center font-hand font-bold text-xs shrink-0"
              style={{ backgroundColor: question.askedBy.bg, color: question.askedBy.fg }}
            >
              {question.askedBy.initials}
            </div>
            <span className="text-sm text-[#6B6355]">{question.askedBy.name} asked</span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-sm font-semibold text-[#6C5CE7] hover:underline"
          >
            {totalAnswers === 0
              ? 'Be the first to answer →'
              : `${totalAnswers} ${totalAnswers === 1 ? 'answer' : 'answers'} ${open ? '▲' : '▼'}`}
          </button>

          {open && (
            <div className="mt-5 pt-5 border-t border-[#ECE6D6]">
              {question.answers.length === 0 ? (
                <p className="text-sm text-[#6B6355]">No answers yet.</p>
              ) : (
                <div className="flex flex-col gap-5">
                  {question.answers.map((a) => (
                    <AnswerThread key={a.id} answer={a} depth={0} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}