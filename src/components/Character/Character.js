import React, { Component } from 'react';
import Typed from 'react-typed';

class Character extends Component {

    state = {
        name: "Colin the Cat-Lord",
        level: 5,
        class: "Rogue",
        stats:{
            strength: 2,
            defense: 1,
            evasion: 3
        },
        backstory: "Behold, Colin the Cat-Lord, a simple and wayward peasant turned hero after saving his village from bandits! Colin is always accompanied by his two cats, Luca and Zoey, who are quite formidable opponents in their own right."
    }
    render() {
        return (
                <div className="row">
                    <div className="col-6">
                        <div>
                            <h1><Typed strings={["[Character]"]} typeSpeed={75} showCursor={false} /></h1>
                            <h2 className="characterKey">Name: <span id="characterValue">{this.state.name}</span></h2>
                            <h2 className="characterKey">Level: <span id="characterValue">5</span></h2>
                            <h2 className="characterKey">Class: <span id="characterValue">Rogue</span></h2>
                            <br/>
                            <h2 className="characterKey">Strength: <span id="characterValue">2</span></h2>
                            <h2 className="characterKey">Defense: <span id="characterValue">1</span></h2>
                            <h2 className="characterKey">Evasion: <span id="characterValue">3</span></h2>
                            <br/>
                            <h2 className="characterKey">Backstory: <br/><span id="characterValue">{this.state.backstory}</span></h2>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <div>
                            <h1><Typed strings={["[Player Statistics]"]} typeSpeed={75} showCursor={false} /></h1>
                            <h2 className="characterKey">Wins: <span id="characterValue">100</span></h2>
                            <h2 className="characterKey">Losses: <span id="characterValue">0</span></h2>
                            <h2 className="characterKey">Ties: <span id="characterValue">1</span></h2>
                            <br/>
                            <h2 className="characterKey">Damage Dealt: <span id="characterValue">232,456</span></h2>
                            <h2 className="characterKey">Damage Taken: <span id="characterValue">0</span></h2>
                        </div>
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