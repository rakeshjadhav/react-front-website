import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { BrowserRouter as Router } from 'react';
import history  from '../helpers/history';


export const userActions = {
    login,
    logout,
    register,
    userupdate: _userupdate,
    // getAll,
    // delete: _delete
};


function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    // history.push('/Registersucces');
                    history.push(
                        {
                            pathname: '/Registersucces',
                          
                        });
                        console.log("hiss");
                        console.log(history);
                    dispatch(alertActions.success('Registration successful.. Please Login again !!!!!'));
                    // history.push(
                    //     { pathname: '/Sucess',
                    //     }); 
                    // setTimeout(function(){
                    //     window.location.reload(1);
                    //  }, 3000);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { 
        return { type: userConstants.REGISTER_REQUEST, user }
     }

    function success(user) {
         return { type: userConstants.REGISTER_SUCCESS, user } 
    }
    function failure(error) { 
        return { type: userConstants.REGISTER_FAILURE, error } 
    }
}

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push(from);
                    dispatch(alertActions.success('Login Succefuly'));
                    // console.log(from);
                  
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(user) { 
        return { type: userConstants.LOGIN_REQUEST, user } 
    }
    function success(user) { 
        return { type: userConstants.LOGIN_SUCCESS, user } 
    }
    function failure(error) { 
        return { type: userConstants.LOGIN_FAILURE, error } 
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


function _userupdate(id,user) {
    return dispatch => {
        dispatch(request(user));

        userService.userupdate(id,user)
            .then(
                user => { 
                    dispatch(success());  
                    dispatch(alertActions.success('update successfully.. Please Login again !!!!!'));

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { 
        return { type: userConstants.UPDATE_REQUEST, user }
     }

    function success(user) {
         return { type: userConstants.UPDATE_SUCCESS, user } 
    }
    function failure(error) { 
        return { type: userConstants.UPDATE_FAILURE, error } 
    }
}

