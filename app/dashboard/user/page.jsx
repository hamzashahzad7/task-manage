'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'cookiejs';
import { useRouter } from 'next/navigation';

const UserDashboard = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [selectedTask, setSelectedTask] = useState(null); // Track which task is being edited

  // Fetch the user's tasks
  const fetchTasks = async () => {
    const token = cookie.get('authToken');
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (err) {
      setError('Error fetching tasks');
    }
  };

  // Fetch user details like username
  const fetchUserData = async () => {
    const token = cookie.get('authToken');
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:5000/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsername(response.data.username);
    } catch (err) {
      setError('Error fetching user data');
    }
  };

  // Handle creating a new task
  const handleCreateTask = async (e) => {
    e.preventDefault();

    const token = cookie.get('authToken');
    if (!token) {
      setError('You need to log in');
      return;
    }

    // If we're editing a task, update it
    if (selectedTask) {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/task/${selectedTask.id}`,
          { title, description, dueDate, priority: 'Medium', status: 'Pending', project: 'User Tasks' },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Update the task in the list
        const updatedTasks = tasks.map((task) =>
          task.id === selectedTask.id ? response.data : task
        );
        setTasks(updatedTasks);
        resetForm(); // Reset form after editing
      } catch (err) {
        setError('Error updating task');
      }
    } else {
      // If no task is being edited, create a new one
      try {
        const response = await axios.post(
          'http://localhost:5000/api/task',
          { title, description, dueDate, priority: 'Medium', status: 'Pending', project: 'User Tasks' },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTasks([...tasks, response.data]);
        resetForm(); // Reset form after creation
      } catch (err) {
        setError('Error creating task');
      }
    }
  };

  // Handle logging out
  const handleLogout = () => {
    cookie.remove('authToken');
    cookie.remove('role');
    router.push('/login');
  };

  // Handle selecting a task for editing
  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  };

  // Handle deleting a task
  const handleDeleteTask = async (taskId) => {
    const token = cookie.get('authToken');
    if (!token) {
      setError('You need to log in');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError('Error deleting task');
    }
  };

  // Reset the form for creating a new task or after editing
  const resetForm = () => {
    setSelectedTask(null); // Clear the selected task (no task being edited)
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  useEffect(() => {
    fetchTasks();
    fetchUserData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col p-6 hidden md:block">
        <h2 className="text-2xl font-semibold mb-6">User Dashboard</h2>
        <div className="flex-grow">
          <ul>
            <li className="mb-4">
              <a href="/dashboard/user" className="text-lg hover:text-gray-300">Dashboard</a>
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-600 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-gray-800">Welcome, {username}</div>
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Logout
          </button>
        </div>

        {/* Error Message */}
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

        {/* Task Creation / Editing Form */}
        <div className="mb-6">
          <h2 className="text-xl font-medium mb-2">{selectedTask ? 'Edit Task' : 'Create Task'}</h2>
          <form onSubmit={handleCreateTask}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="p-2 border rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {selectedTask ? 'Update Task' : 'Create Task'}
            </button>
          </form>
        </div>

        {/* Task List */}
        <h2 className="text-xl font-medium mb-2">Your Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="border p-4 mb-2 rounded">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleSelectTask(task)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
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

export default UserDashboard;
