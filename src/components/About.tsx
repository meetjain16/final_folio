import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import FloatingElements from './FloatingElements'

const About = () => {
  const experiences = [
    {
      year: 'November 2024',
      title: 'INTERN -Front End App Developer',
      company: 'BYTEDOCKER',
      description: 'Collaborated with a team to develop and implement key features, including the Feed Screen, Posts Screen,Profile Screen for the Inovact Social mobile app.'
    },
    {
      year: 'March 2023-Dec 2023',
      title: 'INTERN -Front End App Developer',
      company: 'SKILLFINDR',
      description: 'Collaborated with a team to develop and implement key features, including the Profile Screen, Menu Screen, Achievements Screen, and Filters Screen for the SkillFindr mobile app.'
    },
    // {
    //   year: '2020 - 2021',
    //   title: 'Junior Developer',
    //   company: 'Digital Agency',
    //   description: 'Developed and maintained client websites using React and Node.js.'
    // }
  ]

  const education = [
    {
      year: '2022 - 2026',
      degree: 'B.E in Computer Science-Data Science',
      school: 'B.M.S College of Engineering, Bangalore',
      // description: 'Specialized in Software Engineering and Web Development'
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
                I'm a passionate Full Stack Developer with over 3 years of experience creating 
                digital solutions that make a real impact. I believe in writing clean, maintainable 
                code and designing intuitive user experiences.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm always 
                eager to learn and take on new challenges.
              </p>
              <p className="leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring 
                that every project I work on is not only functional but also delightful to use.
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
                <span>Based in Bangalore, India</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <GraduationCap className="text-primary-600" size={20} />
                <span>B.M.S College of Engineering, Bangalore</span>
                <span>B.E. Computer Science-Data Science Graduate</span>
              </div> */}
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
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
                    <p className="text-dark-600 dark:text-dark-300 text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary-600" size={24} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.school}
                    </p>
                    <p className="text-dark-600 dark:text-dark-300 text-sm">
                      {/* {edu.description} */}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 