import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SkillsShowcase from './components/SkillsShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import Leadership from './components/Leadership'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <SkillsShowcase /> */}
          <Projects />
          <Education />
          <Leadership />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 