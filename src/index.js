import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

