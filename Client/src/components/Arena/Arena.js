import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import axios from 'axios'
// const io = require('socket.io-client')
// const socket = io()
class Arena extends Component {
    state = {
        username: "",
        slot: 0,
        log:[],
        players: [],
        endpoint: "https://swordsandsockets.herokuapp.com/",
        socket: false,
        health1: 100,
        health2: 100,
        self: {
            firstName: "Colin the Cat-Lord",
            level: "5",
            class: "Hero",
            attributes:{
                strength: "2",
                defense: "1",
                evasion: "3"
            },
            backstory: "Behold, Colin the Cat-Lord, a simple and wayward peasant turned hero after saving his village from bandits! Colin is always accompanied by his two cats, Luca and Zoey, both are known to be quite formidable adversaries in their own right."
        },
        one: {
            firstName: "",
            level: "5",
            class: "Hero",
            attributes:{
                strength: "2",
                defense: "1",
                evasion: "3"
            },
            backstory: ""
        },
        two: {
            firstName: "",
            level: "1",
            class: "Noob",
            attributes:{
                strength: "3",
                defense: "2",
                evasion: "1"
            },
            backstory: ""
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
                        <div style={{height: "50vh"}}>
                            <h1 className="combatDisplayHeader">{this.state.one.firstName}</h1>
                            <h2>Class: <span>{this.state.one.class}</span></h2>
                            <h2>Level: <span>{this.state.one.level}</span></h2>
                            <h2>Backstory: <br/>
                                <span>{this.state.one.backstory}</span>
                            </h2>
                        </div>
                        
                        <div style={(this.state.self.firstName === this.state.one.firstName) ? {display: "flex"} : {display: "none"}} className="row">
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "slash")}}>Slash</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "pierce")}}>Pierce</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 1", "crush")}}>Crush</button>
                            </div>
                        </div>                                                           
                    </div>
                    <div className="col-4">
                        <h1 className="combatDisplayHeader">Combat Log</h1>
                        <h2 id="log">{this.display(this.state.log)}</h2>
                        <h2>Player One: {this.state.health1} Player Two: {this.state.health2}</h2>
                        <h3 id="playerList">Players In Lobby:{this.display(this.state.players)}</h3>
                    </div>
                    <div className="col-4">
                        <div style={{height: "50vh"}}>
                            <h1 className="combatDisplayHeader">{this.state.two.firstName}</h1>
                            <h2>Class: <span>{this.state.two.class}</span></h2>
                            <h2>Level: <span>{this.state.two.level}</span></h2>
                            <h2>Backstory: <br/>
                                <span>{this.state.two.backstory}</span>
                            </h2>
                        </div>
                        
                        <div style={(this.state.self.firstName === this.state.two.firstName) ? {display: "flex"} : {display: "none"}} className="row">
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "slash")}}>Slash</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "pierce")}}>Pierce</button>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {this.makeMove("Player 2", "crush")}}>Crush</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        )
    }

    componentDidMount() {
        axios.get("/api/please")
        .then(response => {
            this.setState({
                self:{
                    firstName: response.data.firstName,
                    backstory: response.data.backstory,
                    strength: response.data.strength,
                    defense: response.data.defense,
                    evasion: response.data.evasion
                }
            })
        })
        
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint,{transports:['websocket','polling']});
        setTimeout(() => {socket.emit("newPlayer", this.state.self)},3000)
        this.setState({socket : socket})
        socket.on("response", data => {
                console.log(data.players)
                this.setState({players: data.players})
                var index = this.state.players.findIndex(function(element){
                    return element === this.username
                    
                },this.state)
                this.setState({slot: (index + 1)})
                console.log(this.state.slot)
                if(this.state.slot === 1) {
                    this.setState({one: this.state.self})
                }
                if(this.state.slot === 2){
                    this.setState({two: this.state.self})
                }
                this.render()
        });

        socket.on("results", data => {
            console.log(data)
            var newHealth1 = (this.state.health1 - data.damage2).toFixed(2)
            var newHealth2 = (this.state.health2 - data.damage1).toFixed(2)
            if(newHealth1 < 0 && newHealth2 < 0){
                socket.emit("winner", {tie: true})
                return;
            }
            if(newHealth1 < 0){
                newHealth1 = 0
                socket.emit("winner", {winner: this.state.two, loser: this.state.one})
            }
            if(newHealth2 < 0){
                newHealth2 = 0
                socket.emit("winner", {winner: this.state.one, loser: this.state.two})
            }      
            this.setState({health1: newHealth1, health2: newHealth2})
            
        })

        socket.on("newGame", data => {
            console.log(data)
            if(!data[1]){
                this.setState({one: data[0]})
                this.setState({two: {}})
            }
            else{
                this.setState({one: data[0], two: data[1]})
            }
            this.setState({health1: 100, health2: 100})
            this.render()
        })

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