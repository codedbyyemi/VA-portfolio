import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

import Microsoftimg from '../assets/Microsoft.jpeg'
import Googleformimg from '../assets/Google form.jpeg'
import Trelloimg from '../assets/Trello.jpeg'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Microsoft Office Proficiency",
      description: "Expert in Microsoft Word, Excel, PowerPoint, and Outlook. Created professional documents, spreadsheets with complex formulas, and engaging presentations for client meetings.",
      image: Microsoftimg,
      link: "https://1drv.ms/w/c/507535D53DF4C421/IQAdeFqwESjgT5E0syJsTrmAAcMjxNytx1-K01uWpCBYnhM?e=A0wbg8",
      tags: ["Microsoft Word", "Excel", "PowerPoint", "Outlook"],
      category: "Microsoft Tools",
      client: "Multiple Clients"
    },
    {
      id: 2,
      title: "Google Forms & Surveys",
      description: "Designed and managed professional Google Forms for data collection, customer feedback, and event registrations. Analyzed responses and created detailed reports.",
      image: Googleformimg,
      link: "https://forms.gle/nF5MadFcXC9CSosF6",
      tags: ["Google Forms", "Data Collection", "Surveys", "Reports"],
      category: "Google Workspace",
      client: "Research Company"
    },
    {
      id: 3,
      title: "Trello Project Management",
      description: "Implemented Trello boards for project tracking, task assignment, and deadline management. Streamlined team workflows and improved project completion rate by 40%.",
      image: Trelloimg,
      link: "https://trello.com/invite/b/69c5a8472bf4437658fbb80e/ATTIb9a36164bf7281ccf54c714eb5ec2466BB3EEDF2/client-task-management",
      tags: ["Trello", "Project Management", "Task Tracking", "Workflow"],
      category: "Management",
      client: "Digital Agency"
    }
  ])

  const [filter, setFilter] = useState('all')
  const categories = ['all', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  }

  const handleViewProject = (link, title) => {
    console.log(`Opening project: ${title}`)
    console.log(`Link: ${link}`)
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      console.error('No valid link provided')
      alert('Project link coming soon!')
    }
  }

  return (
    <section id="projects" className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a1020] to-slate-900" />
        <motion.div
          className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs md:text-sm font-medium mb-4"
          >
            My Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent"
          >
            Virtual Assistant Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
          >
            Here are some of the tasks and projects I've successfully completed for my clients.
            Each project demonstrates my commitment to excellence and attention to detail.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - 3 Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Clickable Project Image with Overlay */}
              <button 
                onClick={() => handleViewProject(project.link, project.title)}
                className="block relative overflow-hidden h-48 sm:h-52 md:h-56 cursor-pointer w-full"
                aria-label={`View ${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-white text-lg font-semibold">View Project</span>
                    <svg className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Client Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-xs px-2 py-1 rounded-full bg-indigo-600/90 text-white backdrop-blur-sm">
                    {project.client}
                  </span>
                </div>
              </button>

              {/* Project Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category & Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-400">
                    {project.category}
                  </span>
                  <button
                    onClick={() => handleViewProject(project.link, project.title)}
                    className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-indigo-400">50+</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1">Projects Completed</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-indigo-400">30+</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1">Happy Clients</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-indigo-400">98%</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm">
            <div className="text-2xl md:text-3xl font-bold text-indigo-400">24/7</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1">Support Available</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Want to see more? Let's discuss your project!</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                const offset = 80
                const elementPosition = contactSection.offsetTop - offset
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl text-white font-medium hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}