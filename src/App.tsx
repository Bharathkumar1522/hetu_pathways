import { useState, useEffect, useRef } from 'react';
import { Toaster } from 'sonner';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesEnhanced from './components/ServicesEnhanced';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Throttled scroll handler for better performance
    const handleScroll = () => {
      if (scrollTimeoutRef.current) return;
      
      scrollTimeoutRef.current = setTimeout(() => {
        const sections = ['home', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
        scrollTimeoutRef.current = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navigation activeSection={activeSection} />
      <Hero />
      <WhyChooseUs />
      <ServicesEnhanced />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
