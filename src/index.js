import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-toastify/dist/ReactToastify.css';
import store from './store';
import { Provider } from 'react-redux';
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
import { ToastContainer } from 'react-toastify';

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastContainer />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
