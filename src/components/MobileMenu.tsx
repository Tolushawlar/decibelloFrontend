import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: {
    name: string;
    path: string;
    dropdown?: boolean;
    dropdownItems?: { name: string; path: string }[];
  }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  return (
    <div 
      className={`mobile-menu ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      aria-hidden={!isOpen}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Link to="/" className="flex items-center" onClick={onClose}>
            <Logo variant="white" />
          </Link>
          <button 
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="py-2">
                {item.dropdown ? (
                  <div className="mb-2">
                    <div className="text-white font-medium text-lg mb-2">{item.name}</div>
                    <ul className="pl-4 space-y-2 border-l border-white/10">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            to={dropdownItem.path}
                            className="text-white/70 hover:text-white transition-colors block py-1"
                            onClick={onClose}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white font-medium text-lg hover:text-secondary transition-colors block"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-6 border-t border-white/10">
          <Link
            to="/contact"
            className="block w-full text-center bg-secondary text-dark px-6 py-3 rounded hover:bg-opacity-90 transition-all font-medium"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
