import React, { Component } from 'react';
import Typed from 'react-typed';
import { Redirect } from "react-router-dom"
import axios from "axios"

class Character extends Component {
    constructor(){
        super()
        this.state = {
            redirectTo: null,
            statsRemaining: 5,
            firstName: "",
            surname: "",
            strength: 10,
            defense: 10,
            evasion: 10
    
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
            username: this.state.username,
            firstName: this.state.firstName,
            surname: this.state.surname,
            strength: this.state.strength,
            defense: this.state.defense,
            evasion: this.state.evasion
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
                        <h2 className="main">Create A Character</h2>
                            <div className="form-row">                      
                                <div className="form-group col-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text" 
                                        className="form-control"
                                        name="firstName" 
                                        id="firstName" 
                                        value={this.state.firstName} 
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="surname">Surname</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="surname" 
                                        id="surname"  
                                        value={this.state.surname} 
                                        onChange={this.handleChange} />
                                </div>

                                <div className="col-12">
                                    <h2>Stat Points Remaining: {this.state.statsRemaining}</h2>
                                </div>

                                <div className="col-4">
                                    <h2>Strength</h2>
                                    <div className="row">
                                        <div className=" form-group col-4 mx-auto">
                                            <label htmlFor="strength"></label>
                                            <button type="button" className="btn btn-secondary" id="strength" onClick={this.statIncrease}>+</button>
                                            <div>
                                                {this.state.strength}
                                            </div>
                                            <button type="button" className="btn btn-secondary" id="strength" onClick={this.statDecrease}>-</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <h2>Defense</h2>
                                    <div className="row">
                                        <div className=" form-group col-4 mx-auto">
                                        <label htmlFor="defense"></label>
                                        <button type="button" className="btn btn-secondary" id="defense" onClick={this.statIncrease}>+</button>
                                        <div>
                                            {this.state.defense}
                                        </div>
                                        <button type="button" className="btn btn-secondary" id="defense" onClick={this.statDecrease}>-</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4">
                                    <h2>Evasion</h2>
                                    <div className="row">
                                        <div className="form-group col-4 mx-auto">
                                            <label htmlFor="evasion"></label>
                                            <button type="button" className="btn btn-secondary" id="evasion" onClick={this.statIncrease}>+</button>
                                            <div>
                                                {this.state.evasion}
                                            </div>
                                            <button type="button" className="btn btn-secondary" id="evasion" onClick={this.statDecrease}>-</button>
                                        </div>
                                    </div>


                                </div>
                                
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