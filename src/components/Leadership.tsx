import { motion } from 'framer-motion'
import { Award, Users, Calendar, Target, Star, Trophy } from 'lucide-react'
import FloatingElements from './FloatingElements'

const Leadership = () => {
  const leadershipRoles = [
    {
      icon: <Award className="text-primary-600" size={24} />,
      title: 'Director - Curation and Strategies',
      organization: 'Institution\'s Innovation Council (IIC), BMSCE',
      period: '2023-2024',
      description: 'Leading strategic initiatives and curating innovative programs for the institution.',
      achievements: [
        'Developed and implemented strategic plans for innovation initiatives',
        'Curated educational programs and workshops for students',
        'Collaborated with faculty and industry partners for knowledge sharing'
      ]
    },
    {
      icon: <Users className="text-primary-600" size={24} />,
      title: 'Junior Coordinator',
      organization: 'Annual Fest-UTSAV 2024',
      period: '2024',
      description: 'Led a team of 12 volunteers and coordinated multiple events for the college fest.',
      achievements: [
        'Successfully managed a team of 12 volunteers',
        'Coordinated multiple events and activities during the fest',
        'Ensured smooth execution of all planned activities'
      ]
    },
    {
      icon: <Calendar className="text-primary-600" size={24} />,
      title: 'Event Coordinator',
      organization: 'College Clubs and Fests',
      // period: '2023 - Present',
      description: 'Organized and coordinated multiple events for various clubs and college festivals.',
      achievements: [
        'Planned and executed various club events and activities',
        'Managed logistics and coordination for college festivals',
        'Built strong relationships with student organizations'
      ]
    }
  ]

  const additionalAchievements = [
    {
      icon: <Target className="text-green-600" size={20} />,
      text: 'Successfully led teams in high-pressure environments'
    },
    {
      icon: <Star className="text-yellow-600" size={20} />,
      text: 'Demonstrated excellent organizational and communication skills'
    },
    {
      icon: <Trophy className="text-purple-600" size={20} />,
      text: 'Contributed to successful fundraising and event management'
    },
    {
      icon: <Users className="text-blue-600" size={20} />,
      text: 'Built and maintained strong professional relationships'
    }
  ]

  return (
    <section id="leadership" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30 dark:from-green-900/20 dark:via-transparent dark:to-blue-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Leadership & Achievements</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My leadership journey and achievements that demonstrate my ability to lead teams and drive successful outcomes.
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg flex-shrink-0">
                  {role.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-dark-900 dark:text-white mb-1">
                    {role.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                    {role.organization}
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">
                    {role.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 leading-relaxed">
                {role.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="font-medium text-dark-700 dark:text-dark-200 text-sm">
                  Key Achievements:
                </h4>
                <ul className="space-y-1">
                  {role.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-xs text-dark-600 dark:text-dark-300 flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-dark-900 dark:text-white">
            Leadership Qualities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <p className="text-sm font-medium text-dark-700 dark:text-dark-200 text-left">
                    {achievement.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-green-50 dark:from-primary-900/20 dark:to-green-900/20 p-8 rounded-lg border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
              Leadership Impact
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-6 max-w-3xl mx-auto">
              Through my various leadership roles, I've developed strong skills in team management, 
              strategic planning, and event coordination. I believe in leading by example and 
              empowering team members to achieve their full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">12+</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">Team Members Led</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">Events Coordinated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">Leadership Roles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership 