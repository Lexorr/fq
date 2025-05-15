import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext) || {};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    signOut(auth);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login) {
      try {
        await login(email, password);
        navigate('/dashboard');
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
      }
    } else {
      setError('Login function is not available.');
    }
  };

  return (
    <div className="min-h-screen pt-[4.5rem] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Sign in to <span className="text-yellow-500">Lexor Ventures</span>
          </h1>
          <p className="text-gray-500 mt-2">Welcome back! Please sign in.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/80"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4 text-yellow-500 rounded" />
              <span>Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-yellow-500 hover:underline">Forgot Password?</Link>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-md transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-500">
          Not registered yet?{' '}
          <Link to="/signup" className="text-yellow-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
