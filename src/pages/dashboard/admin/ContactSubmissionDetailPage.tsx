import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface ContactSubmissionDetail {
  id: number;
  name: string;
  email: string;
  status: string;
  message: string;
  created_at: number;
}

const ContactSubmissionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [submission, setSubmission] = useState<ContactSubmissionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/contact_submission/${id}`);
        if (response.ok) {
          const data = await response.json();
          setSubmission(data);
        }
      } catch (error) {
        console.error('Error fetching contact submission:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSubmission();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact_submission/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success('Submission deleted successfully!');
        navigate('/dashboard/contact-submissions');
      }
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete submission');
    }
    setShowDeleteConfirm(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading submission details...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!submission) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Submission not found.</p>
          <Link to="/dashboard/contact-submissions" className="text-primary hover:text-secondary">
            ← Back to Contact Submissions
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="mb-6">
          <Link to="/dashboard/contact-submissions" className="text-primary hover:text-secondary">
            ← Back to Contact Submissions
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Contact Submission Details</h1>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Delete Submission
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Name</h3>
              <p className="text-dark">{submission.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
              <p className="text-dark">{submission.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Subject</h3>
              <p className="text-dark">{submission.status}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Submitted Date</h3>
              <p className="text-dark">{new Date(submission.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Message</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-dark whitespace-pre-wrap">{submission.message}</p>
            </div>
          </div>
        </div>
        
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Submission</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this contact submission? This action cannot be undone.</p>
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

export default ContactSubmissionDetailPage;
