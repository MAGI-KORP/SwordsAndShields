import React, { Component } from 'react';
import io from "socket.io-client";
// const io = require('socket.io-client')
// const socket = io()  
// const port = 4001
// if(process.env.PORT) {
//     port = process.env.PORT
// }
class Arena extends Component {
    state = {
        username: "",
        slot: 0,
        log:[],
        players: [],
        // endpoint: ":" + port,
        socket: false,
        one: {
            name: "Colin the Cat-Lord",
            level: "5",
            class: "Rogue",
            attributes:{
                strength: "2",
                defense: "1",
                evasion: "3"
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
            backstory: "Ah, the great Bad-Guy McNoobson has graduated from Noob Academy, equipped with sword and shield in hand, he begins his first day at the workplace! Let's see how it goes"
        }
    }

    
    makeMove(player, choice) { 
        console.log(choice)   
        this.state.socket.emit("choice",{player:player, choice:choice})
    }

    log(line) {
        return <p id="logElement">{line}</p>
    }

    player(player, index, array) {
        if(index === (array.length - 1)){
            return player
        }
        else{
            return player + ", "
        }
    }

    display(array) {
        if(array === this.state.log){
            return array.map(function(line){
                return <p id="logElement">{line}</p>
            })
        }
        else{
            return <p>{array.map(function(player,index, array){
                if(index === (array.length - 1)){
                    return player
                }
                else{
                    return player + ", "
                }
            })}</p>
        }
        
    }

    setSlot(num) {
        var slot = Number(num)
        this.setState({slot: slot})
        console.log("Player Slot: " + this.state.slot)
    }

    render() {
        return (
            <div>
                <div className="row combatantDisplay">
                    <div className="col-4">
                        <div style={{height: "60vh"}}>
                            <h1 className="combatDisplayHeader">{this.state.one.name}</h1>
                            <h2>Class: <span>{this.state.one.class}</span></h2>
                            <h2>Level: <span>{this.state.one.level}</span></h2>
                            <h2>Backstory: <br/>
                                <span>{this.state.one.backstory}</span>
                            </h2>
                        </div>
                        
                        <div style={(this.state.slot === 1) ? {display: "flex"} : {display: "none"}} className="row">
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "attack")}}>Attack</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "defend")}}>Defend</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "evade")}}>Evade</button>
                            </div>
                        </div>                                                           
                    </div>
                    <div className="col-4">
                        <h1 className="combatDisplayHeader">Combat Log</h1>
                        <h2 id="log">{this.display(this.state.log)}</h2>
                        <h3 id="playerList">Players In Lobby:{this.display(this.state.players)}</h3>
                    </div>
                    <div className="col-4">
                        <div style={{height: "60vh"}}>
                            <h1 className="combatDisplayHeader">{this.state.two.name}</h1>
                            <h2>Class: <span>{this.state.two.class}</span></h2>
                            <h2>Level: <span>{this.state.two.level}</span></h2>
                            <h2>Backstory: <br/>
                                <span>{this.state.two.backstory}</span>
                            </h2>
                        </div>
                        
                        <div style={(this.state.slot === 2) ? {display: "flex"} : {display: "none"}} className="row">
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "attack")}}>Attack</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "defend")}}>Defend</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "evade")}}>Evade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount() {
        // const { endpoint } = this.state;
        // const socket = socketIOClient(endpoint);
        const socket = io.connect("https://swords-and-shields.herokuapp.com:4001")
        console.log(socket)
        this.setState({socket : socket})
        socket.on("response", data => {
                if(!this.state.username){
                    this.setState({username: data.playerName})
                }
                console.log(data.players)
                this.setState({players: data.players})
                var index = this.state.players.findIndex(function(element){
                    return element === this.username
                    
                },this.state)
                console.log(index)
                this.setState({slot: (index + 1)})
                this.render()
        });

        socket.on("battleLog", data => {
            console.log(data.log)
            this.setState({log: data.log})
            this.render()
        })
        console.log(this.state.slot, this.state.username)
    }

    componentDidUpdate() {
        this.render()
    }

    componentWillUnmount(){
        this.state.socket.disconnect()
    }
}

export default Arena