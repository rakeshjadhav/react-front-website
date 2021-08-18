import React,{useState} from "react";
// import reactDom from "react-dom";
import "../../../App.css";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
// import UseState_hook from "./React_hooks/UseState_hook";


const Creation_of_functional_component =() =>{
    const[count , setCount]=useState(0);
    
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
    
    return(
        <div>
            <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p>Functional Component</p>
                      <ul>
                          <li>Functional components are some of the more common components that will come across while working in React.</li>
                           <li>These are simply JavaScript functions.</li>
                           <li>We can create a functional component to React by writing a JavaScript function.These functions may or may not receive data as parameters.</li>
                           <li>In the functional Components, the return value is the JSX code to render to the DOM tree.</li>
                           <li>There are some benefits you get by using functional components in React. Functional components are easier to read and its testable(because these are plain JavaScript functions).
                           </li>
                      </ul>
                      <div className="card">
                          
                          Example
                          <h3>Counter App using Functional Component : </h3>
                      <h1 className="text-center">{count}</h1>
                      <div className="text-center">
                      <button  className="btn btn-primary" onClick={increase}>Add</button>
                        <button className="btn btn-danger" onClick={decrease}>Min</button>
                      </div>
                          </div>
                          <div className="nextPage">
                              
                              <NavLink exact to="/UseState_hook">Next Topic Introducing Hooks </NavLink>
                            </div>
                 
                        
                </div>
           </div>
        </section>  
       
    </div>
    )
}

    const createFunction =()=>{
       
         return(
             <div>    
                 <Creation_of_functional_component />
             </div>
         )
    }


export default createFunction;
