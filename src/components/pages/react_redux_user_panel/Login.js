import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from './actions'; //

function Login() {

    
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();
    const alert = useSelector(state => state.alert);
    console.log(alert);
    // reset login status
    // useEffect(() => { 
    //     dispatch(userActions.logout()); 
    // }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/HomePage" } };
             console.log(from);
           dispatch(userActions.login(username, password, from));
        }
    }


    return (
        <div>
            <div className= "modal fade" id="exampleModalCenterlogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false"  >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="exampleModalLongTitle">User Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    {
                         alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <div className="row">
                    <form name="form" onSubmit={handleSubmit}>
                        <article className="card-body">
                       
                      
                            <div className="form-group">
                                <label>User Name <span className="text-danger">*</span></label>
                                <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                                    {
                                    submitted && !username && <div className="invalid-feedback">Username is required</div>
                                    }
                            </div> 
                            <div className="form-group">
                                <label>Password <span className="text-danger">*</span></label>
                                <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                                {
                                  submitted && !password &&  <div className="invalid-feedback">Password is required</div>
                                }
                            </div> 
                            <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>

                        {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
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

export default Login
