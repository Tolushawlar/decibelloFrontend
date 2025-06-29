import React from 'react';

interface FormTabsProps {
  activeTab: 'contact' | 'schedule';
  onTabChange: (tab: 'contact' | 'schedule') => void;
}

const FormTabs: React.FC<FormTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex mb-8 p-1 bg-white/5 rounded-lg">
      <button
        onClick={() => onTabChange('contact')}
        className={`flex-1 py-2 px-4 rounded-md transition-all ${
          activeTab === 'contact' 
            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
            : 'text-white/70 hover:text-white'
        }`}
      >
        Contact Form
      </button>
      <button
        onClick={() => onTabChange('schedule')}
        className={`flex-1 py-2 px-4 rounded-md transition-all ${
          activeTab === 'schedule' 
            ? 'bg-gradient-to-r from-primary to-secondary text-white' 
            : 'text-white/70 hover:text-white'
        }`}
      >
        Schedule a Call
      </button>
    </div>
  );
};

export default FormTabs;
