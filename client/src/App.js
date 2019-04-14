import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './components/main'
import MUNSignUp from './components/munsignup'
import MUNSignIn from './components/munsignin'
import Aboutus from './components/aboutussection'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/munsignup" component={MUNSignUp} />
          <Route exact path="/munsignin" component={MUNSignIn} />
          <Route exact path="/aboutus/:id" component={Aboutus}/>
      </Router>
    );
  }
}

export default App;
