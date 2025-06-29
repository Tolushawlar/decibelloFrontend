/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { apiCall } from '../../../utils/api';

const AddStaffPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    bio: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const staffData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        first_name: formData.first_name,
        last_name: formData.last_name,
        bio: formData.bio,
        account_type: 'staff'
      };

      const response = await apiCall('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(staffData),
      });

      if (response.ok) {
        setStatus('success');
        toast.success('Staff member added successfully!');
        setTimeout(() => {
          window.location.href = '/dashboard/users';
        }, 2000);
      } else {
        setStatus('error');
        toast.error('Failed to add staff member. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <DashboardLayout>
      <div>
        <div className="mb-6">
          <Link to="/dashboard/users" className="text-primary hover:text-secondary">
            ← Back to Users
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold text-dark mb-6">Add New Staff Member</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter full name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.first_name}
                  onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.last_name}
                  onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Password</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Bio</label>
              <textarea
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter bio (optional)"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Adding...' : 'Add Staff Member'}
              </button>
              
              <Link
                to="/dashboard/users"
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

export default AddStaffPage;
