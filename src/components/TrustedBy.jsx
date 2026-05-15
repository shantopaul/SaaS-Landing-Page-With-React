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
    <section className="py-12 sm:py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-600 mb-8">
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
              className="flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-soft cursor-pointer">
                {company.initials}
              </div>
              <span className="ml-3 text-gray-700 font-medium hidden sm:inline">
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
