import React, { Component } from 'react';
import Typed from 'react-typed';

class Arena extends Component {
    state = {
        one: {
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
        },
        two: {
            name: "Bad-Guy McNoobson",
            level: "1",
            class: "Warrior",
            attributes:{
                strength: "3",
                defense: "2",
                evasion: "1"
            },
            stats:{
                wins: "0",
                losses: "0",
                ties: "0",
                damageDealt: "0",
                damageTaken: "0"
            },
            backstory: "Ah, the great Bad-Guy McNoobson has graduated from Noob Academy, equipped with sword and shield in hand, he begins his first day at the workplace! Let's see how it goes"
        }
    }

    render() {
        return (
            <div>
                <div className="row combatantDisplay">
                    <div className="col-4">
                        <h1 className="combatDisplayHeader">{this.state.one.name}</h1>
                        <h2>Class: <span>{this.state.one.class}</span></h2>
                        <h2>Level: <span>{this.state.one.level}</span></h2>
                        <h2>Backstory: <br/>
                            <span>{this.state.one.backstory}</span>
                        </h2>
                    </div>
                    <div className="col-4">
                        <h1 className="combatDisplayHeader">Combat Log</h1>
                        <p>{this.state.one.name} attacks and {this.state.two.name} attempts to evade. </p>
                        <p>{this.state.two.name} fails to evade and takes the hit for {this.state.one.attributes.strength * 2} damage.</p>
                        <p>{this.state.two.name} dies from blood loss.</p>
                    </div>
                    <div className="col-4">
                        <h1 className="combatDisplayHeader">{this.state.two.name}</h1>
                        <h2>Class: <span>{this.state.two.class}</span></h2>
                        <h2>Level: <span>{this.state.two.level}</span></h2>
                        <h2>Backstory: <br/>
                            <span>{this.state.two.backstory}</span>
                        </h2>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Arena

            // <h1>
            //     <Typed 
            //         strings={["This is the Arena! Or Arena Lobby!"]} 
            //         typeSpeed={100}
            //         startDelay={0}
            //         showCursor={true} 
            //     />
            // </h1>