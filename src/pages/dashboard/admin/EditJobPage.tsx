/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface Job {
  id: number;
  title: string;
  description: string;
  department: string;
  status: string;
  location: string;
  type: string;
}

const EditJobPage = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    department: '',
    status: 'available',
    location: '',
    type: 'fulltime'
  });
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`import { buildApiUrl } from '../config/api'; buildApiUrl/api/job_posting/${id}`);
        if (response.ok) {
          const data = await response.json();
          setJob(data);
          setFormData({
            title: data.title,
            description: data.description,
            department: data.department,
            status: data.status,
            location: data.location,
            type: data.type
          });
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`import { buildApiUrl } from '../config/api'; buildApiUrl/api/job_posting/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        toast.success('Job post updated successfully!');
        setTimeout(() => {
          window.location.href = '/dashboard/admin-jobs';
        }, 2000);
      } else {
        setStatus('error');
        toast.error('Failed to update job post. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading job details...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!job) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Job not found.</p>
          <Link to="/dashboard/admin-jobs" className="text-primary hover:text-secondary">
            ← Back to Job Posts
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="mb-6">
          <Link to="/dashboard/admin-jobs" className="text-primary hover:text-secondary">
            ← Back to Job Posts
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-dark mb-6">Edit Job Post</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Job Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter job title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Description</label>
              <textarea
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter job description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Department</label>
              <input
                type="text"
                required
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter department"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Location</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter location"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="available">Available</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Updating...' : 'Update Job Post'}
              </button>
              
              <Link
                to="/dashboard/admin-jobs"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditJobPage;
