import React, { Component } from 'react';
import Typed from 'react-typed';

class Arena extends Component {
    render() {
        return (
            <h1>
                <Typed 
                    strings={["This is the Arena! Or Arena Lobby!"]} 
                    typeSpeed={100}
                    startDelay={0}
                    showCursor={true} 
                />
            </h1>
        )
    }
}

export default Arena