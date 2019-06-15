import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-12">
                        <Link to="/">
                            <img style={{display: window.location.href === "http://localhost:3000/" ? "none" : ""}}className="lilPyramid" src="../images/lilPyramid.png" alt="lilPyramid"></img>
                        </Link>                       
                    </div>                   
                    
                </div>
                
        )
    }
}

export default Footer