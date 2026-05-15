import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the AI automation work?',
    answer: 'Our AI analyzes your task patterns and suggests automated workflows. It learns from your actions to provide increasingly accurate time-saving recommendations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade AES-256 encryption for all data at rest and TLS for data in transit. Your privacy and security are our top priorities.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel or change your plan at any time from your dashboard settings. No questions asked, and no cancellation fees.',
  },
  {
    question: 'Do you offer a free trial for the Pro plan?',
    answer: "Yes, we offer a 14-day free trial for our Pro plan so you can experience all the advanced features before committing.",
  },
  {
    question: 'How does team collaboration work?',
    answer: 'You can invite team members to shared workspaces, assign tasks, leave comments, and track progress in real-time with our collaborative features.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Got questions? We've got answers. If you can't find what you're looking for, contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden bg-white dark:bg-dark-card shadow-sm hover:shadow-soft-lg transition-all duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    activeIndex === i ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
