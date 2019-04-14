import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CU from './components/cu'
import ContactUs from './components/contactus/contactus';

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={CU} />
          <Route exact path="/contactus" component={ContactUs} />
      </Router>
    );
  }
}

export default App;