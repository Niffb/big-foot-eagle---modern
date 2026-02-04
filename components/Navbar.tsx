import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}>
      <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Big Foot and Eagle Consulting - Home">
            <img src={`${import.meta.env.BASE_URL}logo-icon.png`} alt="Big Foot and Eagle Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-brand-black">Big Foot and Eagle</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-brand-black transition-colors py-2"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2" role="menu">
                  <div className="bg-white shadow-lg border border-gray-100 py-2 min-w-[200px] rounded-xl">
                    <Link to="/governance" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-black" role="menuitem">Governance</Link>
                    <Link to="/management" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-black" role="menuitem">Management</Link>
                    <Link to="/advisory" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-brand-black" role="menuitem">Advisory</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/reconciliation-statement" className="text-gray-600 hover:text-brand-black transition-colors">Reconciliation</Link>
            <Link to="/treaty-relationships" className="text-gray-600 hover:text-brand-black transition-colors">Treaty</Link>
            <Link to="/our-staff" className="text-gray-600 hover:text-brand-black transition-colors">About Us</Link>
            <Link to="/contact-us" className="ml-4 px-5 py-2.5 bg-brand-red text-white font-medium hover:bg-red-800 transition-colors rounded-lg">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t" role="navigation" aria-label="Mobile navigation">
          <div className="px-6 py-4 space-y-4">
            <div className="font-medium text-gray-400 text-sm uppercase tracking-wide">Services</div>
            <Link to="/governance" className="block py-2 text-gray-700">Governance</Link>
            <Link to="/management" className="block py-2 text-gray-700">Management</Link>
            <Link to="/advisory" className="block py-2 text-gray-700">Advisory</Link>
            <div className="border-t pt-4 mt-4">
              <Link to="/reconciliation-statement" className="block py-2 text-gray-700">Reconciliation</Link>
              <Link to="/treaty-relationships" className="block py-2 text-gray-700">Treaty</Link>
              <Link to="/our-staff" className="block py-2 text-gray-700">About Us</Link>
            </div>
            <Link to="/contact-us" className="block mt-4 px-5 py-3 bg-brand-red text-white text-center font-medium rounded-lg">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
