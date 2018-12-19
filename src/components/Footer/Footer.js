import React, { Component } from 'react';
import lilPyramid from '../../images/lilPyramid.png'

class Footer extends Component {
    render() {
        return (
            <img style={{display: window.location.href === "http://localhost:3000/" ? "none" : ""}}className="lilPyramid" src={lilPyramid} alt="lilPyramid"></img>
        )
    }
}

export default Footer