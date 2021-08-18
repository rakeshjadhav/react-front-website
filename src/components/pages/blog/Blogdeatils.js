import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../front/Navbar';
import { Link,NavLink } from "react-router-dom";
const url = " http://localhost:8900/blog";

 class Blogdeatils extends Component {
    constructor(props){
       
        super(props);

        this.state = {
            details:''
        }
    }
    render() {
     
        const {params} = this.props.match;
        console.log(this.state.details);
        return (
          
            <div>
                  <Navbar />

                  <main id="main">


<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Blogs Details</h2>
      <ol>
        <li><a href="">Home</a></li>
        <li><a >Blogs</a></li>
      </ol>
    </div>

  </div>
</section>


<section id="portfolio-details" className="portfolio-details">
  <div className="container">

    <div className="portfolio-details-container" data-aos="fade-up">

    <NavLink exact to="/Blog" >Back to Blog Lits</NavLink>  
    </div>

    <div className="portfolio-description">
    <h1>Blog details page for id {params.id}</h1>
                <img src={`../../assets/img/${this.state.details.image}`} style ={{width:'150px'}} alt="" />
                <h2>{this.state.details.title}</h2>
                <p>{this.state.details.author}</p>
      
    </div>

  </div>
</section>

</main>
               
                
            </div>
        )
    }

    // componentDidMount(){
    //     axios.get(`${url}/${this.props.match.params.id}`)
    //     .then((res) => {
    //         this.setState({details:res.data})
    //     })
    // }
    async componentDidMount(){
        const response = await axios.get(`${url}/${this.props.match.params.id}`)
        this.setState({details:response.data})
        // console.log(details);
    }
}

export default Blogdeatils;
