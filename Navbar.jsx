import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

/**
 * Navbar Component
 * Sticky navigation bar with top contact bar and main navigation
 * Features responsive design with mobile hamburger menu
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items
  const menuItems = [
    { name: 'Inicio', href: '/', active: true },
    { name: 'Cachorros', href: '/cachorros', active: false },
    { name: 'Familias', href: '/familias', active: false },
    { name: 'Información', href: '/informacion', active: false },
    { name: 'Visítanos', href: '/visitanos', active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar - Red Background */}
      <div 
        className="w-full py-2 px-4"
        style={{ backgroundColor: '#C83B15' }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
          <span className="text-white text-sm font-medium uppercase tracking-wide">
            CONTÁCTANOS AL
          </span>
          <a 
            href="tel:+51960724528" 
            className="flex items-center gap-1 text-white text-sm font-bold hover:underline transition-all"
          >
            <Phone size={14} />
            +51 960 724 528
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className="w-full bg-white px-4"
        style={{ borderBottom: '10px solid #C83B15' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img 
              src="https://via.placeholder.com/150x60/C83B15/FFFFFF?text=PUPPY+TOY" 
              alt="Puppy Toy Perú Logo" 
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  border-2
                  ${item.active 
                    ? 'text-white border-[#C83B15]' 
                    : 'text-gray-700 border-gray-300 hover:border-[#C83B15] hover:text-[#C83B15]'
                  }
                `}
                style={{
                  backgroundColor: item.active ? '#C83B15' : '#FFFFFF'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Shopping Cart Icon */}
          <div className="hidden lg:flex items-center">
            <button 
              className="p-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#C83B15' }}
              aria-label="Carrito de compras"
            >
              <ShoppingCart size={22} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-gray-700" />
            ) : (
              <Menu size={28} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col items-center gap-3 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    w-full max-w-xs text-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                    border-2
                    ${item.active 
                      ? 'text-white border-[#C83B15]' 
                      : 'text-gray-700 border-gray-300 hover:border-[#C83B15] hover:text-[#C83B15]'
                    }
                  `}
                  style={{
                    backgroundColor: item.active ? '#C83B15' : '#FFFFFF'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Shopping Cart */}
              <button 
                className="w-full max-w-xs flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#C83B15' }}
              >
                <ShoppingCart size={20} />
                <span>Carrito</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
