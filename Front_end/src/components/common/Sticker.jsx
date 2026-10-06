export default function Sticker({ children, rotate = 0, className = '', tape = true }) {
  return (
    <div
      className={`relative bg-white rounded-md transition hover:-translate-y-1 hover:rotate-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, boxShadow: '2px 3px 6px rgba(60,52,50,0.15)' }}
    >
      {tape && (
        <div
          className="absolute w-11 h-4 -top-2 left-1/2 -ml-[23px] border border-black/5"
          style={{ backgroundColor: 'rgba(255,233,168,0.75)' }}
        />
      )}
      {children}
    </div>
  )
}   