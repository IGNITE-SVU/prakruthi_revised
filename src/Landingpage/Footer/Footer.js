import React from "react";
import {NavLink} from 'react-router-dom'
import email from '../../assets/email.png'
import call from '../../assets/call.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialIcons">
        <h1>Meet Us Here</h1>
        <NavLink className='icons'><img src={email} className="icon"/></NavLink>
        <NavLink className='icons'><img src={call} className="icon"/></NavLink>
        <NavLink className='icons'><img src={instagram} className="icon"/></NavLink>
        <NavLink className='icons'><img src={twitter} className="icon"/></NavLink>
      </div>
    </div>
  );
};

export default Footer;
