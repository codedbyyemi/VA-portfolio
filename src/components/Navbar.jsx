import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // WhatsApp contact info
  const whatsappNumber = "23407017844304"
  const whatsappMessage = "Hello! I'm interested in your virtual assistant services."

  const handleHireMe = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }))
      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop
          const offsetHeight = section.element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (href, id) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: useTransform(backgroundOpacity, (value) =>
            `rgba(15, 23, 42, ${value})`
          ),
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 backdrop-blur-xl z-50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group z-50"
              onClick={() => scrollToSection('#home', 'home')}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">DS</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm sm:text-base md:text-xl font-bold">
                    <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                      Dosu Sarah
                    </span>
                  </h1>
                  <span className="text-[10px] md:text-xs text-gray-400 hidden sm:block">Virtual Assistant</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:bg-white/10 ${
                      activeSection === item.id
                        ? 'text-indigo-400 bg-white/5'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleHireMe}
              className="hidden md:block px-5 lg:px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg text-white text-sm lg:text-base font-medium"
            >
              Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-50"
            >
              <div className="w-5 h-5 relative flex flex-col justify-center items-center">
                <span className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Simple Working Blur */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div 
              className="absolute top-16 left-0 right-0 bg-slate-900/95 rounded-b-2xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 text-base font-medium ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 text-indigo-400'
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  <button
                    onClick={handleHireMe}
                    className="w-full mt-4 px-5 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl text-white font-medium"
                  >
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.nav>

      <div className="h-16 md:h-20" />
    </>
  )
}