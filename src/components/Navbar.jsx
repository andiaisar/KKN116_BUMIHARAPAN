import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/budidaya', label: 'Cara Budidaya', icon: '🐛' },
  { to: '/tanya-ai', label: 'Tanya AI', icon: '🤖' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/5 border-b border-green-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition-transform">
              🌿
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-800 text-green-800 font-extrabold tracking-tight">
                KKN 116
              </span>
              <span className="block text-xs text-green-600 font-medium">
                Bumi Harapan
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  pathname === link.to
                    ? 'text-green-700 bg-green-50'
                    : 'text-stone-600 hover:text-green-700 hover:bg-green-50/70'
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
                {pathname === link.to && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-green-600" />
                )}
              </Link>
            ))}
            <Link
              to="/tanya-ai"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Konsultasi Gratis →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-green-50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-5 flex flex-col gap-1 transition-all">
              <span className={`block h-0.5 bg-stone-600 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-stone-600 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-stone-600 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-1 flex flex-col gap-1 bg-white border-t border-green-100">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                pathname === link.to
                  ? 'text-green-700 bg-green-50'
                  : 'text-stone-600 hover:text-green-700 hover:bg-green-50'
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <Link
            to="/tanya-ai"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md"
          >
            🤖 Konsultasi Gratis
          </Link>
        </div>
      </div>
    </nav>
  )
}
