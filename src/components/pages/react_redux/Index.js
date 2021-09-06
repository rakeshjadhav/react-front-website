import React from 'react';
import '../../../App.css';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../react_redux/actions/index';
import { toast } from 'react-toastify';

const Index = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const contacts = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!!');
    };

    // text right
    const TextAlignRight = {
        float: 'right'
    };
    return (
        <>

            <section id="about" className="about">
                <div className="container">
                    <div className="section-title" data-aos="zoom-out">
                        <h2>About</h2>
                        <p className="texttransform">Getting Started with React Redux</p>
                        <ul>
                            <li>Redux is a pattern and library for managing and updating application state, using events called actions.</li>
                            <li>It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.</li>
                        </ul>
                        <ul>
                            <li><b>Why Should I Use Redux?</b>
                                <ul>
                                    <li>Redux helps you manage global state - state that is needed across many parts of your application.</li>
                                    <li>The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.</li>
                                </ul>
                            </li>

                        </ul>
                        <ul>
                            <li><b>How do you implement Redux in ReactJS?</b>
                                <ul>
                                    <li>install redux and react-redux.</li>
                                    <li>create a actine .</li>
                                    <li>create a reducer .</li>
                                    <li>create a store passing in this reducer .</li>
                                    <li>wrap your app in a Provider passing in the store.</li>

                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li><b>Redux Fundamentals : State, Actions, and Reducers</b>
                                <ul>
                                    <li>redux store bring togather the store, action,reducer that make app</li>
                                    <li>only have a single store in a redux application</li>
                                    <li>every redux store has single root.</li>
                                </ul>
                            </li>
                        </ul>

                        <div className="card">
                            <h4>Increment / Decerment Counter </h4>
                            <div className="text-center">
                                <div className="qty mt-5">
                                    <span className="minus bg-dark" title="Increment" onClick ={() => dispatch(decNumber()) }>-</span>
                                    <input type="number" className="count" name="qty" value={myState} />
                                    <span className="plus bg-dark" title="Decrement" onClick ={() => dispatch(incNumber()) }>+</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <div className="row">
                {/* <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">Add Contact</Link>
            </div>
        </div> */}

                <div className="col-md-10 mx-auto my-4">
                    <h2>Contact Lists
                        <span style={TextAlignRight}><Link to="/add" className="btn btn-outline-dark ml-auto ">Add Contact</Link></span></h2>
                    <table className="table table-hover">
                        <thead className="table-header bg-dark text-white">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length > 0
                                ? (
                                    contacts.map((contact, id) => (
                                        <tr key={id}>
                                            <td>{id + 1}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>
                                                <Link
                                                    to={`/edit/${contact.id}`}
                                                    className="btn btn-sm btn-primary mr-1"
                                                >
                        Edit
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() => deleteContact(contact.id)}
                                                    className="btn btn-sm btn-danger"
                                                >
                        Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )
                                : (
                                    <tr>
                                        <th>No contacts found</th>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default Index;
