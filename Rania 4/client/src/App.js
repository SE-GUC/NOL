import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Profile from './components/profile'
import Library from './components/library'
import SocialMedia from './components/socialmedia'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route path="/profile" component={Profile}/> */}
          <Route path="/library" component={Library}/>
          <Route path="/socialmedia" component={SocialMedia}/>
        </Router>
      </div>
    );
  }
}

export default App;
