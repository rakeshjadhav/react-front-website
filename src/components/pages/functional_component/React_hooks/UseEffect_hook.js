import React,{useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";
import "../../../../App.css";
import Use_props from './Use_props';

function UseEffect_hook() {
   
    const [count, setCount] = useState(10);
    const [data, setData] = useState(100);
  
    // useEffect(() => {
    //     console.log("Mounting...");
    //     alert("count mounting " + count);
    //   },[count]);

    return (

        <div>
            <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Introducing useEffect Hooks</p>
                      <ul>
                         
                           <ul>
                              
                               <li>useEffect() hook</li>
                           </ul>
                           
                           <li>  If lifecycle functions need to be used with functional components, a special React hook called useEffect() needs to be used.</li>
                           <li> It is worth noting that useEffect() isn’t an exact duplicate of the lifecycle functions – it works and behaves in a slightly different manner. </li>
                      </ul>
                      <div className="card">
                          
                          Example
                          <h3>Use of useEffect() hook.: </h3>
                      <Use_props count={count} data={data} />
                      <div className="text-center">
                      <button  className="btn btn-primary" onClick={() => setCount(count + 1)}>Update Count</button>
                      <button  className="btn btn-primary" onClick={() => setData(data + 1)}>Update Data</button>
                        
                      </div>
                          </div>
                          <div className="backPage">
                              
                              <NavLink exact to="/UseState_hook">Next Topic UseState() Hook </NavLink>
                            </div>
                            <div className="nextPage">
                                <NavLink exact to="/UseRef_hook">Next Topic UseRef Hook </NavLink>
                             </div> 
                 
                        
                </div>
           </div>
        </section>  
       
    </div>
    );

}
 export default UseEffect_hook;
  