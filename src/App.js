import React  from 'react';
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

import Home from "./components/pages/front/Home";
// import Main from "./components/pages/Main";
// import Aboutus from "./components/pages/Aboutus";
// import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/front/Navbar";
import Product from './components/pages/class_components/Products';
import Multiple_comp_in_single_comp from "./components/pages/Multiple_comp_in_single_comp";
import Props from './components/pages/Props';
import State_in_component from './components/pages/State_in_component';
import Component_life_cycle from './components/pages/Component_life_cycle';

import Blog from './components/pages/blog/Blog';
import Blogs from './components/pages/blog/Blogs';
import Blogdeatils from './components/pages/blog/Blogdeatils'

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
import {Helmet} from "react-helmet";
import $ from 'jquery';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <div className="">
       <Navbar />
      
       <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/product" component={Product} />
           <Route exact path="/multiple_comp_in_single_comp" component={Multiple_comp_in_single_comp} />
           <Route exact path="/props" component={() => <Props title={`Props through component`} description={"description here!!!!"} />} />
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
       </Switch> 
     
    </div>
    </Router>
    </>
  );
}

export default App;
