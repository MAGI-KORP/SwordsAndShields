import React, { Component } from 'react';
import lilPyramid from '../../images/lilPyramid.png'

class Footer extends Component {
    render() {
        return (
                <div className="row">
                    <div class="col-12">
                        <img style={{display: window.location.href === "http://localhost:3000/" ? "none" : ""}}className="lilPyramid" src={lilPyramid} alt="lilPyramid"></img>
                    </div>                   
                    
                </div>
                
        )
    }
}

export default Footer