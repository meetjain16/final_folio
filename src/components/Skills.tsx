import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud } from 'lucide-react'
import FloatingElements from './FloatingElements'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-500" size={24} />,
      skills: [
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'Java', level: 80, color: '#ED8B00' },
        { name: 'C++', level: 75, color: '#00599C' },
        { name: 'C', level: 70, color: '#A8B9CC' },
        { name: 'R', level: 65, color: '#276DC3' },
      ]
    },
    {
      title: 'Web Development',
      icon: <Database className="text-green-500" size={24} />,
      skills: [
        { name: 'MERN Stack', level: 88, color: '#61DAFB' },
        { name: 'HTML/CSS', level: 92, color: '#E34F26' },
        { name: 'React', level: 85, color: '#61DAFB' },
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'Express.js', level: 78, color: '#000000' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Palette className="text-purple-500" size={24} />,
      skills: [
        { name: 'Flutter', level: 85, color: '#02569B' },
        { name: 'Kotlin', level: 75, color: '#7F52FF' },
        { name: 'Mobile UI/UX', level: 80, color: '#6366F1' },
        { name: 'Cross-platform', level: 82, color: '#FF6B6B' },
      ]
    }
  ]

  const ideSkills = [
    { name: 'VS Code', level: 95, color: '#007ACC' },
    { name: 'Jupyter Notebook', level: 85, color: '#F37626' },
    { name: 'Google Colab', level: 80, color: '#F9AB00' },
    { name: 'IntelliJ IDEA', level: 75, color: '#000000' },
    { name: 'FlutLab', level: 70, color: '#02569B' },
    { name: 'NetBeans', level: 65, color: '#1B6AC6' },
  ]

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </motion.div>

        {/* Main Skills Row */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Category Cards */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-dark-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-dark-600 dark:text-dark-300 font-medium">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 dark:bg-dark-600 rounded-full h-1.5">
                        <motion.div
                          className="h-1.5 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      {/* <span className="text-xs text-primary-600 font-medium">{skill.level}%</span> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Radar Chart for IDEs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3">
                <Cloud className="text-orange-500" size={24} />
              </div>
              <h3 className="font-bold text-lg text-dark-900 dark:text-white">Tools & IDEs</h3>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-48 h-48" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
                  {/* Grid circles */}
                  {[20, 40, 60, 80].map((radius) => (
                    <circle
                      key={radius}
                      cx="100"
                      cy="100"
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-gray-200 dark:text-gray-600"
                    />
                  ))}
                  
                  {/* Grid lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const rad = (angle - 90) * (Math.PI / 180)
                    const x = 100 + 80 * Math.cos(rad)
                    const y = 100 + 80 * Math.sin(rad)
                    return (
                      <line
                        key={angle}
                        x1="100"
                        y1="100"
                        x2={x}
                        y2={y}
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-gray-200 dark:text-gray-600"
                      />
                    )
                  })}
                  
                  {/* Skill points */}
                  {ideSkills.map((skill, index) => {
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
                      </g>
                    )
                  })}
                  
                  {/* Animated Skill Area */}
                  <motion.path
                    d={`M ${ideSkills.map((skill, index) => {
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
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ 
                      pathLength: 1, 
                      opacity: 1 
                    }}
                    transition={{ 
                      pathLength: { duration: 2, delay: 0.5 },
                      opacity: { duration: 1, delay: 0.5 }
                    }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Skill area glow effect */}
                  <motion.path
                    d={`M ${ideSkills.map((skill, index) => {
                      const angle = (index * 60 - 90) * (Math.PI / 180)
                      const radius = (skill.level / 100) * 80
                      const x = 100 + radius * Math.cos(angle)
                      const y = 100 + radius * Math.sin(angle)
                      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
                    }).join(' ')} Z`}
                    fill="url(#skillGradient)"
                    fillOpacity="0.1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                  />
                  
                  <defs>
                    <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* Text labels positioned outside SVG */}
            <div className="relative w-48 h-48 mx-auto -mt-48">
              {ideSkills.map((skill, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180)
                const radius = 95
                const x = 100 + radius * Math.cos(angle)
                const y = 100 + radius * Math.sin(angle)
                
                return (
                  <div
                    key={skill.name}
                    className="absolute text-xs font-semibold text-dark-700 dark:text-dark-200 whitespace-nowrap"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {skill.name}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Other Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Work Bench', 'Code::Blocks', 'Canva', 'Figma', 'Kinemaster', 'VN',
              'Git', 'GitHub', 'Agile', 'Scrum', 'Leadership', 'Event Management',
              'Team Coordination', 'Problem Solving', 'Communication', 'Analytical Thinking'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-dark-600 px-4 py-2 rounded-lg text-center text-sm font-medium text-dark-700 dark:text-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 