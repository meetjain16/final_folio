import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [shrink, setShrink] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShrink(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const goToSection = (href: string) => {
    if (location.pathname === '/') {
      scrollToSection(href)
    } else {
      navigate(`/${href}`)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/20 dark:bg-dark-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } ${shrink ? 'py-1' : 'py-4'}`}
    >
      <div className={`container-custom transition-all duration-300 ${shrink ? 'py-1' : 'py-3'}`}>
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`font-bold gradient-text transition-all duration-300 ${shrink ? 'text-lg' : 'text-2xl'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goToSection(item.href)}
                className={`transition-all duration-200 font-medium text-dark-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 ${shrink ? 'text-sm' : 'text-base'}`}
              >
                {item.name}
              </button>
            ))}
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `${shrink ? 'text-sm' : 'text-base'} transition-all duration-200 font-medium ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400'
                }`
              }
            >
              Explore
            </NavLink>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 ${shrink ? 'p-1' : 'p-2'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 ${shrink ? 'p-1' : 'p-2'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 ${shrink ? 'p-1' : 'p-2'}`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-dark-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className={`text-left transition-all duration-200 font-medium text-dark-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 ${shrink ? 'text-sm' : 'text-base'}`}
                >
                  {item.name}
                </button>
              ))}
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `text-left ${shrink ? 'text-sm' : 'text-base'} transition-all duration-200 font-medium ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400'
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
