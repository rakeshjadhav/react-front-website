import React from "react";

class Props extends React.Component {
//    constructor(props){
//        super(props);
//    }

    render(){
        return(
            <div className="">
               <h1>Title :  {this.props.title}</h1>
               <h1>Description : {this.props.description}</h1>
            </div>
        )
    };
}

export default Props;