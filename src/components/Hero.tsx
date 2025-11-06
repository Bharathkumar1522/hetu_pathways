import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const openWhatsApp = () => {
    window.open('https://wa.me/447435786586?text=Hello! I would like to learn more about HETU PATHWAYS services.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" style={{ willChange: 'auto' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-900 mb-3">
              HETU PATHWAYS
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1e88e5] to-[#26a69a] mx-auto rounded-full" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
          >
            Guiding Your Journey to Success
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Expert guidance in career development, global mobility, entrepreneurship, 
              and continuous business support tailored to your unique journey.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={openWhatsApp}
              className="group px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-[#1e88e5] text-white rounded-full hover:bg-[#1976d2] transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#1e88e5] rounded-full border border-[#1e88e5]/30 hover:border-[#1e88e5] hover:bg-slate-50 transition-all duration-300"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Service Regions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-16 sm:mt-20"
          >
            <p className="text-base sm:text-lg text-gray-500 font-light">
              Serving <span className="font-medium text-[#1e88e5]">United Kingdom</span> • <span className="font-medium text-[#1e88e5]">Europe</span> • <span className="font-medium text-[#1e88e5]">Canada</span> • <span className="font-medium text-[#1e88e5]">India</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border border-gray-300 rounded-full flex items-start justify-center p-1.5"
          style={{ willChange: 'transform' }}
        >
          <div className="w-1 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
