import { motion } from 'framer-motion'

const companies = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'DataHub', initials: 'DH' },
  { name: 'CloudSync', initials: 'CS' },
  { name: 'AI Labs', initials: 'AL' },
  { name: 'DevFlow', initials: 'DF' },
]

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-16 border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
          Trusted by leading companies worldwide
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-12"
        >
          {companies.map((company, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 dark:grayscale dark:hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-soft cursor-pointer">
                {company.initials}
              </div>
              <span className="ml-3 text-gray-700 dark:text-gray-300 font-semibold hidden sm:inline">
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
