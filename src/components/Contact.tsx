import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Mail, User, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ name: false, email: false, message: false });
    
    // Trim whitespace from all fields
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    
    let hasError = false;
    
    // Check if all fields are filled
    if (!trimmedName) {
      setErrors(prev => ({ ...prev, name: true }));
      toast.error('Please enter your name', {
        duration: 3000,
      });
      hasError = true;
    }

    if (!trimmedEmail) {
      setErrors(prev => ({ ...prev, email: true }));
      toast.error('Please enter your email address', {
        duration: 3000,
      });
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      // Validate email format
      setErrors(prev => ({ ...prev, email: true }));
      toast.error('Please enter a valid email address', {
        duration: 3000,
      });
      hasError = true;
    }

    if (!trimmedMessage) {
      setErrors(prev => ({ ...prev, message: true }));
      toast.error('Please enter your message', {
        duration: 3000,
      });
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    // Prepare WhatsApp message - simpler format that works better
    const whatsappMessage = `Hello! I'm interested in HETU PATHWAYS services.

Name: ${trimmedName}
Email: ${trimmedEmail}
Message: ${trimmedMessage}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/447435786586?text=${encodedMessage}`;
    
    // Open in new window
    const whatsappWindow = window.open(whatsappUrl, '_blank');
    
    if (whatsappWindow) {
      toast.success('Opening WhatsApp... Your message is ready to send!', {
        duration: 4000,
      });
      
      // Reset form after opening WhatsApp
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast.error('Please allow popups to open WhatsApp', {
        duration: 4000,
      });
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: false
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1e88e5] rounded-full text-sm mb-4">
            Contact Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 px-4">
            Let's Start Your Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-light px-4">
            Ready to transform your career or business? Reach out and let's discuss 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-gray-700 text-sm font-light">
                  <User size={16} className="text-[#1e88e5]" />
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-light ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-gray-700 text-sm font-light">
                  <Mail size={16} className="text-[#1e88e5]" />
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all font-light ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-gray-700 text-sm font-light">
                  <MessageSquare size={16} className="text-[#1e88e5]" />
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and how we can help..."
                  rows={5}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:border-[#1e88e5] focus:ring-2 focus:ring-[#1e88e5]/20 transition-all resize-none font-light ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200'
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-3 rounded-lg bg-[#1e88e5] text-white hover:bg-[#1976d2] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Opening WhatsApp...
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-light mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-light mb-1 text-sm">Email Us</div>
                    <a href="mailto:info@hetupathways.com" className="text-sm text-blue-100 hover:text-white transition-colors font-light">
                      info@hetupathways.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-light mb-1 text-sm">Call / WhatsApp</div>
                    <a href="https://wa.me/447435786586" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-100 hover:text-white transition-colors font-light">
                      +44 7435 786586
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-light mb-1 text-sm">Service Regions</div>
                    <div className="text-sm text-blue-100 font-light">
                      United Kingdom, Europe, Canada & India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h3 className="text-lg font-light text-gray-900 mb-4">
                Why Work With Us?
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Free initial consultation',
                  'Personalized strategy development',
                  'Dedicated support',
                  'Modern approach',
                  'Global network access'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-[#1e88e5] flex-shrink-0" size={18} />
                    <span className="text-sm text-gray-700 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
