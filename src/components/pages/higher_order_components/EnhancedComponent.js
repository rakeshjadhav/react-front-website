import React from 'react'
  
const EnhancedComponent = (OriginalComponent) => {
    class NewCompoenent extends React.Component {
  
        render() {
            // Pass the callable props to Original component
            return (
               
                <>
                 <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p className="texttransform">Introducing Higher-order components or HOC</p>
                      <ul>
                         
                           <ul>
                              
                               <li>Higher-order components or HOC</li>
                             
                           </ul>
                           
                           <li>Higher-order components or HOC is the advanced method of reusing the component functionality logic. </li>
                           <li>  It simply takes the original component and returns the enhanced component.</li>
                           <li>Syntax</li>
                           <li>
                           const EnhancedComponent = higherOrderComponent(OriginalComponent);
                           </li>
                      </ul>
                      <div className="card">
                            
                          <h3>Example Use of Higher-order components or HOC: </h3>
                          
                          <OriginalComponent name="Welcome to Synergy Technology Services Pvt. Ltd"  />
                         
                      
                    
                          </div>
                         
                        
                </div>
           </div>
        </section> 
                </>
            ) 
        }
    }
    // Returns the new component
    return NewCompoenent
}
  
export default EnhancedComponent;