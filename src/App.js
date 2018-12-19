import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Character from './components/Character/Character'
import Arena from './components/Arena/Arena'
import Rankings from './components/Rankings/Rankings'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typed from 'react-typed';

// const Character = () => <h1>This is the Character Sheet Page!</h1>
// const Arena = () => <h1>This is the Arena! Or Arena Lobby!</h1>
// const Rankings = () => <h1>This is the Player Rankings Page!</h1>

class App extends Component {
  
  state = {
    location: window.location.href
  };

  render() {
    return (
      <Router>
      <div className="App">
      <header className="App-header">
      
          <nav className="navbar">
            <row>
              <div class="col-4">
                <Link class = "nav-link" to = "/character">
                    <Typed 
                        strings={['[Character]']} 
                        typeSpeed={40} 
                        showCursor={false}
                        startDelay={this.state.location !== "http://localhost:3000/" ? 0 : 15000}
                    />
                </Link>
              </div>

              <div class="col-4">
                <Link class = "nav-link" to = "/arena">
                <Typed 
                        strings={['[Arena]']} 
                        typeSpeed={40}
                        showCursor={false} 
                        startDelay={this.state.location !== "http://localhost:3000/" ? 0 : 16000}
                    />
                </Link>
              </div>

              <div class="col-4">
                <Link class = "nav-link" to = "/rankings">
                <Typed 
                        strings={['[Rankings]']} 
                        typeSpeed={40}
                        showCursor={false} 
                        startDelay={this.state.location !== "http://localhost:3000/" ? 0 : 17000}
                    />
                </Link>
              </div>
            </row>
          </nav>
          
        </header>

        <Route exact path = "/" component = {Home} />
        <Route path = "/character" component = {Character} />
        <Route path = "/arena" component = {Arena} />
        <Route path = "/rankings" component = {Rankings} />
      </div>
      
      </Router>
    );
  }
}

export default App;
