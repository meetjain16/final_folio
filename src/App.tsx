import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden bg-transparent transition-colors duration-300">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-10%] top-[-8%] h-80 w-80 rounded-full bg-primary-500/20 blur-3xl dark:bg-primary-500/15" />
          <div className="absolute right-[-8%] top-[14%] h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-500/10" />
          <div className="absolute bottom-[-12%] left-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/10" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.12] dark:opacity-[0.08]" />
        </div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
