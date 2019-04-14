import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import subdomain from './components/subdomain'
import eachSubdomain from './components/eachSubdomain'
import awgaboutus from './components/awgaboutus'

class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/subdomain" component={subdomain} />
          <Route exact path="/subdomain/:id" component={eachSubdomain} />
          <Route exact path="/awgaboutus" component={awgaboutus} />
  
      </Router>
    );
  }
}

export default App;
