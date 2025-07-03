import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Top Animated SVG */}
      <motion.svg
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 -translate-x-1/2 top-0 z-20"
        width="80" height="80" viewBox="0 0 80 80" fill="none"
      >
        <polygon points="40,10 70,70 10,70" fill="#a5b4fc" opacity="0.3" />
        <circle cx="40" cy="40" r="18" fill="#f472b6" opacity="0.2" />
      </motion.svg>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-800 dark:to-dark-900"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-purple-400/20 to-pink-400/20 dark:from-primary-600/10 dark:via-purple-600/10 dark:to-pink-600/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-xl"
      />

      {/* Particle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.1)_1px,transparent_0)] bg-[length:20px_20px] animate-pulse"></div>
      
      {/* Animated Lines */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-primary-400/50 to-transparent dark:via-primary-600/50"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent dark:via-purple-600/50"
      />
      
      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Meet Jain</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-dark-600 dark:text-dark-300 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-dark-600 dark:text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative design, and building products that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <a
              href="public\MEET_JAIN_RESUME_V8.pdf"
              download
              className="btn-secondary flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">Client Satisfaction</div>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-dark-600 dark:text-dark-300"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 