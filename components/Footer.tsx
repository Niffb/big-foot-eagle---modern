import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">Big Foot and Eagle</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Walking alongside Nations to build governance strength and sustainable futures.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/governance" className="hover:text-white transition-colors">Governance</Link></li>
              <li><Link to="/management" className="hover:text-white transition-colors">Management</Link></li>
              <li><Link to="/advisory" className="hover:text-white transition-colors">Advisory</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/our-staff" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/reconciliation-statement" className="hover:text-white transition-colors">Reconciliation</Link></li>
              <li><Link to="/treaty-relationships" className="hover:text-white transition-colors">Treaty</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>101-1065 Portage Avenue<br />Winnipeg, MB R3G 0R8</p>
              <p><a href="tel:2044714635" className="hover:text-white transition-colors">204.471.4635</a></p>
              <p><a href="mailto:info@bigfooteagle.ca" className="hover:text-white transition-colors">info@bigfooteagle.ca</a></p>
            </div>
          </address>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Big Foot and Eagle Consulting. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
