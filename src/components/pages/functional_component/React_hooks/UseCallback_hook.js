import React,{useState, useCallback} from "react";
import { NavLink } from "react-router-dom";

var funccount = new Set();

function UseCallback_hook() {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = useCallback(() => {
        console.log("incrementCounter" + count);
        setCount(count + 1)
        
      }, [count]);


    const decrementCounter = useCallback(() => {
        console.log("decrementCounter" + count);
        setCount(count - 1)
        
      }, [count]);


    const incrementNumber = useCallback(() => {
        console.log("incrementNumber" + number);
        setNumber(number + 1)
       
      }, [number])
         
      funccount.add(incrementCounter);
      funccount.add(decrementCounter);
      funccount.add(incrementNumber);
      alert(funccount.size);

    return (
      <>
      <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Introducing UseCallback() Hooks</p>
                      <ul>
                         
                           <ul>
                              
                               <li>useCallback() Hook </li>
                             
                           </ul>
                           
                           <li><b>useCallback hook </b>  is used when you have a component in which the child is rerendering again and again without need.</li>
                           <li> Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.</li>
                      </ul>
                      <div className="card">
                            
                          <h3>Example Use of useCallback() Hook.: </h3>
                          <div className="form-group">
                               <h3>Count: {count}</h3>  
                           </div>
                           <div>
                                <button onClick={incrementCounter}> Increase counter</button>
                                <button onClick={decrementCounter}> Decrease Counter</button>
                                <button onClick={incrementNumber}>increase number</button>
                           </div>
                            
                            {/* </div> */}
                          {/* </div> */}
                         
                      
                    
                          </div>
                          <div className="backPage">
                              
                              <NavLink exact to="/UseRef_hook">Next Topic useRef() Hook </NavLink>
                            </div>
                            
                            <div className="nextPage"><NavLink exact to="/UseContext_hook">Next Topic UseContext() Hook </NavLink>
                                 
                                 </div> 
                        
                </div>
           </div>
        </section> 
        
      </>
    );
  }
  export default UseCallback_hook;