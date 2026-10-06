import { useState } from 'react'

export default function AnswerThread({ answer, depth }) {
  const [showReplyBox, setShowReplyBox] = useState(false)
  const hasReplies = answer.replies && answer.replies.length > 0

  return (
    <div className={depth > 0 ? 'pl-4 sm:pl-6 border-l-2 border-[#ECE6D6]' : ''}>
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-hand font-bold text-xs shrink-0"
          style={{ backgroundColor: answer.by.bg, color: answer.by.fg }}
        >
          {answer.by.initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-sm font-semibold text-[#2C2C2A]">{answer.by.name}</span>
            {answer.by.mentor && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#DFF6EC] text-[#04342C]">
                Mentor · {answer.by.dept}
              </span>
            )}
          </div>
          <p className="text-[15px] text-[#4A453B] leading-relaxed mb-2">{answer.text}</p>

          <div className="flex items-center gap-4 text-xs text-[#6B6355]">
            <span className="flex items-center gap-1">
              <button className="hover:text-[#6C5CE7] transition">▲</button>
              <span className="font-semibold">{answer.votes}</span>
              <button className="hover:text-[#6C5CE7] transition">▼</button>
            </span>
            <button
              onClick={() => setShowReplyBox(!showReplyBox)}
              className="font-semibold hover:text-[#6C5CE7] transition"
            >
              Reply
            </button>
          </div>

          {showReplyBox && (
            <div className="mt-3 flex gap-2">
              <input
                type="text"
                placeholder="Write a reply..."
                className="flex-1 text-sm border-2 border-[#DCE6ED] rounded-md px-3 py-2 focus:outline-none focus:border-[#6C5CE7]"
              />
              <button className="text-sm font-semibold bg-[#6C5CE7] text-white px-4 py-2 rounded-md hover:-translate-y-0.5 transition">
                Post
              </button>
            </div>
          )}

          {hasReplies && (
            <div className="mt-4 flex flex-col gap-4">
              {answer.replies.map((r) => (
                <AnswerThread key={r.id} answer={r} depth={depth + 1} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}