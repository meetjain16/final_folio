import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Code2, Download, Layers, Mail, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const scrollToContact = () => {
    navigate('/contact')
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-8 top-24 h-24 w-24 rounded-full bg-primary-500/15 blur-3xl dark:bg-primary-500/10"
      />
      <motion.div
        animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute right-10 top-36 h-32 w-32 rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-500/10"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_42%)]" />

      <div className="container-custom section-padding relative z-10 flex min-h-screen items-center pt-28 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/15 bg-white/70 px-4 py-2 text-sm font-medium text-dark-700 shadow-sm backdrop-blur-xl dark:bg-dark-800/60 dark:text-dark-200"
            >
              <Sparkles size={16} className="text-primary-600" />
              Building polished web experiences for modern products
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl text-5xl font-display font-semibold leading-[0.95] text-dark-900 dark:text-white sm:text-6xl lg:text-7xl"
            >
              Meet Jain, a modern <span className="gradient-text">product-minded developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-dark-600 dark:text-dark-300"
            >
              I’m a B.E. Computer Science and Data Science student focused on web and app development. I build scalable, user-centered interfaces with a strong eye for detail, and I’m currently working as a Software Developer Intern at IndiaMART.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button onClick={scrollToContact} className="btn-primary">
                <Mail size={18} />
                Get In Touch
                <ArrowRight size={18} />
              </button>

              <a href="/Meet_Jain_RESUME_V8.pdf" download className="btn-secondary">
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['React', 'MERN Stack', 'Flutter', 'UI Systems', 'AI/ML'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-medium text-dark-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-dark-800/60 dark:text-dark-200"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { value: '3', label: 'Internships' },
                { value: '5+', label: 'Projects' },
                { value: '2', label: 'Core Domains' },
                { value: '1', label: 'Current Role' },
              ].map((stat) => (
                <div key={stat.label} className="surface p-4 text-center">
                  <div className="text-3xl font-display font-semibold gradient-text">{stat.value}</div>
                  <div className="mt-1 text-sm text-dark-600 dark:text-dark-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="surface relative mx-auto w-full max-w-xl overflow-hidden p-6 md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-fuchsia-500" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600 dark:text-primary-300">
                  Portfolio Snapshot
                </p>
                <h2 className="mt-2 text-2xl font-display font-semibold text-dark-900 dark:text-white">
                  Crafting interfaces with structure and motion
                </h2>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-fuchsia-500 text-white shadow-lg shadow-primary-500/20">
                <Code2 size={28} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Layers size={18} />, title: 'Systems Thinking', text: 'From landing pages to product flows' },
                { icon: <Sparkles size={18} />, title: 'Visual Polish', text: 'Clean spacing, contrast, and hierarchy' },
                { icon: <Code2 size={18} />, title: 'Front-end Depth', text: 'React, TypeScript, Tailwind, animation' },
                { icon: <Mail size={18} />, title: 'Open to Work', text: 'Internships, collaborations, and freelance' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-dark-900/40">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-300">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-dark-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-dark-600 dark:text-dark-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-dark-500 dark:text-dark-300">
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 