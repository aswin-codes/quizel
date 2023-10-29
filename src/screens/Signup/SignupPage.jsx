import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [isStudent, setIsStudent] = useState(true);

  const [regNo, setRegNo] = useState('');
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setIsStudent(e.target.value === 'student');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-600 to-indigo-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white max-w-md w-full p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          {isStudent ? 'Student Sign Up' : 'Faculty Sign Up'}
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                id="registration"
                name="registration"
                type="text"
                autoComplete="registration"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-indigo-300 placeholder-indigo-500 text-indigo-700 rounded-t-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:z-10 sm:text-sm"
                placeholder="Registration Number (or) Employee ID"
              />
            </div>
            <div>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-indigo-300 placeholder-indigo-500 text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-indigo-300 placeholder-indigo-500 text-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="flex items-center space-x-2">
            <input

              type="radio"
              id="student"
              name="userType"
              value="student"
              checked={isStudent}
              onChange={handleUserTypeChange}
              className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-200 border-indigo-300"
            />
            <label htmlFor="student" className="font-medium text-indigo-700">
              Student
            </label>
            <input
              type="radio"
              id="faculty"
              name="userType"
              value="faculty"
              checked={!isStudent}
              onChange={handleUserTypeChange}
              className="h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-200 border-indigo-300"
            />
            <label htmlFor="faculty" className="font-medium text-indigo-700">
              Faculty
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
            <h1  onClick={() => navigate('/login')} className='text-center pt-5 text-indigo-800 cursor-pointer'>Already have an account ? <span className='font-bold'>Login</span></h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
