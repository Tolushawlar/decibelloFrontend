import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { apiCall } from '../../../utils/api';

const EditBlogPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    status: 'draft',
    tags: '',
    image1: null as File | null,
    image2: null as File | null,
    image3: null as File | null
  });
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        const response = await apiCall(`/api/blog-posts/${id}`);
        if (response.ok) {
          const post = await response.json();
          setFormData({
            title: post.title,
            content: post.content,
            status: post.status,
            tags: post.tags.join(', '),
            image1: null,
            image2: null,
            image3: null
          });
          setCurrentImages(post.images_url || []);
        } else {
          toast.error('Blog post not found');
          navigate('/dashboard/blog');
        }
      } catch (error) {
        toast.error('Error loading blog post');
        navigate('/dashboard/blog');
      } finally {
        setFetchingPost(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const uploadImage = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      const response = await apiCall('/api/images/upload', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data.data.imageUrls[0];
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      // Upload images
      const imageUrls = await Promise.all([
        formData.image1 ? uploadImage(formData.image1) : null,
        formData.image2 ? uploadImage(formData.image2) : null,
        formData.image3 ? uploadImage(formData.image3) : null
      ]);
      
      const blogData = {
        title: formData.title,
        content: formData.content,
        author: user.id,
        status: formData.status,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        images_url: imageUrls.filter(url => url !== null)
      };

      console.log(blogData);

      const response = await apiCall(`/api/blog-posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        toast.success('Blog post updated successfully!');
        navigate('/dashboard/blog');
      } else {
        toast.error('Failed to update blog post');
      }
    } catch (error) {
      toast.error('Error updating blog post');
    } finally {
      setLoading(false);
    }
  };

  if (fetchingPost) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-gray-500">Loading blog post...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Edit Blog Post</h1>
          <button
            onClick={() => navigate('/dashboard/blog')}
            className="text-primary hover:text-primary/80"
          >
            ← Back to Blog Posts
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter blog post title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <Editor
                apiKey="5do1o72qg4ifet8pcivtmejvl025amtczpfx4mtu973r0rgh"
                value={formData.content}
                onEditorChange={(content) => setFormData({...formData, content})}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter tags separated by commas"
                />
              </div>
            </div>

            {/* Current Images */}
            {currentImages.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">Current Images</label>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {currentImages.map((imageUrl, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={imageUrl} 
                        alt={`Current image ${index + 1}`} 
                        className="w-full h-32 object-cover rounded-md border"
                      />
                      <span className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        Image {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Upload Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Upload New Images (Optional)</label>
              <div className="grid md:grid-cols-3 gap-4">
                {[1, 2, 3].map((num) => (
                  <div key={num}>
                    <label className="block text-sm text-gray-600 mb-2">New Image {num}</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setFormData(prev => ({ ...prev, [`image${num}`]: file }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {loading ? 'Updating...' : 'Update Blog Post'}
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/dashboard/blog')}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditBlogPage;