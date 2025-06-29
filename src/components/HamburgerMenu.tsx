import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: {
    name: string;
    path: string;
    dropdown?: boolean;
    dropdownItems?: { name: string; path: string }[];
  }[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, navItems }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(navItems.filter(item => item.dropdown)[0]?.name || null);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
  };

  // Filter only dropdown items for the menu
  const menuCategories = navItems.filter(item => item.dropdown);

  return (
    <>
      {/* Dark overlay behind the menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-dark/60 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}
      
      {/* Menu panel */}
      <div 
        className={`fixed top-0 left-0 h-4/5 w-full z-50 bg-white transform transition-transform duration-300 shadow-xl ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!isOpen}
      >
      <div className="h-full flex flex-col max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between p-1 border-b-2 border-secondary bg-light/30 mx-6 my-2 rounded-lg">
          <Logo variant="default" size="sm" />
          <button 
            onClick={onClose}
            className="p-1 text-primary hover:text-secondary transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Left column - Main categories */}
          <div className="w-1/3 border-r border-secondary/20 overflow-y-auto">
            <nav className="p-6">
              <ul className="space-y-4">
                {menuCategories.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleCategoryClick(item.name)}
                      className={`text-left w-full py-3 text-lg font-medium rounded-lg transition-colors ${
                        activeCategory === item.name 
                          ? 'text-secondary border-l-4 border-secondary pl-4 -ml-4 bg-light/50' 
                          : 'text-dark hover:text-secondary hover:bg-light/30'
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Right column - Subcategories */}
          <div className="w-2/3 overflow-y-auto bg-light/30">
            <div className="p-6">
              {activeCategory ? (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-primary">{activeCategory}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {navItems.find(item => item.name === activeCategory)?.dropdownItems?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block p-4 hover:bg-white rounded-lg transition-colors border border-gray-100 shadow-sm mb-2"
                        onClick={onClose}
                      >
                        <div className="font-medium text-primary">{subItem.name}</div>
                        <div className="text-dark/70 mt-1">Explore {subItem.name.toLowerCase()} solutions</div>
                        <div className="flex items-center mt-2 text-secondary text-sm">
                          <span>View details</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-primary/60">
                  Select a category to view options
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HamburgerMenu;
