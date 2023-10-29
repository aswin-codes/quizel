import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [regNo, setRegNo] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-800 p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Login</h2>
        <form className="mt-6 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="registration"
                name="registration"
                type="text"
                autoComplete="registration"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-indigo-300 placeholder-indigo-500 text-indigo-700 rounded-t-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:z-10 sm:text-sm"
                placeholder="Registration Number"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-indigo-300 placeholder-indigo-500 text-indigo-700 rounded-b-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <h1  onClick={() => navigate('/signup')} className='text-center pt-5 text-indigo-800 cursor-pointer'>Don't have an account ? <span className='font-bold'>Sign Up</span></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
