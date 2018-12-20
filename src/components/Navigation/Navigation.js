import React, { Component } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar">
                <div className="row">
                    <div className="col-12">
                        <Link className="nav-link" to = "/character">
                            <Typed 
                                strings={['[Character]']} 
                                typeSpeed={75} 
                                showCursor={false}
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 16200}
                            />
                        </Link>

                        <Link className = "nav-link" to = "/arena">
                            <Typed 
                                strings={['[Arena]']} 
                                typeSpeed={75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 17200}
                            />
                        </Link>

                        <Link className = "nav-link" to = "/rankings">
                            <Typed 
                                strings={['[Rankings]']} 
                                typeSpeed={75}
                                showCursor={false} 
                                startDelay={window.location.href !== "http://localhost:3000/" ? 0 : 18200}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation