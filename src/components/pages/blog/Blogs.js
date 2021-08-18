import React from 'react';
import { Link } from "react-router-dom";
// import { isCompositeComponent } from "react-dom/test-utils";

const Blogs = (props) => {
    const renderlist = ({datalist}) =>{
        if(datalist) {
            return datalist.map((item)  => {
                return (
  <div>
      <img src={`../../assets/img/${item.image}`} style ={{width:'150px'}} alt=""  />
      <h2>{item.title}</h2>
      <p>{item.author}</p>
      <Link to = {`/BlogDeatils/${item.id}`} key={item.id} >Read More</Link>
      <hr/>
  </div>

               
            )
            })
        }
    }
    return(
      <div className="">
           {renderlist(props)}
      </div>  
    )
}
export default Blogs;
