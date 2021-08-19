import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import useCustom_useEffect from "./useCustom_useEffect";

const Counter_custom_hook = ()=> {

    const [count, SetCount] = useState(0);
    //custom hook
    useCustom_useEffect(count);

    return(

        <>
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Building Your Own Hooks</p>
                      <ul>
                         
                           
                           <li>Building your own Hooks lets you extract component logic into reusable functions</li>
                           <li>
Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.</li>
                          
                      </ul>
                      <div className="card">
                            
                          <h3>Example Use of Custom useEffect Hook.: </h3>
                          <div className="form-group text-center">
                             
                          <h1>Likes  Counts  :  <span className="text-primary">{count}</span></h1>
                           <button className="btn btn-info" onClick= {() => SetCount(count + 1)}>Clcik</button>
                           </div>
                            
                        
                    
                          </div>
                          <div className="backPage">
                              
                              <NavLink exact to="/UseContext_hook">Next Topic UseContext Hook </NavLink>
                            </div>
                            
                            
                        
                </div>
           </div>
        </section> 
             
        </>
    )


}
export default Counter_custom_hook;