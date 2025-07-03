import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import FloatingElements from './FloatingElements'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack Salon platform built with React, Node.js, and MongoDB. Features include user authentication,Shop mangement,Appointment booking.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Aurora- Intelligence in every voice',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      category: 'frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    // { id: 'frontend', label: 'Frontend' },
    // { id: 'backend', label: 'Backend' },
    // { id: 'fullstack', label: 'Full Stack' },
    // { id: 'design', label: 'Design' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-900/20 dark:via-transparent dark:to-pink-900/20"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-dark-600 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-dark-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-dark-600 text-dark-700 dark:text-dark-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 text-sm px-4 py-2"
                    >
                      <Eye size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 text-sm px-4 py-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 