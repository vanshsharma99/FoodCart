import React from 'react'

export const Navbar = () => {
  return (
    <nav className="w-full bg-red-600  fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          MakeMyMeal
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
          <li className="bg-yellow-400 px-4 py-1 rounded-full text-black cursor-pointer">
            Signup
          </li>
          <li className="border border-white px-4 py-1 rounded-full cursor-pointer">
            Login
          </li>
        </ul>

      </div>
    </nav>
  )
}
