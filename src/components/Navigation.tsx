import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    // Throttled scroll handler for better performance
    const handleScroll = () => {
      if (scrollTimeoutRef.current) return;
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
        scrollTimeoutRef.current = null;
      }, 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    
setIsMobileMenuOpen(false);

if (element) {
  const offset = 120;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Wait a bit longer to let mobile menu close
  const delay = isMobileMenuOpen ? 400 : 0;

  setTimeout(() => {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }, delay);
}

  };

  const openWhatsApp = () => {
    window.open('https://wa.me/447435786586?text=Hello! I would like to learn more about HETU PATHWAYS services.', '_blank');
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <span className="text-base sm:text-lg md:text-xl font-light tracking-wide transition-transform group-hover:scale-105 text-gray-900">
              HETU PATHWAYS
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-1 py-2 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#1e88e5]'
                    : 'text-gray-600 hover:text-[#1e88e5]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1e88e5]"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              className="px-5 lg:px-6 py-2 text-sm lg:text-base bg-[#1e88e5] text-white rounded-full hover:bg-[#1976d2] transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[#1e88e5] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-white border-t"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`block w-full text-left px-4 py-2 transition-colors ${
                      activeSection === link.id
                        ? 'text-[#1e88e5] bg-blue-50'
                        : 'text-gray-600 hover:text-[#1e88e5] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={openWhatsApp}
                  className="w-full mx-4 mt-2 px-6 py-2 bg-[#1e88e5] text-white rounded-full hover:bg-[#1976d2] transition-all"
                  style={{ width: 'calc(100% - 2rem)' }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
