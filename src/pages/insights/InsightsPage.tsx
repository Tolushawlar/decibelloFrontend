import React from 'react';
import { Link } from 'react-router-dom';

const InsightsPage: React.FC = () => {
  // Sample insights data - in a real app, this would come from an API or CMS
  const featuredInsights = [
    {
      id: 1,
      title: 'The Future of Digital Transformation in 2024',
      category: 'Digital Transformation',
      date: 'March 15, 2024',
      excerpt: 'Explore the emerging trends and technologies that will shape digital transformation strategies in the coming year.',
      image: 'https://via.placeholder.com/600x400',
      slug: 'future-digital-transformation-2024'
    },
    {
      id: 2,
      title: 'Building Resilient Supply Chains with AI',
      category: 'Artificial Intelligence',
      date: 'March 10, 2024',
      excerpt: 'How artificial intelligence is helping organizations create more resilient and adaptive supply chain networks.',
      image: 'https://via.placeholder.com/600x400',
      slug: 'resilient-supply-chains-ai'
    },
    {
      id: 3,
      title: 'Cybersecurity Challenges in the Cloud Era',
      category: 'Cloud & Security',
      date: 'March 5, 2024',
      excerpt: 'Addressing the evolving security challenges as organizations accelerate their migration to cloud environments.',
      image: 'https://via.placeholder.com/600x400',
      slug: 'cybersecurity-challenges-cloud'
    }
  ];

  const recentInsights = [
    {
      id: 4,
      title: 'Sustainable Technology: Balancing Innovation and Environmental Impact',
      category: 'Sustainability',
      date: 'March 1, 2024',
      slug: 'sustainable-technology-innovation'
    },
    {
      id: 5,
      title: 'The Rise of Low-Code/No-Code Development Platforms',
      category: 'Software Development',
      date: 'February 25, 2024',
      slug: 'low-code-no-code-platforms'
    },
    {
      id: 6,
      title: 'Data Privacy Regulations: Global Trends and Compliance Strategies',
      category: 'Data & Privacy',
      date: 'February 20, 2024',
      slug: 'data-privacy-regulations-compliance'
    },
    {
      id: 7,
      title: 'Quantum Computing: Implications for Business and Technology',
      category: 'Emerging Tech',
      date: 'February 15, 2024',
      slug: 'quantum-computing-implications'
    }
  ];

  const categories = [
    'Digital Transformation',
    'Artificial Intelligence',
    'Cloud & Security',
    'Data & Analytics',
    'Sustainability',
    'Emerging Technologies',
    'Industry Insights'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Insights</h1>
        <p className="text-xl text-dark/70 mb-8">Expert perspectives on technology, business, and innovation</p>
        
        {/* Featured Insights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Featured Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredInsights.map(insight => (
              <div key={insight.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-2">
                <img src={insight.image} alt={insight.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-secondary font-medium">{insight.category}</span>
                    <span className="mx-2 text-dark/30">•</span>
                    <span className="text-sm text-dark/60">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{insight.title}</h3>
                  <p className="text-dark/80 mb-4">{insight.excerpt}</p>
                  <Link to={`/insights/${insight.slug}`} className="text-secondary font-medium flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Insights and Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold text-primary mb-6">Recent Insights</h2>
            <div className="space-y-6">
              {recentInsights.map(insight => (
                <div key={insight.id} className="bg-white p-5 rounded-lg shadow-sm mb-2">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-secondary font-medium">{insight.category}</span>
                    <span className="mx-2 text-dark/30">•</span>
                    <span className="text-sm text-dark/60">{insight.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{insight.title}</h3>
                  <Link to={`/insights/${insight.slug}`} className="text-secondary font-medium flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/insights/all" className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                View all insights
              </Link>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">Categories</h2>
            <div className="bg-white rounded-lg shadow-sm p-5 mb-2">
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/insights/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-dark hover:text-secondary transition-colors flex items-center justify-between">
                      <span>{category}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-light/50 rounded-lg p-5 mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-dark/80 mb-4">Stay updated with our latest insights and industry news</p>
              <form className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
