import React, { Component } from 'react';
import Typed from 'react-typed';

class Character extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-6">
                        <div className="character">
                            <h1>Character</h1>
                            <h2>Name: <span>Colin</span></h2>
                            <h2>Bio: <span>A simple peasant turned hero after saving his village from bandits!</span></h2>    
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <h1>Stats</h1>
                        <h2>Strenght: 1</h2>
                        <h2>Defense: 1</h2>
                    </div>
                </div>
        )
    }
}

export default Character

            // <h1>
            //     <Typed 
            //         strings={["This is the Character Sheet Page!"]} 
            //         typeSpeed={100}
            //         startDelay={0}
            //         showCursor={true} 
            //     />
            // </h1>