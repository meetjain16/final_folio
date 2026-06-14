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
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/25 via-transparent to-purple-50/25 dark:from-primary-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className="section-kicker">About</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-copy max-w-2xl mx-auto">
            I specialize in building autonomous AI agents and multi-agent systems that solve complex problems through intelligent decision-making and adaptive reasoning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface p-6 md:p-8"
          >
            <h3 className="mb-6 text-2xl font-display font-semibold">Who I Am</h3>
            <div className="space-y-6 text-dark-600 dark:text-dark-300">
              <p className="leading-relaxed">
                I'm a software developer with expertise in autonomous AI agents, LLM orchestration, and multi-agent systems. 
                I build intelligent agents using Python, FastAPI, LangChain, and other cutting-edge frameworks. 
                My focus is on creating self-directed systems that leverage large language models to solve complex problems.
              </p>
              <p className="leading-relaxed">
                I specialize in tool integration, prompt engineering, agent workflows, and system design for autonomous agents. 
                My approach combines deep technical knowledge with practical problem-solving to create agents that are 
                both powerful and reliable. I'm passionate about the intersection of AI and software engineering.
              </p>
              <p className="leading-relaxed">
                I'm committed to advancing the field of autonomous agents through continuous learning, experimentation, 
                and contributing to open-source projects. I believe AI agents will be fundamental to the future of software, 
                and I'm excited to be building that future.
              </p>
            </div>

            {/* Personal Details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 dark:bg-dark-900/40">
                <Calendar className="text-primary-600" size={20} />
                <span>Born in 2003</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 dark:bg-dark-900/40">
                <MapPin className="text-primary-600" size={20} />
                <span>Based in Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 dark:bg-dark-900/40">
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
            className="surface p-6 md:p-8"
          >
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-display font-semibold">
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
                  className="surface p-6 transition-all duration-300 hover:-translate-y-1"
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