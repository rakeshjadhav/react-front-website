import React, { useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
// import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userActions } from './actions'; //

function Index () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <>
            <main id="main">
                <Navbar/>
                <section className="inner-page">
                    <div className="container" >
                        <div className="row DivCenter" style={{ boxShadow: '1px 3px 20px 12px rgba(0,0,0,0.2)' }}>

                            <div className="col-md-6 col-md-4 col-6-12">
                                <a className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenterlogin" >Login</a>
                            </div>

                            <div className="col-md-6 col-md-4 col-6-12">

                                <a type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >Register</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* regsiter  model */}
            <Register />
            {/* login model */}
            <Login />

        </>
    );
}

export default Index;
