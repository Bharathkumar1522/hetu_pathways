import { motion } from 'motion/react';
import { GraduationCap, Globe, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ServicesEnhanced() {
  const openWhatsApp = () => {
    window.open('https://wa.me/447435786586?text=Hello! I would like to learn more about HETU PATHWAYS services.', '_blank');
  };

  const services = [
    {
      title: 'Post-Masters Career Guidance',
      icon: GraduationCap,
      color: '#1e88e5',
      image: 'https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjE0MzMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Navigate your post-graduate career with confidence through our comprehensive guidance program.',
      features: [
        'Job Search Strategies',
        'Resume & Portfolio Building',
        'Interview Preparation',
        'Professional Networking',
        'Salary Negotiation'
      ]
    },
    {
      title: 'Global Mobility & Relocation',
      icon: Globe,
      color: '#26a69a',
      image: 'https://images.unsplash.com/photo-1727610542348-9636c3b65d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBidXNpbmVzcyUyMHdvcmxkfGVufDF8fHx8MTc2MjA4NjMzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Seamlessly transition across borders with expert support for international career moves.',
      features: [
        'Repatriation Support',
        'International Job Market Insights',
        'Visa & Immigration Assistance',
        'Cultural Integration',
        'Housing & Settlement'
      ]
    },
    {
      title: 'Entrepreneurship & Start-up Support',
      icon: Lightbulb,
      color: '#1e88e5',
      image: 'https://images.unsplash.com/photo-1758876021212-a87517fc8954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjE0MzMwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Transform your entrepreneurial vision into a thriving business with our comprehensive support.',
      features: [
        'Business Plan Development',
        'Funding & Investment Strategy',
        'Mentorship & Resources',
        'Legal Setup & Compliance',
        'Go-to-Market Strategy'
      ]
    },
    {
      title: 'Continuous Business Assistance',
      icon: TrendingUp,
      color: '#26a69a',
      image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lbnRvcnxlbnwxfHx8fDE3NjIxNDMzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Sustain and grow your business with ongoing strategic guidance and operational support.',
      features: [
        'Market Research & Analysis',
        'Strategic Planning',
        'Financial Consulting',
        'Growth Hacking',
        'Performance Optimization'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1e88e5] rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 px-4">
            Four Pathways to Success
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light px-4">
            Comprehensive solutions tailored to your professional journey, from career advancement 
            to entrepreneurial success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div 
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{ background: `linear-gradient(135deg, ${service.color} 0%, transparent 100%)` }}
                      />
                    </div>
                    
                    <div
                      className="absolute -top-4 -right-4 w-16 h-16 rounded-xl shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-center gap-2.5"
                      >
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                        </div>
                        <span className="text-sm text-gray-700 font-light">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <button
                    onClick={openWhatsApp}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all hover:shadow-md"
                    style={{ backgroundColor: service.color, color: 'white' }}
                  >
                    Learn More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
