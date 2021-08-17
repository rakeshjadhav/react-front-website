import React  from "react";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  
    return (
<header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
    <div className="container d-flex align-items-center">

      <div className="logo mr-auto">
        <h1 className="text-light"><a href="">React Website</a></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink exact to="/product">Class Component</NavLink></li>
          <li><NavLink exact to="/">Services</NavLink></li>
          <li><NavLink exact to="/">Portfolio</NavLink></li>
          <li><NavLink exact to="/">Pricing</NavLink></li>
          <li><NavLink exact to="/">Team</NavLink></li>
          <li><NavLink exact to="/">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
    );
};

export default Navbar;