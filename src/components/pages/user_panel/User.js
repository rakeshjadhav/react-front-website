import axios from 'axios';
import React,{useState,useEffect} from 'react';
// import Axios from 'axios';

import UserNavbar from "./UserNavbar";

function User() {
   
const [user_firstnameReg, setUser_firstname] = useState('');
const [user_lastnameReg, setUser_lastname] = useState('');
const [user_emailReg, setUser_email] = useState('');
const [usernameReg, setUsername] = useState('');
const [passwordReg, setPassword] = useState('');


const [loginStatus,setLogstatus] = useState("");


const [usernameLog, setUsernameLog] = useState('');
const [passwordLog, setPasswordLog] = useState('');

const [genderReg, setGender] = useState('');

const register  = () => {
    axios.post("http://localhost:5000/api/users/regsiter", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        user_firstname : user_firstnameReg,
        user_lastname : user_lastnameReg,
        user_email : user_emailReg,
        username : usernameReg,
        password : passwordReg,
        gender : genderReg,
    }).then((response) => {
        console.log(response);
    })
}

const login  = () => {
    axios.post("http://localhost:5000/api/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
       username : usernameLog,
       password : passwordLog,
    }).then((response) => {
        console.log(response);

        if(response.data.message){
            setLogstatus(response.data.message);
        }else{
            setLogstatus(response.data[0].user_firstname)
        }
    })
}

 return (
        <>
        <UserNavbar/>
           <main id="main">
            <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>Inner Page</h2>
                <ol>
                    <li><a href="">Home</a></li>
                    <li>Inner Page</li>
                </ol>
                </div>
            </div>
            </section>

            <section className="inner-page">
            <div className="container">
                <div className="row DivCenter" >
                   <div className="col-6 col-md-4">
                      <a className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterlogin" >Login</a>
                   </div>
                   
                   <div className="col-6 col-md-4">
                      <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >Register</a>
                   
                   </div>
                </div>
            </div>
            </section>

            {/* regsiter  model */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">User Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <article className="card-body">
                       
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>First name </label>   
                                    <input type="text" name="firstname"  onChange={(e) => {
                                        setUser_firstname(e.target.value);
                                    }}  />
                                    
                                </div> 
                                <div className="col form-group">
                                    <label>Last name</label> 
                                    <input type="text" className="form-control" onChange={(e) => {
                                        setUser_lastname(e.target.value);
                                    }}  />
                                </div> 
                            </div> 
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder=""  onChange={(e) => {
                                        setUser_email(e.target.value);
                                    }} />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> 
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Username </label>   
                                    <input type="text" className="form-control" placeholder="" onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}  />
                                </div> 
                                <div className="col form-group">
                                    <label>Password</label> 
                                    <input type="password" className="form-control" placeholder=" "  onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div> 
                            </div> 
                            <div className="form-group">
                            <label>Gender</label> <br/>
                                    <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option1"  onChange={(e) => {
                                        setGender(e.target.value); }}/>
                                <span className="form-check-label"> Male </span>
                                </label>
                                <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="option2" onChange={(e) => {
                                        setGender(e.target.value); }} />
                                <span className="form-check-label"> Female</span>
                                </label>
                            </div> 
                                                                   
                       
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={register}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>



                <div className="modal fade" id="exampleModalCenterlogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">User Register</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <article className="card-body">
                       
                        <span style={{color: "red"}}>{loginStatus}</span>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="email" className="form-control" placeholder=""  onChange={(e) => {
                                        setUsernameLog(e.target.value);
                                    }} />
                               
                            </div> 
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder=""  onChange={(e) => {
                                        setPasswordLog(e.target.value);
                                    }} />
                                
                            </div> 
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={login}>Save changes</button>
                      
                   
                    </div>
                    </div>
                </div>
                </div>
             </main>
           </>
        
    );

}
 export default User;
  