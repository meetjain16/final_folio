import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Leadership from '../components/Leadership'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    const raw = location.hash.replace(/^#/, '')
    if (!raw) return
    const el = document.getElementById(raw)
    if (!el) return
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
    </>
  )
}

export default Home
