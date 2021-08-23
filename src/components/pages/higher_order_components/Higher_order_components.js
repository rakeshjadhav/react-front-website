import React,{Component} from 'react'
import EnhancedComponent from './EnhancedComponent'
 

class Higher_order_components extends Component {
render() {
    // Call the props from originalComponent
    return <h1 style={{color:'#00ff00'}}>{this.props.name}</h1> 
  }
}
   
// Passed the originalcomponent 
export default EnhancedComponent(Higher_order_components);
  
