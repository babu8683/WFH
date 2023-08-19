import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Logo from "../assest/nav-logo.jpeg";
import axios from "axios";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  console.log(dropdownVisible);

  const logout =() => {
    axios.get("http://localhost:3004/logout")
    .then(function(res){
      console.log(res.data.statusCode);
      if (res.data.statusCode == 200) {
        alert("check");
        return (window.location.href = "http://localhost:3000/");
      }
    })
    .then(function(err) {
      console.log(err)
    })
    ;
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        
            <h2 className="logo-title">Logo </h2>
          <div className="logo" onClick={toggleDropdown}>
            <p className="welcome-user">Welcome User</p>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Dropdown */}
        {dropdownVisible && (
          <ul className="dropdown-menu">
            <li>Edit Profile</li>
            <li onClick={logout}>Logout</li>
            <li >Ma  le</li>
          </ul>
        )}
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
