import { motion } from 'motion/react';
import { Linkedin, Mail, MapPin, Phone, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 sm:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-light tracking-wide mb-4">
              HETU PATHWAYS
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-5 font-light">
              Guiding Your Journey to Success through expert career guidance, global mobility support, and business assistance.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#26a69a] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#26a69a] rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#26a69a] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base font-light mb-4 text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                'Career Guidance',
                'Global Mobility',
                'Entrepreneurship Support',
                'Business Assistance'
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById('services');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-gray-300 hover:text-[#26a69a] transition-colors text-left font-light"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base font-light mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Our Services', id: 'services' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-gray-300 hover:text-[#26a69a] transition-colors text-left font-light"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base font-light mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-gray-300">
                <Mail size={16} className="text-[#26a69a] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hetupathways.com" className="text-sm hover:text-[#26a69a] transition-colors font-light">
                  info@hetupathways.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <Phone size={16} className="text-[#26a69a] mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/447435786586" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#26a69a] transition-colors font-light">
                  +44 7435 786586
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <MapPin size={16} className="text-[#26a69a] mt-0.5 flex-shrink-0" />
                <span className="text-sm font-light">United Kingdom, Europe, Canada & India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400 font-light">
            &copy; {currentYear} HETU PATHWAYS. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
