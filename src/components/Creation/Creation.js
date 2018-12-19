import React, { Component } from 'react';
import Typed from 'react-typed';

class Creation extends Component {
    render() {
        return (
            <h1>
                <Typed 
                    strings={["This is the Character Creation Page!"]} 
                    typeSpeed={100}
                    startDelay={0}
                    showCursor={true} 
                />
            </h1>
        )
    }
}

export default Creation