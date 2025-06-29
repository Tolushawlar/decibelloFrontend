import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, description }) => {
  return (
    <div className="text-center mb-12 md:mb-16 section-fade">
      <span className="text-primary font-semibold text-body inline-block mb-2">
        {label}
      </span>
      <h2 className="text-h2 text-dark mb-4">{title}</h2>
      <div className="w-16 md:w-20 h-1 bg-secondary mx-auto mb-4 md:mb-6"></div>
      {description && (
        <p className="text-body text-dark max-w-2xl mx-auto px-4 sm:px-6">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
