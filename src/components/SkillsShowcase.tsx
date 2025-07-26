import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud, Star, Target, TrendingUp } from 'lucide-react'
import FloatingElements from './FloatingElements'

const SkillsShowcase = () => {
  const sampleSkills = [
    { name: 'JavaScript', level: 90, icon: '⚡', color: '#F7DF1E', category: 'Programming' },
    { name: 'React', level: 85, icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: '🟢', color: '#339933', category: 'Backend' },
    { name: 'Python', level: 85, icon: '🐍', color: '#3776AB', category: 'Programming' },
    { name: 'MongoDB', level: 75, icon: '🍃', color: '#47A248', category: 'Database' },
    { name: 'Flutter', level: 85, icon: '📱', color: '#02569B', category: 'Mobile' },
    { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC', category: 'Tools' },
    { name: 'Git', level: 80, icon: '📚', color: '#F05032', category: 'Tools' },
  ]

  const categories = [
    { name: 'Programming Languages', icon: <Code className="text-blue-500" size={24} />, color: 'blue' },
    { name: 'Web Development', icon: <Database className="text-green-500" size={24} />, color: 'green' },
    { name: 'Mobile Development', icon: <Palette className="text-purple-500" size={24} />, color: 'purple' },
    { name: 'Tools & IDEs', icon: <Cloud className="text-orange-500" size={24} />, color: 'orange' },
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills Display Styles</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Choose your preferred style for displaying skills. Each style offers a unique visual approach.
          </p>
        </motion.div>

        {/* Style 1: Progress Rings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 1: Progress Rings</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sampleSkills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {/* Progress Ring */}
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200 dark:text-gray-700"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      className="text-primary-600"
                      initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                      whileInView={{ 
                        strokeDasharray: `${2 * Math.PI * 40}`,
                        strokeDashoffset: `${2 * Math.PI * 40 * (1 - skill.level / 100)}`
                      }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  
                  {/* Skill Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  
                  {/* Percentage */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-dark-700 px-2 py-1 rounded-full text-xs font-bold text-primary-600">
                    {skill.level}%
                  </div>
                </div>
                <h4 className="font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style 2: Skill Grid Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 2: Skill Grid Cards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sampleSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-1">{skill.name}</h4>
                  <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-dark-500 dark:text-dark-400">{skill.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style 3: Horizontal Bars with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 3: Horizontal Bars with Icons</h3>
          <div className="space-y-6">
            {sampleSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-dark-700 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600"
              >
                <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-dark-900 dark:text-white">{skill.name}</h4>
                    <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full relative"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style 4: Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 4: Category Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-dark-900 dark:text-white">{category.name}</h3>
                </div>
                <div className="space-y-2">
                  {sampleSkills
                    .filter(skill => skill.category.toLowerCase().includes(category.name.toLowerCase().split(' ')[0]))
                    .slice(0, 3)
                    .map((skill, skillIndex) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-sm text-dark-600 dark:text-dark-300">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 dark:bg-dark-600 rounded-full h-1.5">
                            <motion.div
                              className="h-1.5 rounded-full bg-primary-600"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <span className="text-xs text-primary-600 font-medium">{skill.level}%</span>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style 5: Skill Tiles with Flip Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 5: Skill Tiles with Flip Effect</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sampleSkills.slice(0, 8).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ rotateY: 180 }}
                className="relative w-32 h-32 mx-auto perspective-1000"
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white dark:bg-dark-700 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 flex flex-col items-center justify-center backface-hidden">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <h4 className="font-semibold text-dark-900 dark:text-white text-center">{skill.name}</h4>
                  <div className="text-xs text-primary-600 font-medium">{skill.level}%</div>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 bg-primary-600 rounded-lg shadow-sm flex flex-col items-center justify-center backface-hidden rotate-y-180 p-4">
                  <h4 className="font-semibold text-white text-center mb-2">{skill.name}</h4>
                  <p className="text-white/80 text-xs text-center">{skill.category}</p>
                  <div className="mt-2 text-white/60 text-xs">
                    Expert level proficiency
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Style 6: Skill Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Style 6: Skill Radar Chart</h3>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Radar Grid */}
              <svg className="w-80 h-80" viewBox="0 0 200 200">
                {/* Grid circles */}
                {[20, 40, 60, 80].map((radius, i) => (
                  <circle
                    key={radius}
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-gray-200 dark:text-gray-700"
                  />
                ))}
                
                {/* Skill points */}
                {sampleSkills.slice(0, 6).map((skill, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180)
                  const radius = (skill.level / 100) * 80
                  const x = 100 + radius * Math.cos(angle)
                  const y = 100 + radius * Math.sin(angle)
                  
                  return (
                    <g key={skill.name}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="4"
                        fill={skill.color}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                      <text
                        x={100 + 90 * Math.cos(angle)}
                        y={100 + 90 * Math.sin(angle)}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-medium fill-current text-dark-600 dark:text-dark-300"
                      >
                        {skill.name}
                      </text>
                    </g>
                  )
                })}
                
                {/* Skill area */}
                <motion.path
                  d={`M ${sampleSkills.slice(0, 6).map((skill, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180)
                    const radius = (skill.level / 100) * 80
                    const x = 100 + radius * Math.cos(angle)
                    const y = 100 + radius * Math.sin(angle)
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
                  }).join(' ')} Z`}
                  fill="url(#skillGradient)"
                  fillOpacity="0.3"
                  stroke="url(#skillGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                
                <defs>
                  <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Selection Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-primary-100 dark:border-primary-800"
        >
          <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
            Choose Your Style!
          </h3>
          <p className="text-lg text-dark-600 dark:text-dark-300 mb-6 max-w-2xl mx-auto">
            Each style offers a unique way to showcase your skills. Tell me which one you prefer, 
            and I'll implement it with your actual skills data!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 1:</strong> Progress Rings
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 2:</strong> Grid Cards
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 3:</strong> Horizontal Bars
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 4:</strong> Category Cards
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 5:</strong> Flip Tiles
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg">
              <strong>Style 6:</strong> Radar Chart
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsShowcase 