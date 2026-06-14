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
      title: 'Text-To-Image AI Site',
      description: 'A full-stack web application that generates images from text descriptions using AI. Built with MERN stack and integrated with AI APIs for image generation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      technologies: ['MERN Stack', 'AI APIs', 'React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/meetjain16/autonomous-research-agent',
      featured: true
    },
    {
      id: 2,
      title: 'AI ChatBot',
      description: 'Multi-agent system for autonomous research and data collection. Agents automatically gather information, analyze findings, and generate comprehensive reports using web search and document retrieval.',
      image: 'https://images.unsplash.com/photo-1655720828018-eed62d98936d?w=500&h=300&fit=crop',
      technologies: ['LangChain', 'Python', 'FastAPI', 'OpenAI API', 'LLM Agents'],
      category: 'agents',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      description: 'Autonomous task automation agent that manages scheduling, email responses, and workflow orchestration. Uses intelligent decision-making to prioritize tasks and handle complex business logic.',
        title: 'Autonomous Task Automation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      technologies: ['LangChain', 'FastAPI', 'Celery', 'PostgreSQL', 'Claude API'],
      category: 'agents',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      description: 'Intelligent code analysis and debugging agent. Uses AST parsing and LLM reasoning to identify bugs, suggest fixes, and explain issues in real-time.',
        title: 'Code Analysis Agent',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
      technologies: ['LangChain', 'Python', 'AST', 'OpenAI GPT-4', 'Reflex Framework'],
      category: 'agents',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Customer Support Agent',
        description: 'Context-aware customer support agent. Manages support tickets, retrieves relevant documentation, and provides intelligent responses with conversation memory.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=500&h=300&fit=crop',
        technologies: ['LangChain', 'FAISS', 'Python', 'Anthropic Claude', 'RAG'],
        category: 'agents',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 6,
      description: 'Workflow orchestration agent that coordinates multiple sub-agents for complex business processes. Manages dependencies, error handling, and inter-agent communication.',
        title: 'Workflow Orchestration Engine',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      technologies: ['LangChain', 'Python', 'FastAPI', 'Redis', 'OpenAI API'],
      category: 'agents',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'automation', label: 'Automation' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Animations */}
      <FloatingElements />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/25 via-transparent to-pink-50/25 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-copy max-w-2xl mx-auto">
            Autonomous AI agent systems and intelligent automation projects built with cutting-edge LLM frameworks and multi-agent orchestration.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-dark-900 text-white shadow-lg shadow-dark-900/15 dark:bg-white dark:text-dark-900'
                  : 'bg-white/80 text-dark-700 shadow-sm hover:-translate-y-0.5 hover:bg-white dark:bg-dark-800/60 dark:text-dark-200 dark:hover:bg-dark-700'
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
              className="surface group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-dark-900/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-3 text-dark-900 transition-colors duration-200 hover:bg-primary-600 hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white p-3 text-dark-900 transition-colors duration-200 hover:bg-primary-600 hover:text-white"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-dark-900 shadow-sm dark:bg-dark-900/90 dark:text-white">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-display font-semibold text-dark-900 dark:text-white">
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
                      className="rounded-full bg-dark-900/5 px-3 py-1 text-xs font-medium text-dark-700 dark:bg-white/10 dark:text-dark-200"
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