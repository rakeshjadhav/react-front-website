import React from 'react';
import { useHistory } from "react-router-dom";
import "../../../User.css"

const  Registersucces =() => {
   
    const history = useHistory();

    // function handleClick() {
    //   history.push({
    //     pathname : '/User',
    //     state :{
    //        modelview : true,
    //     }
    //     } 
    //   )
    //   }

      
    return(
      <div className="regsdivPadding card">
          <h3>Your account has been activated successfully. You can login now !!.</h3>
          <button type="button" className="btn btn-primary regsdivPaddingbtn" >Click Here to Login </button>
             
      </div>
    );
}
export default Registersucces;