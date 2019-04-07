import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home'
import Events from './components/events'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
      </Router>
    );
  }
}

export default App;