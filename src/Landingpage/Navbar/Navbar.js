import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import img1 from '../../assets/img1.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top">
         <div className="navdiv">
          <div className="logo">
            <a><img src={img1}/></a>
            <h1>Prakruthi suraksha</h1>
          </div>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/sustainability'>Sustainability</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/team'>Team</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <button>Get started</button>
          </ul>
         </div>
      </nav>
    </>
  );
};

export default Navbar;
