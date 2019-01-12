import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("handleSubmit")

        axios.post("/login", {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log("login response: ")
            console.log(response)
            console.log(this.props.updateUser())
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                this.setState({
                    redirectTo: "/"
                })
            }
        }).catch(error => {
            console.log("login error: ")
            console.log(error)
        })

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return(
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
                                onClick={this.handleSubmit}>Submit</button>
                        </form>
                    </div>
                    <div className="col-3"></div>  
                </div>
            )
        }
    }
}

export default Login