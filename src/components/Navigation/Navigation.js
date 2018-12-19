import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar">
            <div>
              <div>
                <Link className="nav-link" to = "/character">
                    <Typed 
                        strings={['[Character]']} 
                        typeSpeed={40} 
                        showCursor={false}
                        startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 15000}
                    />
                </Link>
              </div>

              <div>
                <Link className = "nav-link" to = "/arena">
                    <Typed 
                        strings={['[Arena]']} 
                        typeSpeed={40}
                        showCursor={false} 
                        startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 16000}
                    />
                </Link>
              </div>

              <div>
                <Link className = "nav-link" to = "/rankings">
                    <Typed 
                        strings={['[Rankings]']} 
                        typeSpeed={40}
                        showCursor={false} 
                        startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 17000}
                    />
                </Link>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navigation