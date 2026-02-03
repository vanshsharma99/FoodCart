import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const UserLogin = () => {
  const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const Email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login",{
        Email,
        password
    },{
        withCredentials :true
    })
    navigate('/view-food')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to your account
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
            name ="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
            name = "password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate('/user/register')}>
            Register
          </span>
        </p>

      </div>

    </div>
  )
}
