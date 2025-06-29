import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { apiCall } from '../../../utils/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: number;
  status: string;
  created_at: string;
  tags: string[];
}

const BlogPostsPage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiCall('/api/blog-posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
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

  const deletePost = async (id: number) => {
    try {
      const response = await apiCall(`/api/blog-posts/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setPosts(posts.filter(post => post.id !== id));
        toast.success('Blog post deleted successfully!');
      } else {
        toast.error('Failed to delete blog post');
      }
    } catch (error) {
      toast.error('Error deleting blog post');
    }
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Blog Posts</h1>
          <button
            onClick={() => navigate('/dashboard/create-blog')}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Create New Post
          </button>
        </div>



        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      Loading blog posts...
                    </td>
                  </tr>
                ) : posts.length > 0 ? (
                  posts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                        <div className="text-sm text-gray-500">{post.content.substring(0, 100)}...</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Author {post.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          post.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                        <button 
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => navigate(`/dashboard/edit-blog/${post.id}`)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-800"
                          onClick={() => deletePost(post.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No blog posts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {posts.length > itemsPerPage && (
            <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200">
              <div className="text-sm text-gray-700">
                Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, posts.length)} of {posts.length} posts
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                {Array.from({ length: Math.ceil(posts.length / itemsPerPage) }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 border rounded text-sm ${
                      currentPage === i + 1 ? 'bg-primary text-white' : 'hover:bg-gray-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / itemsPerPage)))}
                  disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
                  className="px-3 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BlogPostsPage;
