import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home'
import ContactUs from './components/contactus';

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={ContactUs} />
      </Router>
    );
  }
}

export default App;