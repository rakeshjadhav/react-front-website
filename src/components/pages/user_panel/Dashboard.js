import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route , Switch,Redirect,useHistory,useLocation } from "react-router-dom";
// import Axios from 'axios';
import UserNavbar from "./UserNavbar";


function Dashboard(props) {

  const location = useLocation();
  const history = useHistory();
   const userData = localStorage.getItem('userinfo');
   const stringify = JSON.parse(userData);
   console.log(stringify)

    useEffect(() => {
       
        // viewProfile();
    })
    let [responseData, setResponseData] = useState([]);
    const [regsisStatus,setregisStatus] = useState([]);

    const [user_firstnameReg, setUser_firstname] = useState('');
    const [user_lastnameReg, setUser_lastname] = useState('');
    const [user_emailReg, setUser_email] = useState('');
    const [usernameReg, setUsername] = useState('');
    const [passwordReg, setPassword] = useState('');
    const [genderReg, setGender] = useState('');
    // alert(user_firstnameReg);
    const viewProfile  = user_id => () => {
      
      axios.get(`http://localhost:5000/api/users/get_profile/${user_id}`, {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
          },
      }).then((response) => {
          if(response.data.error ? true : false){
            setResponseData(response.data);
            console.log(response.data.data[0].user_firstname);
            setUser_firstname(response.data.data[0].user_firstname);
            setUser_lastname(response.data.data[0].user_lastname);
            setUser_email(response.data.data[0].user_email);
            // setPassword(response.data.data[0].password);
            setGender(response.data.data[0].gender);
          }else{
            setResponseData(""); 
          }
      })
    }

    
    const update = user_id => () => {
        axios.put(`http://localhost:5000/api/users/update_profile/${user_id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            user_firstname : user_firstnameReg,
            user_lastname : user_lastnameReg,
            user_email : user_emailReg,
            gender : genderReg,

        }).then((response) => {
            if(response.data.error ? true : false){
                setregisStatus(response.data.message);
                window.localStorage.removeItem("userinfo");
                const userData = localStorage.setItem('userinfo',JSON.stringify(response.data.data))
                const stringify = JSON.parse(userData);
                // window.location.reload(false);

                // history.push(
                //     {
                //         pathname: '/Dashboard',
                //         user: response.data,
                      
                //     });
            }else{
               
                const f_name = <p>{response.data.data.errors.user_firstname}</p>;
                const l_name = <p>{response.data.data.errors.user_lastname}</p>;
                const err_email = <p>{response.data.data.errors.user_email}</p>;
                const err_uname = <p>{response.data.data.errors.username}</p>;
                const err_upass = <p>{response.data.data.errors.password}</p>;
    
                setregisStatus([f_name,l_name,err_email,err_uname,err_upass]); 
            }
        })
    }

 return (
        <>
        <UserNavbar/>
        <main id="main" >
            <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>User Dashborad</h2>
                <ol>
                    <li><a >Home</a></li>
                    <li>User profile</li>
                </ol>
                </div>
            </div>
            </section>
            <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>User Profile</h2>
          
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="icon-box" data-aos="zoom-in-left">
                 <div>
                     {/* <span>111 {userData.user_firstname}</span> */}
          {stringify.map(userinfo => { 
              return (
                <div className="testimonial-item" key={userinfo.user_id.toString()} >
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>{userinfo.user_firstname} {userinfo.user_lastname} </h3>
                <h3>Email ID : {userinfo.user_email}</h3>
                <h3>Username : {userinfo.username}</h3>
                <h3>Password : ********</h3>
                <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateUserinfo" onClick={viewProfile(userinfo.user_id)} >Update Profile</button>
              </div>
              )
          })}
      </div>  
   
            </div>
          </div>

          </div>

      </div>
    </section>

            </main>

            <div className="modal fade" id="updateUserinfo" tabIndex="-1" role="dialog" aria-labelledby="updateUserinfoTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">User Info Update</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                    <span style={{color:"red"}}>{regsisStatus}</span>  
                        <article className="card-body">
                        
                         {responseData.data ? (
                          responseData.data.map(userinfos=> { 
                            return (
                              <>
                                 <div className="form-row">
                                <div className="col form-group">
                                    <label>First name </label>   
                                    <input type="text"   defaultValue={userinfos.user_firstname} onChange={(e) => {
                                        setUser_firstname(e.target.value);
                                    }} />
                                    
                                </div> 
                                <div className="col form-group">
                                    <label>Last name</label> 
                                    <input type="text"  defaultValue={userinfos.user_lastname}  onChange={(e) => {
                                        setUser_lastname(e.target.value);
                                    }}/>
                                </div> 
                            </div> 
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="" defaultValue={userinfos.user_email} onChange={(e) => {
                                        setUser_email(e.target.value);
                                    }} />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> 
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Username </label>   
                                    <input type="text" className="form-control" placeholder="" defaultValue={userinfos.user_firstname} readOnly />
                                </div> 
                                <div className="col form-group">
                                    <label>Password</label> 
                                    <input type="password" className="form-control" placeholder=" "  defaultValue={userinfos.password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} readOnly />
                                </div> 
                            </div> 
                            <div className="form-group">
                            <label>Gender</label> <br/>
                                    <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" defaultValue="male" checked={userinfos.gender === 'male'}  onChange={(e) => {
                                        setGender(e.target.value); }} />
                                <span className="form-check-label"> Male </span>
                                </label>
                                <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" defaultValue="female"  checked={userinfos.gender === 'female'} onChange={(e) => {
                                        setGender(e.target.value); }} />
                                <span className="form-check-label"> Female</span>
                                </label>
                            </div> 



                            <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={update(userinfos.user_id)} >Save changes</button>
                    </div>
                                 
                              </>
                              )
                          })
                      ) : ""}
                        
                       

                          
                                                                   
                       
                        </article> 
                        </div>            
                    </div>
                    
                    </div>
                </div>
                </div>

            

           </>
        
    );



}

 export default Dashboard;
  