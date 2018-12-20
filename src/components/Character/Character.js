import React, { Component } from 'react';
import Typed from 'react-typed';

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
    render() {
        return (
                <div className="row">
                    <div className="col-6">
                        <div>
                            <h1 className="characterHeader"><Typed strings={["[Character]"]} typeSpeed={30} showCursor={false} /></h1>
                            <h2 className="characterKey">
                                <Typed strings={["Name: "]} typeSpeed={30} startDelay={1000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.name]} typeSpeed={30} startDelay={3000} showCursor={false}></Typed></span>
                            </h2>

                            <h2 className="characterKey">
                                <Typed strings={["Level: "]} typeSpeed={30} startDelay={1000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.level]} typeSpeed={30} startDelay={4000} showCursor={false}></Typed></span>
                            </h2>
                            
                            <h2 className="characterKey">
                                <Typed strings={["Class: "]} typeSpeed={30} startDelay={1000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.class]} typeSpeed={30} startDelay={4500} showCursor={false}></Typed></span>
                            </h2>
        
                            <br/>

                            <h2 className="characterKey">
                                <Typed strings={["Strength: "]} typeSpeed={25} startDelay={2000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.attributes.strength]} typeSpeed={50} startDelay={5000} showCursor={false}></Typed></span>
                            </h2>

                            <h2 className="characterKey">
                                <Typed strings={["Defense: "]} typeSpeed={30} startDelay={2000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.attributes.defense]} typeSpeed={50} startDelay={5500} showCursor={false}></Typed></span>
                            </h2>

                            <h2 className="characterKey">
                                <Typed strings={["Evasion: "]} typeSpeed={30} startDelay={2000} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.attributes.evasion]} typeSpeed={50} startDelay={6000} showCursor={false}></Typed></span>
                            </h2>
                            <br/>
                            <h2 className="characterKey">
                                <Typed strings={["Backstory: "]} typeSpeed={30} startDelay={12000} showCursor={false}></Typed><br/>
                                <span id="characterValue"> <Typed strings={[this.state.backstory]} typeSpeed={30} startDelay={13000} showCursor={false}></Typed></span>
                            </h2>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <div>
                            <h1 className="characterHeader"><Typed strings={["[Player Statistics]"]} typeSpeed={30} startDelay={6500} showCursor={false} /></h1>
                            <h2 className="characterKey">
                                <Typed strings={["Wins: "]} typeSpeed={30} startDelay={7500} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.stats.wins]} typeSpeed={30} startDelay={9500} showCursor={false}></Typed></span>
                            </h2>
                            <h2 className="characterKey">
                                <Typed strings={["Losses: "]} typeSpeed={20} startDelay={7500} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.stats.losses]} typeSpeed={30} startDelay={10000} showCursor={false}></Typed></span>
                            </h2>
                            <h2 className="characterKey">
                                <Typed strings={["Ties: "]} typeSpeed={30} startDelay={7500} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.stats.ties]} typeSpeed={30} startDelay={10500} showCursor={false}></Typed></span>
                            </h2>
                            <br/>
                            <h2 className="characterKey">
                                <Typed strings={["Damage Dealt: "]} typeSpeed={25} startDelay={8500} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.stats.damageDealt]} typeSpeed={30} startDelay={11000} showCursor={false}></Typed></span>
                            </h2>
                            <h2 className="characterKey">
                                <Typed strings={["Damage Taken: "]} typeSpeed={30} startDelay={8500} showCursor={false}></Typed>
                                <span id="characterValue"> <Typed strings={[this.state.stats.damageTaken]} typeSpeed={30} startDelay={11500} showCursor={false}></Typed></span>
                            </h2>
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