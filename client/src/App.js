import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/main'
import MUNSignUp from './components/munsignup'
import MUNSignIn from './components/munsignin'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route path="/" component={Main} />
          <Route path="/munsignup" component={MUNSignUp} />
          <Route exact path="/munsignin" component={MUNSignIn} />
      </Router>
    );
  }
}

export default App;
