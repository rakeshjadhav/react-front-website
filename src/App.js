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

import Home from "./components/pages/Home";
// import Main from "./components/pages/Main";
import Aboutus from "./components/pages/Aboutus";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import Product from './components/pages/Products';
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
           <Route exact path="/contact" component={Contact} />
       </Switch> 
     
    </div>
    </Router>
    </>
  );
}

export default App;