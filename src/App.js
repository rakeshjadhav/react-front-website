import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/remixicon/remixicon.css';

import './assets/vendor/line-awesome/css/line-awesome.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';

import Home from './components/pages/front/Home';
// import Main from "./components/pages/Main";
// import Aboutus from "./components/pages/Aboutus";
// import Contact from "./components/pages/Contact";
import Navbar from './components/pages/front/Navbar';
import Product from './components/pages/class_components/Products';
import Multiple_comp_in_single_comp from './components/pages/Multiple_comp_in_single_comp';
import Props from './components/pages/Props';
import State_in_component from './components/pages/State_in_component';
import Component_life_cycle from './components/pages/Component_life_cycle';

import Blog from './components/pages/blog/Blog';
// import Blogs from './components/pages/blog/Blogs';
import Blogdeatils from './components/pages/blog/Blogdeatils';

import Creation_of_functional_component from './components/pages/functional_component/Creation_of_functional_component';
import UseState_hook from './components/pages/functional_component/React_hooks/UseState_hook';
import UseEffect_hook from './components/pages/functional_component/React_hooks/UseEffect_hook';
import Use_props from './components/pages/functional_component/React_hooks/Use_props';

import UseRef_hook from './components/pages/functional_component/React_hooks/UseRef_hook';
import UseCallback_hook from './components/pages/functional_component/React_hooks/UseCallback_hook';
import UseContext_hook from './components/pages/functional_component/React_hooks/UseContext_hook';
import Contextbutton from './components/pages/functional_component/React_hooks/Contextbutton';

import Counter_custom_hook from './components/pages/functional_component/custom_hook/Counter_custom_hook';

import Creation_of_pure_components from './components/pages/functional_component/React_hooks/pure_component/Creation_of_pure_components';
import Higher_order_components from './components/pages/higher_order_components/Higher_order_components';

import User from './components/pages/user_panel/User';
import Dashboard from './components/pages/user_panel/Dashboard';
import Sucess from './components/pages/user_panel/Sucess';

import Index from './components/pages/react_redux/Index';
import AddPost from './components/pages/react_redux/pages/AddContact';
import EditContact from './components/pages/react_redux/pages/EditContact';

import Home_products from './components/pages/react_redux/Home_products';

import LoginIndex from './components/pages/react_redux_user_panel/Index';
import Homepage from './components/pages/react_redux_user_panel/Homepage';
import Registersucces from './components/pages/react_redux_user_panel/Register.succes';

// import {Helmet} from "react-helmet";
// import $ from 'jquery';

import history from './components/pages/react_redux_user_panel/helpers/history';
import { alertActions } from './components/pages/react_redux_user_panel/actions';

// import PrivateRoute  from './components/pages/react_redux_user_panel/components/PrivateRoute';

// import { createBrowserHistory } from "history";

import { useDispatch } from 'react-redux';

// const history = createBrowserHistory();
function App () {
    // const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            console.log(history);
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <>
            <Router history={history}>
                <div className="">
                    <Navbar />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/multiple_comp_in_single_comp" component={Multiple_comp_in_single_comp} />
                        <Route exact path="/props" component={() => <Props title={'Props through component'} description={'description here!!!!'} />} />
                        <Route exact path="/State_in_component" component={State_in_component} />
                        <Route exact path="/Component_life_cycle" component={Component_life_cycle} />
                        <Route exact path="/Blog" component={Blog} />
                        <Route exact path="/Blogdeatils/:id" component={Blogdeatils} />

                        <Route exact path="/Creation_of_functional_component" component={Creation_of_functional_component} />
                        <Route exact path="/UseState_hook" component={UseState_hook} />
                        <Route exact path="/UseEffect_hook" component={UseEffect_hook} />
                        <Route exact path="/Use_props" component={Use_props} />
                        <Route exact path ="/UseRef_hook" component={UseRef_hook} />
                        <Route exact path ="/UseCallback_hook" component={UseCallback_hook} />
                        <Route exact path ="/UseContext_hook" component={UseContext_hook} />
                        <Route exact path ="/Contextbutton" component={Contextbutton} />
                        <Route exact path ="/Counter_custom_hook" component={Counter_custom_hook} />
                        <Route exact path ="/Creation_of_pure_components" component={Creation_of_pure_components} />
                        <Route exact path ="/Higher_order_components" component={Higher_order_components} />

                        <Route exact path ="/User" component={User} />
                        <Route exact path ="/Dashboard" component={Dashboard} />
                        <Route exact path ="/Sucess" component={Sucess} />

                        <Route exact path ="/Index" component={Index} />
                        <Route exact path="/add" component={() => <AddPost />} />
                        <Route exact path="/edit/:id" component={() => <EditContact />} />

                        <Route exact path ="/Home_products" component={Home_products} />
                        <Route exact path ="/LoginIndex" component={LoginIndex} />
                        <Route exact path="/Homepage" component={Homepage} />
                        <Route exact path="/Registersucces" component={Registersucces} />
                        <Redirect from="*" to="/" />

                    </Switch>

                </div>
            </Router>
        </>
    );
}

export default App;
