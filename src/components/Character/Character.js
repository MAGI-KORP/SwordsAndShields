import React, { Component } from 'react';
import Typed from 'react-typed';

class Character extends Component {
    state = {
        id: "",
        name: ""
    }


    componentDidMount() {
        fetch("/api/2")
        .then(res => res.json())
        .then(characters => this.setState({name: characters[0].name}, () => {
            console.log("Characters received..", characters)
        }))
    }

    render() {
        return (
            <div>
                <h1>Character</h1>
                <p>Name: {this.state.name}</p>
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