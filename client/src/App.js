import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home'
import Events from './components/events'
import AboutUs from './components/aboutus'


class App extends Component {
    
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/events/:id" component={Events} />
          <Route exact path="/aboutus" component={AboutUs} />
      </Router>
    );
  }
}

export default App;