import React from 'react';
import mainLogo from '../assets/Decibello_Logo_Suite__Recovered_-02__2_-removebg-preview.png';
import brandIcon1 from '../assets/Decibello_Logo_Suite__Recovered_-05-removebg-preview.png';
import brandIcon2 from '../assets/Decibello_Logo_Suite__Recovered_-10-removebg-preview.png';
import brandIcon3 from '../assets/Decibello_Logo_Suite__Recovered_-15__2_-removebg-preview.png';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  showBrandIcons?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showBrandIcons = false
}) => {
  const sizeClasses = {
    sm: 'h-20',
    md: 'h-28',
    lg: 'h-36'  };

  // Use the PNG logo instead of SVG
  const logoSrc = mainLogo;

  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="Decibello Logo"
          className={sizeClasses[size]}
        />
      </div>

      {showBrandIcons && (
        <>
          <div className="hidden md:flex space-x-6">
            <img src={brandIcon1} alt="Brand Icon" className="h-16" />
            <img src={brandIcon2} alt="Brand Icon" className="h-16" />
            <img src={brandIcon3} alt="Brand Icon" className="h-16" />
          </div>
          <div className="flex md:hidden space-x-4">
            <img src={brandIcon1} alt="Brand Icon" className="h-12" />
            <img src={brandIcon2} alt="Brand Icon" className="h-12" />
          </div>
        </>
      )}
    </div>
  );
};

export default Logo;
