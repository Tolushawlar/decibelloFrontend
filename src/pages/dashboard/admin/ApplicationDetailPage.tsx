/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface ApplicationDetail {
  id: number;
  job_posting: number;
  applicant: number;
  status: string;
  cover_letter: string;
  resume_url: string;
  phone_number: string;
  application_messages: string[];
  created_at: number;
  applicantName: string;
  applicantEmail: string;
}

const ApplicationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [application, setApplication] = useState<ApplicationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchApplicationDetail = async () => {
      try {
        // Fetch application details
        const appResponse = await fetch(`http://localhost:5000/api/job_application/${id}`);
        if (appResponse.ok) {
          const appData = await appResponse.json();
          
          // Fetch user details
          const userResponse = await fetch('http://localhost:5000/api/users');
          const users = await userResponse.json();
          const user = users.find((u: any) => u.id === appData.applicant);
          
          setApplication({
            ...appData,
            applicantName: user?.name || `Applicant ${appData.applicant}`,
            applicantEmail: user?.email || 'N/A'
          });
        }
      } catch (error) {
        console.error('Error fetching application details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchApplicationDetail();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/job_application/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Application deleted successfully!');
        navigate('/dashboard/applications');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      toast.error('Failed to delete application');
    }
    setShowDeleteConfirm(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading application details...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!application) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Application not found.</p>
          <Link to="/dashboard/applications" className="text-primary hover:text-secondary">
            ← Back to Applications
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="mb-6">
          <Link to="/dashboard/applications" className="text-primary hover:text-secondary">
            ← Back to Applications
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Application Details</h1>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Delete Application
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4">Applicant Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-dark">{application.applicantName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-dark">{application.applicantEmail}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-dark">{application.phone_number || 'Not provided'}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-dark mb-4">Application Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Job ID</label>
                  <p className="text-dark">{application.job_posting}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Applied Date</label>
                  <p className="text-dark">{new Date(application.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
          
          {application.cover_letter && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-3">Cover Letter</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-dark whitespace-pre-wrap">{application.cover_letter}</p>
              </div>
            </div>
          )}
          
          {application.resume_url && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-3">Resume</h3>
              <a 
                href={application.resume_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary font-medium"
              >
                View Resume →
              </a>
            </div>
          )}
          
          {application.application_messages && application.application_messages.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-dark mb-3">Messages</h3>
              <div className="space-y-2">
                {application.application_messages.map((message, index) => (
                  <div key={index} className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-dark text-sm">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Application</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this job application? This action cannot be undone.</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ApplicationDetailPage;
