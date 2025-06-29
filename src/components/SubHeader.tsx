import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubHeaderProps {
  links?: {
    name: string;
    path: string;
  }[];
}

const SubHeader: React.FC<SubHeaderProps> = ({ links }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Default links for each parent section
  const defaultLinks = {
    '/about': [
      { name: 'Our Story', path: '/about/story' },
      { name: 'Leadership', path: '/about/leadership' },
      // { name: 'Values', path: '/about/values' },
      // { name: 'Partners', path: '/about/partners' }
    ],
    '/capabilities': [
      { name: 'Data Analytics', path: '/capabilities/data-analytics' },
      { name: 'Brand Strategy', path: '/capabilities/brand-strategy' },
      { name: 'Market Research', path: '/capabilities/market-research' }
    ],
    '/industries': [
      { name: 'Financial Services', path: '/industries/financial-services' },
      { name: 'Healthcare', path: '/industries/healthcare' },
      // { name: 'Technology', path: '/industries/technology' },
      { name: 'Retail', path: '/industries/retail' }
    ],
    '/blog': [
      { name: 'Articles', path: '/blog/articles' },
      { name: 'Case Studies', path: '/insights/case-studies' },
      // { name: 'Reports', path: '/blog/reports' },
      // { name: 'Webinars', path: '/blog/webinars' }
    ],
    '/careers': [
      { name: 'Search Jobs', path: '/careers/jobs' },
      { name: 'Early Careers', path: '/careers/early-careers' },
      { name: 'Experienced', path: '/careers/experienced' }
    ]
  };
  
  // Determine which section we're in
  const parentPath = '/' + currentPath.split('/')[1];
  const activeLinks = links || defaultLinks[parentPath as keyof typeof defaultLinks] || [];
  
  // Don't show subheader if no links for this section
  if (activeLinks.length === 0) return null;
  
  // Get parent page name
  const parentNames = {
    '/about': 'About Us',
    '/capabilities': 'Capabilities',
    '/industries': 'Industries',
    '/blog': 'Insights',
    '/careers': 'Careers'
  };
  
  const parentName = parentNames[parentPath as keyof typeof parentNames] || '';
  
  return (
    <div className="bg-white border-b border-gray-200 py-3 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {parentName && (
            <div className="mr-8 pr-8 border-r border-gray-200">
              <span className="text-primary font-semibold">{parentName}</span>
            </div>
          )}
          <div className="flex space-x-6">
            {activeLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  currentPath === link.path 
                    ? 'text-secondary border-b-2 border-secondary pb-1' 
                    : 'text-dark hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
