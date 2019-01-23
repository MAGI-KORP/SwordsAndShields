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
import axios from "axios"
import CharDisplay from './components/CharDisplay/CharDisplay';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
  
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser = (userObject) => {
    this.setState(userObject)
  }

  getUser = () => {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
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
            <Route path = "/registration" render ={() => 
              <Registration />} />
            <Route path = "/user/login" render={() => 
              <Login updateUser={this.updateUser} />
              } />
            <Route path="/mycharacter" component={CharDisplay} />
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
