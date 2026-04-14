import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaClipboardList, 
  FaCalendarAlt, 
  FaEnvelope, 
  FaChartLine, 
  FaProjectDiagram, 
  FaUserFriends,
  FaGlobe,
  FaClock,
  FaCommentDots
} from 'react-icons/fa'
import { MdOutlineTrendingUp } from 'react-icons/md'

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const skills = [
        { name: "Task Management", icon: <FaClipboardList className="text-indigo-400" />, level: 95 },
        { name: "Schedule Coordination", icon: <FaCalendarAlt className="text-cyan-400" />, level: 92 },
        { name: "Email Handling", icon: <FaEnvelope className="text-indigo-400" />, level: 98 },
        { name: "Administrative Support", icon: <FaChartLine className="text-cyan-400" />, level: 90 },
        { name: "Project Management", icon: <FaProjectDiagram className="text-indigo-400" />, level: 88 },
        { name: "Client Relations", icon: <FaUserFriends className="text-cyan-400" />, level: 94 },
    ]

    const stats = [
        { value: "5+", label: "Projects Completed", icon: <MdOutlineTrendingUp /> },
        { value: "98%", label: "Client Satisfaction", icon: <MdOutlineTrendingUp /> },
        { value: "24/7", label: "Support Available", icon: <FaClock /> },
        { value: "1", label: "Year Experience", icon: <MdOutlineTrendingUp /> },
    ]

    return (
        <section id="about" className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a1020] to-slate-900" />
                <motion.div
                    className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div ref={ref} className="max-w-6xl mx-auto">
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
                        Get to know me
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-100 to-cyan-200 bg-clip-text text-transparent"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "60px" } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto mt-4"
                    />
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left Column - Bio & Stats */}
                    <div>
                        {/* Professional introduction with highlight */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mb-6"
                        >
                            <div className="inline-block mb-3">
                                <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">✦ Professional Summary</span>
                            </div>
                            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                                I'm a <span className="text-indigo-400 font-semibold">dedicated Virtual Assistant</span> with a strong foundation in Microsoft tools and digital support services.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.45, duration: 0.6 }}
                            className="mb-6 p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border-l-4 border-indigo-500"
                        >
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed italic">
                                "With one year of experience, I approach my work with diligence and consistency, ensuring that tasks are delivered on time while maintaining quality."
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="space-y-3 mb-8"
                        >
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                I pay attention to detail and communicate effectively to achieve the best results. As a certified Virtual Assistant with strong Microsoft proficiency, I bring <span className="text-cyan-400 font-medium">structure, efficiency, and reliability</span> to every task I handle.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                My goal is to help brands grow, increase visibility, and connect with their target audience through clarity, creativity, and purpose.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                                        className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-indigo-600/10 border border-indigo-500/20"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600/30 flex items-center justify-center">
                                <FaCommentDots className="text-indigo-400 text-base sm:text-xl" />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-300 text-xs sm:text-sm">Let's work together</p>
                                <p className="text-indigo-400 font-semibold text-xs sm:text-sm">Available for full-time & freelance</p>
                            </div>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="ml-auto"
                            >
                                <span className="text-indigo-400 text-sm sm:text-base">→</span>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Skills */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-lg sm:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-2"
                        >
                            <span className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></span>
                            Core Competencies
                        </motion.h3>

                        <div className="space-y-4 md:space-y-5">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base sm:text-xl">{skill.icon}</span>
                                            <span className="text-gray-200 font-medium text-sm sm:text-base">{skill.name}</span>
                                        </div>
                                        <span className="text-indigo-400 text-xs sm:text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${skill.level}%` } : {}}
                                            transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full relative"
                                        >
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 1.1 }}
                            className="mt-6 md:mt-8 grid grid-cols-2 gap-2 sm:gap-3"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-600/30 flex items-center justify-center">
                                    <FaGlobe className="text-indigo-400 text-xs sm:text-sm" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Working worldwide</p>
                                    <p className="text-white text-xs sm:text-sm font-medium">Remote Only</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-600/30 flex items-center justify-center">
                                    <FaClock className="text-cyan-400 text-xs sm:text-sm" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs">Flexible schedule</p>
                                    <p className="text-white text-xs sm:text-sm font-medium">24/7 Support</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Quote */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 }}
                    className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 text-center"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block text-3xl md:text-4xl mb-3 md:mb-4 text-indigo-400"
                    >
                        "
                    </motion.div>
                    <p className="text-gray-300 italic text-sm sm:text-base max-w-2xl mx-auto px-4">
                        I don't just manage tasks — I bring peace of mind, knowing that every detail is handled with precision and care.
                    </p>
                    <div className="mt-3 md:mt-4 text-indigo-400 text-xs sm:text-sm font-medium">— Your Trusted VA Partner</div>
                </motion.div>
            </div>
        </section>
    )
}