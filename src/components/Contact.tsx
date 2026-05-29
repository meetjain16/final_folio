import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="text-primary-600" size={24} />,
      title: 'Email',
      value: 'jainmeet162003@gmail.com',
      link: 'mailto:jainmeet162003@gmail.com'
    },
    {
      icon: <Phone className="text-primary-600" size={24} />,
      title: 'Phone',
      value: '+91 7995559515',
      link: 'tel:+917995559515'
    },
    {
      icon: <MapPin className="text-primary-600" size={24} />,
      title: 'Location',
      value: 'Bangalore, Karnataka, India',
      link: '#'
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
    // {
    //   icon: <Twitter size={20} />,
    //   name: 'Twitter',
    //   url: 'https://twitter.com/meetjain'
    // }
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-copy max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface p-6 md:p-8"
          >
            <h3 className="mb-8 text-2xl font-display font-semibold">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-dark-900/35 dark:hover:bg-dark-800/60"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-dark-900 dark:text-white">
                Follow Me
              </h4>
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
                    className="rounded-2xl border border-white/60 bg-white/70 p-3 text-dark-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-primary-600 dark:border-white/10 dark:bg-dark-800/60 dark:text-dark-200 dark:hover:bg-dark-700 dark:hover:text-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="surface p-6 md:p-8"
          >
            <h3 className="mb-8 text-2xl font-display font-semibold">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-dark-900 shadow-sm outline-none transition-all duration-200 placeholder:text-dark-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 dark:border-white/10 dark:bg-dark-900/40 dark:text-white dark:placeholder:text-dark-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-dark-900 shadow-sm outline-none transition-all duration-200 placeholder:text-dark-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 dark:border-white/10 dark:bg-dark-900/40 dark:text-white dark:placeholder:text-dark-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-dark-900 shadow-sm outline-none transition-all duration-200 placeholder:text-dark-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 dark:border-white/10 dark:bg-dark-900/40 dark:text-white dark:placeholder:text-dark-500"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-dark-900 shadow-sm outline-none transition-all duration-200 placeholder:text-dark-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/15 dark:border-white/10 dark:bg-dark-900/40 dark:text-white dark:placeholder:text-dark-500"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                className="btn-primary flex items-center gap-2 px-8 py-3 text-lg w-full md:w-auto"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 