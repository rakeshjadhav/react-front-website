import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from './actions';
import '../../../User.css';
import UserUpdate from './Userupdate';

function Homepage() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    console.log(user);
    useEffect(() => {
        // dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
  <>

        <main id="main" >
            <section className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                <h2>User Dashborad</h2>
                <ol>
                    <li><a >Home</a></li>
                    <li>User profile</li>
                    <li><Link to="/LoginIndex">Logout</Link></li>
                </ol>
                </div>
            </div>
            </section>

   
            <section className="about DivCenter" id="about" >
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>Hi {user.user_firstname} !</strong> You're logged in synergy services pvt ltd User panel
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
           
            <div className="card text-center">
                            <div className="card-header">
                                 Basic Information
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Name :{user.user_firstname} {user.user_lastname} </h5>
                                <h6>Email ID : {user.user_email}</h6>
                                <h6>Username : {user.username}</h6>
                                <h6>h6assword : ********</h6>
                               
                            </div>
                            <div className="card-footer text-muted">
                            <button  type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateUserinfo"  >Update Profile</button>
                            </div>
                            </div>

            </section>
            </main>

     <UserUpdate />
        
        </>
    );
}

export default Homepage;