import React from 'react';
import '../../App.css';


class State_in_component extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : "Rakesh Ramesh Jadhav",
        }
       
    
    }
     
   
    render(){
        const DivPadding = {
            margin: "0",
            background: "yellow",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
    }
        return(
            <div>
                   
                   <h1  className="" style ={DivPadding}>
                       My Name is {this.state.name}
                   </h1>
                   <button  className="divPaddingbtn" onClick={() => this.setState({ name : 'Rahul Ramesh Jadhav'})}>Click Here</button>
            </div>
        )
    };
}

export default State_in_component;