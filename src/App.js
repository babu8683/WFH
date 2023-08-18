import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import UpdateImageVideo from "./pages/UpdateImageVideo";
import LearnAbout from "./pages/LearnAbout";
import Certificate from "./pages/Certificate";
import WasteCategory from "./pages/WasteCategory";
import RegisteredUser from "./pages/RegisteredUser";
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/updateimagevideo" element={<UpdateImageVideo />} />
          <Route path="/howtouse" element={<LearnAbout />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/wastecategory" element={<WasteCategory />} />
          <Route path="/user" element={<RegisteredUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
