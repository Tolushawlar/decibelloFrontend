import React, { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { Link } from 'react-router-dom';

interface FavoritePost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

interface FavoriteJob {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
}

const FavoritesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'jobs'>('posts');
  
  const [favoritePosts, setFavoritePosts] = useState<FavoritePost[]>([
    {
      id: 'post-1',
      title: 'The Future of Data-Driven Marketing in 2025',
      excerpt: 'Explore how AI, machine learning, and predictive analytics are transforming the marketing landscape.',
      author: 'Sarah Johnson',
      date: 'May 15, 2025',
      category: 'Trends',
      image: 'https://picsum.photos/600/400?random=40',
    },
    {
      id: 'post-2',
      title: 'Building Brand Loyalty in a Digital-First World',
      excerpt: 'Strategies for creating meaningful connections with customers in an increasingly digital marketplace.',
      author: 'David Park',
      date: 'April 28, 2025',
      category: 'Branding',
      image: 'https://picsum.photos/600/400?random=43',
    },
    {
      id: 'post-3',
      title: 'Voice Search Optimization: The Next Frontier in SEO',
      excerpt: 'Prepare your digital marketing strategy for the growing prevalence of voice search and virtual assistants.',
      author: 'James Wilson',
      date: 'April 15, 2025',
      category: 'SEO',
      image: 'https://picsum.photos/600/400?random=45',
    },
  ]);

  const [favoriteJobs, setFavoriteJobs] = useState<FavoriteJob[]>([
    {
      id: 'job-1',
      title: 'Senior Marketing Strategist',
      company: 'Decibello',
      location: 'New York, NY',
      type: 'Full-time',
      postedDate: '2025-05-10',
    },
    {
      id: 'job-2',
      title: 'Content Marketing Specialist',
      company: 'Decibello',
      location: 'Remote',
      type: 'Full-time',
      postedDate: '2025-05-05',
    },
  ]);

  const removePost = (id: string) => {
    setFavoritePosts(favoritePosts.filter(post => post.id !== id));
  };

  const removeJob = (id: string) => {
    setFavoriteJobs(favoriteJobs.filter(job => job.id !== id));
  };

  return (
    <DashboardLayout userRole="user">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">My Favorites</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('posts')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'posts'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Saved Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'jobs'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Saved Jobs
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'posts' && (
              <>
                {favoritePosts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't saved any blog posts yet.</p>
                    <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">
                      Browse our blog
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoritePosts.map((post) => (
                      <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block bg-white/80 backdrop-blur-sm text-primary text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                          <button 
                            onClick={() => removePost(post.id)}
                            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-red-500 p-1.5 rounded-full hover:bg-white transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            </svg>
                          </button>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{post.title}</h3>
                          <p className="text-dark/70 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center text-xs text-dark/50 mb-4">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.date}</span>
                          </div>
                          <Link 
                            to={`/blog/post/${post.id}`}
                            className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                          >
                            <span className="mr-2">Read More</span>
                            <svg 
                              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === 'jobs' && (
              <>
                {favoriteJobs.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">You haven't saved any jobs yet.</p>
                    <Link to="/careers/jobs" className="mt-4 inline-block text-primary hover:underline">
                      Browse open positions
                    </Link>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Job Title
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Company
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Posted Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {favoriteJobs.map((job) => (
                          <tr key={job.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{job.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{job.company}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {job.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {job.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {job.postedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <Link to={`/careers/jobs/${job.id}`} className="text-primary hover:text-primary/80 mr-3">
                                View
                              </Link>
                              <button 
                                className="text-primary hover:text-primary/80 mr-3"
                                onClick={() => {}}
                              >
                                Apply
                              </button>
                              <button 
                                className="text-red-600 hover:text-red-800"
                                onClick={() => removeJob(job.id)}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FavoritesPage;
