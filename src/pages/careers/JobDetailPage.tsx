/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactFooterSection from '../../components/ContactFooterSection';
import { apiCall } from '../../utils/api';

interface Job {
  id: number;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  status: string;
  created_at: string;
}

const JobDetailPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;
      
      try {
        const response = await apiCall(`/api/job-postings/${jobId}`);
        if (response.ok) {
          const data = await response.json();
          setJob(data);
        } else {
          toast.error('Job not found');
          navigate('/careers/jobs');
        }
      } catch (error) {
        console.error('Error fetching job:', error);
        toast.error('Error loading job');
        navigate('/careers/jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId, navigate]);
  
  // Mock job data for fallback
  const mockJobData = {
    'job-001': {
      title: 'Senior Marketing Strategist',
      department: 'Marketing',
      location: 'New York',
      type: 'Full-time',
      posted: '2 days ago',
      description: 'We are seeking an experienced Marketing Strategist to develop and implement data-driven marketing strategies for our clients. The ideal candidate will have a strong background in digital marketing, analytics, and strategic planning.',
      responsibilities: [
        'Develop comprehensive marketing strategies based on client objectives and market research',
        'Analyze market trends, consumer behavior, and competitive landscape to identify opportunities',
        'Lead client presentations and strategic discussions',
        'Collaborate with cross-functional teams to ensure seamless execution of marketing initiatives',
        'Monitor campaign performance and provide data-driven recommendations for optimization'
      ],
      requirements: [
        '5+ years of experience in marketing strategy or related field',
        'Proven track record of developing successful marketing campaigns',
        'Strong analytical skills with experience in data-driven decision making',
        'Excellent communication and presentation skills',
        'Bachelor\'s degree in Marketing, Business, or related field; MBA preferred'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements',
        '401(k) matching program',
        'Professional development opportunities'
      ]
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 text-center">
        <p className="text-dark/70">Loading job details...</p>
      </div>
    );
  }
  
  if (!job) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-dark mb-4">Job Not Found</h1>
        <p className="text-dark/70 mb-6">The job posting you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/careers/jobs"
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          View All Jobs
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <>
      {/* Job Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/careers/jobs')}
            className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-6"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Jobs
          </button>
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {job.department}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-dark">
                {job.location}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-dark/70">
                {job.type}
              </span>
            </div>
            <p className="text-dark/50">Posted {new Date(job.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-dark mb-4">Job Description</h2>
                  <div className="text-dark/70 whitespace-pre-wrap">{job.description}</div>
                </div>
              </div>
            </div>
            
            {/* Application Form */}
            <div>
              <div className="sticky top-24">
                <div className="backdrop-blur-xl bg-white/30 p-6 rounded-2xl border border-white/20 shadow-xl">
                  <h3 className="text-xl font-bold text-dark mb-4">Apply for this position</h3>
                  
                  <Link 
                    to={`/careers/apply/${job.id}`}
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-center block"
                  >
                    Apply Now
                  </Link>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Jobs */}
      {/* <section className="py-16 bg-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark mb-8">Similar Positions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Marketing Coordinator',
                department: 'Marketing',
                location: 'New York',
                id: 'job-004'
              },
              {
                title: 'Digital Marketing Specialist',
                department: 'Marketing',
                location: 'Remote',
                id: 'job-007'
              },
              {
                title: 'Content Strategist',
                department: 'Marketing',
                location: 'London',
                id: 'job-008'
              }
            ].map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-bold text-dark mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {job.department}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/10 text-dark">
                    {job.location}
                  </span>
                </div>
                <Link 
                  to={`/careers/jobs/${job.id}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                >
                  <span className="mr-2">View Job</span>
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
            ))}
          </div>
        </div>
      </section> */}

      <ContactFooterSection />
    </>
  );
};

export default JobDetailPage;
