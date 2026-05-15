import { motion } from 'framer-motion'
import { Zap, BarChart3, Users, Bell, Shield, RefreshCcw } from 'lucide-react'

const features = [
  {
    title: 'AI Automation',
    description: 'Automate repetitive tasks with our intelligent AI-driven workflows and suggestions.',
    icon: Zap,
    color: 'bg-blue-500',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Get deep insights into your productivity with real-time data visualization and reports.',
    icon: BarChart3,
    color: 'bg-indigo-500',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together seamlessly with shared workspaces, comments, and real-time editing.',
    icon: Users,
    color: 'bg-purple-500',
  },
  {
    title: 'Smart Notifications',
    description: 'Stay on top of what matters with prioritized alerts that filter out the noise.',
    icon: Bell,
    color: 'bg-pink-500',
  },
  {
    title: 'Secure Cloud Storage',
    description: 'Your data is encrypted and stored safely with enterprise-grade security protocols.',
    icon: Shield,
    color: 'bg-cyan-500',
  },
  {
    title: 'Real-Time Sync',
    description: 'Access your work from anywhere on any device with instant cloud synchronization.',
    icon: RefreshCcw,
    color: 'bg-blue-600',
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            Powerful Features for <span className="gradient-text">Modern Teams</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Everything you need to streamline your workflow and boost productivity in one integrated platform.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-soft-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white ${feature.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
