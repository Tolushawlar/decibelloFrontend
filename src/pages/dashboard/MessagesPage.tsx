import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import { apiCall } from '../../utils/api';

interface Message {
  id: number;
  created_at: string;
  sender: {
    name: string;
    email: string;
  };
  recipient: {
    name: string;
    email: string;
  };
  content: string;
  is_read: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  account_type: string;
}

const MessagesPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        setCurrentUser(user);

        const [messagesRes, usersRes] = await Promise.all([
          apiCall('/api/messages'),
          apiCall('/api/users')
        ]);

        if (messagesRes.ok) {
          const messagesData = await messagesRes.json();
          const userMessages = messagesData.filter((msg: Message) => 
            msg.sender.email === user.email || msg.recipient.email === user.email
          );
          setMessages(userMessages);
        }

        if (usersRes.ok) {
          const usersData = await usersRes.json();
          const availableUsers = usersData.filter((u: User) => 
            u.id !== user.id && (u.account_type === 'staff' || u.account_type === 'admin')
          );
          setUsers(availableUsers);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error loading messages');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !selectedUser || !currentUser) return;
    
    try {
      const messageData = {
        sender: currentUser.id,
        recipient: selectedUser.id,
        content: newMessage,
        is_read: false
      };

      const response = await apiCall('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setNewMessage('');
        window.location.reload();
      } else {
        toast.error('Failed to send message');
      }
    } catch (error) {
      toast.error('Error sending message');
    }
  };

  const filteredMessages = selectedUser && currentUser
    ? messages.filter(
        message => 
          (message.sender.email === selectedUser.email && message.recipient.email === currentUser.email) || 
          (message.recipient.email === selectedUser.email && message.sender.email === currentUser.email)
      )
    : [];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-8">
          <p className="text-dark/70">Loading messages...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark">Messages</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row h-[400px] md:h-[600px]">
            {/* Contacts Sidebar */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 max-h-48 md:max-h-none">
              <div className="p-4 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="overflow-y-auto h-[calc(600px-57px)]">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                      selectedUser?.id === user.id ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => setSelectedUser(user)}
                  >
                    <div className="relative">
                      <img
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      {user.account_type === 'admin' && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white"></span>
                      )}
                      {user.account_type === 'staff' && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-900">{user.name}</h3>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{user.account_type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="w-full md:w-2/3 flex flex-col flex-1">
              {selectedUser ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${selectedUser.name}&background=random`}
                      alt={selectedUser.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900">{selectedUser.name}</h3>
                      <p className="text-xs text-gray-500">
                        {selectedUser.account_type.charAt(0).toUpperCase() + selectedUser.account_type.slice(1)}
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 overflow-y-auto">
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${
                          message.sender.email === currentUser?.email ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.sender.email !== currentUser?.email && (
                          <img
                            src={`https://ui-avatars.com/api/?name=${message.sender.name}&background=random`}
                            alt={message.sender.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                        )}
                        <div
                          className={`max-w-[70%] rounded-lg px-4 py-2 ${
                            message.sender.email === currentUser?.email
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-gray-500">Select a user to start messaging</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;
