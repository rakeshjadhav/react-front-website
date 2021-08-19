import React,{useState, useCallback} from "react";
import { NavLink } from "react-router-dom";
import CreateContext from '../React_hooks/CreateContext';
import Contextbutton from "./Contextbutton";

var funccount = new Set();

function UseContext_hook() {

  const [authstatus, setauthstatus] = useState(false);
  
  const login = () => {
    setauthstatus(true);
  };

    return (
      <>
      <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Introducing UseContext() Hooks</p>
                      <ul>
                         
                           <ul>
                              
                               <li>UseContext() Hook </li>
                             
                           </ul>
                           
                           <li><b>UseContext hook </b>  provides a way to pass data or state through the component tree without having to pass props down manually through each nested component.</li>
                           <li>const authContext = useContext(initialValue);</li>
                           <li>The useContext accepts the value provided by React.createContext and then re-render the component whenever its value changes but you can still optimize its performance by using memorization.</li>
                      </ul>
                      <div className="card">
                            
                          <h3>Example Use of UseContext() Hook.: </h3>
                          <div className="form-group">
                             
                          <CreateContext.Provider value={{ status: authstatus, login: login }}>
                            <Contextbutton />
                           </CreateContext.Provider>   
                           </div>
                            
                        
                    
                          </div>
                          <div className="backPage">
                              
                              <NavLink exact to="/UseCallback_hook">Next Topic UseCallback Hook </NavLink>
                            </div>
                            
                            <div className="nextPage"><NavLink exact to="/Counter_custom_hook">Next Topic Create Custom Hook </NavLink>
                                 
                                 </div> 
                        
                </div>
           </div>
        </section> 
        
      </>
    );
  }
  export default UseContext_hook;