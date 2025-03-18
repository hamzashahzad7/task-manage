'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminDashboard = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState('');

  // Fetch all users
  const fetchUsers = async () => {
    const token = cookie.get('authToken');
    if (!token) return;

    try {
      const response = await axios.get('https://task-manage-api.vercel.app/api/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (err) {
      setError('Error fetching users');
    }
  };

  // Fetch admin details (optional)
  const fetchAdminData = async () => {
    const token = cookie.get('authToken');
    if (!token) return;

    try {
      const response = await axios.get('https://task-manage-api.vercel.app/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsername(response.data.username);
    } catch (err) {
      setError('Error fetching user data');
    }
  };

  // Handle creating a new user
  const handleCreateUser = async (e) => {
    e.preventDefault();

    const token = cookie.get('authToken');
    if (!token) {
      setError('You need to log in');
      return;
    }

    try {
      const response = await axios.post(
        'https://task-manage-api.vercel.app/api/admin/user',
        { username, password: 'defaultpassword', role }, // Assuming a default password
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers([...users, response.data]);
      setUsername('');
      setRole('user'); // Reset role to default
    } catch (err) {
      setError('Error creating user');
    }
  };

  // Handle updating user data (including role)
  const handleUpdateUser = async (e) => {
    e.preventDefault();

    if (!selectedUser) {
      setError('No user selected');
      return;
    }

    const token = cookie.get('authToken');
    if (!token) {
      setError('You need to log in');
      return;
    }

    try {
      const response = await axios.put(
        `https://task-manage-api.vercel.app/api/admin/user/${selectedUser.id}`,
        { username, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? response.data : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
      setUsername('');
      setRole('user'); // Reset role to default
    } catch (err) {
      setError('Error updating user');
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (userId) => {
    const token = cookie.get('authToken');
    if (!token) {
      setError('You need to log in');
      return;
    }

    try {
      await axios.delete(`https://task-manage-api.vercel.app/api/admin/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError('Error deleting user');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchAdminData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col p-6 hidden md:block">
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
        <div className="flex-grow">
          <ul>
            <li className="mb-4">
              <Link href="/dashboard/admin" className="text-lg hover:text-gray-300">Dashboard</Link>
            </li>
           
          </ul>
        </div>
        <button
          onClick={() => {
            cookie.remove('authToken');
            cookie.remove('role');
            router.push('/login');
          }}
          className="mt-6 w-full py-2 bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-gray-800">Welcome, Admin</div>
          <button
            onClick={() => {
              cookie.remove('authToken');
              cookie.remove('role');
              router.push('/login');
            }}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Logout
          </button>
        </div>

        {/* Error Message */}
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

        {/* User Management Form */}
        <h2 className="text-xl font-medium mb-2">Create/Update User</h2>
        <form onSubmit={selectedUser ? handleUpdateUser : handleCreateUser}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 border rounded w-full"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {selectedUser ? 'Update User' : 'Create User'}
          </button>
        </form>

        {/* User List */}
        <h2 className="text-xl font-medium mb-2">All Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border p-4 mb-2 rounded">
              <h3 className="font-semibold">{user.username}</h3>
              <p>Role: {user.role}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setUsername(user.username);
                    setRole(user.role);
                  }}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
