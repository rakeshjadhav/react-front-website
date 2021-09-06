import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';

const EditContact = ({ updateContact }) => {
    const contacts = useSelector((state) => state.contactReducer);

    const { id } = useParams();
    const history = useHistory();

    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhone(currentContact.phone);
    }, [currentContact]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const checkContactEmailExists = contacts.filter((contact) =>
            contact.email === email && contact.id !== currentContact.id
                ? contact
                : null
        );
        const checkContactPhoneExists = contacts.filter((contact) =>
            contact.phone === phone && contact.id !== currentContact.id
                ? contact
                : null
        );

        if (!email || !name || !phone) {
            console.log('Please fill in all fields!!');
            return toast.warning('Please fill in all fields!!');
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error('This email already exists!!');
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error('This phone number already exists!!');
        }

        const data = {
            id: currentContact.id,
            email,
            name,
            phone
        };

        updateContact(data);
        toast.success('Contact updated successfully!!');
        history.push('/index');
    };

    const texttransform = {
        texttransform: 'uppercae',
        fontSize: '25px',
        textalign: 'center'
    };
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title" data-aos="zoom-out">
                        {/* <p className="texttransform "> Edit User Contact
                    <button
          className="btn btn-dark ml-auto my-5 pull-right"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
                    </p> */}

                        <div className="" style={{ paddingTop: '45px' }}>
                            <div className="row d-flex flex-column">

                                <div className="col-md-6 mx-auto shadow p-5">
                                    <p className="texttransform " style={texttransform}> Update User Contact</p>
                                    {currentContact
                                        ? (
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        value={name}
                                                        placeholder={'Name'}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        value={email}
                                                        placeholder={'Email'}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        value={phone}
                                                        placeholder={'Phone'}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group d-flex align-items-center justify-content-between my-2">
                                                    <button type="submit" className="btn btn-primary">
                  Update Contact
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => history.push('/Index')}
                                                    >
                  cancel
                                                    </button>
                                                </div>
                                            </form>
                                        )
                                        : (
                                            <h1 className="text-center">No Contact Found</h1>
                                        )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    contacts: state
});
const mapDispatchToProps = (dispatch) => ({
    updateContact: (data) => {
        dispatch({ type: 'UPDATE_CONTACT', payload: data });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
