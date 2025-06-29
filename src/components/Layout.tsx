import React from 'react';
import Navbar from './Navbar';
import SubHeader from './SubHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <SubHeader />
      </div>
      <main className="flex-grow pt-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
