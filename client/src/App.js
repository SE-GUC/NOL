import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeMerchandise from './components/HomeMerchandise'
import Merchandise from './components/merchandise'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={HomeMerchandise} />
          <Route exact path="/merchandise" component={Merchandise} />
      </Router>
    );
  }
}

export default App;