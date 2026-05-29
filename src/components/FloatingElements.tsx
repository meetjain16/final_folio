import { motion } from 'framer-motion'

const FloatingElements = () => {
  return (
    <>
      {/* Small floating dots */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/6 h-2 w-2 rounded-full bg-primary-400/20 dark:bg-primary-600/15"
      />
      
      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-purple-400/20 dark:bg-purple-600/15"
      />
         {/* Particle Grid */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.12)_1px,transparent_0)] bg-[length:22px_22px] opacity-70"></div>
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-pink-400/20 dark:bg-pink-600/15"
      />
      
      <motion.div
        animate={{
          y: [0, 8, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute bottom-1/4 right-1/6 h-3 w-3 rounded-full bg-blue-400/20 dark:bg-blue-600/15"
      />

      {/* Subtle gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/8 h-16 w-16 rounded-full bg-gradient-to-r from-primary-400/15 to-purple-400/15 blur-md dark:from-primary-600/12 dark:to-purple-600/12"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/2 right-1/8 h-20 w-20 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/15 blur-md dark:from-purple-600/12 dark:to-pink-600/12"
      />
    </>
  )
}

export default FloatingElements 