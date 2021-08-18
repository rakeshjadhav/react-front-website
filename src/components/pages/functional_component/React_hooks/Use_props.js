import React,{useState,useEffect} from 'react';
import { NavLink } from "react-router-dom";
import "../../../../App.css";

function Use_props(props) {
   
  
    useEffect(() => {
        console.log("Mounting...");
        alert("count mounting " + props.count);
      },[props.count]);

    return (

        <div>
           
                      <h1 className="text-center">You clicked Count :  {props.count}  times</h1>
                      <h1 className="text-center">You clicked  Data  : {props.data}  times</h1>
                               
    </div>
    );

}
 export default Use_props;
  