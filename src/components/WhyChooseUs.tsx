import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Globe2, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Industry professionals committed to delivering cutting-edge career and business consulting'
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Access to international opportunities across Europe, Canada, and India with local expertise'
    },
    {
      icon: Zap,
      title: 'Fresh Approach',
      description: 'Innovative strategies combining modern best practices with personalized attention'
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Tailored solutions designed specifically for your unique goals and circumstances'
    },
    {
      icon: Shield,
      title: 'Trusted Partnership',
      description: 'Confidential, reliable support throughout your entire professional journey'
    },
    {
      icon: CheckCircle2,
      title: 'Dedicated Focus',
      description: 'Full attention to helping you achieve your career and business objectives'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMTMwMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business meeting"
                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1e88e5]/10 to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white rounded-xl shadow-lg p-4 sm:p-5"
              >
                <div className="text-xl sm:text-2xl font-medium text-[#1e88e5] mb-1">Ready</div>
                <div className="text-xs sm:text-sm text-gray-600">To Serve You</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10"
            >
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1e88e5] rounded-full text-sm mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
                Your Success is Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                We bring fresh perspectives, industry expertise, and personalized strategies to help you achieve 
                your professional goals with dedication and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex gap-3 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#1e88e5] to-[#26a69a] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
