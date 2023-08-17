import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[color, setColor] = useState(false);
  const changeColor = () =>{
    if (window.scrollY>=100){
        setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg"  :"header"}>
      <div className="left-header">
        <div className="user">
          <p>ME</p>
        </div>
      </div>
      <div className="right-header">
        <div className="links-left">
          <ul className={click ? "nev-link active" : "nev-link"}>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Vision Mission</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="link-right">
        <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
          <Link to="/login"><button className="btn1">Log In</button></Link>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
