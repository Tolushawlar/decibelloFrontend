import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SubHeader from './SubHeader';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get logged in user
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const checkUser = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        setUser(null);
      }
    };
    
    checkUser();
    
    // Listen for storage changes
    window.addEventListener('storage', checkUser);
    
    return () => {
      window.removeEventListener('storage', checkUser);
    };
  }, [location.pathname]);

  // Navigation structure
  const navItems = [
    {
      name: 'Industries',
      path: '/industries',
      dropdown: true,
      dropdownItems: [
        { name: 'Financial Services', path: '/industries/financial-services' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        // { name: 'Technology', path: '/industries/technology' },
        { name: 'Retail', path: '/industries/retail' }
      ]
    },
    {
      name: 'Capabilities',
      path: '/capabilities',
      dropdown: true,
      dropdownItems: [
        { name: 'Data Analytics', path: '/capabilities/data-analytics' },
        { name: 'Brand Strategy', path: '/capabilities/brand-strategy' },
        { name: 'Market Research', path: '/capabilities/market-research' }
      ]
    },
    {
      name: 'Our Insights',
      path: '/blog',
      dropdown: true,
      dropdownItems: [
        { name: 'Articles', path: '/blog/articles' },
        { name: 'Case Studies', path: '/insights/case-studies' },
        // { name: 'Reports', path: '/blog/reports' },
        // { name: 'Webinars', path: '/blog/webinars' }
      ]
    },
    {
      name: 'Careers',
      path: '/careers',
      dropdown: true,
      dropdownItems: [
        { name: 'Search Jobs', path: '/careers/jobs' },
        { name: 'Early Careers', path: '/careers/early-careers' },
        { name: 'Experienced Professionals', path: '/careers/experienced' }
      ]
    },
    {
      name: 'About Us',
      path: '/about',
      dropdown: true,
      dropdownItems: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Leadership', path: '/about/leadership' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when menus are open
  useEffect(() => {
    if (isMobileMenuOpen || isHamburgerMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isHamburgerMenuOpen]);

  // Check if current path matches a nav item or its children
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Hide navbar on dashboard pages
  const isDashboardPage = location.pathname.startsWith('/dashboard');
  
  if (isDashboardPage) {
    return null;
  }

  return (
    <>
      <div className="fixed w-full z-50 flex flex-col">
        <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Hamburger button (visible on all screens) */}
            <button
              onClick={() => setIsHamburgerMenuOpen(true)}
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-blue' : 'text-secondary'
                }`}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center mx-4">
              <Logo variant={isScrolled ? 'default' : 'white'} size="lg" showBrandIcons={false} />
            </Link>

            {/* Desktop menu */}
            <div className="hidden xl:flex items-center space-x-6 flex-1 justify-end">
              {navItems.map((item) => (
                <div key={item.name} className="relative" onClick={(e) => e.stopPropagation()}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={(e) => handleDropdownToggle(item.name, e)}
                        className={`flex items-center text-body font-medium hover:text-secondary transition-colors ${isActive(item.path)
                            ? 'text-blue'
                            : isScrolled ? 'text-blue' : 'text-blue'
                          }`}
                        aria-expanded={activeDropdown === item.name}
                      >
                        {item.name}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>

                      {/* Dropdown menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className={`block px-4 py-2 text-sm hover:bg-light transition-colors ${location.pathname === dropdownItem.path
                                    ? 'text-secondary font-medium'
                                    : 'text-dark hover:text-primary'
                                  }`}
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-body font-medium hover:text-secondary transition-colors ${isActive(item.path)
                          ? 'text-secondary'
                          : isScrolled ? 'text-blue' : 'text-blue'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Search Bar */}
              <SearchBar />

              {/* User Profile or Sign In */}
              <div className="flex items-center border-l border-gray-200 pl-4 ml-2">
                {user ? (
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center space-x-2 hover:text-secondary transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                      isScrolled ? 'bg-primary' : 'bg-primary'
                    }`}>
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className={`text-sm font-medium ${
                      isScrolled ? 'text-blue' : 'text-blue'
                    }`}>
                      {user.name}
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/user-registration/register"
                    className={`text-sm font-medium hover:text-secondary transition-colors ${
                      isScrolled ? 'text-blue' : 'text-blue'
                    }`}
                  >
                    Sign In | Subscribe
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile search and menu buttons */}
            <div className="flex items-center xl:hidden">
              <SearchBar />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 ml-2 rounded-md focus:outline-none ${isScrolled ? 'text-blue' : 'text-secondary'
                  }`}
                aria-label="Open mobile menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* SubHeader */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
        <SubHeader />
      </div>
      </div>

      {/* McKinsey-style Hamburger Menu */}
      <HamburgerMenu
        isOpen={isHamburgerMenuOpen}
        onClose={() => setIsHamburgerMenuOpen(false)}
        navItems={navItems}
      />

      {/* Mobile menu (for small screens) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;
