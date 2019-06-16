import React, { Component } from 'react';
import Typed from 'react-typed';
import { Redirect } from "react-router-dom"
import axios from "axios"

class Character extends Component {
    constructor(){
        super()
        this.state = {
            value: "Warrior",
            redirectTo: null,
            statsRemaining: 5,
            firstName: "",
            surname: "",
            strength: 10,
            defense: 10,
            evasion: 10,
            backstory: "",
            wins: 0,
            losses: 0
    
        }
        this.handleChange = this.handleChange.bind(this)
        this.statIncrease = this.statIncrease.bind(this)
        this.statDecrease = this.statDecrease.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post("/api/", {
            firstName: this.state.firstName,
            surname: this.state.surname,
            class: this.state.value,
            strength: this.state.strength,
            defense: this.state.defense,
            evasion: this.state.evasion,
            backstory: this.state.backstory
        }).then(response => {
            console.log("Sending new Character")
            if(response.status === 200) {
                this.setState({
                    redirectTo: "/character"
                })
            } else {
                console.log("something went wrong")
            }
        })
    }

    

    statIncrease(event) {
       if(this.state.statsRemaining > 0) {
            if(event.target.id === "strength") {
                this.setState({
                strength: this.state.strength + 1,
                statsRemaining: this.state.statsRemaining - 1
                })
            } else if (event.target.id === "defense") {
                this.setState({
                    defense: this.state.defense + 1,
                    statsRemaining: this.state.statsRemaining - 1
                })
            } else if (event.target.id === "evasion") {
                this.setState({
                    evasion: this.state.evasion + 1,
                    statsRemaining: this.state.statsRemaining - 1
                })
            }
       } else {
           console.log("Out of points")
       }
    }

    statDecrease(event) {
        if(this.state.statsRemaining < 5) {
             if(event.target.id === "strength") {
                 this.setState({
                 strength: this.state.strength - 1,
                 statsRemaining: this.state.statsRemaining + 1
                 })
             } else if (event.target.id === "defense") {
                 this.setState({
                     defense: this.state.defense - 1,
                     statsRemaining: this.state.statsRemaining + 1
                 })
             } else if (event.target.id === "evasion") {
                 this.setState({
                     evasion: this.state.evasion - 1,
                     statsRemaining: this.state.statsRemaining + 1
                 })
             }
        } else {
            console.log("Cannot subtract any more points")
        }
     }
 

    render() {
            return(
                <div className="row">
                <div className="col-3"></div>            
                    <div className="col-6">
                        <form>
                        <h2 className="main">Create Character</h2>
                            <div className="form-row">                    
                                <div className="form-group col-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text" 
                                        className="form-control character-name"
                                        name="firstName" 
                                        id="firstName" 
                                        value={this.state.firstName} 
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="surname">Surname</label>
                                    <input 
                                        type="text" 
                                        className="form-control character-name"
                                        name="surname" 
                                        id="surname"  
                                        value={this.state.surname} 
                                        onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="character-info col-12">
                                <div className="col-6">
                                    <div className="stat-remain">
                                        <h2>Stat Points Remaining: {this.state.statsRemaining}</h2>
                                    </div>
                                    <div className="stat-section col-12">
                                        <div className="form-row mx-auto">
                                            <p className="stat-type">Strength:</p>
                                            <div className="">
                                                <div className="col-4 stat-change">
                                                    <div className="stat-adjust" id="strength" onClick={this.statDecrease}>&#9660;</div>
                                                        <div className="stat">
                                                            {this.state.strength}
                                                        </div>
                                                    <div className="stat-adjust" id="strength" onClick={this.statIncrease}>&#9650;</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row mx-auto">
                                            <p className="stat-type">Defense:</p>
                                            <div className="">
                                                <div className="col-4 stat-change">
                                                    <div className="stat-adjust" id="defense" onClick={this.statDecrease}>&#9660;</div>
                                                        <div className="stat">
                                                            {this.state.defense}
                                                        </div>
                                                <div className="stat-adjust" id="defense" onClick={this.statIncrease}>&#9650;</div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-row mx-auto">
                                            <p className="stat-type">Evasion:</p>
                                            <div className="">
                                                <div className="col-4 stat-change">
                                                    <div className="stat-adjust" id="evasion" onClick={this.statDecrease}>&#9660;</div>
                                                    <div className="stat">
                                                        {this.state.evasion}
                                                    </div>
                                                    <div className="stat-adjust" id="evasion" onClick={this.statIncrease}>&#9650;</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flexDirection">
                                    <select name="value" value={this.state.value} onChange={this.handleChange} className="class-select col-md-3 col-6 mx-auto">
                                        <option value="Warrior">Warrior</option>
                                        <option value="Rogue">Rogue</option>
                                        <option vlaue="Wizard">Wizard</option>
                                    </select>
                                    <img  className="selected-class mx-auto col-6" src={`images/${this.state.value}.png`}></img>
                                </div>
                            </div>
                            
                            
                            <div className="form-group col-6 justify-content-center">
                                <label htmlFor="backstory">Backstory</label>
                                <textarea
                                    style={{height:100 + "px"}}
                                    type="text"
                                    className="form-control"
                                    name="backstory" 
                                    id="backstory" 
                                    value={this.state.backstory} 
                                    onChange={this.handleChange} />
                            </div>
                            <button 
                            
                                type="submit"
                                onClick={this.handleSubmit}>Create Character</button>
                        
                        </form>
                    </div>
                    <div className="col-3"></div>  
                </div>
            )
        }
    }


export default Character





    //     state = {
//         name: "Colin the Cat-Lord",
//         level: "5",
//         class: "Rogue",
//         attributes:{
//             strength: "2",
//             defense: "1",
//             evasion: "3"
//         },
//         stats:{
//             wins: "100",
//             losses: "0",
//             ties: "1",
//             damageDealt: "232,456",
//             damageTaken: "-1"
//         },
//         backstory: "Behold, Colin the Cat-Lord, a simple and wayward peasant turned hero after saving his village from bandits! Colin is always accompanied by his two cats, Luca and Zoey, both are known to be quite formidable adversaries in their own right."
//     }