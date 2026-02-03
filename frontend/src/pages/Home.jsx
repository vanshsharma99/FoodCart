// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleProtectedClick = (path) => {
//     const isLoggedIn = localStorage.getItem("token");
//     if (!isLoggedIn) {
//       alert("Please register and login first");
//       navigate("/user/login");
//     } else {
//       navigate(path);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-orange-100">

//       {/* ================= NAVBAR ================= */}
//       <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
//             Logo
//           </div>
//           <h1 className="text-xl font-bold">Foodie</h1>
//         </div>

//         <ul className="hidden md:flex gap-6 font-medium">
//           <li className="cursor-pointer hover:text-orange-500">Home</li>
//           <li className="cursor-pointer hover:text-orange-500">About</li>
//           <li className="cursor-pointer hover:text-orange-500">Contact</li>
//         </ul>

//         <div className="flex gap-3">
//           <button
//             onClick={() => navigate("/user/register")}
//             className="px-4 py-1 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
//           >
//             Sign Up
//           </button>
//           <button
//             onClick={() => navigate("/user/login")}
//             className="px-4 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
//           >
//             Login
//           </button>
//         </div>
//       </nav>

//       {/* ================= HERO SECTION ================= */}
//       <section className="flex-1 flex items-center justify-center px-6">
//         <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

//           {/* Left Banner */}
//           <div className="bg-white rounded-2xl shadow-lg p-6">
//             <img
//               src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
//               alt="Food Banner"
//               className="w-full h-72 object-cover rounded-xl"
//             />
//           </div>

//           {/* Right Description */}
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <h2 className="text-3xl font-bold mb-4">
//               Delicious Food Delivered To You
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Explore a wide variety of meals, watch food preparation videos,
//               and order your favorite dishes from top restaurants near you.
//             </p>

//             <div className="flex flex-col gap-4">
//               <button
//                 onClick={() => handleProtectedClick("/view-food")}
//                 className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
//               >
//                 View Food Collection
//               </button>

//               <button
//                 onClick={() => handleProtectedClick("/videos")}
//                 className="w-full py-3 border border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white"
//               >
//                 View Videos
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="bg-gray-900 text-white py-6 text-center">
//         <p>© 2026 Foodie. All rights reserved.</p>
//       </footer>

//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Check login status
  const token = localStorage.getItem("token");
  console.log(token);
  
  const isLoggedIn = !!token;

  // Protected Navigation
  const handleProtectedClick = (path) => {
    if (!token || token === "undefined") {
      alert("Please register and login first");
      navigate("/user/login");
    } else {
      navigate(path);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/user/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 to-orange-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
            Logo
          </div>
          <h1 className="text-xl font-bold">Foodie</h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li onClick={() => navigate("/")} className="cursor-pointer hover:text-orange-500">Home</li>
          <li onClick={() => navigate("/about")} className="cursor-pointer hover:text-orange-500">About</li>
          <li onClick={() => navigate("/contact")} className="cursor-pointer hover:text-orange-500">Contact</li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/user/register")}
                className="px-4 py-1 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white"
              >
                Sign Up
              </button>

              <button
                onClick={() => navigate("/user/login")}
                className="px-4 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Login
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Left Banner */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Food Banner"
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Delicious Food Delivered To You
            </h2>

            <p className="text-gray-600 mb-6">
              Explore a wide variety of meals, watch food preparation videos,
              and order your favorite dishes from top restaurants near you.
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleProtectedClick("/view-food")}
                className="w-full py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
              >
                View Food Collection
              </button>

              <button
                onClick={() => handleProtectedClick("/videos")}
                className="w-full py-3 border border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white"
              >
                View Videos
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© 2026 Foodie. All rights reserved.</p>
      </footer>

    </div>
  );
}
