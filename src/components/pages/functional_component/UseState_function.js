import React, { useState } from 'react';
import "../../../App.css"

const  UseState_function =() => {
   
    const [change, setChange] = useState(true);

    return(
      <div className="divPadding">
          <button onClick = {() => setChange(!change)}>Click Here to change!</button>
             
             {change?<h1>Welcome to Synergy Technology Service Pvt Ltd</h1>:<h1>Kindly register yourself on Synergy Technology Service Pvt Ltd</h1>}
      </div>
    );
}
export default UseState_function;

