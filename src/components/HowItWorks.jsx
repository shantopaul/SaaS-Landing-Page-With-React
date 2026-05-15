import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up in seconds and set up your workspace with our intuitive onboarding.',
  },
  {
    number: '02',
    title: 'Connect Tools',
    description: 'Integrate your favorite apps and platforms to centralize your workflow.',
  },
  {
    number: '03',
    title: 'Automate Tasks',
    description: 'Let our AI identify patterns and automate repetitive actions for you.',
  },
  {
    number: '04',
    title: 'Analyze & Scale',
    description: 'Use real-time data to optimize your performance and grow your results.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            How it <span className="gradient-text">Works</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Get started with Prodigy in four simple steps and transform how you work.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl font-bold text-primary shadow-soft-lg border border-gray-100 transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-white group-hover:scale-110">
                    {step.number}
                  </div>
                  {/* Floating Blob Effect */}
                  <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20 -z-10"></div>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
