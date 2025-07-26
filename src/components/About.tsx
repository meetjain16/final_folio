import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import FloatingElements from './FloatingElements'

const About = () => {
  const experiences = [
    {
      year: 'July 2025',
      title: 'Founder\'s Office Intern',
      company: 'CubeHQ.ai',
      location: 'Bangalore, Karnataka',
      description: 'Working in the founder\'s office gaining valuable insights into startup operations and business development.'
    },
    {
      year: 'November 2024',
      title: 'Intern - Front End App Developer',
      company: 'BYTEDOCKER',
      location: 'Bangalore, Karnataka',
      description: 'Collaborated with a team to develop and implement key features, including the Feed Screen, Posts Screen, and Profile Screen for the Inovact Social mobile app.'
    },
    {
      year: 'March 2023 - Dec 2023',
      title: 'Intern - Front End App Developer',
      company: 'SKILLFINDR',
      location: 'Bangalore, Karnataka',
      description: 'Collaborated with a team to develop and implement key features. The startup, utilizing this product, successfully raised a pre-seed funding round, showcasing the collective impact of the team\'s efforts.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-purple-50/30 dark:from-primary-900/20 dark:via-transparent dark:to-purple-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Get to know me better - my journey, experience, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-6 text-dark-600 dark:text-dark-300">
              <p className="leading-relaxed">
                I'm a B.E. student in Computer Science and Data Science with a strong passion for technology 
                and a keen interest in Web and App Development. I am meticulous and detail-oriented with 
                excellent observational, organizational, and communication skills.
              </p>
              <p className="leading-relaxed">
                I'm willing to take on any task to help the team with a hardworking and resourceful approach. 
                My experience spans across multiple internships where I've contributed to real-world projects 
                and helped startups achieve their goals.
              </p>
              <p className="leading-relaxed">
                Beyond technical skills, I'm actively involved in leadership roles, serving as Director of 
                Curation and Strategies for Institution's Innovation Council (IIC) at BMSCE, and coordinating 
                multiple events for college fests.
              </p>
            </div>

            {/* Personal Details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary-600" size={20} />
                <span>Born in 2003</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-600" size={20} />
                <span>Based in Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary-600" size={20} />
                <span>B.E. Computer Science & Data Science</span>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary-600" size={24} />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mb-2">
                    {exp.location}
                  </p>
                  <p className="text-dark-600 dark:text-dark-300 text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 