import { motion } from 'framer-motion'
import { Code,  Database } from 'lucide-react'
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
      title: 'Frontend Development',
      icon: <Code className="text-blue-500" size={24} />,
      skills: [
        { name: 'React', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'JavaScript', level: 95, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 90, color: '#E34F26' },
        { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="text-green-500" size={24} />,
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Express.js', level: 80, color: '#000000' },
        { name: 'Python', level: 75, color: '#3776AB' },
        { name: 'MongoDB', level: 80, color: '#47A248' },
        { name: 'PostgreSQL', level: 70, color: '#336791' },
      ]
    },
    // {
    //   title: 'Design & UI/UX',
    //   icon: <Palette className="text-purple-500" size={24} />,
    //   skills: [
    //     { name: 'Figma', level: 85, color: '#F24E1E' },
    //     { name: 'Adobe XD', level: 75, color: '#FF61F6' },
    //     { name: 'Photoshop', level: 70, color: '#31A8FF' },
    //     { name: 'Illustrator', level: 65, color: '#FF9A00' },
    //     { name: 'User Research', level: 80, color: '#6366F1' },
    //   ]
    // },
    // {
    //   title: 'DevOps & Tools',
    //   icon: <Cloud className="text-orange-500" size={24} />,
    //   skills: [
    //     { name: 'Git', level: 80, color: '#F05032' },
    //     { name: 'Docker', level: 20, color: '#2496ED' },
    //     { name: 'AWS', level: 20, color: '#FF9900' },
    //     { name: 'CI/CD', level: 20, color: '#FF6B6B' },
    //     { name: 'Linux', level: 20, color: '#FCC624' },
    //   ]
    // }
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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-dark-700 dark:text-dark-200">
                        {skill.name}
                      </span>
                      {/* <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {skill.level}%
                      </span> */}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full transition-all duration-300 relative"
                        style={{ backgroundColor: skill.color }}
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Other Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Redux', 'Next.js', 'GraphQL', 'REST APIs', 'Discord', 'Webpack',
              'Vite', 'NPM', 'Yarn', 'VS Code', 'Postman', 'Swagger',
              // 'Agile', 'Scrum', 'JIRA', 'Confluence', 'Slack', 'Jest'
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