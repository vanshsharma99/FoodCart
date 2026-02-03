import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export const UserRegister = () => {

const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();

const fullName = e.target.fullName.value;
const Email = e.target.email.value;
const password = e.target.password.value;

//console.log(fullName,Email,password);
const respose = await axios.post("http://localhost:3000/api/auth/user/register",{
    fullName,
    Email,
    password
},{
    withCredentials :true
})

localStorage.setItem("token", respose.data.token);
navigate('/')
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register to get started
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
            name ="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-5">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => navigate('/user/login')}>
            Login
          </span>
        </p>

      </div>

    </div>
  )
}
