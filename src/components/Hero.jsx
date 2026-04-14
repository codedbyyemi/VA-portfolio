import { motion } from 'framer-motion'
import img from '../assets/Ade.jpeg'

export default function Hero() {
  const whatsappNumber = "23407017844304"
  const whatsappMessage = "Hello! I'm interested in your virtual assistant services."
  
  const handleHireMe = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      const offset = 80
      const elementPosition = servicesSection.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0a1428] to-[#07121f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 sm:py-20 md:py-24">
        {/* Decorative floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -30, 30, -20, 20, 0],
                x: [null, 20, -20, 15, -15, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Professional badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm font-medium text-indigo-300">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 sm:mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent px-2">
            Dosu Sarah Adebusuyi
          </h2>
        </motion.div>

        {/* Main heading with letter animation */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
              },
            },
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2"
        >
          {"Professional Virtual Assistant".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                  },
                },
              }}
              className="inline-block bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent"
              style={{
                display: char === " " ? "inline" : "inline-block",
                marginRight: char === " " ? "0.25em" : "0",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with smooth reveal */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-4 sm:mt-6 text-gray-300 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed px-4"
        >
          I help businesses stay organized, productive, and efficient with professional virtual assistance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 w-full sm:w-auto"
        >
          <motion.button
            onClick={handleHireMe}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(79, 70, 229, 0)",
                "0 0 0 8px rgba(79, 70, 229, 0.2)",
                "0 0 0 0 rgba(79, 70, 229, 0)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 text-sm sm:text-base"
          >
            Hire Me
          </motion.button>

          <motion.button
            onClick={scrollToServices}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-2.5 sm:py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-gray-200 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            View Services
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, type: "spring", stiffness: 100 }}
          className="mt-8 sm:mt-10 md:mt-12 relative"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-75 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative">
            <motion.img
              src={img}
              alt="Dosu Sarah Adebusuyi - Professional Virtual Assistant"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl border-4 border-white/20 mx-auto"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-indigo-400/30 pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        
      </section>
    </>
  )
}