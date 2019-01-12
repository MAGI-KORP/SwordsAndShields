import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Registration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Character from './components/Character/Character'
import Arena from './components/Arena/Arena'
import Rankings from './components/Rankings/Rankings'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  
    this.updateUser = this.updateUser.bind(this)
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>  
          </header>
          
          <div className="App-Main">
            <Route exact path = "/" component = {Home} />
            <Route path = "/registration" component = {Registration} />
            <Route path = "/login" render={() => 
              <Login updateUser={this.updateUser} />
              } />
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

export default App
