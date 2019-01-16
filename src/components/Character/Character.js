// import React, { Component } from 'react';
// import Typed from 'react-typed';

class Character extends Component {
    state = {
        name: "Colin the Cat-Lord",
        level: "5",
        class: "Rogue",
        attributes:{
            strength: "2",
            defense: "1",
            evasion: "3"
        },
        stats:{
            wins: "100",
            losses: "0",
            ties: "1",
            damageDealt: "232,456",
            damageTaken: "-1"
        },
        backstory: "Behold, Colin the Cat-Lord, a simple and wayward peasant turned hero after saving his village from bandits! Colin is always accompanied by his two cats, Luca and Zoey, both are known to be quite formidable adversaries in their own right."
    }


//     componentDidMount() {
//         fetch("/api/2")
//         .then(res => res.json())
//         .then(characters => this.setState({name: characters[0].name}, () => {
//             console.log("Characters received..", characters)
//             console.log(this.state)
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Character</h1>
//                 <p>Name: {this.state.name}</p>
//             </div>
//         )
//     }

 
// }

// export default Character

            // <h1>
            //     <Typed 
            //         strings={["This is the Character Sheet Page!"]} 
            //         typeSpeed={100}
            //         startDelay={0}
            //         showCursor={true} 
            //     />
            // </h1>