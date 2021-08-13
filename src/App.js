import React  from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
       <Navbar />

       <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/aboutus" component={Aboutus} />
           <Route exact path="/contact" component={Contact} />
       </Switch> 

    </div>
    </Router>
  );
}

export default App;
