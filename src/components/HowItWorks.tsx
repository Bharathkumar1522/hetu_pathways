import { motion } from 'motion/react';
import { MessageSquare, Target, Rocket, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const openWhatsApp = () => {
    window.open('https://wa.me/447435786586?text=Hello! I would like to learn more about HETU PATHWAYS services.', '_blank');
  };

  const steps = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: 'Share your goals, challenges, and aspirations in a confidential one-on-one session',
      color: '#1e88e5'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'We develop a personalized roadmap tailored to your unique situation and objectives',
      color: '#26a69a'
    },
    {
      icon: Rocket,
      title: 'Implementation',
      description: 'Execute your strategy with our hands-on guidance and continuous support',
      color: '#1e88e5'
    },
    {
      icon: Trophy,
      title: 'Achieve Success',
      description: 'Reach your goals and celebrate your achievements with ongoing mentorship',
      color: '#26a69a'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1e88e5] to-[#1565c0] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm mb-4">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 px-4">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-light px-4">
            A proven four-step framework that transforms your ambitions into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-white/20">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="h-full bg-white/40 origin-left"
                    />
                  </div>
                )}

                <div className="text-center">
                  <div className="flex justify-center mb-4 sm:mb-5">
                    <div className="relative">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-base sm:text-lg font-light"
                        style={{ backgroundColor: step.color }}
                      >
                        {index + 1}
                      </div>
                      
                      <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Icon size={14} className="sm:w-4 sm:h-4" style={{ color: step.color }} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-medium mb-2 px-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-light px-2">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <button
            onClick={openWhatsApp}
            className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#1e88e5] rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
          >
            Begin Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
