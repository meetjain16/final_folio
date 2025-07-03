import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Consulting', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Resume', href: '#' },
        { name: 'GitHub', href: 'https://github.com/yourusername' }
      ]
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/meetjain16'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/meet-jain-912223248'
    },
    {
      icon: <Twitter size={20} />,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername'
    },
    {
      icon: <Mail size={20} />,
      name: 'Email',
      url: 'jainmeet162003@gmail.com'
    }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={`bg-dark-900 text-white transition-all duration-300 ${shrink ? 'py-2' : ''}`}>
      <div className={`container-custom ${shrink ? 'py-4' : 'section-padding'} transition-all duration-300`}>
        {/* Main Footer Content */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${shrink ? 'mb-4' : ''}`}>
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className={`font-bold gradient-text mb-4 ${shrink ? 'text-lg' : 'text-2xl'}`}>Portfolio</div>
            <p className={`text-dark-300 mb-6 leading-relaxed ${shrink ? 'text-xs' : ''}`}>
              A passionate Full Stack Developer creating beautiful, functional, and user-centered digital experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-dark-800 rounded-lg hover:bg-primary-600 text-dark-300 hover:text-white transition-all duration-200 ${shrink ? 'p-2' : 'p-3'}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                      }}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className={`border-t border-dark-700 ${shrink ? 'pt-2' : 'pt-8'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-dark-300 ${shrink ? 'text-xs' : 'text-sm'}`}
            >
              © {currentYear} Meet Jain. All rights reserved.
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex gap-6 ${shrink ? 'text-xs' : 'text-sm'}`}
            >
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 