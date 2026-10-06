import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'News', to: '/news' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'Achievements', to: '/achievements' },
]

export default function Nav() {
  const { session, signInWithGoogle, signOut } = useAuth()
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const closeMenu = () => {
    if (!open) return

    setClosing(true)
    window.setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 180)
  }

  const toggleMenu = () => {
    if (open) {
      closeMenu()
      return
    }

    setClosing(false)
    setOpen(true)
  }

  return (
    <div className="sticky top-0 z-50 bg-[#FCFAF4] border-b border-[#ECE6D6]">
      <div className="flex items-center justify-between px-4 sm:px-7 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-pale text-sm shrink-0 shadow-[0_8px_20px_rgba(60,52,137,0.22)]">
            M
          </div>
          <span className="font-hand text-2xl font-bold text-[#26215C]">Mentora</span>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1 text-[15px] text-[#5C574A]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link relative rounded-full px-3 py-2 font-medium transition duration-300 ease-out"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden lg:flex items-center gap-3">
          {session ? (
            <>
              <Link
                to="/profile"
                className="text-sm text-[#5C574A] max-w-[160px] truncate hover:text-primary transition"
              >
                {session.user.email}
              </Link>
              <button
                onClick={signOut}
                className="text-sm text-primary border border-primary-light rounded-md px-4 py-1.5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(60,52,137,0.12)]"
              >
                Log out
              </button>
            </>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="bg-primary text-primary-pale rounded-md px-5 py-2 text-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(60,52,137,0.2)]"
            >
              Sign in
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-[#26215C] transition duration-200 hover:bg-[#F1EDE5] hover:text-primary"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {(open || closing) && (
        <div className="lg:hidden px-4 sm:px-7 pb-5">
          <div
            className={`overflow-hidden rounded-2xl border border-[#ECE6D6] bg-[#FCFAF4]/95 shadow-[0_20px_40px_rgba(38,33,92,0.12)] backdrop-blur-md ${closing ? 'animate-nav-window-close' : 'animate-nav-window-open'}`}
          >
            <div className="flex flex-col gap-3 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="nav-mobile-link w-full rounded-xl px-3 py-2 text-left text-[15px] text-[#5C574A] transition duration-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {session ? (
                <>
                  <Link
                    to="/profile"
                    className="px-3 text-sm text-[#5C574A] truncate hover:text-primary transition"
                    onClick={closeMenu}
                  >
                    {session.user.email}
                  </Link>
                  <button
                    onClick={() => {
                      signOut()
                      closeMenu()
                    }}
                    className="w-fit rounded-md border border-primary-light px-4 py-2 text-sm text-primary transition duration-200 hover:bg-[#F0EEFF]"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    signInWithGoogle()
                    closeMenu()
                  }}
                  className="w-fit rounded-md bg-primary px-5 py-2 text-sm text-primary-pale transition duration-200 hover:brightness-105"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}