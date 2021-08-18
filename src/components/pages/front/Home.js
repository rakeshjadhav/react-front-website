
import React  from "react";
import {Component } from 'react';

import { Link,NavLink } from "react-router-dom";
import Main from "./Main";
import Slider from "./Slider";
class Home extends React.Component {

  render(){
      return (
           <>
           
           <Slider />

           
            <Main />
           </>
        );
    }
}
export default Home;