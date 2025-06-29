import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

interface CallScheduleDetail {
  id: number;
  name: string;
  email: string;
  preferred_date: string;
  preferred_time: string;
  status: string;
  created_at: number;
}

const CallScheduleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState<CallScheduleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/call_schedule/${id}`);
        if (response.ok) {
          const data = await response.json();
          setSchedule(data);
        }
      } catch (error) {
        console.error('Error fetching call schedule:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSchedule();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/call_schedule/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/dashboard/call-schedules');
      }
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
    setShowDeleteConfirm(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading schedule details...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!schedule) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Schedule not found.</p>
          <Link to="/dashboard/call-schedules" className="text-primary hover:text-secondary">
            ← Back to Call Schedules
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="mb-6">
          <Link to="/dashboard/call-schedules" className="text-primary hover:text-secondary">
            ← Back to Call Schedules
          </Link>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Call Schedule Details</h1>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Delete Schedule
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Name</h3>
              <p className="text-dark">{schedule.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
              <p className="text-dark">{schedule.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Preferred Date</h3>
              <p className="text-dark">{schedule.preferred_date}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Preferred Time</h3>
              <p className="text-dark">{schedule.preferred_time}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Discussion Topic</h3>
              <p className="text-dark">{schedule.status}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Requested Date</h3>
              <p className="text-dark">{new Date(schedule.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Delete Schedule</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to delete this call schedule? This action cannot be undone.</p>
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

export default CallScheduleDetailPage;
