import React,{useRef} from "react";
import { NavLink } from "react-router-dom";


function UseRef_hook() {

    const inputEl = useRef(null);

    const onButtonClick = () => {
        var el = inputEl.current;
        if(inputEl.current.value){
            el.style.borderColor = '';
            alert(inputEl.current.value); 
            inputEl.current.focus();
        }else{
            el.style.borderColor = '#ef051c';
            alert("Please Enter Username");  
           
        }
      
    };
    return (
      <>
      <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Introducing UseRef Hooks</p>
                      <ul>
                         
                           <ul>
                              
                               <li>UseRef() Hook </li>
                               <li>const refContainer = useRef(initialValue);</li>
                           </ul>
                           
                           <li><b>useRef</b> returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). </li>
                           <li> The returned object will persist for the full lifetime of the component. </li>
                      </ul>
                      <div className="card">
                          
                          
                          <h3>Example Use of useRef() hook.: </h3>
                          <div className="form-group">
                          <label className="label">Enter Username</label>
                          <input className="form-control col-md-6" ref={inputEl} type="text" />
                          </div>
                         
                      
                      <div className="text-center">
                      <button  className="btn btn-primary" onClick={onButtonClick}>Submit</button>
                     
                        
                      </div>
                          </div>
                          <div className="backPage">
                              
                              <NavLink exact to="/UseState_hook">Next Topic UseState Hook </NavLink>
                            </div>
                            
                            <div className="nextPage"><NavLink exact to="/UseCallback_hook">Next Topic UseCallback() Hook </NavLink>
                                 
                                 </div> 
                        
                </div>
           </div>
        </section> 
        
      </>
    );
  }
  export default UseRef_hook;