
import React  from "react";
import {Component } from 'react';
import { Link,NavLink } from "react-router-dom";


const Home = () => {
  
    return (
        <section className="intro carousel slide bg-overlay-light h-auto" id="carouselExampleCaptions">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" className=""></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block img-fluid" alt="First slide" src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg-01.jpg" />
        <div className="carousel-caption ">
          	<h2 className="display-4 text-white mb-2 mt-4">In the business world, the rearview mirror is always clearer than the windshield.</h2>
			<p className="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
			<a href="#" className="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block img-fluid" alt="First slide" src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg-02.jpg" />
        <div className="carousel-caption ">
          	<h2 className="display-4 text-white mb-2 mt-4">Accept the challenges so that you can feel the exhilaration of victory.</h2>
			<p className="text-white mb-3 px-5 lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do enim ad minim veniam, </p>
			<a href="#" className="btn btn-primary btn-capsul px-4 py-2">Explore More</a>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</section>



    );
};

export default Home;