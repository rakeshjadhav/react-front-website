import { authHeader } from '../helpers';
import { BrowserRouter as Router, useHistory,useLocation } from "react-router-dom";
import axios from 'axios';

export const userService = {
    // login,
    // logout,
    register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//     };

//     return fetch(`/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
// }

// function logout() {
//     const location = useLocation();
//     // remove user from local storage to log user out
//     localStorage.removeItem('user');
// }

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    // return axios.post("http://localhost:5000/api/users/register",requestOptions ).then(handleResponse);

    return fetch(`http://localhost:5000/api/users/register`, requestOptions).then(handleResponse);
}

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    // let location = useLocation();
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}