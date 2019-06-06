import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link, Redirect } from "react-router-dom"
import axios from "axios"

class CharDisplay extends Component {
    constructor(){
        super()
        this.state = {
            redirectTo: null,
            statsRemaining: 5,
            firstName: "",
            surname: "",
            strength: 10,
            defense: 10,
            evasion: 10,
            backstory: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleStats = this.handleStats.bind(this)
    }

    componentDidMount() {
        this.handleStats()
        console.log("component mounted")
        axios.get("/api/please")
        .then(response => {
        this.setState({
            firstName: response.data.firstName,
            strength: response.data.strength,
            defense: response.data.defense,
            evasion: response.data.evasion,
            backstory: response.data.backstory
            })
        })
    }
    
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleStats() {
       if (this.state.firstName === "") {
         this.setState({
             firstName: "No Character Created"
         })
       }
    }


    render() {
            return(
                <div> 
                  <p>Name: { this.state.firstName }</p>
                  
                  <p>STR: { this.state.strength } </p>
                  <p>DEF: { this.state.defense }</p>
                  <p>EVA: { this.state.evasion }</p>

                  <p>Backstory: { this.state.backstory }</p>


                    <Link className="newCharacter" to="/character" style={{ color: "white" }}>[Create a New Character]</Link>
                </div>
            
            )
        }
    }


export default CharDisplay