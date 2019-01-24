import React, { Component } from 'react';
import axios from "axios"
import { Redirect } from "react-router-dom"
import Typed from 'react-typed';

class Registration extends Component {
    constructor() {
        super()
        this.state = { 
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.username)

        axios.post("/user/", {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            if(response.status === 200) {
                console.log("status is infact 200")
                this.setState({
                    redirectTo: "/user/login"
                })
            } else {
                console.log("login error")
            }
        }).catch(error => {
            console.log("signup error")
            console.log(error)
        })

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="row">
                    <div className="col-3"></div>            
                    <div className="col-6">
                        <form>
                        <h2 className="main">Account Information</h2>
                            <div className="form-row">                      
                                <div className="form-group col-12">
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text" 
                                        className="form-control"
                                        name="username" 
                                        id="username" 
                                        value={this.state.username} 
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group col-12">
                                    <label htmlFor="password">Password:</label>
                                    <input 
                                        type="password" 
                                        className="form-control"
                                        name="password" 
                                        id="password"  
                                        value={this.state.password} 
                                        onChange={this.handleChange} />
                                </div>
                            </div>
                            <button 
                            
                            type="submit"
                            onClick={this.handleSubmit}
                            
                            >Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>  
                </div>

            )
        }
    }
}

export default Registration