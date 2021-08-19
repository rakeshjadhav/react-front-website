import React, { useContext } from "react";
import CreateContext from "../React_hooks/CreateContext";
import '../../../../App.css';

const Contextbutton = () => {

const auth = useContext(CreateContext);
console.log(auth.status);


return (
	<div className="text-center">
        <h4>Are you authenticated?</h4>
        <span className="">{auth.status ? <p className="text-green">Yes you are Login</p>:<p className="text-red">No.... Login agin</p>}</span>

        <button className="btn btn-info" onClick={auth.login}>Click To Login</button>
	</div>
);
};
export default Contextbutton;
