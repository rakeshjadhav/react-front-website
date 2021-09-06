import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions, userActions } from './actions';

import history from './helpers/history';

function Register () {
    const [user, setUser] = useState({
        user_firstname: '',
        user_lastname: '',
        user_email: '',
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const registering = useSelector(state => state.registration.registering);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    //    console.log('alert')
    //    console.log(alert);
    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    // useEffect(() => {
    //     dispatch(userActions.logout());
    // }, []);

    function handleChange (e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }
    function handleSubmit (e) {
        e.preventDefault();

        setSubmitted(true);
        console.log('setSubmitted');
        console.log(user);
        if (user.user_firstname && user.user_lastname && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div>
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
                                {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                <form name="form" onSubmit={handleSubmit}>
                                    <article className="card-body">

                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>First name <span className="text-danger">*</span></label>
                                                <input type="text" name="user_firstname" value={user.user_firstname} onChange = {handleChange} className={'form-control' + (submitted && !user.user_firstname ? ' is-invalid' : '')} />
                                                {submitted && !user.user_firstname && <div className="invalid-feedback">First Name is required</div> }

                                            </div>

                                            <div className="col form-group">
                                                <label>Last name <span className="text-danger">*</span></label>
                                                <input type="text" name="user_lastname" value={user.user_lastname} onChange={handleChange} className={'form-control' + (submitted && !user.user_lastname ? ' is-invalid' : '')} />
                                                {submitted && !user.user_lastname && <div className="invalid-feedback">Last Name is required</div>}

                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email address <span className="text-danger">*</span></label>
                                            <input type="email" placeholder="" name="user_email" value={user.user_email} onChange={handleChange} className={'form-control' + (submitted && !user.user_email ? ' is-invalid' : '')} />
                                            {submitted && !user.user_email &&
                                         <div className="invalid-feedback">Email is required</div>
                                            }

                                        </div>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>Username <span className="text-danger">*</span></label>
                                                <input type="text" placeholder="" name = "username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                                                {submitted && !user.username &&
                                         <div className="invalid-feedback">Username is required</div>
                                                }

                                            </div>
                                            <div className="col form-group">
                                                <label>Password <span className="text-danger">*</span></label>
                                                <input type="password" placeholder=" " name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                                                {submitted && !user.password &&
                                        <div className="invalid-feedback">Password is required</div>
                                                }

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button className="btn btn-primary">
                                                {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
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
    );
}

export default Register;
