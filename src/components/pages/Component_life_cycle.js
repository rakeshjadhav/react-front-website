import React, { Component } from 'react'

export default class Component_life_cycle extends Component {

    constructor(props){
        console.log("inside the constructor");
        super(props);
    }

    // Api use 
    // componentDidMount(){
    //     console.log("inside the cycle method");
    // }

    componentWillUnmount() {
        console.log("Component will unmount!");
    }
    

    render() {
        console.log("inside the render");
        return (
            <div>
                <h1>here class life cycle methods</h1>
            </div>
        )
    }
}
