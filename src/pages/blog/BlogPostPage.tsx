import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
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

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      
      try {
        const response = await apiCall(`/api/blog-posts/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          toast.error('Blog post not found');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        toast.error('Error loading blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-white pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8">
              <p className="text-gray-500">Loading blog post...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-white pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8">
              <p className="text-gray-500">Blog post not found.</p>
              <Link 
                to="/blog"
                className="inline-flex items-center mt-4 text-primary hover:text-secondary transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white"></section> */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center text-sm text-dark/60 mb-4">
              {/* <span>Author {post.author}</span> */}
              <span className="mx-2">•</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              {/* <span className="mx-2">•</span>
              <span>5 min read</span> */}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Images */}
      {post.images_url && post.images_url.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {post.images_url.map((imageUrl, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={imageUrl} 
                    alt={`${post.title} - Image ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-gray max-w-none">
            <div 
              className="text-dark/80 leading-relaxed"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 bg-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* <div>
              <h3 className="text-lg font-semibold text-dark mb-2">Share this article</h3>
              <div className="flex space-x-4">
                <button className="text-dark/60 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-dark/60 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-dark/60 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div> */}
            {/* <div className="text-right">
              <Link 
                to="/blog"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors"
              >
                <span className="mr-2">More Articles</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <ContactFooterSection />
    </Layout>
  );
};

export default BlogPostPage;