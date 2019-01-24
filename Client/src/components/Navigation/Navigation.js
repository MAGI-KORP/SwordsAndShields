import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom"
import axios from "axios"

class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null
        }
        
        this.logout = this.logout.bind(this)
        this.login = this.login.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      login(event) {
          axios.get('/user/login').then(response => {
              if(response.status === 200) {
                  this.setState({
                      redirectTo: "/user/login" 
                  })
              }
          }).catch(error => {
              console.log("redirect failed")
          })
      }


    render() {
        const loggedIn = this.props.loggedIn
        console.log(this.props)

        return (
            // <nav className="navbar">
                <div className="row">
                    <div className="col-12">
                        <Link className="nav-link" to = "/character">
                            <Typed 
                                strings={['[Character]']} 
                                typeSpeed={window.location.href !== "http://localhost:3000/" ? 0 : 75} 
                                showCursor={false}
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 16200}
                            />
                        </Link>

                        <Link className = "nav-link" to = "/arena">
                            <Typed 
                                strings={['[Arena]']} 
                                typeSpeed={window.location.href !== "http://localhost:3000/" ? 0 : 75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 17200}
                            />
                        </Link>

                        <Link className = "nav-link" to = "/rankings">
                            <Typed 
                                strings={['[Rankings]']} 
                                typeSpeed={window.location.href !== "http://localhost:3000/" ? 0 : 75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 18200}
                            />
                        </Link>
                         { loggedIn ?  ( <Link className = "nav-link" to = "#" onClick={this.logout}>
                            <Typed 
                                strings={['[Logout]']} 
                                typeSpeed={window.location.href !== "http://localhost:3000/" ? 0 : 75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 19200}
                            />
                         </Link> ) : (
                         <Link className = "nav-link" to = "#" to = "/user/login">
                            <Typed 
                                strings={['[Login]']} 
                                typeSpeed={window.location.href !== "http://localhost:3000/" ? 0 : 75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 19200}
                            />
                        </Link>
                        
                            )}

                    </div>
                </div>
            // </nav>
        )
    }
}

export default Navigation