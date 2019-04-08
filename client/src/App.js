import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import profile from './components/profile'
import FAQs from './components/FAQs'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route path="/user" component={profile} />
          <Route path="/faq" component={FAQs} />
  
      </Router>
    );
  }
}

export default App;