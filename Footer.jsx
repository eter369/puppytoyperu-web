import React from 'react';
import { Mail, Phone, Instagram, MapPin, ChevronUp } from 'lucide-react';

/**
 * Footer Component
 * Website footer with logo, navigation links, contact info, and copyright
 */
const Footer = () => {
  // Navigation links
  const navLinks = [
    { name: 'Cachorros', href: '/cachorros' },
    { name: 'Familia', href: '/familia' },
    { name: 'Información', href: '/informacion' },
    { name: 'Visítanos', href: '/visitanos' },
    { name: 'Mini Toy', href: '/mini-toy' },
    { name: 'Toy', href: '/toy' },
    { name: 'Enano', href: '/enano' },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: 'contacto@puppytoy.com',
      href: 'mailto:contacto@puppytoy.com',
    },
    {
      icon: <Phone size={18} />,
      text: '+51 960 724 528',
      href: 'tel:+51960724528',
    },
    {
      icon: <Instagram size={18} />,
      text: '@puppytoyperu',
      href: 'https://instagram.com/puppytoyperu',
    },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo - Centered */}
        <div className="flex justify-center mb-10">
          <a href="/">
            <img 
              src="https://via.placeholder.com/180x70/C83B15/FFFFFF?text=PUPPY+TOY" 
              alt="Puppy Toy Perú Logo" 
              className="h-16 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 text-sm font-medium hover:text-[#C83B15] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-4 mb-10">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-3 text-gray-700 hover:text-[#C83B15] transition-colors duration-300"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span style={{ color: '#C83B15' }}>{item.icon}</span>
              <span className="text-sm">{item.text}</span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <MapPin size={18} style={{ color: '#C83B15' }} />
          <span className="text-gray-700 text-sm text-center">
            LIMA, PERÚ - Oficina Presencial – Los Olivos
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-xs">
            Copyright 2025 Uso exclusivo y todos los derechos reservados legalmente Puppy Toy Perú
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: '#C83B15' }}
            aria-label="Regresar arriba"
          >
            <ChevronUp size={18} />
            <span>Regresar arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
