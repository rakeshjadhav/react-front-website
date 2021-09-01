import React from 'react'

function Login() {
    return (
        <div>
            <div className= "modal fade" id="exampleModalCenterlogin" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false"  >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="exampleModalLongTitle">User Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <article className="card-body">
                       
                      
                            <div className="form-group">
                                <label>User Name <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" placeholder="Enter Username"  />
                            </div> 
                            <div className="form-group">
                                <label>Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" placeholder="Enter Password" />
                            </div> 
                        </article> 
                        </div>            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" >Login</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Login
