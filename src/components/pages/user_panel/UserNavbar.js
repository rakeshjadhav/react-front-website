import React  from "react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  
    return (
<header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">

      <div className="logo mr-auto">
        <h1 className="text-light">
            {/* <img src="" alt="" /> */}
            
            <NavLink exact to="/"> User Login Panel</NavLink></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          {/* <li><NavLink exact to="/" >Home</NavLink></li> */}
        </ul>
      </nav>
    </div>
  </header>
    );
};

export default UserNavbar;