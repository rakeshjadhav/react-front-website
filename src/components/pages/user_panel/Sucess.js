import React from 'react';
import { useHistory } from "react-router-dom";
import "../../../User.css"

const  Sucess =() => {
   
    const history = useHistory();

    function handleClick() {
        history.push("/User");
      }

      
    return(
      <div className="regsdivPadding">
          <h3>your account has been activated successfully. you can now login.</h3>
          <button type="button" className="btn btn-primary regsdivPaddingbtn" onClick={handleClick}>Click Here to Login </button>
             
      </div>
    );
}
export default Sucess;