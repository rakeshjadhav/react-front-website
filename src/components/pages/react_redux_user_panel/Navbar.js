import React from 'react'

const Navbar = () => {
    return (
        <div>
            <section className="breadcrumbs">
               <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-center" style={{textTransform:'uppercase',fontWeight: 'bold'}}>Using React & Redux User Login & Register Panel </h3>
                <ol>
                    <li><a href="/LoginIndex" >Home</a></li>
                    <li>User Login & Register Panel</li>
                </ol>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Navbar
