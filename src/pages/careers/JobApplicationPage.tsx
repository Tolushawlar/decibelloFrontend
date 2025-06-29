import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { apiCall } from '../../utils/api';

interface Job {
  id: number;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
}

const JobApplicationPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [formData, setFormData] = useState({
    cover_letter: '',
    resume_url: '',
    phone_number: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      toast.error('Please log in to apply for jobs');
      navigate('/user-registration/register');
      return;
    }

    const fetchJob = async () => {
      if (!jobId) return;
      
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        
        const [jobRes, applicationsRes] = await Promise.all([
          apiCall(`/api/job-postings/${jobId}`),
          apiCall('/api/job-applications')
        ]);
        
        if (jobRes.ok) {
          const jobData = await jobRes.json();
          setJob(jobData);
        } else {
          toast.error('Job not found');
          navigate('/careers/jobs');
          return;
        }
        
        if (applicationsRes.ok) {
          const applicationsData = await applicationsRes.json();
          console.log('All applications:', applicationsData);
          console.log('Current user ID:', user.id);
          console.log('Current job ID:', parseInt(jobId));
          
          const userApplication = applicationsData.find((app: any) => {
            console.log('Checking app:', app.job_posting, app.applicant);
            return Number(app.job_posting) === parseInt(jobId) && Number(app.applicant) === Number(user.id);
          });
          
          console.log('Found existing application:', userApplication);
          setHasApplied(!!userApplication);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error loading job');
        navigate('/careers/jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Double-check before submission
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const checkResponse = await apiCall('/api/job-applications');
      
      if (checkResponse.ok) {
        const applicationsData = await checkResponse.json();
        const existingApplication = applicationsData.find((app: any) => 
          Number(app.job_posting) === parseInt(jobId!) && Number(app.applicant) === Number(user.id)
        );
        
        if (existingApplication) {
          toast.error('You have already applied for this job');
          setHasApplied(true);
          return;
        }
      }
    } catch (error) {
      console.error('Error checking existing applications:', error);
    }
    
    setSubmitting(true);

    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const applicationData = {
        job_posting: parseInt(jobId!),
        applicant: user.id,
        status: 'pending',
        cover_letter: formData.cover_letter,
        resume_url: formData.resume_url,
        phone_number: formData.phone_number
      };

      const response = await apiCall('/api/job-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        toast.success('Application submitted successfully!');
        setHasApplied(true);
        navigate('/dashboard/applications');
      } else {
        toast.error('Failed to submit application');
      }
    } catch (error) {
      toast.error('Error submitting application');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-light pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8">
              <p className="text-gray-500">Loading job details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!job) {
    return (
      <Layout>
        <div className="min-h-screen bg-light pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8">
              <p className="text-gray-500">Job not found.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-light pt-20 sm:pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Apply for {job.title}</h1>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>

              {hasApplied ? (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md">
                  <p className="font-medium">Already Applied</p>
                  <p className="text-sm mt-1">You have already submitted an application for this position.</p>
                  <button
                    onClick={() => navigate('/dashboard/applications')}
                    className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View My Applications
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone_number}
                    onChange={(e) => setFormData({...formData, phone_number: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1-555-0199"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.resume_url}
                    onChange={(e) => setFormData({...formData, resume_url: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com/resume.pdf"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    required
                    rows={8}
                    value={formData.cover_letter}
                    onChange={(e) => setFormData({...formData, cover_letter: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => navigate(`/careers/jobs/${jobId}`)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Back to Job
                  </button>
                </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobApplicationPage;