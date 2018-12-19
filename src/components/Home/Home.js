import React, { Component } from 'react';
import Pyramid from '../../images/Pyramid.png'
import Typed from 'react-typed';
import { Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return (
        <div>
          <h1 className="title">
                <Typed 
                    strings={["Swords and Shields"]} 
                    typeSpeed={200}
                    startDelay={0}
                    showCursor={true} 
                />
                </h1>
          <img src={Pyramid} className = 'Pyramid' alt = 'pyramid'></img>
          <h2 className = "message">
                <Typed 
                    strings={["Welcome Traveler! The time has come to begin your journey..."]} 
                    typeSpeed={75}
                    startDelay={6000}
                    showCursor={false} 
                />
          </h2>
          <Link className="nav-link-creation" to='/creation'>
            <Typed 
                    strings={['[Create A Character]']} 
                    typeSpeed={75}
                    startDelay={12000}
                    showCursor={false}
            />
          </Link>
        </div>
        )
    }
}

export default Home