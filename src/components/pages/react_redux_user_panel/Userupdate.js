import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router";
import { userActions } from './actions'; //

function Userupdate() {
   
  const users = useSelector((state) => state.authentication.user);
//   onst contacts = useSelector((state) => state.contactReducer);
  const { id } = users.user_id;
  const history = useHistory();


  useEffect(() => {
    setName(users.user_firstname);
    setLast(users.user_lastname);
    setEmail(users.user_email);
    setUser(users.username);
    setPass(users.password);
  }, [users]);

  const [user_firstname, setName] = useState("");
  const [user_lastname, setLast] = useState("");
  const [user_email, setEmail] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");


    const[submitted,setSubmitted] = useState(false);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
//    console.log('alert')
//    console.log(alert);
    useEffect(() => {
        // history.listen((location, action) => {
        //     // clear alert on location change
        //     dispatch(alertActions.clear());
        // });
    }, []);

  
    function handleSubmit(e){
        e.preventDefault();
        
        setSubmitted(true);
        console.log("setSubmitted");
        // console.log(user);
        const user = {
            user_id: users.user_id,
            user_firstname,
            user_lastname,
            username,
            password,
          };
        if (user_firstname && user_lastname && username && password) {
            dispatch(userActions.userupdate(users.user_id,user));
        }
    }

    return (
        <div>
            {/* User Info Update */}
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
                    <form name="form"  onSubmit={handleSubmit}>
                        <article className="card-body">
                        
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>First name <span className="text-danger">*</span></label>   
                                    <input type="text" name="user_firstname" value={user_firstname}  onChange={(e) => setName(e.target.value)} className={'form-control' + (submitted && !user_firstname ? ' is-invalid' : '')}  />
                                    {submitted && !user_firstname &&<div className="invalid-feedback">First Name is required</div> }
                                   
                                </div> 
                                
                                <div className="col form-group">
                                    <label>Last name <span className="text-danger">*</span></label> 
                                    <input type="text" name="user_lastname"  value={user_lastname} onChange={(e) => setLast(e.target.value)} className={'form-control' + (submitted && !user_lastname ? ' is-invalid' : '')} />
                                  {submitted && !user_lastname &&<div className="invalid-feedback">Last Name is required</div>} 
                                    
                                </div> 
                            </div> 
                            <div className="form-group">
                                <label>Email address <span className="text-danger">*</span></label>
                                <input type="email" placeholder="" name="user_email"  value={user_email} onChange={(e) => setEmail(e.target.value)} className={'form-control' + (submitted && !user_email ? ' is-invalid' : '')} />
                                     {submitted && !user_email &&
                                         <div className="invalid-feedback">Email is required</div>
                                 } 
                                
                            </div> 
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Username <span className="text-danger">*</span></label>   
                                    <input type="text" placeholder="" name = "username"  value={username} onChange={(e) => setName(e.target.value)} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} readOnly/>
                                     {submitted && !username &&
                                         <div className="invalid-feedback">Username is required</div>
                                 }
                                     
                                </div> 
                                <div className="col form-group">
                                    <label>Password <span className="text-danger">*</span></label> 
                                    <input type="password"  placeholder=" " name="password" value={password} onChange={(e) => setName(e.target.value)} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                                    {submitted && !password &&
                                        <div className="invalid-feedback">Password is required</div>
                                    }
                                   
                                </div> 
                            </div> 
                            <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button className="btn btn-primary">
                            
                            Update
                        </button>
                    </div>
                        </article> 
                        </form>
                        </div>            
                    </div>
                    
                    </div>
                </div>
                </div>

        </div>
    )
}

export default Userupdate;
