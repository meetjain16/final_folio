import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import FloatingElements from './FloatingElements'

const Education = () => {
  const education = [
    {
      year: 'June 2026',
      degree: 'Bachelor of Engineering',
      school: 'B.M.S College of Engineering, Bangalore',
      location: 'Bangalore, Karnataka',
      description: 'Computer Science and Data Science',
      achievements: ['Specialized in Software Engineering and Web Development', 'Active member of Institution\'s Innovation Council (IIC)']
    },
    {
      year: '2019 - 2021',
      degree: 'Intermediate',
      school: 'S.R.Public School Kota',
      location: 'Kota, Rajasthan',
      description: 'Percentage: 88.8%',
      achievements: ['Strong foundation in Mathematics and Science', 'Participated in various academic competitions']
    },
    {
      year: '2012 - 2019',
      degree: 'High School',
      school: 'Pallavi Model School Hyderabad',
      location: 'Hyderabad, Telangana',
      description: 'Percentage: 95.2%',
      achievements: ['Excellent academic performance', 'Involved in extracurricular activities']
    }
  ]

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My academic journey and educational achievements that have shaped my technical foundation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <GraduationCap size={48} className="text-primary-600" />
              </div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-dark-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {edu.year}
                    </p>
                  </div>
                </div>

                {/* School Info */}
                <div className="mb-4">
                  <h4 className="font-semibold text-dark-800 dark:text-dark-100 mb-1">
                    {edu.school}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 mb-2">
                    <MapPin size={16} />
                    {edu.location}
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {edu.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h5 className="font-medium text-dark-700 dark:text-dark-200 flex items-center gap-2">
                    <Award size={16} />
                    Key Highlights
                  </h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-dark-600 dark:text-dark-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-8 rounded-lg border border-primary-100 dark:border-primary-800">
            <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
              Academic Excellence
            </h3>
            <p className="text-lg text-dark-600 dark:text-dark-300 mb-6 max-w-2xl mx-auto">
              Maintaining a strong academic record with 95.2% in High School and 88.8% in Intermediate, 
              demonstrating consistent dedication to learning and excellence in education.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95.2%</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">High School</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">88.8%</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">Intermediate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Ongoing</div>
                <div className="text-sm text-dark-600 dark:text-dark-300">B.E. Degree</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 