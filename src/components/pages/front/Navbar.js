import React  from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
    return (
<header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
    <div className="container d-flex align-items-center">

      <div className="logo mr-auto">
        <h1 className="text-light"><NavLink exact to="/">React Website</NavLink></h1>
      </div>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink exact to="/product">Class Component</NavLink></li>
          <li><NavLink exact to="/multiple_comp_in_single_comp">Multi comp in sing comp</NavLink></li>
          <li><NavLink exact to="/props">Props</NavLink></li>
          <li><NavLink exact to="/state_in_component">State in class Component</NavLink></li>
          <li><NavLink exact to="/component_life_cycle">Component life cycle methods</NavLink></li>
          <li><NavLink exact to="/Blog">Blogs</NavLink></li>
          <li><NavLink exact to="/Creation_of_functional_component">Functional Component </NavLink></li>
          <li><NavLink exact to="/Creation_of_pure_components">Pure Component </NavLink></li>
          <li><NavLink exact to="/Higher_order_components">Higher order components</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
    );
};

export default Navbar;