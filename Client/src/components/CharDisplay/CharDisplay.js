import React, { Component } from 'react';
import Typed from 'react-typed';
import { Redirect } from "react-router-dom"
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
            evasion: 10
        }
        this.handleChange = this.handleChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
      console.log("componenet mounted")
      axios.get("/api/please")
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          strength: response.data.strength,
          defense: response.data.defense,
          evasion: response.data.evasion
        })
      })
    }
    
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
            return(
                <div> 
                  <p>Name: { this.state.firstName }</p>
                  
                  <p>STR: { this.state.strength } </p>
                  <p>DEF: { this.state.defense }</p>
                  <p>EVA: { this.state.evasion }</p>

                </div>
            )
        }
    }


export default CharDisplay