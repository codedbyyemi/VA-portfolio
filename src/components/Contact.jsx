import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formStatus, setFormStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'dosusarah9@gmail.com',
      href: 'mailto:dosusarah9@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '07017844304',
      href: 'tel:+23407017844304',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: '💬',
      label: 'Live Chat',
      value: 'Available 9AM - 6PM EST',
      href: '#',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Remote / Worldwide',
      href: null,
      color: 'from-rose-500 to-orange-500',
    },
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', href: '#', color: 'bg-blue-600/20 hover:bg-blue-600/30' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'bg-sky-600/20 hover:bg-sky-600/30' },
    { name: 'GitHub', icon: '💻', href: '#', color: 'bg-gray-600/20 hover:bg-gray-600/30' },
    { name: 'Instagram', icon: '📸', href: '#', color: 'bg-pink-600/20 hover:bg-pink-600/30' },
  ]

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a1020] to-[#07121f]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto mt-4"
          >
            Have a project in mind? I'd love to hear from you. 
            Send me a message and I'll respond within 24 hours.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <span className="text-xl">{info.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-indigo-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                  {info.href && (
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-indigo-400"
                    >
                      →
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-gray-300 font-medium mb-4">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center text-lg backdrop-blur-sm border border-white/10 transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 p-4 rounded-xl bg-emerald-600/10 border border-emerald-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-emerald-400 font-medium">Available for Work</p>
                  <p className="text-gray-400 text-sm">Usually responds within 2 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="hello@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 focus:border-indigo-500/50 focus:outline-none text-white placeholder-gray-500 resize-none transition-all duration-300"
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                  formStatus === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-emerald-600'
                    : formStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/25'
                }`}
              >
                {formStatus === 'sending' && (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                )}
                {formStatus === 'success' && (
                  <span className="flex items-center justify-center gap-2">
                    ✓ Message Sent Successfully!
                  </span>
                )}
                {formStatus === 'error' && (
                  <span className="flex items-center justify-center gap-2">
                    ⚠ Failed to Send. Try Again?
                  </span>
                )}
                {formStatus === 'idle' && 'Send Message →'}
              </motion.button>

              {formStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3 }}
          className="mt-16 pt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <span>⚡</span>
            <span>Fast Response • Quality Work • 100% Satisfaction</span>
            <span>⚡</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}