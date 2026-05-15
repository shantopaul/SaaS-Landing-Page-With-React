import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-32 pb-20 sm:pb-32">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-light dark:bg-primary/10 rounded-full text-primary font-medium text-sm border border-gray-200 dark:border-primary/20">
                  🚀 AI-Powered Productivity
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Transform Your Workflow with{' '}
                <span className="gradient-text">AI Automation</span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Streamline your productivity with intelligent automation, real-time collaboration, and advanced analytics. Work smarter, not harder.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-soft-lg hover:shadow-soft-lg flex items-center justify-center gap-2 transition-fast"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-dark-card flex items-center justify-center gap-2 transition-fast"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-8 border-t border-gray-200 dark:border-white/10">
              {[
                { number: '10K+', label: 'Active Users' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 sm:h-full hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-96">
              {/* Main dashboard preview card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute inset-0 bg-white dark:bg-dark-card rounded-2xl shadow-soft-lg border border-gray-200 dark:border-white/10 overflow-hidden"
              >
                <div className="h-10 bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-white/10"></div>
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 bg-gray-100 dark:bg-slate-800 rounded w-5/6"></div>
                </div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-12 w-40 glass rounded-xl p-4 shadow-glass border border-white/20 dark:border-white/10"
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">AI Analytics</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Real-time insights</p>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -left-12 w-40 glass rounded-xl p-4 shadow-glass border border-white/20 dark:border-white/10"
              >
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Collaboration</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Team sync</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
