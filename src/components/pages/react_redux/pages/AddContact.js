import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
// import "../../../../App.css"

import { Link, NavLink } from 'react-router-dom';

const AddPost = ({ addContact }) => {
    // { contacts, addContact }
    const contacts = useSelector((state) => state.contactReducer);
    //  const addContact = useSelector((state) => state.contactReducer);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        // check email alraedy exits from current data
        const checkContactEmailExists = contacts.filter((contact) =>
            contact.email === email ? contact : null
        );

        // check phone alraedy exits from current data
        const checkContactPhoneExists = contacts.filter((contact) =>
            contact.phone === phone ? contact : null
        );

        // validation
        if (!email || !name || !phone) {
            return toast.warning('Please fill in all fields!!');
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error('This email already exists!!');
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error('This phone number already exists!!');
        }

        const data = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
            email,
            name,
            phone
        };

        addContact(data);
        toast.success('Contact added successfully!!');
        history.push('/index');
    };
    const header_transparent = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial'
    };
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <div className="">
                        <div className="row">
                            <div className="col-md-6 p-5 mx-auto shadow">
                                <div className="">
                                    <p className="texttransform"> Add User Contact</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="number"
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="btn btn-block btn-dark"
                                            type="submit"
                                            value="Add Contact"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => ({
    contacts: state
});

const mapDispatchToProps = (dispatch) => ({
    addContact: (data) => {
        dispatch({ type: 'ADD_CONTACT', payload: data });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
