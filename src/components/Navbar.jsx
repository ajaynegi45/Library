import React, { useState, useEffect,useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Navlink from './Navlink.jsx';

const Navbar = () => {

  const [isNavHidden, setIsNavHidden] = useState(false);
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };

  const navbarStyle = {
    transform: isNavHidden ? 'translateY(-105%)' : 'translateY(0%)',
  };


  return (
    <>
    <nav className="navbar" style={navbarStyle} >
    
      {/* Title */}
      <div className="logo">
        <img width="80" height="80" src="https://img.icons8.com/plasticine/100/literature.png" alt="literature"/>
        <NavLink to={`/`}>Library</NavLink>
      </div>

        {/* Nav Menu */}
        <div className={click ? "menu active" : "menu"}>

          {/* Links */}
          <div className={click ? "menu-links active" : "menu-links"}>
            <Navlink/>
          </div>

          {/* Login Button */}
          <NavLink to={`/login`} ><button className="log-in">Log In</button></NavLink>
        </div>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

    </nav>
    </>
  )
}

export default Navbar