import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route , Switch,Redirect,useHistory,useLocation } from "react-router-dom";
// import Axios from 'axios';
import UserNavbar from "./UserNavbar";


function Dashboard(props) {

  const location = useLocation();
  console.log(location.state.data);

  // location.state.data;
 //const [todos, setCount] = useState(location.state.data);

const history = useHistory();

useEffect(() => {
    if(localStorage.getItem('user-info')) {
        history.push("/user")
    }
})



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
          {/* <p>Basic Information update</p> */}
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="icon-box" data-aos="zoom-in-left">
                 {/* {UserProfile} */}
              
                 <Profile name={location.state.data}/>
                 
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
                        <article className="card-body">
                       {/* <span style={{color:"red"}}>{regsisStatus}</span> */}

                       {/* <ErrorHandling rerror={regsisStatus} /> */}
                      
                       {/* {responseData.map(resss => {
                                {resss.user_firstname}
                        })} */}
                          


                            <div className="form-row">
                                <div className="col form-group">
                                    <label>First name </label>   
                                    <input type="text" name="firstname" className="form-control"  />
                                    
                                </div> 
                                <div className="col form-group">
                                    <label>Last name</label> 
                                    <input type="text" className="form-control" />
                                </div> 
                            </div> 
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="" />
                                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> 
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Username </label>   
                                    <input type="text" className="form-control" placeholder=""  />
                                </div> 
                                <div className="col form-group">
                                    <label>Password</label> 
                                    <input type="password" className="form-control" placeholder=" "  />
                                </div> 
                            </div> 
                            <div className="form-group">
                            <label>Gender</label> <br/>
                                    <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="male"  />
                                <span className="form-check-label"> Male </span>
                                </label>
                                <label className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" value="female" />
                                <span className="form-check-label"> Female</span>
                                </label>
                            </div> 
                                                                   
                       
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" >Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

            

           </>
        
    );



}
function Profile(name) {
  const history = useHistory();
  let [responseData, setResponseData] = useState('');

  const viewProfile  = user_id => () => {
    
    axios.get(`http://localhost:5000/api/users/get_profile/${user_id}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        // user_firstname : user_firstnameReg,
    }).then((response) => {
        console.log(response);
        if(response.data.error ? true : false){
          setResponseData(response.data)
         
        }else{

          setResponseData("")
            // setregisStatus([f_name,l_name,err_email,err_uname,err_upass]); 
  
           
  
        }
    })
  }
  
  return (
    <>
      <div>
          {name.name.map(userinfo => { // using props in child component and looping
              return (
                <div className="testimonial-item" key={userinfo.user_id.toString()} >
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
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
      
</>
  );
}

 export default Dashboard;
  