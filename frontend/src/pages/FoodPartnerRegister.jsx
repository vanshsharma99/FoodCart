import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../component/Navbar';

export const FoodPartnerRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const restaurantName = e.target.restaurantName.value;
        const ownerName = e.target.ownerName.value;
        const phoneNumber = e.target.phoneNumber.value;
        const address = e.target.address.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await axios.post("http://localhost:3000/api/auth/food-partner/register",{
            RestaurantName: restaurantName,
            OwnerName: ownerName,
            PhoneNumber: phoneNumber,
            Address: address,
            email,
            password
        },{
            withCredentials :true
        })
        navigate('/food-partner/login')
    }

  return (
   <>
   
   <div className="min-h-screen flex items-center justify-center px-4 mt-32">

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Food Partner Registration
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register your restaurant with us
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit} >

          {/* Restaurant Name */}
          <div>
            <label className="block text-gray-600 mb-1">Restaurant Name</label>
            <input
            name ="restaurantName"
              type="text"
              placeholder="Enter restaurant name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-gray-600 mb-1">Owner Name</label>
            <input
            name ="ownerName"
              type="text"
              placeholder="Enter owner name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-600 mb-1">Phone Number</label>
            <input
            name ="phoneNumber"
              type="text"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-600 mb-1">Address</label>
            <textarea
            name ="address"
              rows="3"
              placeholder="Enter restaurant address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
            name ="email"
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
            name ="password"
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register as Food Partner
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-5">
          Already registered?{" "}
          <span className="text-green-600 cursor-pointer hover:underline" onClick={() => navigate('/food-partner/login')}>
            Login
          </span>
        </p>

      </div>

    </div>
    </>
  )
}
