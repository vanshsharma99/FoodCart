import { BrowserRouter  as Router ,  Route , Routes } from "react-router-dom";
import React from 'react'
import { UserRegister } from "../pages/UserRegister.jsx";
import { UserLogin } from "../pages/UserLogin.jsx";
import { FoodPartnerRegister } from "../pages/FoodPartnerRegister.jsx";
import { FoodPartnerLogin } from "../pages/FoodPartnerLogin.jsx";
import ViewFood from "../pages/ViewFood.jsx";
import AddFood from "../pages/AddFood.jsx";
import Home from "../pages/Home.jsx";
import VideoPage from "../pages/VideoPage.jsx";


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/register" element={<UserRegister/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path ="/food-partner/register" element={<FoodPartnerRegister/>} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin/>} />
        <Route path="/view-food" element={<ViewFood/>} />
        <Route path="/Add-food" element={<AddFood/>} />
        <Route path="/videos" element={<VideoPage/>} />
      </Routes>
    </Router>
  )
}
