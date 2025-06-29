import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactFooterSection from '../../components/ContactFooterSection';
import { apiCall } from '../../utils/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: number;
  status: string;
  created_at: string;
  tags: string[];
  images_url: string[] | null;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiCall('/api/blog-posts');
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data.filter((post: BlogPost) => post.status === 'published'));
        } else {
          toast.error('Failed to fetch blog posts');
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        toast.error('Error loading blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Get daily featured post (changes every 24 hours)
  const getFeaturedPost = () => {
    if (blogPosts.length === 0) return null;
    
    // Use current date to generate consistent daily seed
    const today = new Date();
    const daysSinceEpoch = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
    const randomIndex = daysSinceEpoch % blogPosts.length;
    
    const post = blogPosts[randomIndex];
    return {
      id: post.id,
      title: post.title,
      excerpt: post.content.substring(0, 200) + '...',
      image: post.images_url?.[0] || `https://picsum.photos/1200/600?random=${post.id}`,
      category: post.tags[0] || 'Article',
      date: new Date(post.created_at).toLocaleDateString()
    };
  };
  
  const featuredPost = getFeaturedPost();

  // const samplePosts = [
  //   {
  //     id: 'post-2',
  //     title: 'How to Build an Effective Customer Segmentation Strategy',
  //     excerpt: 'Learn the key principles of customer segmentation and how to implement them for more targeted marketing campaigns.',
  //     image: 'https://picsum.photos/600/400?random=41',
  //     category: 'Strategy',
  //     author: 'Michael Chen',
  //     date: 'May 10, 2025',
  //     readTime: '6 min read'
  //   },
  //   {
  //     id: 'post-3',
  //     title: 'The ROI of Content Marketing: Measuring What Matters',
  //     excerpt: 'Discover the metrics that truly matter when evaluating the success of your content marketing efforts.',
  //     image: 'https://picsum.photos/600/400?random=42',
  //     category: 'Analytics',
  //     author: 'Emma Rodriguez',
  //     date: 'May 5, 2025',
  //     readTime: '5 min read'
  //   },
  //   {
  //     id: 'post-4',
  //     title: 'Building Brand Loyalty in a Digital-First World',
  //     excerpt: 'Strategies for creating meaningful connections with customers in an increasingly digital marketplace.',
  //     image: 'https://picsum.photos/600/400?random=43',
  //     category: 'Branding',
  //     author: 'David Park',
  //     date: 'April 28, 2025',
  //     readTime: '7 min read'
  //   },
  //   {
  //     id: 'post-5',
  //     title: 'Privacy-First Marketing: Navigating the Cookieless Future',
  //     excerpt: 'How marketers can adapt their strategies in response to increasing privacy regulations and the phasing out of third-party cookies.',
  //     image: 'https://picsum.photos/600/400?random=44',
  //     category: 'Compliance',
  //     author: 'Olivia Martinez',
  //     date: 'April 22, 2025',
  //     readTime: '9 min read'
  //   },
  //   {
  //     id: 'post-6',
  //     title: 'Voice Search Optimization: The Next Frontier in SEO',
  //     excerpt: 'Prepare your digital marketing strategy for the growing prevalence of voice search and virtual assistants.',
  //     image: 'https://picsum.photos/600/400?random=45',
  //     category: 'SEO',
  //     author: 'James Wilson',
  //     date: 'April 15, 2025',
  //     readTime: '6 min read'
  //   }
  // ];

  // Generate categories from blog post tags
  const getCategories = () => {
    const allTags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => allTags.add(tag));
    });
    return ['All', ...Array.from(allTags)];
  };
  
  const categories = getCategories();
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedCategory));
  
  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="lg:mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Decibello Blog</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Insights, trends, and strategies from our experts to help you navigate the evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-dark">Featured Article</h2>
            </div>
            
            <div className="bg-light rounded-xl overflow-hidden shadow-sm">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{featuredPost.title}</h3>
                  <p className="text-dark/70 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-dark/50 mb-6 mt-auto">
                    <span>{featuredPost.date}</span>
                  </div>
                  <Link 
                    to={`/blog/post/${featuredPost.id}`}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                  >
                    <span className="mr-2">Read Article</span>
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
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white' 
                      : 'bg-light text-dark/70 hover:bg-light/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {loading ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">Loading blog posts...</p>
              </div>
            ) : paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  {post.images_url?.[0] && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.images_url[0]} 
                        alt={post.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-dark/70 mb-4 line-clamp-3">
                      {post.content.substring(0, 150)}...
                    </p>
                    <div className="flex items-center text-xs text-dark/50 mb-4">
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No blog posts found.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => (
                  <button 
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-primary text-white' 
                        : 'bg-light text-dark/70 hover:bg-light/70'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-dark/70 mb-8">
            Stay updated with the latest insights, trends, and strategies in digital marketing.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-dark/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </section> */}

      <ContactFooterSection />
    </>
  );
};

export default BlogPage;
