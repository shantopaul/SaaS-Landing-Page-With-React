import { motion } from 'framer-motion'
import { CheckCircle2, TrendingUp, Clock } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-gray-50/50 relative overflow-hidden">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob -z-10" style={{ animationDelay: '5s' }}></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Powerful Dashboard to <span className="gradient-text">Manage Everything</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our centralized dashboard gives you a bird's eye view of all your automated tasks, team performance, and data insights.
            </p>

            <ul className="space-y-4">
              {[
                'Real-time task tracking',
                'Advanced filtering and search',
                'Customizable dashboard layouts',
                'One-click automation triggers'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg shadow-soft-lg"
            >
              Explore Dashboard
            </motion.button>
          </motion.div>

          <div className="relative">
            {/* Main Image Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2"
            >
              <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden relative group">
                {/* Mockup Dashboard Content */}
                <div className="absolute inset-0 p-6 space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-primary/5 rounded-xl border border-primary/10"></div>
                    <div className="h-24 bg-secondary/5 rounded-xl border border-secondary/10"></div>
                    <div className="h-24 bg-indigo-50 rounded-xl border border-indigo-100"></div>
                  </div>
                  <div className="h-48 bg-gray-200/50 rounded-xl"></div>
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-6 glass p-4 rounded-2xl shadow-glass border border-white/20 hidden sm:flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Efficiency</p>
                <p className="text-sm font-bold text-gray-900">+42.5%</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-glass border border-white/20 hidden sm:flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Time Saved</p>
                <p className="text-sm font-bold text-gray-900">12h / week</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
