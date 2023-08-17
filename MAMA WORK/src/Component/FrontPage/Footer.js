import "./FooterStyle.css";
import { CiFacebook } from 'react-icons/ci';
import { TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti';
import { RiInstagramLine } from 'react-icons/ri';
import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-start">
        <h1>Contact</h1>
         

        </div>
        <div className="footer-mid">
        <h1>Get Help</h1>
        
        </div>
        <div className="footer-end">
          <h1>Follow Us</h1>
        <ul className="social">
              <li><CiFacebook /></li>
              <li><TiSocialLinkedinCircular/></li>
              <li><RiInstagramLine/></li>
              <li><TiSocialTwitterCircular/></li>
            </ul>
        
        </div>
    </div>
  )
}

export default Footer