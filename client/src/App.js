import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import profile from './components/profile'


class App extends Component {
    
  render() {
    return (
      <Router>
          <Route path="/user" component={profile} />
      </Router>
    );
  }
}

export default App;