/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { apiCall } from '../../utils/api';

interface UserProfile {
  id: number;
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  display_name: string;
  bio: string;
  avatar_url: string;
  website: string;
  industry: string;
  interests: string[];
  account_type: string;
  created_at: number;
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfile>>({});
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const userId = user.id;
        
        if (!userId) {
          toast.error('User not found. Please login again.');
          return;
        }

        const response = await apiCall('/api/users');
        if (response.ok) {
          const users = await response.json();
          const currentUser = users.find((u: UserProfile) => u.id === userId);
          if (currentUser) {
            setProfile(currentUser);
            setFormData(currentUser);
          } else {
            toast.error('Profile not found.');
          }
        } else {
          toast.error('Failed to load profile.');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast.error('Error loading profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  console.log(profile);
  
  const handleSave = async () => {
    try {
      const updateData = {
        name: formData.name,
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        bio: formData.bio
      };

      const response = await apiCall(`/api/users/${profile?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setProfile(updatedData);
        setEditing(false);
        toast.success('Profile updated successfully!');
      } else {
        toast.error('Failed to update profile.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };

  const handleCancel = () => {
    setFormData(profile || {});
    setEditing(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading profile...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!profile) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Profile not found.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">My Profile</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary text-3xl font-bold mb-4 md:mb-0 md:mr-6">
                {profile.name.charAt(0)}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold text-dark">{profile.name}</h2>
                <p className="text-dark/70">{profile.email}</p>
                <div className="mt-2">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${profile.account_type === 'admin'
                      ? 'bg-purple-100 text-purple-800'
                      : profile.account_type === 'staff'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                    {profile.account_type || 'User'}
                  </span>
                </div>
              </div>
              <div className="ml-auto mt-4 md:mt-0">
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-6 text-sm font-medium ${activeTab === 'profile'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`py-4 px-6 text-sm font-medium ${activeTab === 'security'
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                Security
              </button>
            </nav>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {activeTab === 'profile' && (
              <>
                {editing ? (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name || ''}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email || ''}
                          disabled
                          // className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name || ''}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          value={formData.last_name || ''}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio || ''}
                          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile.name}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile.first_name || 'Not provided'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile.last_name || 'Not provided'}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                      <p className="mt-1 text-sm text-gray-900">{profile.bio || 'No bio provided'}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                      <p className="mt-1 text-sm text-gray-900">{new Date(profile.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'security' && (
              <div className="max-w-lg">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const new_password = formData.get('new_password');
                  const confirm_password = formData.get('confirm_password');

                  if (new_password !== confirm_password) {
                    toast.error('New passwords do not match');
                    return;
                  }

                  if (!new_password || new_password.toString().length < 6) {
                    toast.error('Password must be at least 6 characters long');
                    return;
                  }

                  const passwordData = {
                    password: new_password
                  };

                  try {
                    const response = await apiCall(`/api/users/${profile?.id}`, {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(passwordData)
                    });

                    if (response.ok) {
                      toast.success('Password updated successfully!');
                      (e.target as HTMLFormElement).reset();
                    } else {
                      toast.error('Failed to update password');
                    }
                  } catch (error) {
                    toast.error('Network error');
                  }
                }}>
                  {/* <div className="mb-4">
                    <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="current_password"
                      id="current-password"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div> */}
                  <div className="mb-4">
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="new_password"
                      id="new-password"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm-password"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            )}


          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
