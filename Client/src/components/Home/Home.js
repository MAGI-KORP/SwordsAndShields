import React, { Component } from 'react';
import Pyramid from '../../images/pyramid.png'
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
                    strings={["Welcome Traveler!^1000 <br> The time has come for you to begin your journey..."]} 
                    typeSpeed={75}
                    startDelay={6000}
                    showCursor={false} 
                />
          </h2>
          <Link className="nav-link-creation" to='/registration'>
            <Typed 
                    strings={['[Create An Account] ']} 
                    typeSpeed={75}
                    startDelay={14200}
                    showCursor={false}
            />
          </Link><br></br>
          <Link className="nav-link-creation" to='/user/login'>
            <Typed 
                    strings={[' [Login]']} 
                    typeSpeed={75}
                    startDelay={16000}
                    showCursor={false}
            />
          </Link>
        </div>
        )
    }
}

export default Home