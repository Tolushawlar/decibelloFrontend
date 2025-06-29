import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
}

const SearchBar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Search function that searches through available pages in the app
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length > 1) {
      // Comprehensive list of available pages in the app
      const allPages: SearchResult[] = [
        // Home
        {
          title: 'Home',
          path: '/',
          excerpt: 'Return to the homepage'
        },
        // Industries
        {
          title: 'Industries',
          path: '/industries',
          excerpt: 'Explore our industry expertise and solutions'
        },
        {
          title: 'Financial Services',
          path: '/industries/financial-services',
          excerpt: 'Transforming financial services with innovative solutions'
        },
        {
          title: 'Healthcare',
          path: '/industries/healthcare',
          excerpt: 'Digital solutions for healthcare providers and organizations'
        },
        // Capabilities
        {
          title: 'Capabilities',
          path: '/capabilities',
          excerpt: 'Discover our range of services and capabilities'
        },
        {
          title: 'Digital Marketing',
          path: '/capabilities/digital-marketing',
          excerpt: 'Data-driven digital marketing strategies for growth'
        },
        {
          title: 'Data Analytics',
          path: '/capabilities/data-analytics',
          excerpt: 'Turn your data into actionable insights'
        },
        {
          title: 'Brand Strategy',
          path: '/capabilities/brand-strategy',
          excerpt: 'Build a powerful brand that resonates with your audience'
        },
        // Blog/Insights
        {
          title: 'Insights',
          path: '/blog',
          excerpt: 'Latest thinking, articles, and research'
        },
        // Careers
        {
          title: 'Careers',
          path: '/careers',
          excerpt: 'Join our team of experts and transform your career'
        },
        {
          title: 'Job Opportunities',
          path: '/careers/jobs',
          excerpt: 'Browse current job openings and apply'
        },
        // About
        {
          title: 'About Us',
          path: '/about',
          excerpt: 'Learn about our company, mission, and values'
        }
      ];
      
      // Filter results based on query
      const filteredResults = allPages.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) || 
        result.excerpt.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  return (
    <div className="relative">
      {/* Search icon button */}
      <button
        onClick={toggleSearch}
        className="p-2 text-secondary hover:text-secondary/80"
        aria-label="Search"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>

      {/* Dark overlay behind the search */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-40 bg-dark/60 transition-opacity duration-300"
          onClick={toggleSearch}
        ></div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 h-3/5 w-full z-50 bg-white transform transition-transform duration-300 shadow-xl">
          <div className="h-full flex flex-col max-w-7xl mx-auto px-6 py-4">
            <div className="p-5 border-b-2 border-secondary flex items-center bg-light/30 rounded-lg">
              <svg className="h-6 w-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search pages and content..."
                className="flex-1 border-none focus:ring-0 text-lg bg-transparent"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
              <button
                onClick={toggleSearch}
                className="p-2 text-primary hover:text-secondary transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {/* Search results */}
            <div className="flex-1 overflow-y-auto p-6">
              {searchResults.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {searchResults.map((result, index) => (
                    <li key={index} className="py-3">
                      <Link 
                        to={result.path} 
                        className="block hover:bg-light/50 -m-3 p-4 rounded-lg transition-colors"
                        onClick={toggleSearch}
                      >
                        <h3 className="font-medium text-primary text-lg">{result.title}</h3>
                        <p className="text-dark/70 mt-1">{result.excerpt}</p>
                        <div className="flex items-center mt-2 text-secondary text-sm">
                          <span>View page</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                searchQuery.length > 1 && (
                  <div className="text-center py-8">
                    <p className="text-primary font-medium">No results found for "{searchQuery}"</p>
                    <p className="text-dark/60 mt-2">Try different keywords or browse our main sections</p>
                  </div>
                )
              )}
              
              {searchQuery.length <= 1 && searchQuery.length > 0 && (
                <div className="text-center py-8">
                  <p className="text-secondary font-medium">Start typing to search</p>
                  <p className="text-dark/60 mt-2">Please enter at least 2 characters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
