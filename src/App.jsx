import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="nav-logo">Dental Care</a>

        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-btn">Book Appointment</a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu"
          >
            <div className="mobile-nav-links">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Services</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">About</a>
              <a href="#contact" className="nav-btn" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container grid grid-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <CheckCircle2 size={16} />
            <span>Goa's Premier Dental Clinic</span>
          </div>
          <h1 className="hero-title">
            Your Smile is Our <br />
            <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Masterpiece</span>
          </h1>
          <p className="hero-text">
            Experience world-class dental treatments at Dental Care. Our state-of-the-art facility and expert team ensure you get the smile you deserve.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="btn-primary">Book Your Visit</a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-image-main"
        >
          <img src="/images/hero.png" alt="Ponda Dental Care" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Implants', desc: 'Permanent replacements for missing teeth.', img: '/images/service-implants.png' },
    { title: 'Braces', desc: 'Expert orthodontic treatments for all ages.', img: '/images/service-braces.png' },
    { title: 'Whitening', desc: 'Brighten your smile with professional care.', img: '/images/service-whitening.png' },
    { title: 'Checkups', desc: 'Comprehensive oral health examinations.', img: '/images/service-checkup.png' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '-1rem', marginTop: '-3rem' }}>Our Premium Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <img src={service.img} alt={service.title} className="service-img" />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{service.desc}</p>
                <a href="#contact" className="flex items-center gap-2" style={{ color: 'var(--primary)', fontWeight: '700' }}>
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-glass-card">
            <h4 className="footer-title">Ponda Dental Care</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              Redefining dental excellence in Goa. We combine cutting-edge technology with compassionate care.
            </p>
          </div>

          <div className="footer-glass-card">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span style={{ fontSize: '0.9rem' }}>Ponda Market, Goa - 403401</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span style={{ fontSize: '0.9rem' }}>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span style={{ fontSize: '0.9rem' }}>care@pondadental.com</span>
            </div>
          </div>

          <div className="footer-glass-card">
            <h4 className="footer-title">Hours</h4>
            <div className="hours-row">
              <span style={{ fontSize: '0.9rem' }}>Mon - Sat</span>
              <span className="hours-time">09:00 - 20:00</span>
            </div>
            <div className="hours-row" style={{ border: 'none' }}>
              <span style={{ fontSize: '0.9rem' }}>Sun</span>
              <span className="hours-time">Emergency</span>
            </div>
          </div>

          <div className="map-glow-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.916124581297!2d73.9880!3d15.4025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba2b6933095d%3A0x6a0c0e5a9c0c0e5a!2sPonda%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="map-3d-iframe"
              allowFullScreen="" 
              loading="lazy" 
              title="Dental Care Location"
            ></iframe>
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Ponda Dental Care. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
