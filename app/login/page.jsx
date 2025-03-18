'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';  // Import cookie.js for storing cookies

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://task-manage-api.vercel.app/api/login', {
                username,
                password,
            });

            // Store JWT token and role in cookies
            cookie.set('authToken', response.data.token, { expires: 1 });
            cookie.set('role', response.data.role, { expires: 1 });

            // Redirect based on the role
            if (response.data.role === 'admin') {
                router.push('/dashboard/admin');
            } else {
                router.push('/dashboard/user');
            }
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-md">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username:</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
