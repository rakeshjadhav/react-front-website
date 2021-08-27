import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, useHistory,useLocation } from "react-router-dom";
// import Axios from 'axios';
import "../../../User.css";
import UserNavbar from "./UserNavbar";


function User() {

const history = useHistory();

//    if(localStorage.getItem("userinfo") === null) {
//       history.push({pathname: '/Dashboard' });
//     }

const location = useLocation();

const [user_firstnameReg, setUser_firstname] = useState('');
const [user_lastnameReg, setUser_lastname] = useState('');
const [user_emailReg, setUser_email] = useState('');
const [usernameReg, setUsername] = useState('');
const [passwordReg, setPassword] = useState('');
const [genderReg, setGender] = useState('');

const [errsetf_name,setf_name] = useState("");
const [errsetl_name,setl_name] = useState("");
const [errsete_name,sete_name] = useState("");
const [errsetu_name,setu_name] = useState("");
const [errsetp_name,setp_name] = useState("");
const [errsetg_name,setg_name] = useState("");

const [regsisStatus,setregisStatus] = useState([]);
const [loginStatus,setLogstatus] = useState("");

const [usernameLog, setUsernameLog] = useState('');
const [passwordLog, setPasswordLog] = useState('');

const bcrypt = require('bcryptjs')

let login_model = ' modal fade'; 

useEffect(() => {
    if(localStorage.getItem('userinfo')) {
        history.push("/Dashboard")
    }
})
const register  = () => {
    
    // setLoading(true);
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
        if(response.data.error ? true : false){
            setregisStatus(response.data.message);
            history.push(
                {
                    pathname: '/Sucess',
                    user: response.data,
                  
                });
        }else{
           
            const f_name = <p>{response.data.data.errors.user_firstname}</p>;
            const l_name = <p>{response.data.data.errors.user_lastname}</p>;
            const err_email = <p>{response.data.data.errors.user_email}</p>;
            const err_uname = <p>{response.data.data.errors.username}</p>;
            const err_upass = <p>{response.data.data.errors.password}</p>;
            const err_gender = <p>{response.data.data.errors.gender}</p>;
            setf_name(f_name);
            setl_name(l_name);
            sete_name(err_email);
            setu_name(err_uname);
            setp_name(err_upass);
            setg_name(err_gender);
        }
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
        // console.log(response);
        if(response.data.error ? true : false){
            setLogstatus(response.data.message);
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('userinfo',JSON.stringify(response.data.data))
            history.push(
                {
                    pathname: '/Dashboard',
                    state: response.data,
                });
        }else{
            setLogstatus(response.data.message);
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
                <h2>User Panel</h2>
                <ol>
                    <li><a href="/" >Home</a></li>
                    <li>User Login Panel</li>
                </ol>
                </div>
            </div>
            </section>

            <section className="inner-page">
            <div className="container" > 
                <div className="row DivCenter" style={{boxShadow: "1px 3px 20px 12px rgba(0,0,0,0.2)"}}>
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
                        <h5 className="modal-title" id="exampleModalLongTitle">User Registration</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <article className="card-body">
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>First name <span className="text-danger">*</span></label>   
                                    <input type="text" name="firstname" className="form-control" onChange={(e) => {
                                        setUser_firstname(e.target.value);
                                    }}  />
                                   <span className="text-danger">{errsetf_name}</span> 
                                </div> 
                                
                                <div className="col form-group">
                                    <label>Last name <span className="text-danger">*</span></label> 
                                    <input type="text" className="form-control" onChange={(e) => {
                                        setUser_lastname(e.target.value);
                                    }}  />
                                     <span className="text-danger">{errsetl_name}</span> 
                                </div> 
                            </div> 
                            <div className="form-group">
                                <label>Email address <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder=""  onChange={(e) => {
                                        setUser_email(e.target.value);
                                    }} />
                                 <span className="text-danger">{errsete_name}</span> 
                            </div> 
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Username <span className="text-danger">*</span></label>   
                                    <input type="text" className="form-control" placeholder="" onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}  />
                                     <span className="text-danger">{errsetu_name}</span> 
                                </div> 
                                <div className="col form-group">
                                    <label>Password <span className="text-danger">*</span></label> 
                                    <input type="password" className="form-control" placeholder=" "  onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                     <span className="text-danger">{errsetp_name}</span> 
                                </div> 
                            </div> 
                            <div className="form-group">
                            <label>Gender <span className="text-danger">*</span></label> <br/>
                                    <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="male"  onChange={(e) => {
                                        setGender(e.target.value); }}/>
                                <span className="form-check-label"> Male </span>
                                </label>
                                <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="female" onChange={(e) => {
                                        setGender(e.target.value); }} />
                                <span className="form-check-label"> Female</span>
                                </label>
                                <span className="text-danger">{errsetg_name}</span> 
                            </div> 
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={register}>Save</button>
                    </div>
                    </div>
                </div>
                </div>
        {/* //user login model */}
             <div className={login_model} id="exampleModalCenterlogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false"  >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="exampleModalLongTitle">User Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <article className="card-body">
                       
                        <span style={{color: "red"}}>{loginStatus}</span>
                            <div className="form-group">
                                <label>User Name <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Enter Username"  onChange={(e) => {
                                        setUsernameLog(e.target.value);
                                    }} />
                            </div> 
                            <div className="form-group">
                                <label>Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" placeholder="Enter Password"  onChange={(e) => {
                                        setPasswordLog(e.target.value);
                                    }} />
                            </div> 
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
                    </div>
                    </div>
                </div>
                </div>
             </main>
           </>
    );
}

 export default User;
  