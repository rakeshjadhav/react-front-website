import React, { Component } from 'react'


import '../../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../../assets/vendor/icofont/icofont.min.css';
import '../../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../../assets/vendor/animate.css/animate.min.css';
import '../../../assets/vendor/remixicon/remixicon.css';

import '../../../assets/vendor/line-awesome/css/line-awesome.min.css';
import '../../../assets/vendor/venobox/venobox.css';
import '../../../assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../../../assets/vendor/aos/aos.css';
import '../../../assets/css/style.css';

import {Helmet} from "react-helmet";
import $ from 'jquery';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Blogs from './Blogs';
// import Main from './Main';
import Navbar from '../front/Navbar';

const url = " http://localhost:8900/blog";

class Blog extends Component {
    constructor(props){
        console.log("constructor here");
        super(props);
            this.state = {
                blog: ''
            }
    }
    render() {
        return (
            <>
               <Navbar />
              <div ><main id="main">


<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Blogs Details</h2>
      <ol>
        <li><a href="">Home</a></li>
        <li>Blogs Details</li>
      </ol>
    </div>

  </div>
</section>


<section id="portfolio-details" className="portfolio-details">
  <div className="container">

    <div className="portfolio-details-container" data-aos="fade-up">


    </div>

    <div className="portfolio-description">
    <Blogs datalist = {this.state.blog} />
      
    </div>

  </div>
</section>

</main></div>
               
                
            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            Method : 'GET'})
        .then((res) =>res.json())
        .then((post) => {
          this.setState({blog:post})
        })
    }
}
export default Blog;


