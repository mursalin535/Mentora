export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
      {categories.map((cat) => {
        const isActive = cat === active
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 text-sm font-medium px-4 py-2 rounded-full border-2 transition ${
              isActive
                ? 'bg-[#6C5CE7] text-white border-[#6C5CE7]'
                : 'bg-white text-[#4A453B] border-[#DCE6ED] hover:border-[#6C5CE7]'
            }`}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}