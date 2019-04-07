import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Profile from './components/profile'
import Library from './components/library'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/library" component={Library}/>
        </Router>
      </div>
    );
  }
}

export default App;
