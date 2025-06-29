import React, { useState, useEffect, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  active: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
      active ? 'bg-primary text-white' : 'text-dark/70 hover:bg-light'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{label}</span>
  </Link>
);

interface DashboardLayoutProps {
  children: ReactNode;
  userRole?: 'admin' | 'staff' | 'user';
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Get user role from localStorage
  const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.accountType || 'user';
  };
  
  const userRole = getUserRole();
  
  // Hide main navbar when dashboard is mounted
  useEffect(() => {
    // Hide the main navbar by adding a class to body
    document.body.classList.add('dashboard-active');
    
    // Cleanup function to show navbar when dashboard is unmounted
    return () => {
      document.body.classList.remove('dashboard-active');
    };
  }, []);

  // Define navigation links based on user role
  const getNavLinks = () => {
    const commonLinks = [
      {
        to: '/',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
        label: 'Home',
      },
      // {
      //   to: '/dashboard',
      //   icon: (
      //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      //     </svg>
      //   ),
      //   label: 'Dashboard',
      // },
      {
        to: '/dashboard/profile',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        label: 'Profile',
      },
    ];

    // User role links
    const userLinks = [
      {
        to: '/dashboard/applications',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        label: 'Applications',
      },
    ];

    // Staff role links
    const staffLinks = [
      {
        to: '/dashboard/messages',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ),
        label: 'Messages',
      },
    ];

    // Admin role links
    const adminLinks = [
      {
        to: '/dashboard/users',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        label: 'Users',
      },
      {
        to: '/dashboard/subscribers',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Subscribers',
      },
      {
        to: '/dashboard/contacts',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Contacts',
      },
      {
        to: '/dashboard/call-schedules',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Call Schedules',
      },
      {
        to: '/dashboard/job-applications',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        label: 'Job Applications',
      },
      {
        to: '/dashboard/blog',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        ),
        label: 'Blog Posts',
      },
      {
        to: '/dashboard/admin-jobs',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        label: 'Job Posts',
      },
      // {
      //   to: '/dashboard/applications',
      //   icon: (
      //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      //     </svg>
      //   ),
      //   label: 'Applications',
      // },
    ];

    if (userRole === 'admin') {
      return [
        ...commonLinks,
        {
          to: '/dashboard',
          icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
          label: 'Dashboard',
        },
        ...staffLinks, 
        ...adminLinks
      ];
    } else if (userRole === 'staff') {
      return [...commonLinks, ...staffLinks];
    } else {
      return [...commonLinks, ...userLinks];
    }
  };

  const navLinks = getNavLinks();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-4 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-dark">Decibello Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="hidden sm:block text-sm text-dark/70">
                {JSON.parse(localStorage.getItem('user') || '{}').name || 'User'}
              </span>
            </div>
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('userEmail');
                window.location.href = '/';
              }}
              className="text-primary hover:text-primary/80 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="hidden sm:block text-sm">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - Fixed */}
        <aside 
          className={`fixed left-0 top-16 bottom-0 z-30 bg-white shadow-sm transition-all duration-300 ${
            sidebarOpen ? 'w-64' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'
          }`}
        >
          <nav className={`h-full p-4 space-y-2 overflow-y-auto ${!sidebarOpen && 'md:px-2'}`}>
            {navLinks?.map((link) => (
              <SidebarLink
                key={link.to}
                to={link.to}
                icon={link.icon}
                label={sidebarOpen ? link.label : ''}
                active={currentPath === link.to}
              />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 p-4 sm:p-6 transition-all duration-300 ${
          sidebarOpen ? 'md:ml-64' : 'ml-0 md:ml-20'
        }`}>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
