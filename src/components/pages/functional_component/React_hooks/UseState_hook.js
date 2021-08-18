import React,{useState} from 'react';
import { NavLink } from "react-router-dom";

function UseState_hook() {
   
    const [count, setCount] = useState(0);

    // Declare multiple state variables!
    // const [age, setAge] = useState(42);
    // const [fruit, setFruit] = useState('banana');
    // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  
    return (

        <div>
            <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p>Introducing Hooks</p>
                      <ul>
                          <li>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</li>
                           <li>Since version 16.8, a new feature called hooks was added to ReactJS which exposed the various features of class-based components.</li>
                           <li>The two most used hooks are the</li>
                           <ul>
                               <li>useState() hook</li>
                               <li>useEffect() hook</li>
                           </ul>
                           <li><b>useState() hook</b>, which allows functional components to have a dedicated state of their own</li>
                           <li> The useState() is used to initialize only one state variable to initialize multiple state variables, multiple useState() declarations are required.</li>
                           <li>The first value returned is the initial value of the state variable, while the second value returned is a reference to the function that updates it. </li>
                      </ul>
                      <div className="card">
                          
                          Example
                          <h3>Use of useState() hook.: </h3>
                      <h1 className="text-center">You clicked {count} times</h1>
                      <div className="text-center">
                      <button  className="btn btn-primary" onClick={() => setCount(count + 1)}>Click here</button>
                        
                      </div>
                          </div>
                          <div className="backPage"><NavLink exact to="/Creation_of_functional_component">Back Topic Functional Component </NavLink></div> 
                              
                          <div className="nextPage"><NavLink exact to="/UseEffect_hook">Next Topic useEffect Hook </NavLink>
                                 
                                </div> 
                                 
                            
                            
                        
                </div>
           </div>
        </section>  
       
    </div>
    );

}
 export default UseState_hook;
  