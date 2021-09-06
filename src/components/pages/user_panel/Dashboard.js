import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import '../../../User.css';
import UserNavbar from './UserNavbar';
import authHeader from './AuthHeader';

function Dashboard () {
    const history = useHistory();

    const userData = localStorage.getItem('userinfo');
    const stringify = JSON.parse(userData);

    if (localStorage.getItem('userinfo') === null) {
        <Redirect to="/User" />;
    }
    // const location = useLocation();

    useEffect(() => {

    });
    const [responseData, setResponseData] = useState([]);
    // const [regsisStatus, setregisStatus] = useState([]);
    //  from post
    const [user_firstnameReg, setUser_firstname] = useState('');
    const [user_lastnameReg, setUser_lastname] = useState('');
    const [user_emailReg, setUser_email] = useState('');
    const [genderReg, setGender] = useState('');

    // error
    const [errsetf_name, setf_name] = useState('');
    const [errsetl_name, setl_name] = useState('');
    const [errsete_name, sete_name] = useState('');
    const [errsetg_name, setg_name] = useState('');

    const logout = () => {
        alert('Are You Sure You Want To Log Out ??');
        window.localStorage.clear();
        history.push('/User');
    };

    const viewProfile = user_id => () => {
        axios.get(`http://localhost:5000/api/users/get_profile/${user_id}`, { headers: authHeader() }, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then((response) => {
            if (response.data.error) {
                setResponseData(response.data);
                // console.log(response.data.data[0].user_firstname);
                setUser_firstname(response.data.data[0].user_firstname);
                setUser_lastname(response.data.data[0].user_lastname);
                setUser_email(response.data.data[0].user_email);
                setGender(response.data.data[0].gender);
            } else {
                setResponseData('');
            }
        });
    };

    const update = user_id => () => {
        axios.put(`http://localhost:5000/api/users/update_profile/${user_id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            user_firstname: user_firstnameReg,
            user_lastname: user_lastnameReg,
            user_email: user_emailReg,
            gender: genderReg

        }).then((response) => {
            if (response.data.error) {
                // setregisStatus(response.data.message);
                console.log('hiii');
                console.log(response.data);
                window.localStorage.removeItem('userinfo');
                localStorage.setItem('userinfo', JSON.stringify(response.data.data));
                //   const stringify = JSON.parse(userData);
                // console.log(stringify);
                window.location.reload(false);
            } else {
                const f_name = <p>{response.data.data.errors.user_firstname}</p>;
                const l_name = <p>{response.data.data.errors.user_lastname}</p>;
                const err_email = <p>{response.data.data.errors.user_email}</p>;
                const err_gender = <p>{response.data.data.errors.gender}</p>;
                setf_name(f_name);
                setl_name(l_name);
                sete_name(err_email);
                setg_name(err_gender);
            }
        });
    };

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
                                <li><button className='btn btn-info' href="#" onClick={logout}>LOGOUT</button></li>
                            </ol>
                        </div>
                    </div>
                </section>
                <div id="" className="testimonials" >
                    <div className="">
                        <div className="row">
                            <div className="col-md-6 offset-md-3" >
                                <div className="icon-box" data-aos="zoom-in-left" >
                                    <div>
                                        {stringify.map(userinfo => {
                                            return (
                                                <div className="testimonial-item" key={userinfo.user_id.toString()} style={{ borderTop: '2px solid #000' }} >
                                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                                    <h3>{userinfo.user_firstname} {userinfo.user_lastname} </h3>
                                                    <h3>Email ID : {userinfo.user_email}</h3>
                                                    <h3>Username : {userinfo.username}</h3>
                                                    <h3>Password : ********</h3>
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateUserinfo" onClick={viewProfile(userinfo.user_id)} >Update Profile</button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
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
                                {/* <span style={{color:"red"}}>{regsisStatus}</span>   */}
                                <article className="card-body">

                                    {responseData.data
                                        ? (
                                            responseData.data.map(userinfos => {
                                                return (
                                                    <>
                                                        <div className="form-row">
                                                            <div className="col form-group">
                                                                <label>First name </label>
                                                                <input type="text" className="form-control" defaultValue={userinfos.user_firstname} onChange={(e) => {
                                                                    setUser_firstname(e.target.value);
                                                                }} />
                                                                <span className="text-danger">{errsetf_name}</span>
                                                            </div>
                                                            <div className="col form-group">
                                                                <label>Last name</label>
                                                                <input type="text" className="form-control" defaultValue={userinfos.user_lastname} onChange={(e) => {
                                                                    setUser_lastname(e.target.value);
                                                                }}/>
                                                                <span className="text-danger">{errsetl_name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" placeholder="" defaultValue={userinfos.user_email} onChange={(e) => {
                                                                setUser_email(e.target.value);
                                                            }} />
                                                            <span className="text-danger">{errsete_name}</span>
                                                            <small className="form-text text-muted">Well never share your email with anyone else.</small>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="col form-group">
                                                                <label>Username </label>
                                                                <input type="text" className="form-control" placeholder="" defaultValue={userinfos.username} readOnly />
                                                            </div>
                                                            <div className="col form-group">
                                                                <label>Password</label>
                                                                <input type="password" className="form-control" placeholder=" " defaultValue={userinfos.password} readOnly />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Gender</label> <br/>
                                                            <label className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="gender" defaultValue="male" checked={userinfos.gender === 'male'} onChange={(e) => {
                                                                    setGender(e.target.value);
                                                                }} />
                                                                <span className="form-check-label"> Male </span>
                                                            </label>
                                                            <label className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="gender" defaultValue="female" checked={userinfos.gender === 'female'} onChange={(e) => {
                                                                    setGender(e.target.value);
                                                                }} />
                                                                <span className="form-check-label"> Female</span>
                                                            </label>
                                                            <span className="text-danger">{errsetg_name}</span>
                                                        </div>

                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" onClick={update(userinfos.user_id)} >Save changes</button>
                                                        </div>

                                                    </>
                                                );
                                            })
                                        )
                                        : ''}

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
