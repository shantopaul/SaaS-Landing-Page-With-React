import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Designer at TechFlow',
    content: 'Prodigy has completely transformed how our design team collaborates. The AI automation saves us hours of manual work every week.',
    avatar: 'SJ',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    content: "The most intuitive SaaS platform I've ever used. The dashboard is clean, fast, and gives us all the data we need to scale.",
    avatar: 'MC',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    content: 'Our productivity has skyrocketed since we switched to Prodigy. The real-time sync is flawless across all our devices.',
    avatar: 'ER',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50/50 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          >
            What Our <span className="gradient-text">Users Say</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Join thousands of satisfied teams who are already boosting their productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-soft-lg relative"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
