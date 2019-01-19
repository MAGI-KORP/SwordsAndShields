import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
// const io = require('socket.io-client')
// const socket = io()  

class Arena extends Component {
    state = {
        username: "",
        message: "",
        slot: 0,
        log:[],
        players: [],
        endpoint: "http://127.0.0.1:4001",
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

    
    makeMove(player, choice) { 
        console.log(choice)   
        this.state.socket.emit("choice", player,choice)
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
            return array.map(this.log)
        }
        else{
            return <p>{array.map(this.player)}</p>
        }
        
    }

    setSlot(num) {
        var slot = Number(num)
        this.setState({slot: slot})
        console.log("Player Slot: " + this.state.slot)
    }

    updateLog(message) {
        var string = String(message)
        var newLog = this.state.log
        newLog.push(string)
        console.log(newLog)
        this.setState({log: newLog})
    }

    // lobbyMessage(array){
    //     var newLog = this.state.log
    //     array.forEach(function(item){
    //         var message = item + " is already in the arena!"
    //         newLog.push(message)
    //     })
    //     this.setState({log: newLog})
    // }


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
                                <button onClick={() => {this.makeMove("Player 1", "Attack")}}>Attack</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "Defend")}}>Defend</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "Evade")}}>Evade</button>
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
                                <button onClick={() => {this.makeMove("Player 2", "Attack")}}>Attack</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "Defend")}}>Defend</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "Evade")}}>Evade</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        this.setState({socket : socket})
        if(!this.state.slot){
            socket.on("initialize", (slot) => {
                this.setSlot(slot)
            })
        }
        socket.on("response", data => {
            if(data.players){
                this.setState({players: data.players})
            } 
            // if(data.status){
                
            // }
            
        });
    }

    componentWillUnmount(){
        this.state.socket.emit("playerLeft", this.state.slot)
        this.state.socket.disconnect()
    }
}

export default Arena