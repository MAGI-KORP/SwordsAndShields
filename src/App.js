import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Creation from './components/Creation/Creation'
import Character from './components/Character/Character'
import Arena from './components/Arena/Arena'
import Rankings from './components/Rankings/Rankings'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  
  state = {
    location: window.location.href
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />  
          </header>
          
          <div className="App-Main">
            <Route exact path = "/" component = {Home} />
            <Route path = "/creation" component = {Creation} />
            <Route path = "/character" component = {Character} />
            <Route path = "/arena" component = {Arena} />
            <Route path = "/rankings" component = {Rankings} />
          </div>
          
          <footer className="App-Footer">
            <Footer />
          </footer>
        </div>
      
      </Router>
    );
  }
}

export default App;
