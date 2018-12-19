import React, { Component } from 'react';
import Typed from 'react-typed';

class Character extends Component {
    render() {
        return (
            <h1>
                <Typed 
                    strings={["This is the Character Sheet Page!"]} 
                    typeSpeed={100}
                    startDelay={0}
                    showCursor={true} 
                />
            </h1>
        )
    }
}

export default Character