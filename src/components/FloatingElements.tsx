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
        className="absolute top-1/4 left-1/6 w-2 h-2 bg-primary-400/30 dark:bg-primary-600/30 rounded-full"
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
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400/30 dark:bg-purple-600/30 rounded-full"
      />
      
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
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400/30 dark:bg-pink-600/30 rounded-full"
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
        className="absolute bottom-1/4 right-1/6 w-3 h-3 bg-blue-400/30 dark:bg-blue-600/30 rounded-full"
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
        className="absolute top-1/2 left-1/8 w-16 h-16 bg-gradient-to-r from-primary-400/20 to-purple-400/20 dark:from-primary-600/20 dark:to-purple-600/20 rounded-full blur-md"
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
        className="absolute bottom-1/2 right-1/8 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/20 dark:to-pink-600/20 rounded-full blur-md"
      />
    </>
  )
}

export default FloatingElements 