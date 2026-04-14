import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Email Management',
    description: 'Keep your inbox organized, prioritize important messages, and ensure timely responses to maintain professional communication.',
    icon: '✉️',
    features: ['Inbox Zero', 'Filtering & Labels', 'Template Responses', 'Follow-up Tracking'],
    color: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    title: 'Calendar Scheduling',
    description: 'Streamline your appointments, avoid conflicts, and maximize productivity with intelligent calendar coordination.',
    icon: '📅',
    features: ['Meeting Coordination', 'Time Zone Management', 'Recurring Events', 'Reminder Setup'],
    color: 'from-indigo-500 to-purple-500',
    delay: 0.1,
  },
  {
    title: 'Data Entry',
    description: 'Accurate and efficient data management to keep your records clean, organized, and easily accessible.',
    icon: '📊',
    features: ['CRM Updates', 'Spreadsheet Management', 'Database Cleanup', 'Document Digitization'],
    color: 'from-emerald-500 to-teal-500',
    delay: 0.2,
  },
  {
    title: 'Social Media Management',
    description: 'Build your online presence with engaging content, consistent posting, and meaningful audience interaction.',
    icon: '📱',
    features: ['Content Scheduling', 'Engagement Tracking', 'Analytics Reports', 'Hashtag Strategy'],
    color: 'from-rose-500 to-orange-500',
    delay: 0.3,
  },
  {
    title: 'Travel Planning',
    description: 'Stress-free travel arrangements including flights, accommodations, itineraries, and real-time updates.',
    icon: '✈️',
    features: ['Flight Booking', 'Hotel Reservations', 'Itinerary Creation', 'Expense Tracking'],
    color: 'from-cyan-500 to-blue-500',
    delay: 0.4,
  },
  {
    title: 'Customer Support',
    description: 'Professional and friendly customer service to handle inquiries, complaints, and feedback efficiently.',
    icon: '💬',
    features: ['Live Chat', 'Ticket Management', 'FAQ Development', 'Feedback Collection'],
    color: 'from-purple-500 to-pink-500',
    delay: 0.5,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="services" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020] via-slate-900 to-[#0a1020]" />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4"
          >
            What I Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent"
          >
            Professional Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Comprehensive virtual assistance tailored to your business needs,
            delivered with precision and care
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon with animation */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-4`}
                >
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + service.delay + idx * 0.05 }}
                      className="flex items-center gap-2 text-gray-400 text-xs"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.9 + service.delay + idx * 0.05 }}
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn more link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center gap-2 text-indigo-400 text-sm font-medium group/btn"
                >
                  <span>Learn More</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
         

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -50, 50, -30, 30, 0],
                x: [null, 30, -20, 40, -30, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: 'easeInOut',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}