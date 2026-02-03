import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const FoodPartnerLogin = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const password = e.target.password.value;

        const response = await axios.post("http://localhost:3000/api/auth/food-partner/login",{
            email: Email,
            password
        },{
            withCredentials :true
        })
        navigate('/Add-food')
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Food Partner Login
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to manage your restaurant
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
            name ="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span className="text-green-600 cursor-pointer hover:underline" onClick={() => navigate('/food-partner/register')}>
            Register as Food Partner
          </span>
        </p>

      </div>

    </div>
  )
}
