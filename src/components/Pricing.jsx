import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Perfect for individuals and small side projects.',
    features: [
      'Up to 3 projects',
      'Basic AI automation',
      'Community support',
      '5GB Cloud storage',
      'Real-time sync (1 device)',
    ],
    cta: 'Start for Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'The best value for growing teams and startups.',
    features: [
      'Unlimited projects',
      'Advanced AI automation',
      'Priority email support',
      '50GB Cloud storage',
      'Real-time sync (Unlimited)',
      'Custom integrations',
      'Team collaboration',
    ],
    cta: 'Get Pro Today',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'Scalable solutions for large organizations.',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom security protocols',
      'Unlimited Cloud storage',
      'SLA guarantee',
      'On-premise deployment',
      'Custom training',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-primary bg-white shadow-soft-lg scale-105 z-10'
                  : 'border-gray-200 bg-white/50 hover:bg-white hover:shadow-soft-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-primary text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 font-medium">/month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-primary' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-primary text-white shadow-soft-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
