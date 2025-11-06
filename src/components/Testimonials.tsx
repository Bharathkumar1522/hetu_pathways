import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ananya Patel',
      role: 'Recent Graduate',
      company: 'Tech Startup',
      image: 'https://images.unsplash.com/photo-1690264421892-46e3af5c3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjIxMTg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'HETU PATHWAYS provided fresh insights and personalized guidance that helped me approach my career planning with confidence and clarity.',
      rating: 5
    },
    {
      name: 'James Thompson',
      role: 'Aspiring Entrepreneur',
      company: 'E-commerce Venture',
      image: 'https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjIwOTYwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Their innovative approach to business planning gave me the framework I needed to move forward with my entrepreneurial dreams.',
      rating: 5
    },
    {
      name: 'Maria Silva',
      role: 'International Professional',
      company: 'Consulting Firm',
      image: 'https://images.unsplash.com/photo-1673602343091-5335a3150d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjEzNDc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      text: 'Exceptional support for my international career transition. The team\'s dedication and modern approach made all the difference.',
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1e88e5] rounded-full text-sm mb-4">
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 px-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light px-4">
            Hear from professionals who have experienced our personalized guidance and support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="absolute -top-3 -left-3 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1e88e5] to-[#26a69a] rounded-xl flex items-center justify-center shadow-md">
                  <Quote className="text-white" size={18} />
                </div>

                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 sm:mb-6 italic font-light">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#1e88e5] to-[#26a69a] flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600 font-light">{testimonial.role}</div>
                    <div className="text-xs font-medium text-[#1e88e5]">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto px-4"
        >
          {[
            { value: 'Dedicated', label: 'Support' },
            { value: 'Personalized', label: 'Approach' },
            { value: 'Expert', label: 'Guidance' },
            { value: 'Global', label: 'Reach' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg sm:text-2xl font-medium text-[#1e88e5] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 font-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
