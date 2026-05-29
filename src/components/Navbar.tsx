import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShrink(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 dark:bg-dark-900/75 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] border-b border-white/60 dark:border-white/10'
          : 'bg-transparent'
      } ${shrink ? 'py-1' : 'py-4'}`}
    >
      <div className={`container-custom transition-all duration-300 ${shrink ? 'py-1' : 'py-3'}`}>
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/50 bg-white/60 px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-dark-900/55 md:px-6">
          <Link
            to="/"
            className={`flex items-center gap-3 font-display font-bold transition-all duration-300 ${shrink ? 'text-lg' : 'text-2xl'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dark-900 text-sm text-white shadow-lg shadow-dark-900/15 dark:bg-white dark:text-dark-900">
              MJ
            </span>
            <span className="gradient-text">Portfolio</span>
          </Link>

          <div className="hidden items-center space-x-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 font-medium transition-all duration-200 ${shrink ? 'text-sm' : 'text-base'} ${
                    isActive
                      ? 'bg-dark-900 text-white dark:bg-white dark:text-dark-900'
                      : 'text-dark-700 hover:bg-dark-900 hover:text-white dark:text-white/80 dark:hover:bg-white dark:hover:text-dark-900'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `${shrink ? 'text-sm' : 'text-base'} rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                    : 'text-dark-700 hover:bg-dark-900 hover:text-white dark:text-white/80 dark:hover:bg-white dark:hover:text-dark-900'
                }`
              }
            >
              Explore
            </NavLink>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border border-white/60 bg-white/80 text-dark-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-dark-800/80 dark:text-white ${shrink ? 'p-2' : 'p-3'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full border border-white/60 bg-white/80 text-dark-900 transition-all duration-200 dark:border-white/10 dark:bg-dark-800/80 dark:text-white ${shrink ? 'p-2' : 'p-3'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-full border border-white/60 bg-white/80 text-dark-900 transition-all duration-200 dark:border-white/10 dark:bg-dark-800/80 dark:text-white ${shrink ? 'p-2' : 'p-3'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-white/50 bg-white/85 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-dark-900/85">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-left font-medium transition-all duration-200 ${shrink ? 'text-sm' : 'text-base'} ${
                      isActive
                        ? 'bg-primary-600 text-white'
                        : 'text-dark-700 hover:bg-dark-900 hover:text-white dark:text-white/80 dark:hover:bg-white dark:hover:text-dark-900'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-left font-medium transition-all duration-200 ${shrink ? 'text-sm' : 'text-base'} ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-dark-700 hover:bg-dark-900 hover:text-white dark:text-white/80 dark:hover:bg-white dark:hover:text-dark-900'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
